import React from 'react'
import Sdata from './Sdata';
import Card from './Card';

const Service = () => {
  return (
    <>
      <div className='my-5 text-center'>
        <h1 className="text-center">This is Service page</h1>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className="row gy-5">
                {
                  Sdata.map((val,index)=>{
                    return <Card key ={index} imgsrc={val.imgsrc} title={val.title} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
