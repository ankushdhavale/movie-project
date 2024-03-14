import React from 'react'

const SingleMovie = ({movieItem}) => {

    const {Poster,Type , imdbID , Year , Title} = movieItem;
  return (
    <div className='flex flex-wrap'>
      <div><img src={Poster} alt="Movie-Poster"/></div>
      <div>
        <h1>{Title}</h1>
        <p>Year Released: {Year}</p> 
      </div>
    </div>
  )
}

export default SingleMovie;
