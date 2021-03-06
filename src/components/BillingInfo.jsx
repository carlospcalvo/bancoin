import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card, Button, Container, Row, Col, FormInput, Breadcrumb, BreadcrumbItem } from "shards-react";
import ReactFlagsSelect from 'react-flags-select';
import '../styles/BillingInfo.css';


export const BillingInfo = () => {
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
            borderColor: '#2A2A2E',
            borderRadius: '22px',
            margin: '1rem',
            marginTop: '0',
			marginBottom: '3rem'
        },
        breadCrumb: {
            marginTop: '1rem',
        },
        breadCrumbText: {
            color: '#6c757d',
            textDecoration: 'none'
        },
        form: {
            width: 'auto',
            padding: '1rem',
            borderRadius: '21px',
            backgroundColor: '#2A2A2E',
            borderColor: '#fbdd11',
        },
        input: {
            //backgroundColor: '#d0bd3f',
            //backgroundColor: '#dac220',
            backgroundColor: '#ecd11f',
            
            borderColor: '#2A2A2E',
            //color: '#fbdd11',
            color: 'black',
            marginTop: '.25rem',
            marginBottom: '.25rem',
        },
        labels: {
            //color: 'black',
            color: '#fbdd11',
            //fontWeight: '600'
        },
        button: {
            backgroundColor: '#4cbf4b',//'#fbdd11',
            color: 'black',
            textDecoration: 'none',
            fontWeight: '900',
            marginBottom: '1rem'
        },
        errorMessage: {
            color: 'red',
            fontSize: '.85rem',
            float: 'right'
        },
    }

    const history = useHistory()

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "", 
        address: "",
        address2: "",
        zipCode: "",
        city: "",
        state: "",
        country: ""
    }

    return (
        <div style={styles.main}>
            <Breadcrumb style={styles.breadCrumb}>
                <BreadcrumbItem>
                    <Link to='/cart' styles={styles.breadCrumbText}>
                        Cart
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Billing Info</BreadcrumbItem>
                <BreadcrumbItem>
                    Payment 
                </BreadcrumbItem>
            </Breadcrumb>
            <Card style={styles.card}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .required('Required'),
                        lastName: Yup.string()
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email')
                            .required('Required'),
                        address: Yup.string()
                            .required('Required'),
                        address2: Yup.string(),
                        zipCode: Yup.string()
                            .required('Required'),
                        city: Yup.string()
                            .required('Required'),
                        state: Yup.string()
                            .required('Required'),
                        country: Yup.string()
                            .required('Required')
                    })}
                >
                    {({submitForm, validateForm, setTouched, isSubmitting, values, setFieldValue, errors, touched}) => (
                        <>
                            <Form style={styles.form}>
                                <Container>
                                    <Row>
                                        <Col md="6">
                                            <label htmlFor="firstName" style={styles.labels}>First name</label>
                                            <Field 
                                            name="firstName" 
                                            id="firstName"
                                            type="text" 
                                            valid={touched.firstName && errors['firstName'] === undefined} 
                                            invalid={touched.firstName && errors.firstName !== undefined}
                                            onBlur={(e) => setFieldValue('firstName', e.target.value, true)}
                                            placeholder="John" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                            <ErrorMessage name="firstName" component="span" style={styles.errorMessage}/>
                                        </Col>
                                        <Col md="6">
                                            <label htmlFor="lastName" style={styles.labels}>Last name</label>
                                            <Field 
                                            name="lastName" 
                                            id="lastName" 
                                            type="text" 
                                            valid={touched.lastName && errors['lastName'] === undefined} 
                                            invalid={touched.lastName && errors.lastName !== undefined}
                                            onBlur={(e) => setFieldValue('lastName', e.target.value, true)}
                                            placeholder="Doe" 
                                            component={FormInput} 
                                            style={styles.input} 
                                            />
                                            <ErrorMessage name="lastName" component="span" style={styles.errorMessage}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="email" style={styles.labels}>Email</label>
                                            <Field 
                                            name="email" 
                                            type="email" 
                                            id="email" 
                                            invalid={touched.email && errors.email !== undefined}
                                            valid={touched.email && errors['email'] === undefined} 
                                            onBlur={(e) => setFieldValue('email', e.target.value, true)}
                                            placeholder="johndoe123@gmail.com" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                            <ErrorMessage name="email" component="span" style={styles.errorMessage}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="address" style={styles.labels}>Street address</label>
                                            <Field 
                                            name="address" 
                                            id="address" 
                                            invalid={touched.address && errors.address !== undefined}
                                            valid={touched.address && errors['address'] === undefined} 
                                            onBlur={(e) => setFieldValue('address', e.target.value, true)}
                                            placeholder="Sunset Blvd. 1234" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                            <ErrorMessage name="address" component="span" style={styles.errorMessage}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="address2" style={styles.labels}>Address additional info</label>
                                            <Field 
                                            name="address2" 
                                            id="address2" 
                                            onBlur={(e) => setFieldValue('address2', e.target.value, false)}
                                            placeholder="Apartment 6" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label htmlFor="city" style={styles.labels}>City</label>
                                            <Field 
                                            name="city" 
                                            id="city" 
                                            invalid={touched.city && errors.city !== undefined}
                                            valid={touched.city && errors['city'] === undefined} 
                                            onBlur={(e) => setFieldValue('city', e.target.value, true)}
                                            placeholder="Los Angeles" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                            <ErrorMessage name="city" component="span" style={styles.errorMessage}/>
                                        </Col>
                                        <Col md="6">
                                            <label htmlFor="zipCode" style={styles.labels}>Zip Code</label>
                                            <Field 
                                            name="zipCode" 
                                            id="zipCode" 
                                            invalid={touched.zipCode && errors.zipCode !== undefined}
                                            valid={touched.zipCode && errors['zipCode'] === undefined} 
                                            onBlur={(e) => setFieldValue('zipCode', e.target.value, true)}
                                            placeholder="90009" 
                                            component={FormInput}  
                                            style={styles.input} 
                                            />
                                            <ErrorMessage name="zipCode" component="span" style={styles.errorMessage}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label htmlFor="state" style={styles.labels}>State</label>
                                            <Field 
                                            name="state" 
                                            id="state" 
                                            invalid={touched.state && errors.state !== undefined}
                                            valid={touched.state && errors['state'] === undefined} 
                                            onBlur={(e) => setFieldValue('state', e.target.value, true)}
                                            placeholder="California" 
                                            component={FormInput} 
                                            style={styles.input}
                                            />
                                            <ErrorMessage name="state" component="span" style={styles.errorMessage}/>
                                        </Col>
                                        <Col md="6">
                                            <label htmlFor="country" style={styles.labels}>Country</label>
                                            <Field 
                                            name="country" 
                                            id="country"
                                            searchable 
                                            selected={values.country}
                                            invalid={touched.country && errors.country !== undefined}
                                            valid={touched.country && errors['country'] === undefined} 
                                            onSelect={(value) => setFieldValue('country', value, true)}
                                            placeholder="Select country" 
                                            component={ReactFlagsSelect} 
                                            />
                                            <ErrorMessage name="country" component="span" style={styles.errorMessage}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                            <div className="d-flex justify-content-center">
                                <Button pill theme="success" style={styles.button}
                                onClick={
                                    () => validateForm()
                                    .then((errors) => {
                                        console.log('values', values)
                                        if(Object.entries(errors).length === 0 && errors.constructor === Object ) {
                                            console.log("[BillInfo] valid values", values)
                                            history.push('/payment')
                                        } else {
                                            console.log("[BillInfo] errors", errors)
                                            setTouched(errors);
                                        }
                                    })
                                }
                                >
                                    Go to Checkout
                                </Button>
                            </div> 
                        </>
                    )}
                </Formik>
            </Card>       
                   
        </div>
    )
}

