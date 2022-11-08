import React from "react";
import './HandingExamp.css'


class HandingExamp extends React.Component{
    constructor(props){
        super(props)

        this.hadlerClick = this.hadlerClick.bind();
    }
    hadlerClick(){
        alert(`Hello`);
    }
    render(){
        return (
            <button onClick={this.hadlerClick}>onClick 3</button>
        )
    }
}

export default HandingExamp;
