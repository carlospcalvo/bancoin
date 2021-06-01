import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from "shards-react"
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/ItemCount.css'


const ItemCount = () => {
    let initial = 1
    const history = useHistory()
    //State 
    const [finalValue, setFinalValue] = useState(initial);        

    //Helpers
    const reduceUnits = (e) => {
        e.preventDefault()
        if(finalValue > 1){
            setFinalValue(finalValue - 1) 
        }
    }

    const addUnits = (e) => {
        e.preventDefault()
       /*  if(finalValue < stock){
            setFinalValue(finalValue + 1) 
        }   */  
        setFinalValue(finalValue + 1)     
    }

    const submitClickHandler = (e) => {
        e.preventDefault()
        
        /* if(stock > 0){
            onAdd(e, finalValue)
            setFinalValue(initial)
        } */


        history.push('/billing-info')
    }

    return (
        <>
            <form className="ItemCountContainer">
                <div>
                    <div className='ItemCountBtnContainer'>
                        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(33, 37, 41)'}}>
                            <button className="ItemCountDecreaseBtn" onClick={(e) => reduceUnits(e)}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <input className="ItemCountAmount" readOnly type="tel" value={finalValue}/>
                            <button className="ItemCountIncreaseBtn" onClick={(e) => addUnits(e)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>  
                        {/* <Button pill theme="success" style={styles.button}>
                                Go to Checkout
                            </Button> */}                      
                        <Button className="ItemCountSubmit" pill theme="success" onClick={ submitClickHandler }>NEXT</Button>    
                    </div>                                    
                </div>
            </form>
        </>
    )
}

export default ItemCount