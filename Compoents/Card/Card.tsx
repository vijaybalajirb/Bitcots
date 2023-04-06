import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import placeholder from '../../assets/store/placeholder.png'

type CardProps = {
  title?: string;
  imageUrl?: string;
  alt?:string;
  footerText?: string;
  width?: string;
  height?: string;
  navigateTo?:string;
  onClick?:string;
};

const Card = ({
  title,
  imageUrl,
  footerText,
  onClick,
  alt,
  width="150px",
  height="250px",
}: CardProps) => {

  const navigate = useNavigate();
  return (
    <div className="card-main" onClick={() => navigate(`${onClick}`)}>
       <div className="card" style={{width:width,height:height}}>
      <img className="card-img-top" src={imageUrl} alt={alt} />
      <div className='card-text'>{title}</div>
        </div>
        <div className="card-footer">{footerText}</div>
    </div>
   

  );
};

export default Card;
