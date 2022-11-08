import React from "react";
import "./Handing.css";
import HandingExamp from "../HandingExamp/HandingExamp";
import Card from "../ComponentsExampl/Card";

import img1 from '../img/js5.jpg';
import img2 from '../img/js7.jpg';
import img3 from '../img/js9.jpg';

function Handing(){
    return (
        <div className="Handing">
            <div className="handing-1">
                <h1>Handling Events</h1>
            </div>
            <div className="handing-2">
                <img src={img1}/>
                <button onClick={()=>{alert("Hello")}}>onClick 1</button>
                <img src={img2}/>
                <button onClick={()=>{alert("Hello Shahrom")}}>onClick 2</button>
                <img src={img3}/>
                <HandingExamp name="Shahrom"/>
            </div>
        </div>
    )
}
export default Handing;