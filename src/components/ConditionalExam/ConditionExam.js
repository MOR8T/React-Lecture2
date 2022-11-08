import React from "react";
import './ConditionExam.css';

function ConditionExam(props){
    let trueOrFalse = Math.random() > Math.random();

    return (
        <div className="ConE">
            {trueOrFalse ? <h1>true</h1> : <h1>false</h1>}
        </div>
    )
}

export default ConditionExam;
