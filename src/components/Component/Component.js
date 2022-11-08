import React from "react";
import "./Component.css";
import component from "../img/components.jpg";
import img1 from "../img/js1.jpg";
import img2 from "../img/js2.jpg";
import img3 from "../img/js3.jpg";
import img4 from "../img/js4.jpg";

import Card2 from "../ComponentsExampl/Card";

function Component(){
    return (
        <div className="Component">
            <div className="Component-1">
                <h1>Components & props</h1>
                <div className="com-1">
                    <div className="com-1-1">
                        <div className="com-1-1-1">
                            <h2>1</h2>
                        </div>
                        <div className="com-1-1-2">
                            <h2>2</h2>
                        </div>
                        <div className="com-1-1-3">
                            <h2>3</h2>
                        </div>
                        <div className="com-1-1-4">
                            <h2>4</h2>
                        </div>
                    </div>
                    <div className="com-1-2">
                        <div className="com-1-2-1">
                            <h2>1</h2>
                        </div>
                        <div className="com-1-2-2">
                            <div className="com-1-2-2-1">
                                <h2>2</h2>
                            </div>
                            <div className="com-1-2-2-2">
                                <div className="com-1-2-2-2-1">
                                    <div className="com-1-2-2-2-1-1">
                                        <h2>3</h2>
                                    </div>
                                    <div className="com-1-2-2-2-1-1">
                                        <h2>3</h2>
                                    </div>
                                </div>
                                <div className="com-1-2-2-2-2">
                                    <div className="com-1-2-2-2-2-1">
                                        <h2>4</h2>
                                    </div>
                                    <div className="com-1-2-2-2-2-1">
                                        <h2>4</h2>
                                    </div>
                                    <div className="com-1-2-2-2-2-1">
                                        <h2>4</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Component-2">
            <Card2 img={img1} text="Function component"/>
            <Card2 img={img2} text="Class component"/>
            <Card2 img={img3} text="Syntax"/>
            <Card2 img={img4} text="Props"/>
            </div>
        </div>
    )
}
export default Component;