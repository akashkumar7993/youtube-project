import React, { useEffect, useState } from 'react'
import { HAMBURGER_ICON, LOGO, USER_ICON, YOUTUBE_SEARCH_API } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleMenu } from '../utils/appSlice';
import { json } from 'react-router-dom';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggsestions, setShowSuggestions] = useState(false);

const searchCache = useSelector((store) => store.search);

const dispatch = useDispatch();


useEffect(() => {
const timer = setTimeout(() => {
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  } else {
    getSearchSuggestions()
  }
}, 200); 

return () => {
  clearTimeout(timer);
};

},[searchQuery]);

const getSearchSuggestions = async () => {
  console.log("API_CALL MADE - " + searchQuery);
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  // console.log(json[1]);
  setSuggestions(json[1]);

  dispatch (cacheResults({

  }))
}

 
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
        <div>
        <input className='w-1/2 p-2 border border-gray-400 rounded-l-full ' 
        placeholder='type something you awnt to see'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>
          Search
        </button>
        </div>
        {showSuggsestions && (<div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-200'  >
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
            ))}
            </ul>
        </div>
      )}
        </div>
        <div className='col-span-1'>
        <img className='h-8 ' alt='user' src={USER_ICON}/>
        </div>
    </div> 
  )
};

export default Header;