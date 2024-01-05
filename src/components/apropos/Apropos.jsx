import {GppGoodOutlined} from '@mui/icons-material'
import about from './../../images/IMG-20230922-WA0000.jpg'
import element from './../../images/element-img-1.png'
import curve from './../../images/curve-shape-2.png'
import aproposImg from './../../images/c2b32c317bb3cf0cacf3c56c9b0c166a.png'
import aproposImg2 from './../../images/IMG-20231229-WA0008.jpg'
import aproposImg3 from './../../images/Apropos2.jpg'
import './apropos.scss'

const Apropos = () => {
  return (
    <>
        <div className="apropos" id='apropos'>
            <div className="apropos-wrapper">
                <div class = "articles-shape">
                  <img src ={curve} alt = "" />
                </div>
                <div className="apropos-left" data-aos="fade-right">
                  <div class = "articles-element">
                    <img src = {element} alt = "" />
                  </div>
                  <div className="apropos-cont-title">
                    <h1 className="apropos-h1">A PROPOS DE NOUS</h1>
                    <h1 className="apropos-sous-title">Nous sommes un établissement</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                  </div>
                  <p className="apropos-desc">Moja service est un établissement de communication et partenaire événementiel, nous évoluons aussi dans le secteur de sous-traitance dans plusieurs domaines tels que l'hotellerie & accueil, cuisine, marketing et tant d'autres.
                  </p>
                  <p className="apropos-desc">Nous sommes très fière de vous accueillir en cas de besoin, car nous disposons toujours des agents bien formé pour nos partenaires qui nous fassent confiance.</p>
                  <div className="apropos-rows">
                    <div className="apropos-row">
                      <GppGoodOutlined className='apropos-icon'/>
                      <h4 className="apropos-h4">Rapidité</h4>
                    </div>
                    <div className="apropos-row">
                      <GppGoodOutlined className='apropos-icon'/>
                      <h4 className="apropos-h4">Serviabilité</h4>
                    </div>
                    <div className="apropos-row">
                      <GppGoodOutlined className='apropos-icon'/>
                      <h4 className="apropos-h4">Integrité</h4>
                    </div>
                    <div className="apropos-row">
                      <GppGoodOutlined className='apropos-icon'/>
                      <h4 className="apropos-h4">Creativité</h4>
                    </div>
                  </div>
                </div>
                <div className="apropos-right">
                  <img src={aproposImg3} alt="" className="apropos-img" data-aos="zoom-in-up"/>
                  <img src={aproposImg2} alt="" className="apropos-img" data-aos="zoom-in-up"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Apropos