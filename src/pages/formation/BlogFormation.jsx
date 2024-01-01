import React from 'react'
import './blogFormation.scss'
import blog1 from './../../images/IMG-20231229-WA0014.jpg'
import blog2 from './../../images/IMG-20231229-WA0007.jpg'
import blog3 from './../../images/IMG-20231229-WA0014.jpg'
import blog4 from './../../images/IMG-20231229-WA0018.jpg'
import blog5 from './../../images/IMG-20231229-WA0027.jpg'
import blog6 from './../../images/IMG-20231229-WA0025.jpg'
import blog7 from './../../images/IMG-20231229-WA0028.jpg'
import blog8 from './../../images/IMG-20231229-WA0022.jpg'
import blog9 from './../../images/IMG-20231229-WA0028.jpg'
import { Comment, DateRangeOutlined, GppGood, GppGoodOutlined, GppGoodTwoTone, OneK, PhoneAndroid, RoundaboutRightOutlined, RoundedCorner } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CoupeCouture from './Formation'
import BlogRight from '../../components/blogRight/BlogRight'
import Footer from '../../components/footer/Footer'

const BlogFormation = () => {
  return (
    <>
        <div className="blogCoupe" id='top'>
            <CoupeCouture/>
            <div className="blogWrapper">
                <div className="blogWrapper-left">
                    <div className="blogWrapper-img">
                        <img src={blog2} alt="" className="blog-img" data-aos="zoom-in-up" />
                        <h2 className="blog-h2">Nous sommes fiers de pouvoir offrir des agents de formation qui incarnent le professionnalisme à travers notre service, Moja. Chez Moja, nous comprenons l'importance d'une formation de qualité et de professionnels compétents pour garantir la réussite des entreprises et des individus.</h2>
                        <p className="blog-span">Nos agents de formation sont soigneusement sélectionnés pour leur expertise dans leur domaine respectif. Ils possèdent une vaste expérience et des connaissances approfondies, ce qui leur permet de dispenser des formations de haut niveau. Que ce soit dans le domaine de la vente, du leadership, de la communication ou de la gestion du temps, nos agents de formation sont des experts chevronnés prêts à partager leur savoir-faire.</p>
                        <div className="blogcoupe">
                            <p className="desc-blogCoupe">Lorsque vous choisissez Moja pour vos besoins en formation, vous pouvez vous attendre à ce que nos agents se distinguent par leur professionnalisme. Ils sont ponctuels, bien préparés et engagés à fournir une expérience d'apprentissage exceptionnelle. Ils s'adaptent aux besoins spécifiques de votre entreprise ou de votre équipe, en proposant des programmes de formation sur mesure qui répondent à vos objectifs et à vos défis.</p>
                            <img src={blog4} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <p className="desc-blogCoupe">En plus de leur expertise, nos agents de formation possèdent également d'excellentes compétences pédagogiques. Ils sont capables de communiquer de manière claire et concise, en utilisant des méthodes interactives pour favoriser l'engagement et la participation des apprenants. Ils veillent à ce que chaque session de formation soit dynamique, stimulante et pertinente.</p>
                            <img src={blog5} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <p className="desc-blogCoupe">Chez Moja, nous croyons fermement que le professionnalisme est essentiel pour établir des relations de confiance avec nos clients. Nous nous efforçons de fournir un service de qualité supérieure et de dépasser les attentes. En travaillant avec nos agents de formation, vous pouvez être assuré de bénéficier d'une expertise de premier ordre, d'un accompagnement personnalisé et d'une expérience de formation enrichissante.</p>
                            <img src={blog6} alt="" className="blogCoupe-img" data-aos="zoom-in-up" />
                            <img src={blog3} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <img src={blog8} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <img src={blog9} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <p className="desc-blogCoupe">En conclusion, chez <strong>Moja</strong>, nous sommes fiers de pouvoir offrir des agents de formation qui incarnent le professionnalisme à travers notre service. Nous mettons tout en œuvre pour garantir la réussite de nos clients en fournissant des formations de qualité dispensées par des professionnels compétents et engagés. Faites confiance à Moja pour vos besoins en formation et découvrez la différence que le professionnalisme peut apporter à votre entreprise.</p>
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

export default BlogFormation;
