import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleMovieCard from "../components/SingleMovieCard";

export default function SingleMoviePage(){
    const {id}=useParams();

    const [movie,setMovie]=useState({})
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`https://api.jikan.moe/v4/characters?q=&order_by=favorites&sort=desc`);
          const result = res?.data?.data?.filter(item => item.mal_id === Number(id));
          setMovie(result[0]);
        };
        fetchData();
      }, [id]);    



    return(
        <div>
            <SingleMovieCard id={movie?.mal_id} title={movie?.name} image={movie?.images?.jpg?.image_url} premiered={movie?.url} description={movie?.about} />
        </div>
    )
}