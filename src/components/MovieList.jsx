import { useEffect , useState  } from "react";
import SingleMovie from "./SingleMovie";
import "../App.css"

function MovieList() {

  const [searchInput , setSearchInput] = useState('');
  const [allMovieList , setAllMovieList] = useState([]);
  const [noMovieList , setNoMovieList] = useState(false);

  const handelInput = (event) =>{
    setSearchInput(event.target.value);
    if(event.target.value ==''){
      setAllMovieList([]);
      setSearchInput('')
    }
  }

  const fetchAllMovie = (searcht) => {
    const searchurl = `https://www.omdbapi.com/?s=${searcht}&page=2&apikey=e98286fa`

    localStorage.setItem("searchItem", searcht);

    fetch(searchurl).then(response => response.json()).then(result => {
        if (result.Error) {
            setAllMovieList([])
            setNoMovieList(true)
        }
        else {
            setAllMovieList(result.Search)
            setNoMovieList(false)
        }
    })
  }
  useEffect(() => {
    let term = localStorage.getItem("searchItem");
    if (term) {
      fetchAllMovie(term)
    }
}, [])

console.log(allMovieList);


  return (
    <div className="">
    <div className="text-center mt-24">
      <h1 className=" text-3xl mt-6 space-x-16">Mirchi Movies</h1>
      <p className="text-xl mt-2 text-gray-500" >Your Place To Chill!</p>
    <div className="">
      <div className="">
        <input type="text" 
         placeholder="Enter Movie Name  ex-Hello"
         className=" Search-Bar outline outline-2 outline-slate-400 w-1/3 mt-4 p-1 px-4 rounded-sm"
         onChange={handelInput}/>
      </div>
      <button
        className="Search-button mt-6 px-2 py-[3px] rounded-sm bg-blue-400 text-white" 
        onClick={fetchAllMovie(searchInput)}>Search</button>
      </div>
    </div>
      <div className=' flex flex-wrap md:m-4 lg:m-10 gap-8 mt-10 justify-center'>
        {
          allMovieList.map((movieItem)=>{
           return(<div>
              <SingleMovie movieItem={movieItem} key={movieItem.imdbID}/>
            </div>
          )})
        }
    </div>
    </div>
  )
}

export default MovieList
