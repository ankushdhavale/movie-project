import { all } from "axios";
import { useEffect } from "react";
import { useState } from "react";


function App() {

  const [searchInput , setSearchInput] = useState();
  const [allMovieList , setAllMovieList] = useState();
  const [noMovieList , setNoMovieList] = useState(false);

  const handelInput = (event) =>{
    setSearchInput(event.target.value);
  }

  const fetchAllMovie = (searcht) => {
    fetch(`https://www.omdbapi.com/?s=${searcht}&page=2&apikey=e98286fa`)
    .then(res => res.json())
    .then(result => setAllMovieList(result)) 
  }

  useEffect(()=>{
    fetchAllMovie(searchInput);
  },[]);
   const {Title} = allMovieList.Search
  console.log(Title);
  return (
    <>
    <div>
      <input type="text" 
      onChange={handelInput}/>
      <div>
        
      </div>
    </div>
    </>
  )
}

export default App
