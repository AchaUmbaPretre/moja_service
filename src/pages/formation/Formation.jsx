import React from 'react'
import './formation.scss'
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Navbar from '../../components/navbar/Navbar'

const Formation = () => {

  return (
    <>
    <Topbar/>
      <div className="blogSlider">
        <Navbar/>
        <hr className="home-hr" />
        <div className="blogSlider-wrapper">
          <div className="blogSlider-container">
            <h2 className="blogslider-h2">Formation</h2>
            <div className="blogSlider-row">
                <Link className='Blog-link' to={'/'}>Home /</Link><Link className='Blog-link'> Formation</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formation;
