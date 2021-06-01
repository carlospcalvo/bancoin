import { faTwitter, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Ar } from 'react-flags-select'

export const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: 'black',
            position: 'absolute',
            minWidth: '100%',
            color: '#fbdd11',
        }, 
        social: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '.5rem',
            marginBottom: '.25rem'
        },
        icons: {
            color: '#fbdd11',
        },
        links: {
            color: '#fbdd11',
            textDecoration: 'none'
        },
        copy: {
            margin: '.5rem',
            marginTop: '.25rem'
        }
    }
    return (
        <footer className="footer" style={styles.footer}>
            <div >
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='social' style={styles.social}>
                                <a href='https://www.reddit.com/r/banano' style={styles.links}>
                                    <FontAwesomeIcon icon={faReddit}/>
                                    {' r/banano'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container text-center'>
                    <p style={styles.copy}>
                        <Ar style={{marginBottom: '.225rem'}}/> {' '} 
                        &copy; {' '} 
                        {new Date().getFullYear()}  Mariano Montiel &{' '} 
                        <a href="https://github.com/carlospcalvo" rel='nofollow' style={styles.links}>Carlos Calvo Nazábal </a>
                    </p>
                   
                </div>
            </div>
        </footer>
  )
}