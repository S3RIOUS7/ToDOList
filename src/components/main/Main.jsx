import "./main.scss"
import React, { useState } from "react";

import Input from "../input/Input";
import Button from "../button/Button";



function Main () {
    const [taskMainAll, setTaskMainAll] = useState([]);
    const [value, setValue] = useState('');

    const addTask = () => {
        setTaskMainAll([...taskMainAll, value])
    }
    

    
    console.log(taskMainAll)
    return(
        <div className="main">
            <button className="mainButtonAdd" onClick={() => addTask()}><Button /></button>
            <Input value={value} setValue={setValue}/>
            {taskMainAll && taskMainAll.map((item, i) => <div key={i}>{item}</div>)}
        </div>
    );


}

export default Main;