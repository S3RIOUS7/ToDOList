import "./main.scss"
import React, { useState } from "react";




function Main () {
    const [] = useState();


    const onClickButtonMenu = () => {
       
    }
    

    return(
        <div className="main">
            <div className="mainButtonAdd">
            <button className="button" onClick={onClickButtonMenu}> <p>+</p> </button>
            <button className="button--Add">Add New Task</button></div>
            
        </div>
    );


}

export default Main;