import React from 'react'
import './dashboard.css'
import EventsLists from './EventsLists'

function Dashboard() {
  return (
    <div className='admin-dashboard'>
      <div className='header-title'>
        Dashboard
      </div>
      <div className='events-section'>
        <div className='left-section'>
          <span className='section-title'>Events</span>
          <div className='section-body'>
            <EventsLists />
            <EventsLists />
            <EventsLists />
            <EventsLists />
          </div>
        </div>
        <div className='right-section'>
          <span className='section-title'>Membership</span>
          <div className='section-body'>

          </div>
        </div>
      </div>
      <div className='membership-section'>
        <span className='section-title'>Membership Categories</span>
        <div className='section-container'>
          <div className='section-body'>

          </div>
          <div className='section-body'>

          </div>
          <div className='section-body'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard