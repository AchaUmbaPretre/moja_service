import { AutorenewSharp, DesignServicesOutlined, Person, Person3Outlined, PersonOutline, Phone, PhoneOutlined, PhotoAlbumOutlined, PhotoCameraBackOutlined, VideocamOutlined } from '@mui/icons-material'
import './service.scss'

const Service = () => {
  return (
    <>
        <div className="services" id='service'>
            <div className="service-wrapper">
                <div className="service-cont-title">
                    <h1 className="service-title">NOS SERVICES</h1>
                    <h1 className="service-sous-title">Des solutions personnalisées pour votre entreprise</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="service-rows">
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <PhotoCameraBackOutlined className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Photo</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <VideocamOutlined className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Vidéo</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <Person3Outlined className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Accueil</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <DesignServicesOutlined className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Design</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <AutorenewSharp className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Autres</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row" data-aos="zoom-in-up">
                        <div className="service-icons">
                            <PhoneOutlined className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Nous Contacter</h3>
                        <p className="service-desc">+243982558251 </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service