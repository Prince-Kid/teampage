import React from 'react'
import Leadership_ManagementTeam from './Leadership_ManagementTeam';
import Development_Team from './Development_Team';
import Sales_Marketing from './Sales_Marketing';
import End from './End';

const TeamMember = () => {
  return (
    <div className='members'>

      <Leadership_ManagementTeam/>

      <Development_Team/>
      <Sales_Marketing/>
      <End/>
    </div>
  )
}

export default TeamMember
