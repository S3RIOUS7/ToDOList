import "./main.scss"
import React, { useState } from "react";

import Input from "../input/Input";



function Main () {
    const [taskMainAll, setTaskMainAll] = useState([]);
    const [value, setValue] = useState('');

    const addTask = () => {
        setTaskMainAll([...taskMainAll, value])

        return(
            console.log( addTask )
        )

    }
    
    console.log(taskMainAll)
    return(
        <div className="main">
            <div className="mainButtonAdd">
            <button className="button" onClick={() => addTask()}> <div>+</div> 
            <button className="button--Add">Add New Task</button></button></div>
            <Input value={value} setValue={setValue}/>
        </div>
    );


}

export default Main;