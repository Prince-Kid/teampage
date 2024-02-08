import React from 'react'
import {leadership} from "../data.js"
import "./team.css"
const Leadership_ManagementTeam = () => {
  return (
    <div className='team'>
      <h1>Leadership Management Team</h1>
        <div className='container grid4'>
           {
            leadership.map((val)=>{
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

export default Leadership_ManagementTeam
