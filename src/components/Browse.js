import React, { useEffect } from 'react'
import Header from './Header'
import { API_KEY, API_OPTIONS } from '../utils/constants';
import axios from 'axios';

const Browse = () => {

  const getNowPlayingMovies=async()=>{
    
const url = `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${API_KEY}`;

const data=await axios.get(url)


  }
  useEffect(() => {
    getNowPlayingMovies()
  
    return () => {
    
    }
  }, [])
  



  return (
    <div>
     <Header/>
    </div>
  )
}

export default Browse
