import React from 'react';
import '../styles/Card.css';

function Card({img, title, description, date, time}) {
    return (
        <div className="Card">
            <img src={img} alt="Card" className="img"/>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="date">Time: {date} {time}</div>
            <button className="read_more">Read More</button>
        </div>
    )
}

export default Card;