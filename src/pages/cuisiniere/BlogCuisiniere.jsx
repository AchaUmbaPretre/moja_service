import React from 'react'
import './blogCuisiniere.scss'
import blog2 from './../../images/blog2.jpeg'
import blog3 from './../../images/blog1.jpeg'
import blog4 from './../../images/blog3.jpeg'
import { Comment, DateRangeOutlined, GppGood, GppGoodOutlined, GppGoodTwoTone, OneK, PhoneAndroid, RoundaboutRightOutlined, RoundedCorner } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import CoupeCouture from './Cuisiniere'
import BlogRight from '../../components/blogRight/BlogRight'
import Footer from '../../components/footer/Footer'

const BlogCuisiniere = () => {
  return (
    <>
        <div className="blogCoupe" id='top'>
            <CoupeCouture/>
            <div className="blogWrapper">
                <div className="blogWrapper-left">
                    <div className="blogWrapper-img">
                        <img src={blog2} alt="" className="blog-img" data-aos="zoom-in-up" />
                        <h2 className="blog-h2">Êtes-vous à la recherche de cuisiniers et cuisinières pour vos restaurants, supermarchés et autres établissements ? N'hésitez pas à contacter Moja Service. Nous mettons à votre disposition des agents hautement qualifiés pour répondre à tous vos besoins spécifiques.</h2>
                        <p className="blog-span">Chez Moja Service, nous comprenons l'importance cruciale de recruter des cuisiniers et cuisinières hautement qualifiés pour garantir le succès de vos restaurants, supermarchés et autres établissements culinaires. C'est pourquoi nous sommes fiers de mettre à votre disposition notre équipe d'agents professionnels spécialisés dans le recrutement de personnel de cuisine.</p>
                        <div className="blogcoupe">
                            <p className="desc-blogCoupe">Lorsque vous faites appel à Moja Service, vous pouvez être assuré de bénéficier d'un processus de recrutement rigoureux et efficace. Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins spécifiques en matière de personnel de cuisine, que ce soit pour un poste de chef cuisinier, de sous-chef, de pâtissier ou de commis de cuisine.
                            Nos agents sont experts dans l'évaluation des compétences culinaires, de l'expérience professionnelle et de l'adéquation culturelle des candidats. Ils effectuent des entretiens approfondis, vérifient les références et les antécédents professionnels des candidats, et réalisent des tests pratiques pour s'assurer de leur aptitude à répondre à vos exigences.</p>
                            <img src={blog3} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <p className="desc-blogCoupe">En plus de notre expertise dans le recrutement, nous nous engageons à fournir un service de qualité supérieure à nos clients. Nous sommes réactifs, professionnels et centrés sur vos besoins. Notre objectif est de simplifier le processus de recrutement en vous proposant des candidats pré-qualifiés et adaptés à vos critères, ce qui vous permet de gagner du temps et de vous concentrer sur le développement de votre entreprise.</p>
                            <img src={blog4} alt="" className="blogCoupe-img" data-aos="zoom-in-up"/>
                            <p className="desc-blogCoupe">Que vous ayez besoin de renforcer votre équipe de cuisine existante ou de constituer une nouvelle équipe pour un nouvel établissement, vous pouvez compter sur Moja Service pour vous fournir des cuisiniers et cuisinières hautement qualifiés. N'hésitez pas à nous contacter dès maintenant pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à trouver les meilleurs talents culinaires pour votre entreprise.</p>
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

export default BlogCuisiniere;
