import React from 'react'
import TeamMember from './TeamMember'
import "./team.css";
const CompanyTitle = () => {
  return (
    <section className='teampage'>
        <div className='c_title'>
      <h1>Innovation Groups</h1>
      </div>
      <div className='c_descriptions'>
          <p>Meet the brilliant minds powering Innovation Groups—a tight-knit team of tech enthusiasts.<br></br>
             From coding wizards to strategic thinkers, our diverse crew collaborates to bring innovation to life.<br></br>
              Get to know the faces behind our tech solutions, where passion meets expertise.</p>
      </div>
      <h2>Meet Our Team</h2>
      <TeamMember/>
    </section>
  )
}

export default CompanyTitle
