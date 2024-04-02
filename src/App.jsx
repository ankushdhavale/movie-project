import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/movielist/details/:id' element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App;