import React from 'react'
import './Users.css'
import userBanner from '../../../assets/admin-images/user-banner.png'
import UserList from './UserList'
import arrowDown from '../../../assets/admin-images/arrow-down.png'

function Users() {
  return (
    <div className='admin-users'>
      <div className='header-title'>
        Users
      </div>
      <div className='add-user-banner'>
        <img src={userBanner} className="add-user-banner-img" />
        <div className='add-user-banner-content'>
          <span className='add-user-banner-title'>Add New Users</span>
          <div className='file-upload'>
            <input type="file" style={{ display: 'none' }} />
            <span className='file-upload-placeholder'>Upload csv file of user</span>
            <span className='file-upload-btn'>Upload</span>
          </div>
        </div>
      </div>
      <div className='manage-users-section'>
        <div className='manage-title'>Manage All Users</div>
        <div className='list-users-title'>
          List of csv Files of users
        </div>
        <div className='user-list-container'>
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
        </div>
        <div className='view-more-btn-container'>
        <span className='view-more-btn'>View More <img src={arrowDown} style={{ transform: 'rotate(-90deg)', marginLeft: 5 }} /></span>
        </div>
      </div>
    </div>
  )
}

export default Users