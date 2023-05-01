import axios from "axios";
import { useEffect, useState } from "react";
import MoviesListCard from "../components/MoviesListCard";
import { useNavigate } from "react-router-dom";
import "./pages.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNo, setPageNo] = useState(1);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const res =
      await axios.get(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${query}&order_by=fav
    orites&sort=desc`);
    setSearchedMovie(res.data);
  }

  async function handlePageNo() {
    console.log(query);
    const res =
      await axios.get(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${query}&order_by=fav
    orites&sort=desc`);
    setSearchedMovie(res.data);
  }
  async function handleChange(qry) {
    const res =
      await axios.get(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${qry}&order_by=fav
    orites&sort=desc`);
    setSearchedMovie(res.data);
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=&order_by=favorites&sort=desc`
      );
      setMovies(res.data);
    };
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleChange(query);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query, pageNo]);

  return (
    <>
      <div className="homelink">
        <h1
          onClick={() => {
            navigate("/");
            setQuery("");
          }}
        >
          home
        </h1>
      </div>
      <div className="header"><p>Search Anime Character</p></div>
      <form className="formDiv" onSubmit={handleSubmit}>
        <input
          style={{ padding: "10px 20px" }}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Anime..."
        />
        <button style={{ padding: "10px 20px" }} type="submit">
          Search
        </button>
      </form>
      {query.length === 0 ? (
          <div className="cardsDiv">
            {movies?.data?.map((movie, i) => {
              return (
                <MoviesListCard
                  id={movie.mal_id}
                  key={movie.mal_id}
                  title={movie.name}
                  nicknames ={movie.nicknames}
                  favorites={movie.favorites}
                  image={movie.images?.jpg?.image_url}
                  url={movie.url}
                />
              );
            })}
          </div>
        
      ) : (
        <div className="cardsDiv">
          {searchedMovie?.data?.length !== 0 ? (
            searchedMovie?.data?.map((movie, i) => {
              return (
                <MoviesListCard
                id={movie.mal_id}
                key={movie.mal_id}
                title={movie.name}
                nicknames ={movie.nicknames}
                favorites={movie.favorites}
                image={movie.images?.jpg?.image_url}
                url={movie.url}
              />
              );
            })
          ) : (
            <h1>Sorry No data found!!</h1>
          )}
        </div>
      )}
      <div className="pageButonDiv">
        <button
          onClick={() => {
            if (pageNo > 1) {
              setPageNo(pageNo - 1);
              handlePageNo();
            }
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            setPageNo(pageNo + 1);
            handlePageNo();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
