import React from 'react'
import {dev} from "../data.js"
import "./team.css"
const Development_Team = () => {
  return (
    <div className='team'>
    <h1>Development Team</h1>
      <div className='container grid4'>
         {
          dev.map((val)=>{
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

export default Development_Team
