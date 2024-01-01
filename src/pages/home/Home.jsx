import { Groups3Outlined, ManageAccountsOutlined, PersonTwoTone } from '@mui/icons-material'
import Apropos from '../../components/apropos/Apropos'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Service from '../../components/services/Service'
import Technologie from '../../components/technologie/Technologie'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'
import NewLetter from '../../components/newLetter/NewLetter'
import Localisation from '../../components/localisation/Localisation'
import Blog from '../../components/blog/Blog'
import Contact from '../../components/contacts/Contact'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <>
        <div className="home" id='accueil'>
            <Topbar/>
            <div className="home-wrapper">
                <div className="home-container">
                    <Navbar/>
                    <hr className="home-hr" />
                    <div className="home-title">
                        <h1 className="home-h1" data-aos="fade-up-left">MOJA SERVICE</h1>
                        <a href="#apropos" className="home-btn" data-aos="fade-up-right">Savoir plus</a>
                    </div>
                </div>
                <div className="client-wrapper" data-aos="fade-down">
                    <div className="client-left">
                        <div className="client-rows">
                            <div className="client-row-left">
                                <Groups3Outlined className='client-icon'/>
                            </div>
                            <div className="client-row-right">
                                <div className="client-row-center">
                                    <h3 className="client-h3">Clients Satisfaits</h3>
                                    <h1 className="client-h1"><CountUp start={0} end={10} duration={5}/></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-right">
                        <div className="client-rows">
                            <div className="client-row-left">
                                <ManageAccountsOutlined className='client-icon'/>
                            </div>
                            <div className="client-row-right">
                                 <div className="client-row-center">
                                    <h3 className="client-h3">Projets Effectués</h3>
                                    <h1 className="client-h1"><CountUp start={0} end={15} duration={5}/></h1> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Apropos/>
                <Service/>
                <Technologie/>
                <Blog/>
                <NewLetter/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Home