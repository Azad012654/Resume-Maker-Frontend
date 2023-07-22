import React from 'react'
import './Header.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Header = () => {
  return (
    <div className='main-header'>
      <div className='caption'>
        <h2>My First Resume</h2>
      </div>
      
        <ul className='list-items'>
          <a href='#'>Resume</a>
          <a href='#'>Bio-Data</a>
          <a href='#'>Cover Letter</a>
        </ul>
        <div className='settings'>
          <SettingsOutlinedIcon />
        </div>
      </div>
    
  )
}

export default Header