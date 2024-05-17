import React from 'react'
import { HOME_ICON, LIVE_ICON, SUBSCRITIONS_ICON } from '../utils/Constants';

const Sidebar = () => {
  return (
    <div className='w-44 shadow-lg'>
      <h1 className='flex p-2 font-bold'>
        <img className='mr-3' alt='home' 
        src={HOME_ICON}/>
        Home
      </h1>
      <h1 className='flex p-2 font-bold'>
        <img className='mr-3' alt='home' 
        src={SUBSCRITIONS_ICON}/>
        Subscriptions
      </h1>
      <h1 className='flex p-2 font-bold'>
        <img className='mr-3 w-6' alt='home' 
        src={LIVE_ICON}/>
        Live 
      </h1>   

      <div className='ml-3'>
      <h1 className='font-bold text-xl mt-5'>You  </h1> 
      <ul className='mt-2 p-1'>
      <li>Your Channel</li>  
      <li>History</li>  
      <li>Playlists</li>  
      <li>Your Videos</li>  
      <li>Watch Later</li>  
      <li>liked Videos</li>  
      <li>Your Clips</li>   
      </ul>  
      </div>

      <div className='ml-3'>
      <h1 className='font-bold text-xl mt-5'>Explore</h1> 
      <ul className='mt-2 p-1'>
      <li>trending</li>  
      <li>Shopping</li>  
      <li>Music</li>  
      <li>Movies</li>  
      <li>Live</li>  
      <li>Gaming</li>  
      <li>News</li> 
      <li>Sports</li>   
      <li>Courses</li> 
      <li>Fashion & Beauty</li> 
      <li>podcasts</li> 
      </ul>  
      </div>

    </div>

    
  )
}

export default Sidebar;