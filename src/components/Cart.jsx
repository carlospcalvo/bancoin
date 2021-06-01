import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Container, Row, Col, FormInput, Breadcrumb, BreadcrumbItem } from "shards-react"
import { Carousel } from 'react-bootstrap'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coinFront from '../assets/coin_front.png'
import coinBack from '../assets/coin_back.png'
import '../styles/Cart.css'
import ItemCount from './ItemCount'

export const Cart = () => {
    const styles = {
        main: {
            minHeight: 'calc(100vh - 9rem)',
            backgroundColor: '#2A2A2E',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        card: {
            backgroundColor: '#2A2A2E',
            borderColor: '##2A2A2E',
            borderRadius: '22px',
            margin: '1rem',
            marginTop: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        breadCrumb: {
            marginTop: '1rem',
        },
        img: {
            height: '20rem'
        },
        carouselIcons: {
            color: '#fbdd11',
        }
    }

    const nextIcon = <FontAwesomeIcon icon={faChevronRight} style={styles.carouselIcons}/>
    const prevIcon = <FontAwesomeIcon icon={faChevronLeft} style={styles.carouselIcons}/>

    const history = useHistory()

    return (
        <div style={styles.main}>
            <Breadcrumb style={styles.breadCrumb}>
                <BreadcrumbItem active>
                    Cart 
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Billing Info
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Payment 
                </BreadcrumbItem>
            </Breadcrumb>
            <Card style={styles.card}>
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

                <ItemCount/>

            </Card>        
        </div>
    )
}

