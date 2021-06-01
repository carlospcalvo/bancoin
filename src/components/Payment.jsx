import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import wip from '../assets/wip.png'

export const Payment = () => {
    const styles = {
        breadCrumb: {
            marginTop: '1rem',
        },
        breadCrumbText: {
            color: '#6c757d',
            textDecoration: 'none'
        },
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "#2A2A2E", height: '80.8%'}}>
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
            <img src={wip} alt="WORK IN PROGRESS" height={400}/>
        </div>
    )
}