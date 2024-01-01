import React from 'react'
import './blogHotesse.scss'
import blog2 from './../../images/IMG-20231229-WA0020.jpg'
import blog3 from './../../images/IMG-20231229-WA0017.jpg'
import blog4 from './../../images/IMG-20231229-WA0026.jpg'
import { Comment, DateRangeOutlined, GppGood, GppGoodOutlined, GppGoodTwoTone, OneK, PhoneAndroid, RoundaboutRightOutlined, RoundedCorner } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import CoupeCouture from './Hotesse'
import BlogRight from '../../components/blogRight/BlogRight'
import Footer from '../../components/footer/Footer'

const BlogHotesse = () => {
  return (
    <>
        <div className="blogCoupe">
            <CoupeCouture/>
            <div className="blogWrapper">
                <div className="blogWrapper-left">
                    <div className="blogWrapper-img">
                        <img src={blog4} alt="" className="blog-img" />
                        <h2 className="blog-h2">Chez Moja Service, nous sommes ravis de pouvoir vous proposer les services de nos cuisinières et hôtesses de marque exceptionnelles, qui se démarquent par leur excellence et leur professionnalisme. En choisissant notre entreprise, vous avez la certitude de bénéficier d'une équipe talentueuse et compétente, prête à répondre à tous vos besoins avec engagement et dévouement.</h2>
                        <p className="blog-span">Nos cuisinières sont des experts culinaires passionnés par leur métier. Elles possèdent une vaste expérience dans la préparation de plats savoureux et innovants, et maîtrisent une variété de cuisines, des classiques traditionnels aux tendances gastronomiques les plus récentes. Elles sont attentives aux détails, créatives et capables de s'adapter aux préférences et aux exigences spécifiques de chaque client.</p>
                        <div className="blogcoupe">
                            <p className="desc-blogCoupe">Nos hôtesses de marque sont des professionnelles de l'accueil et de la gestion des événements. Elles sont formées pour offrir un service client d'excellence, en veillant à ce que chaque invité soit accueilli chaleureusement et se sente pris en charge tout au long de l'événement. Elles sont bien organisées, polies et capables de gérer efficacement les situations imprévues pour garantir le bon déroulement de chaque occasion.</p>
                            <img src={blog3} alt="" className="blogCoupe-img" />
                            <p className="desc-blogCoupe">En choisissant Moja Service, vous bénéficiez non seulement de l'expertise de nos cuisinières et hôtesses de marque, mais également de notre engagement à contribuer activement à l'utilité et au succès de votre entreprise. Nous comprenons que chaque événement, chaque service culinaire est une occasion de créer une expérience unique pour vos clients, et nous travaillons en étroite collaboration avec vous pour réaliser cette vision.</p>
                            <p className="desc-blogCoupe">Nous nous engageons à fournir un service de haute qualité, en respectant vos exigences et en dépassant vos attentes. Notre équipe est disponible pour discuter de vos besoins spécifiques, élaborer des menus personnalisés, planifier les détails logistiques et s'assurer que chaque aspect de nos services est soigneusement coordonné.</p>
                            <img src={blog2} alt="" className="blogCoupe-img" />
                            <p className="desc-blogCoupe">Que vous organisiez un événement privé, un dîner d'affaires, un mariage ou toute autre occasion spéciale, nos cuisinières et hôtesses de marque sont prêtes à faire briller votre entreprise. Faites confiance à Moja Service pour vous offrir une équipe compétente, professionnelle et dévouée, capable de contribuer activement au succès de votre entreprise et de créer des expériences mémorables pour vos clients.</p>
                        </div>
                    </div>

                </div>
                <BlogRight/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BlogHotesse;
