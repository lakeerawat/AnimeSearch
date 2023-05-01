import './App.css';
import AllRoutes from './pages/AllRoutes';

function App() {
  // const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState([]);
  

  // const genres=["Drama","Science-Fiction","Thriller","Crime","Comedy"];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`${BASE_URL}/shows`);
  //     setMovies(res.data);
  //   };
  //   fetchData();
  // }, []);
  

  // const getMovie = async id => {
  //   const res = await axios.get(`${BASE_URL}/shows/${id}`);
  //   setMovie(res.data);
  // };
 
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
