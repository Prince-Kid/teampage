import React from 'react'
import { sale } from '../data'

const Sales_Marketing = () => {
  return (
    <div className='team'>
    <h1>Sales And Marketing Team</h1>
      <div className='container grid4'>
         {
          sale.map((val)=>{
              return(
                  <div className='items shadow'>
                       <div className='img'> 
                          <img src={val.cover} alt="" />
                       </div>
                       <div className='text'>
                        <h4 className='name'>{val.name}</h4>
                        <p className='position'>{val.work}</p>
                       </div>
                  </div>
              )
          })
         }
      </div>
  </div>
  )
}

export default Sales_Marketing
