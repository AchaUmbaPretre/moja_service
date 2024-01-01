import './blog.scss'
import { Link } from 'react-router-dom'
import blog1 from "../../images/blog1.jpeg"
import blog2 from "../../images/IMG-20231229-WA0025.jpg"
import blog3 from "../../images/blog3.jpeg"
import blog4 from "../../images/IMG-20231229-WA0007.jpg"
import curve from './../../images/curve-shape-2.png'

const Blog = () => {
  return (
    <>
        <div className="blog" id='blog'>
            <div className="services-wrapper">
                <div class = "articles-shape">
                  <img src ={curve} alt = "" />
                </div>
                <div className="client-cont-title">
                    <h1 className="client-title">Blog</h1>
                    <h1 className="client-sous-title">Nos informations</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="services-container">
                    <div className="services-rows">
                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={blog3} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">Nos cuisinières</h2>
                                </div>
                                <p className="service-desc">
                                Êtes-vous à la recherche de cuisiniers et cuisinières pour vos restaurants, supermarchés et autres établissements ? N'hésitez pas à contacter Moja Service. Nous mettons à votre disposition des agents hautement qualifiés pour répondre à tous vos besoins spécifiques.
                                </p>
                                <Link to="/cuisiniere" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={blog2} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">Nos hôtesses</h2>
                                </div>
                                <p className="service-desc">
                                Nous avons le plaisir de vous offrir les services de nos cuisinières et hôtesses de marque, qui se distinguent par leur excellence et leur professionnalisme. En choisissant Moja Service, vous êtes assuré(e) de bénéficier d'une équipe talentueuse et compétente pour répondre à tous vos besoins. Nous nous engageons à contribuer activement à l'utilité et au succès de votre entreprise.
                                </p>
                                <Link to="/hotesse" className="service-btn">savoir plus</Link>
                            </div>
                        </div>

                        <div className="services-row" data-aos="zoom-in-up">
                            <div className="services-image">
                                <img src={blog4} alt="" className="service-img" />
                            </div>
                            <div className="service-bottom">
                                <div className="service-rows-title">
                                    <h2 className="service-h2">Formation</h2>
                                </div>
                                <p className="service-desc">
                                Nous sommes fermement convaincus que la formation est la clé pour fournir des services d'une qualité supérieure. C'est pourquoi nous proposons des programmes de formation continue à nos personnels. Notre objectif est de garantir que nous maintenons les normes les plus élevées et adoptons les meilleures pratiques actuelles.
                                </p>
                                <Link to="/formation" className="service-btn">savoir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog