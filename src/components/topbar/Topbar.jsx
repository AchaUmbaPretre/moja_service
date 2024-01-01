import { Facebook, Instagram, LinkedIn, LocationOn, Mail, Phone, Twitter, YouTube } from '@mui/icons-material'
import './topbar.scss'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <div className="topbar-left-icons">
                        <LocationOn className='topbar-icons'/>
                        <span className="topbar-adresse">26 Beya Pumbu, Kinshasa Salongo, Rdc</span>
                    </div>
                    <div className="topbar-left-icons topNum">
                        <Phone className='topbar-icons'/>
                        <span className="topbar-adresse">+243982558251</span>
                    </div>
                    <div className="topbar-left-icons">
                        <Mail className='topbar-icons'/>
                        <span className="topbar-adresse">mojaservice1993@gmail.com</span>
                    </div>
                </div>
                <div className="topbar-right">
                    <Twitter className='topbar-rsx'/>
                    <Link to={'https://www.facebook.com/profile.php?id=61550973660142'} style={{"color" : "white"}}><Facebook className='topbar-rsx'/></Link>
                    <LinkedIn className='topbar-rsx'/>
                    <Instagram className='topbar-rsx'/>
                    <YouTube className='topbar-rsx'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar