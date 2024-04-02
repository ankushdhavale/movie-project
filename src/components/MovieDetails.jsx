import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const params = useParams();
    console.log(params.id);

    const [movieDetails , setMovieDetails] = useState({});

    const fetchMovieDetails = (id) => {
        const movieDetailsUrl = `https://www.omdbapi.com/?i=${id}&apikey=e98286fa`;
        fetch(movieDetailsUrl).then((res)=> res.json()).then((data)=>{
            setMovieDetails(data)
        }) 
    }

    useEffect(()=>{
        const imdbId = params.id;
        fetchMovieDetails(imdbId)
    },[])

    console.log(movieDetails);
    const {Poster,Type , imdbID , Plot , Year , Title ,Released ,Genre , Writer , Actors , Director , Language
        } = movieDetails;
  return (
    <div className='text-center'>
        <div className='flex justify-center mt-20'>
            <img 
                className='w-60 h-80'
                src={Poster} alt="Poster-Image" />
        </div>
        <div className='text-center px-10 my-4'>
            <h1 className='text-xl font-semibold'>{Title}</h1>
            <p  className='md:mx-5 lg:mx-20 my-4 text-sm font-bold'>{Plot}</p>
        </div>
        <div className='flex justify-center'>
        <table>
            <tbody>
                <tr className=''>
                    <th scope="row">Year Released:</th>
                    <td>{Released}</td>
                </tr>
                <tr>
                    <th scope="row">Genre:</th>
                    <td>{Genre}</td>
                </tr>
                <tr>
                    <th scope="row">Director:</th>
                    <td>{Director}</td>
                </tr>
                <tr>
                    <th scope="row">Writer:</th>
                    <td>{Writer}</td>
                </tr>
                <tr>
                    <th scope="row">Actors:</th>
                    <td>{Actors}</td>
                </tr>
                <tr>
                    <th scope="row">Language:</th>
                    <td>{Language}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default MovieDetails
