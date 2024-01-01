import { LocationOn, Mail, Phone, WhatsApp } from '@mui/icons-material'
/* import emailjs from '@emailjs/browser'; */
import './contact.scss'
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [objectif, setObjectif] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('')


/*     const sendEmail = (e) =>{
        e.preventDefault();

        var data = {name:name, email:email, objectif:objectif, tel:tel, message: message};
        console.log(data)

        emailjs.send('service_ncsslgn', 'template_5vgjavn', data, 'tYX9g0nQroGqMMv5F')
        .then((result) => {
            alert('le message est envoyé avec succès');
            console.log(result)
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setObjectif('');
        setTel('');
        setMessage('');
    } */

  return (
    <>
        <div className="contact" id='contact'>
            <div className="contact-wrapper">
                <div className="client-cont-title">
                    <h1 className="client-sous-title client-bg">Contact</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>

                <div className="contact-container">
                    <div className="contact-rows">
                        <div className="contact-left" data-aos="fade-down-right">
                            <div className="contact-left-rows">
                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <LocationOn className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <h2 className="contact-text-h2">Location:</h2>
                                        <span className="contact-txt">26 Beya Pumbu, Kinshasa Salongo, Rdc</span>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <Mail className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <h2 className="contact-text-h2">Email:</h2>
                                        <span className="contact-txt"><a href='https://mojaservice1993@gmail.com' className="contact-txt" >mojaservice1993@gmail.com</a></span>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <Phone className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <h2 className="contact-text-h2">Telephone:</h2>
                                        <span className="contact-txt">+243 982 558 251</span>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-row-icon">
                                        <WhatsApp className='contact-icon'/>
                                    </div>
                                    <div className="contact-row-text">
                                        <h2 className="contact-text-h2">Whatsapp:</h2>
                                        <span className="contact-txt">+243 90 4627 107</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-left-bottom">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15912.266173827702!2d15.304387944046013!3d-4.398650901656667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a37579c78f681%3A0x3470dedc5cbf0d7c!2sSalongo%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1697389039139!5m2!1sfr!2scd"
                                                                            width={"100%"}
                                                                            height={"300"}
                                                                            style={{border:"0"}} 
                                                                            allowfullscreen={""} 
                                                                            loading={"lazy"} 
                                                                            referrerpolicy={"no-referrer-when-downgrade"}
                                    />
                            </div>
                        </div>

                        <div className="contact-right" data-aos="fade-down-left">
                            <form action="">
                                <div className="form-control">
                                    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="input-controle" placeholder='Entrez votre nom...' />
                                    <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input-controle" placeholder='Entrez votre email...' />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="objectif" value={objectif} onChange={(e)=>{setObjectif(e.target.value)}} className="input-controle" placeholder='Objectif...' />
                                </div>
                                <div className="form-control">
                                    <input type="tel" name="tel" value={tel} onChange={(e)=>{setTel(e.target.value)}} className="input-controle" placeholder='Entez votre numero de téléphone...' />
                                </div>
                                <textarea name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} id="" rows="15" placeholder='message...'></textarea>
                                <button type='submit' className="contact-submit">Envoyer le message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact