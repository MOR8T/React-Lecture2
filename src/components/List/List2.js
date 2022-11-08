import React from "react";
import './List2.css';

function List2(props){
    let {img,name}=props;
    return (
        <div id="list2-1">
            <img src={img}/>
            <h1>{name}</h1>
        </div>
    )
}
export default List2;
