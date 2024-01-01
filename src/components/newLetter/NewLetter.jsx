import { Mail, MailOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import './newLetter.scss'

const NewLetter = () => {
  return (
    <>
        <div className="newLetter">
            <div className="newLetter-wrapper">
                <h2 className="newletter-h2">S'abonner à notre newLetter !</h2>
                <div className="newLetter-center">
                    <div className="newLetter-left" data-aos="fade-down-right">
                        <MailOutlineOutlined className='newLetter-icon'/>
                        <input type="text" className="newletter-input" placeholder='Entrer votre Email...' />
                    </div>
                    <button className="letter-right" data-aos="fade-down-left">Envoyer</button>
                </div>
                <div className="newLetter-row-bars">
                    <a href="#accueil" className="newLetter-link" data-aos="zoom-in-up">Accueil</a>
                    <a href="#apropos" className="newLetter-link" data-aos="zoom-in-up">A propos</a>
                    <a href="#service" className="newLetter-link" data-aos="zoom-in-up">Services</a>
                    <a href="#contact" className="newLetter-link" data-aos="zoom-in-up">Contact</a>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default NewLetter
