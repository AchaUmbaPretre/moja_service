import { GppGood, GppGoodOutlined } from '@mui/icons-material'
import './technologie.scss'
import videos from  "./../../images/VID-20231020-WA0006.mp4"
import bg from "./../../images/curve-shape-1.png"
import accueil from "./../../images/istockphoto-1397818580-1024x1024.jpg"
import photo from "./../../images/camera-1130731_1280.jpg"
import design from "./../../images/IMG-20231020-WA0005.jpg"
import autres from "./../../images/bulletin-board-3233643_1280.jpg"

const Technologie = () => {
  return (
    <>
        <div className="technologie" id='skills'>
            <div class = "services-shape">
                <img src ={bg} alt = "" />
            </div>
            <div className="techno-wrapper">
                <div className="service-cont-title">
                    <h1 className="service-title">NOS SPECIALITES</h1>
                    <h1 className="service-sous-title">Ce que nous offrons</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="techno-rows">
                    <div className="techno-row" data-aos="zoom-in-up">
                        <div className="tecno-row-title">
                            <h2 className='techno-h2'>Photo</h2>
                        </div>
                        <div className="techno-title">
                            <img src={photo} alt="" className="video-techno" />
                        </div>
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">Studio Photo Disponible</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Couverture Evenement</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Photo Anniversaire</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Autres</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <a href='#contact' className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row" data-aos="zoom-in-up">
                        <div className="tecno-row-title">
                            <h2 className='techno-h2'>Vidéo</h2>
                        </div>
                        <div className="techno-title">
                            <video src={videos} className='video-techno'></video>
                        </div>
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">Tournage des Clips vidéos</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Tournage Series Télé</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Réalisation télé Réalité</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Autres</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <a href='#contact' className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row" data-aos="zoom-in-up">
                        <div className="tecno-row-title">
                            <h2 className='techno-h2'>Accueil</h2>
                        </div>
                        <div className="techno-title">
                        <img src={accueil} alt="" className="video-techno" />
                        </div>
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">Guide Touristique</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Animation Evenementiel</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Service Traiteur</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Protocole</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Serveur</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <a href='#contact' className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row" data-aos="zoom-in-up">
                        <div className="tecno-row-title">
                            <h2 className='techno-h2'>Design</h2>
                        </div>
                        <div className="techno-title">
                            <img src={design} alt="" className="video-techno" />
                        </div>
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">Création Charte graphique</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Logo</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Conception d'affiche</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Affiche publicitaire</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Autres</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <a href='#contact' className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row" data-aos="zoom-in-up">
                        <div className="tecno-row-title">
                            <h2 className='techno-h2'>Autres</h2>
                        </div>
                        <div className="techno-title">
                            <img src={autres} alt="" className="video-techno" />
                        </div>
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">Création Panneau - Pub</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Marketing Digital</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">Autres</span>
                                <GppGoodOutlined className='techno-icon'/>
                            </div>
                            <a href='#contact' className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Technologie