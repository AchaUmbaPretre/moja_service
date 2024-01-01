import {  Call, LockClock } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './contact.scss'

const Contact = () => {
  return (
    <>
        <div className="contact" id='contact'>
            <div className="contact-wrapper">
                <div className="contact-left" data-aos="fade-down-right">
                    <div className="service-cont-title">
                        <h1 className="service-title">Nous Contacter</h1>
                        <p className="apropos-barre"><span className="apropos-moov"></span></p>
                    </div>
                    <div className="contact-left-bottom">
                        <div className="contact-rows-heure">
                            <div className="contact-rows-heure">
                                <LockClock/>
                                <span className="contact-desc">24 heures</span>
                            </div>
                            <div>
                                sur
                            </div>
                            <div className="contact-rows-heure">
                                <LockClock/>
                                <span className="contact-desc">24 heures</span>
                            </div>
                        </div>
                        <p className="contact-descript">Nous mettons à votre disposition une equipe d'assistance prete à vous servir</p>
                        <Link className="contact-appel"><Call className='contact-call'/></Link>
                    </div>
                </div>
                <div className="contact-right"  data-aos="fade-down-left">
                    <form className='contact-form' action="">
                        <input type="text" className="contact-control" placeholder='Nom' />
                        <input type="text" className="contact-control" placeholder='Mail' />
                        <textarea name="" id="" cols="30" rows="4" className='contact-textarea' placeholder='Message'></textarea>
                        <button className='contact-btn'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact