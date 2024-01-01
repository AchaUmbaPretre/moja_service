import React from 'react'
import { Link } from 'react-router-dom'
import { Comment, DateRangeOutlined, PhoneAndroid } from '@mui/icons-material'
import postBlog2 from './../../images/blog3.jpeg'
import postBlog1 from './../../images/IMG-20231229-WA0007.jpg'
import postBlog3 from './../../images/1704049195407.jpg'
import postBlog4 from './../../images/IMG-20231229-WA0023.jpg'
import './blogRight.scss'

const BlogRight = () => {
  return (
    <>
                <div className="blogWrapper-right">
                    <div className="blog-cat">
                        <div className="blog-row-title">
                            <h2 className="blog-h2">CATEGORIE</h2>
                            <span className="blog-span"></span>
                        </div>
                        <div className="blog-cats">
                            <div className="blog-sous-cats">
                                <Link to={'/'} className='blog-link' ><h4>FORMATION</h4></Link>
                            </div>
                            <div className="blog-sous-cats">
                                <Link to={'/'} className='blog-link'><h4>EVENEMENTS</h4></Link>
                            </div>
                            <div className="blog-sous-cats">
                                <Link to={'/'} className='blog-link'><h4>STAGE</h4></Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-post">
                        <div className="blog-row-title">
                            <h2 className="blog-h2">RECENT POST</h2>
                            <span className="blog-span"></span>
                        </div>
                        <div className="blog-rows-post">
                            <div className="blog-row-post">
                                <img src={postBlog2} alt="" className="blog-img" />
                                <div className="blog2">
                                    <div className="blog-date">
                                        <DateRangeOutlined className='blog-icon'/>
                                    15 Octobre 2023
                                    </div>
                                    <h4>Formation de nos personnels.</h4>
                                </div>
                            </div>
                            <div className="blog-row-post">
                                <img src={postBlog1} alt="" className="blog-img" />
                                <div className="blog2">
                                    <div className="blog-date">
                                        <DateRangeOutlined className='blog-icon'/>
                                        21 Déc 2023
                                    </div>
                                    <h4>Remis de prevet</h4>
                                </div>
                            </div>
                            <div className="blog-row-post">
                                <img src={postBlog3} alt="" className="blog-img" />
                                <div className="blog2">
                                    <div className="blog-date">
                                        <DateRangeOutlined className='blog-icon'/>
                                        04 Décembre 2023
                                    </div>
                                    <h4>Stage de nos personnels</h4>
                                </div>
                            </div>
                            <img src={postBlog4} alt="" className="blog-image" />
                        </div>
                    </div>
                    <div className="blog-plein">
                        <div className="blog-row-title">
                            <h2 className="blog-h2">PLAIN TEXT</h2>
                            <span className="blog-span"></span>
                        </div>
                        <div className="blog-plein-text">
                            <p className="blog-desc">
                            Moja service est un établissement de communication et partenaire événementiel, nous évoluons aussi dans le secteur de sous-traitance dans plusieurs domaines tels que l'hotellerie & accueil, cuisine, marketing et tant d'autres.
                            </p>
                            <Link to={'/'} className='blog-btn'>Lire la suite</Link>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default BlogRight
