import React from 'react'
import { NavLink } from 'react-router-dom';

const SingleMovie = ({movieItem}) => {

    const {Poster,Type , imdbID , Year , Title} = movieItem;
  return (
    <div className='border p-2 shadow-sm'>
      <div>
        <img
          className='w-60 h-80 object-cover rounded-sm' 
          src={Poster}
          alt="Movie-Poster"/></div>
      <div>
        <h1 
          className='text-2xl font-medium w-60 h-30'
        >{Title}</h1>
        <p className=' font-medium'>Year Released: {Year}</p> 
        <NavLink to={`/movielist/details/${imdbID}`}>
         <button className=' rounded-sm border px-2 py-1 my-2 mx-1 text-sm hover:bg-slate-950 hover:text-white'>More Details</button>
        </NavLink>
      </div>
    </div>
  )
}

export default SingleMovie;
