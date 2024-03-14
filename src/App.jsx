import { useEffect , useState  } from "react";
import SingleMovie from "./components/SingleMovie";


function App() {

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
    <>
    <div>
      <input type="text" 
         onChange={handelInput}/>
         <button onClick={fetchAllMovie(searchInput)}>Search</button>
      </div>
      <div className=' flex flex-col'>
        {
          allMovieList.map((movieItem)=>{
           return(<div>
              <SingleMovie movieItem={movieItem} key={movieItem.imdbID}/>
            </div>
          )})
        }
    </div>
    </>
  )
}

export default App
