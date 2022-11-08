import React from "react";
import List2 from "../List/List2";
import "./List.css";
import img1 from "../img/js12.jpg";
import img2 from "../img/js13.jpg";
import img3 from "../img/js14.jpg";
import img4 from "../img/js15.jpg";
import img5 from "../img/js16.jpg";
import img6 from "../img/js17.jpg";
import img7 from "../img/js18.jpg";
import foto1 from "../img/foto1.webp";
import foto2 from "../img/foto2.webp";
import foto3 from "../img/foto3.webp";
import Card from "../ComponentsExampl/Card";
let list = [{num:1, id:1},
    {num:2, id:2},
    {num:3, id:3},
    {num:4, id:4},
    {num:5, id:5},
    {num:6, id:6},
    {num:7, id:7},
    {num:8, id:8},
    {num:9, id:9},];

let listCard = [{name:"Shahrom", id:"1",img:foto1},
{name:"Rahim", id:"2",img:foto2},
{name:"Abubacr", id:"3",img:foto3},]
function List(){
    return (
        <div className="List">
            <div className="list-1">
            <h1>List and Key</h1>
            </div>
            <div className="list-2">
                <img className="l-1" src={img1}/>
                <ul className="l-2">
                    {list.map((elem)=>{
                        return(
                            <li key={elem.id}>{elem.num}</li>
                        )
                    })}
                </ul>
                <Card text = 'Key error' img={img2}/>
                <Card text = 'ToSting()' img={img3}/>
                <Card text = 'Index' img={img4}/>
                <Card text = 'ID' img={img5}/>
                <Card text = 'Component' img={img6}/>
                <Card text = 'How write with component?' img={img7}/>
                <div className="list-2-1">
                {
                    listCard.map((elem)=>{
                        return (
                            <List2 name={elem.name} img={elem.img} key={elem.id}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default List;