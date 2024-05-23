import React from 'react'
import { HAMBURGER_ICON, LOGO, USER_ICON } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { ToggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(ToggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow lg'>
      <div className='flex col-span-1 m-2'>
        <img onClick={() => toggleMenuHandler()} className='h-6 cursor-pointer' alt='slidebar' src={HAMBURGER_ICON}/>
        <a href='/'>
        <img className='h-6 ml-8'alt='logo' src={LOGO} />
        </a>
        </div>
        <div className='col-span-10 text-center '>
        <input  className='w-1/2 p-2 border border-gray-400 rounded-l-full ' placeholder='type something you awnt to see'></input>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>
          Search
        </button>
        </div>
        <div className='col-span-1'>
        <img className='h-8 ' alt='user' src={USER_ICON}/>
        </div>
    </div> 
  )
};

export default Header;