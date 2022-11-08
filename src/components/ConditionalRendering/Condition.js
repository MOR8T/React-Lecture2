import React from "react";
import ConditionExam from "../ConditionalExam/ConditionExam";
import "./Condition.css";
import img1 from "../img/js10.jpg";
import img2 from "../img/js11.jpg";
import ConditionExam2 from "../ConditionalExam/ConditionExam2";

function Condition(){
    return (
        <div className="Condition">
            <div className="con-1">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="con-2">
                <img src={img1}/>
                <ConditionExam/>
                <img src={img2}/>
                <ConditionExam2/>
            </div>
        </div>
    )
}
export default Condition;