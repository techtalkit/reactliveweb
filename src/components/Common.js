import React from 'react'
import web from '../images/pic2.png';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name}<b>TechTalkit</b></h1>
                <h2 className='my-3'>We are the team of developers</h2>
                <div className='mt-3'>
                  <NavLink to={props.visit} className='btn-get-started btn_primary'>{props.btnName}</NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2'>
                   <img src={props.imgsrc}
                   className="img-fluid header-img animated"
                   alt="home img"
                   />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common


