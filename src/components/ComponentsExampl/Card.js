import React from "react";
import "./Card.css"

function Card(props){
    let {img,text}=props;

    return (
        <div className="Card">
            <h2>{text}</h2>
            <img src={img}/>
        </div>
    );
}

export default Card;
