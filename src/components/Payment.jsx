import { Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react";
import banSvg from '../assets/banano-icon.svg';
import btcSvg from '../assets/btc.svg';
import ethSvg from '../assets/eth.svg';
import usdtSvg from '../assets/usdt.svg';
import nanoSvg from '../assets/nano.svg';
import wip from '../assets/wip.png';

export const Payment = () => {
    const styles = {
        breadCrumb: {
            marginTop: '2%',
			marginBottom: '1.5%',
        },
        breadCrumbText: {
            color: '#6c757d',
            textDecoration: 'none',
        },
		title: {
			color: '#fbdd11',
			fontWeight: 600,
		},
		text: {
            color: '#fbdd11'
        },
		accordion: {
			minWidth: '40%',
			marginBottom: '10%'
		},
		card: {
			padding: 0, 
		},
		cryptoTabHeader: {
			borderRadius: 'inherit inherit 0 0',
			backgroundColor: '#2A2A2E',
			//backgroundColor: 'red',
		},
		paypalCardHeader: {
			borderRadius: '0 0 .625rem .625rem',
			backgroundColor: '#2A2A2E',
		},
		listGroup: {
			backgroundColor: '#2A2A2E',
			borderRadius: 0,
		},
    }

    return(
        <div className="d-flex flex-column align-items-center" style={{backgroundColor: "#2A2A2E"}}>
            <Breadcrumb style={styles.breadCrumb}>
                <BreadcrumbItem>
                    <Link to='/cart' style={styles.breadCrumbText}>
                        Cart
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to='/billing-info' style={styles.breadCrumbText}>
                        Billing Info
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Payment 
                </BreadcrumbItem>
            </Breadcrumb>
			<Container className="dr-example-container">
				<Row>
					<Col sm="12" lg="6">
						<div>
							<h4 style={styles.title}>
								Payment method
							</h4>
						</div>
						<Accordion defaultActiveKey="0" style={styles.accordion}>
							<Card style={styles.cryptoTabHeader}>
								<Accordion.Toggle as={Card.Header} id="accordion" style={{...styles.title, ...styles.cryptoTabHeader}} eventKey="0">
									Crypto
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
								<Card.Body style={styles.card}>
									<ListGroup>
										<ListGroup.Item style={{...styles.listGroup, ...styles.text}}>
											<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
												<img src={banSvg} alt="" height={30} style={{marginRight: '1rem'}}/>  Banano
											</div>
										</ListGroup.Item>
										<ListGroup.Item style={{...styles.listGroup, ...styles.text}}>
											<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
												<img src={nanoSvg} alt="" height={30} style={{marginRight: '1rem'}}/>  Nano
											</div>
										</ListGroup.Item>
										<ListGroup.Item style={{...styles.listGroup, ...styles.text}}>
											<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
												<img src={btcSvg} alt="" height={30} style={{marginRight: '1rem'}}/>  Bitcoin
											</div>
										</ListGroup.Item>
										<ListGroup.Item style={{...styles.listGroup, ...styles.text}}>
											<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
												<img src={ethSvg} alt="" height={30} style={{marginRight: '1rem'}}/> Ethereum
											</div>								
										</ListGroup.Item>
										<ListGroup.Item style={{...styles.listGroup, ...styles.text}}>
											<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
												<img src={usdtSvg} alt="" height={30} style={{marginRight: '1rem'}}/> Tether
											</div>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card style={styles.paypalCardHeader}>
								<Accordion.Toggle as={Card.Header}  style={{...styles.title, ...styles.paypalCardHeader}} eventKey="1">
									Credit / Debit Card - PayPal
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body style={{...styles.paypalCardHeader, ...styles.text}}>PAYPAAAL</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<Col sm="12" lg="6">
						<div className="d-flex flex-column justify-content-center align-items-center">
							<h4 style={styles.title}>
								Your order
							</h4>
							<img src={wip} alt="WORK IN PROGRESS" height={400}/>
						</div>						
					</Col>
				</Row>
			</Container>
        </div>
    )
}