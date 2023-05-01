import { useNavigate } from 'react-router-dom';

import "./SingleMovieCard.css"

export default function SingleMovieCard({title,image,description}){
    const navigate=useNavigate()
    return(
    <div className={`movie-detail-page`}>
        <div className="homelink"><h1 onClick={()=>navigate("/")}>home</h1></div>
      <div className="movie-header">
        <h1>{title}</h1>
      </div>
      <div className="movie-poster">
        <img src={image} alt="Movie Poster" />
      </div>
      <div className="movie-description">
        <p>
          {description}
        </p>
      </div>
    </div>
    )
}