import { CallOutlined,FacebookOutlined, Instagram, LinkedIn, LocationOnOutlined, MailOutlineOutlined, Twitter } from '@mui/icons-material'
import './footer.scss'
import logo from './../../images/IMG-20230923-WA0000.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper-top">
                    <div className="footer-left">
                        <img src={logo} alt="" className="footer-img" />
                    </div>
                    <div className="footer-center1" data-aos="fade-up">
                        <div className="service-cont-title">
                            <h2 className="service-title">Nous trouver</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-row-icon" data-aos="fade-down">
                                <LocationOnOutlined className='footer-icon' />
                                <span className="footer-desc">26 Beya Pumbu, Kinshasa Salongo, Rdc</span>
                            </div>
                            <div className="footer-row-icon" data-aos="fade-down">
                                <MailOutlineOutlined className='footer-icon'/>
                                <span className="footer-desc">mojaservice1993@gmail.com</span>
                            </div>
                            <div className="footer-row-icon" data-aos="fade-down">
                                <CallOutlined className='footer-icon'/>
                                <span className="footer-desc">+243982558251</span>
                            </div>
                            <div className="footer-reseaux">
                                <Link className='footer-rx-icon'><Twitter className='footer-rsx' data-aos="fade-down"/></Link>
                                <Link className='footer-rx-icon' to={"https://www.facebook.com/profile.php?id=61550973660142"}><FacebookOutlined className='footer-rsx' data-aos="fade-up"/></Link>
                                <Link className='footer-rx-icon'><LinkedIn className='footer-rsx'data-aos="fade-down"/></Link>
                                <Link className='footer-rx-icon'><Instagram className='footer-rsx' data-aos="fade-down"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-center2" data-aos="fade-up">
                        <div className="service-cont-title">
                            <h2 className="service-title">Liens</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <ul className="footer-ul">
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#accueil'>Accueil</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#aproppos'>A propos</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#services'>Nos Services</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#contact'>Nous Contacter</a></li>
                        </ul> 
                    </div>
                    <div className="footer-right" data-aos="fade-up">
                        <div className="service-cont-title">
                            <h2 className="service-title">Liens Popualaire</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <ul className="footer-ul">
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#accueil'>Accueil</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#aproppos'>A propos</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#services'>Nos Services</a></li>
                            <li className="footer-li" data-aos="fade-down"><a className='footer-Link' href='#contact'>Nous Contacter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-wrapper-bottom">
                    <p className="footer-bottom-desc"><span className="footer-techno">©MojaService.</span>tous droits réservés.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer