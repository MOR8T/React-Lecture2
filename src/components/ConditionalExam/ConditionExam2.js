import React, { useState } from "react";
import './ConditionExam.css';

function ConditionExam2(props){
    let [showMode,setShowMode]=useState(false);
    function handlerClick(){
        setShowMode(!showMode);
    }
    let content = null;
    if(showMode){
        content = <h1>Hello World</h1>
    }
    return (
        <div className="ConE-2">
            <button onClick={handlerClick}>onClick</button>
            {content}
        </div>
    )
}

export default ConditionExam2;
