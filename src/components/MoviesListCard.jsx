import { useNavigate } from 'react-router-dom';
import './MoviesListCard.css';
import {AiTwotoneHeart} from 'react-icons/ai'
import {FaArrowRight} from 'react-icons/fa'


export default function MoviesListCard({id,image,title,nicknames,favorites,url}){
    const navigate=useNavigate()
          return (<>
    {/* <div className="movie-card">
      <div className="movie-card__img-container">
        <img onClick={()=>navigate(`/${id}`)} className="movie-card__img" src={image} alt={image} />
      </div>
      <div className="movie-card__content">
        <h2 onClick={()=>navigate(`/${id}`)} className="movie-card__title">{title}</h2>
        <p className="movie-card__release-date">Release date: {favorites}</p>
      </div>
    </div> */}
    <div className='cardDiv'>
      <div className='div1'><img src={image} alt={image} /></div>
      <div className='div2'>
        <div className='detailDiv'>
          <div className='nameDiv'>{title}</div>
          <div className='nickNameDiv'>
          {nicknames.length !==0 ?(nicknames.map((item)=><span className='nickNameSpan'>{item}</span>)):null}
          </div>
        </div>
        <div className='likeDiv'><AiTwotoneHeart color='red' fontSize={25}  />{favorites}</div>
      </div>
      <div className='div3'><a href={url}><FaArrowRight /> </a></div>
    </div>
    </>
          );
        };
