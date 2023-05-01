import React from 'react'
import './header.css';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Divider } from '@mui/material';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import { useNavigate } from "react-router-dom";


const Header = () => {
  let navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/");
  }

  return (
    <div className='max-width header'>

      <img
        className='header-logo'
        src="/frunch.png"
        alt='Frunch-Logo'
        onClick={() => NavigateHome()}
      />

      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <RoomRoundedIcon className='absolute-center location-icon' />
              <div>Bangalore</div>
            </div>
            <ArrowDropDownRoundedIcon fontSize={'large'} className='absolute-center' />
          </div>
          <Divider orientation="vertical" flexItem />
          <div className='header-search-bar'>
            <SearchRoundedIcon className='absolute-center search-icon' />
            <input
              placeholder='Search for Restaurant, Cuisine or Dish'
              className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <InsertEmoticonRoundedIcon className='header-profile-image' />
          {/* <img src="/images/profilepic.jpg"
            alt='Profile'
            className='header-profile-image'
          /> */}
          <span className='header-username'>Jomon</span>
          <KeyboardArrowDownRoundedIcon className='absolute-center profile-options-icon' />
        </div>
      </div>
    </div>
  )
}

export default Header