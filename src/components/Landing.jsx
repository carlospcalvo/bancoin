import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col, Card, Button } from "shards-react"
import { Carousel } from 'react-bootstrap'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import coinFront from '../assets/coin_front.png'
import coinBack from '../assets/coin_back.png'
import coinGif from '../assets/Coin-transparent.gif' 
import banSvg from '../assets/banano-icon.svg'
import btcSvg from '../assets/btc.svg'
import ethSvg from '../assets/eth.svg'
import usdtSvg from '../assets/usdt.svg'
import currencies from '../data/currencies.js'
import gecko_currencies from '../data/gecko_currencies.js'

export const Landing = () => {
    const styles = {
        main: {
            //height: '100%',//'42.8rem',
            minHeight: 'calc(100vh - 9rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#2A2A2E',
        },
        text: {
            color: '#fbdd11'
        },
        imgContainer: {
            width: '80vw',
            //maxWidth: '74.25rem',//'82.5rem', 
            height: '60vh',
            minHeight: '40vh', 
            borderRadius: '21px',
            backgroundImage: `url(../assets/banner-background.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            boxShadow: '0 .46875rem 2.1875rem black,0 .9375rem 1.40625rem black,0 .25rem .53125rem black,0 .125rem .1875rem black',
        },
        title: {
            color: 'white',//'#fbdd11',
            fontSize: '5vh',
            lineHeight: '5vh',
            fontWeight: '600',
            fontFamily: '\'Overpass\', monospace',
            textShadow: '2px 2px 4px #000000'
        },
        gif: {
            height: '40vh',
        },        
        button: {
            backgroundColor: '#fbdd11',
            borderColor: '#fbdd11',
            color: 'black',
            //margin: '3rem',
            marginTop: '1rem',
            textDecoration: 'none',
            fontWeight: '900'
        },
        card: {
            backgroundColor: '#2A2A2E',
            borderColor: '#2A2A2E',
            borderRadius: '22px',
            margin: '1rem',
            marginTop: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        productContainer: {
            margin: '1rem',
        },
        img: {
            height: '20rem'
        },
        productDiv: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        productTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '1rem',
        },
        productTitle: {
            textAlign: 'center',
            color: '#fbdd11',
        },
        productSubtitle: {
            textAlign: 'justify',
            color: '#fbdd11',
        },
        carouselIcons: {
            color: '#fbdd11',
        },
        price: {
            textAlign: 'left',
            color: '#fbdd11',
        },
        crypto: {
            marginTop: '1rem',
            minWidth: '10rem',
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    }

    const price = 7
    const [BANRateLocal, setBANRateLocal] = useState(0)
    const [BANRateUSD, setBANRateUSD] = useState(0)
    const [symbol, setSymbol] = useState('$')

    const history = useHistory()

    const nextIcon = <FontAwesomeIcon icon={faChevronRight} style={styles.carouselIcons}/>
    const prevIcon = <FontAwesomeIcon icon={faChevronLeft} style={styles.carouselIcons}/>

    useEffect(() => {
        //axios.get('https://extreme-ip-lookup.com/json/')
        // ipstack api key 67090da42c83abfb0a00843f3e75e157
        //axios.get('https://api.ipstack.com/check?access_key=67090da42c83abfb0a00843f3e75e157')
        
        //22fa411427218e2a83d95421f141032145562dabc49f7433eac05bce
        axios('https://api.ipdata.co/?api-key=22fa411427218e2a83d95421f141032145562dabc49f7433eac05bce')
        .then((response) => {
            //let country = response.data.country_code
            //let currency = currencies.filter(curr => curr.alpha2Code === country)[0]
            //ipdata.co includes currency in response 
            return response.data.currency.code //currency
        } )
        .then(currency => {
            let currency_exists = gecko_currencies.includes(currency.toLowerCase()) //gecko_currencies.includes(currency.currencies[0].code.toLowerCase()) 
            //if(currency_exists && currency.currencies[0].code.toLowerCase() !== 'usd'){
            if(currency_exists && currency.toLowerCase() !== 'usd'){    
                //let currency = currency.currencies[0].code.toLowerCase()
                
                axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&ids=banano&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(res => {
                    setBANRateLocal(res.data[0].current_price)
                    //setSymbol(currency.currencies[0].code)
                    setSymbol(currency)
                })
                .catch(err => console.error('Error retrieving BAN price for local currency:', err))
            }
        })
        .catch(error => console.error(error))
        .finally(
            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=banano&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setBANRateUSD(res.data[0].current_price)
            })
            .catch(err => console.error('Error retrieving BAN price:', err))
        )
    },[])

    console.log('USD', BANRateUSD)

    return (
        <>
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={styles.main}>
                {/* <div className="my-3 py-3">
                    <h1 className="display-5" style={styles.text}>BANANO COINS</h1>
                    
                </div> */}
                <div className="d-flex flex-wrap mx-5 mt-3" style={styles.imgContainer}>
                    <img src={coinGif} alt="Coin gif" style={styles.gif}/>
                    <h3 className="lead" style={styles.title}>The ripest coin in the world.</h3>
                </div>

                <Container style={styles.productContainer}>
                    <Row>
                        <Col style={styles.productDiv}>
                            <div className="customCarousel">
                                <Carousel nextIcon ={nextIcon} prevIcon={prevIcon}>
                                    <Carousel.Item>
                                        <img src={coinFront} alt="Coin frontside" style={styles.img}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={coinBack} alt="Coin backside" style={styles.img}/>
                                    </Carousel.Item>
                                </Carousel>
                            </div>    

                            {/* <ItemCount/> */}
                        </Col>
                        <Col style={styles.productTextContainer}>
                            <h3 style={styles.productTitle}>BANANO Coin</h3>
                            <p style={styles.productSubtitle}>
                                Designed by the community. Plated in brass for a more ancient look... The ripest look that is.    
                            </p>
                            {
                                BANRateUSD !== 0 &&
                                <span style={styles.price}>
                                    {` ${(price / BANRateUSD)} BAN = ${price} USD `} 
                                    {BANRateLocal !== 0 && ` (${(BANRateLocal / BANRateUSD * price).toFixed(2)} ${symbol})`}
                                </span>
                            }

                            <div>
                                <Button  pill theme="warning" style={styles.button} onClick={() => history.push('/cart')}>
                                    BUY NOW
                                </Button>
                                <div style={styles.crypto}>
                                    <img src={banSvg} alt="BAN" height={30}/>
                                    <img src={btcSvg} alt="BTC" height={30}/>
                                    <img src={ethSvg} alt="ETH" height={30}/>
                                    <img src={usdtSvg} alt="USDT" height={30}/>
                                </div>
                            </div>
                               
                        </Col>
                    </Row>              
                </Container>    

                {/* <div className="d-flex justify-content-center">
                    <Button  pill theme="warning" style={styles.button} onClick={() => history.push('/cart')}>
                        BUY NOW
                    </Button>                    
                </div> */}

                {/* {
                    BANRateUSD !== 0 &&
                    <div className="d-flex justify-content-center mb-3">

                        <span style={styles.price}>
                            1 BAN = {BANRateUSD} USD 
                            {BANRateLocal !== 0 && ` = ${BANRateLocal} ${symbol}`}
                        </span>
                        
                    </div>
                } */}
            </div>
        </>
    )
}