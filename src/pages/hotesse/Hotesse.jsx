import React from 'react'
import './hotesse.scss'
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'

const Hotesse = () => {

  return (
    <>
    <Topbar/>
      <div className="blogSlider">
        <Navbar/>
        <hr className="home-hr" />
        <div className="blogSlider-wrapper">
          <div className="blogSlider-container">
            <h2 className="blogslider-h2">Hotesse</h2>
            <div className="blogSlider-row">
                <Link className='Blog-link' to={'/'}>Home /</Link><Link className='Blog-link'> Hotesse</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotesse;
