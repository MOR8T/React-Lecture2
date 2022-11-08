import { render } from "@testing-library/react";
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

// class Card extends React.Component {
//     render(){
//         return (
//             <div className="Card">
//                 <h1>Component</h1>
//             </div>
//         );
//     }
// }

export default Card;