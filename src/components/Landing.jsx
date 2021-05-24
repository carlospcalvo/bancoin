import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from "shards-react"
import coinFront from '../assets/coin_front.png'
import coinBack from '../assets/coin_back.png'
import coinGif from '../assets/Coin.gif' 
import currencies from '../data/currencies.json'
import gecko_currencies from '../data/gecko_currencies.json'

export const Landing = () => {
    const styles = {
        main: {
            //height: '100%',//'42.8rem',
        },
        text: {
            color: '#fbdd11'
        },
        imgContainer: {
            width: '21rem', 
            height: '21rem', 
            borderRadius: '21px',
            //backgroundColor: '#4cbf4b',
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center'
        },
        img: {
            height: '20rem'
        },
        button: {
            backgroundColor: '#fbdd11',
            borderColor: '#fbdd11',
            color: 'black',
            margin: '3rem',
            textDecoration: 'none',
            fontWeight: '900'
        }
    }

    const [BANRateLocal, setBANRateLocal] = useState(0)
    const [BANRateUSD, setBANRateUSD] = useState(0)
    const [symbol, setSymbol] = useState('$')

    useEffect(() => {
        axios.get('https://extreme-ip-lookup.com/json/')
        .then((response) => {
            let country = response.data.countryCode
            let currency = currencies.filter(curr => curr.alpha2Code === country)[0]
            return currency
        } )
        .then(currencyData => {
            let currency_exists = gecko_currencies.includes(currencyData.currencies[0].code.toLowerCase()) 
            
            if(currency_exists && currencyData.currencies[0].code.toLowerCase() !== 'usd'){
                let currency = currencyData.currencies[0].code.toLowerCase()
                
                axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=banano&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(res => {
                    setBANRateLocal(res.data[0].current_price)
                    setSymbol(currencyData.currencies[0].code)
                })
                .catch(err => console.log(err))
            }

            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=banano&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setBANRateUSD(res.data[0].current_price)
            })
            .catch(err => console.log(err))

        })
        .catch((error) => console.log(error));
     },[])

    return (
        <>
            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={styles.main}>
                <div className="my-3 py-3">
                    <h2 className="display-5" style={styles.text}>BANANO COINS</h2>
                    <p className="lead" style={styles.text}>COINS COINS COINS</p>
                </div>
                <div className="d-flex flex-wrap justify-content-sm-evenly shadow-sm mx-auto" style={styles.imgContainer}>
                    <img src={coinGif} alt="Coin gif" style={styles.img}/>
                </div>
                <div className="d-flex justify-content-center">

                    <Link to="/billing-info">
                        <Button  pill theme="warning" style={styles.button}>
                            BUY NOW
                        </Button>
                    </Link>
                    
                </div>

                {
                    BANRateUSD !== 0 &&
                    <div className="d-flex justify-content-center mb-3">

                        <span style={styles.text}>
                            1 BAN = {BANRateUSD} USD 
                            {BANRateLocal !== 0 && ` = ${BANRateLocal} ${symbol}`}
                        </span>
                        
                    </div>
                }
            </div>
        </>
    )
}