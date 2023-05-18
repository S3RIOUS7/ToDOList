import "./main.scss"
import React, { useState } from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'

import Input from "../input/Input";
import Button from "../button/Button";
import InputCheckbox from "../input/inputCheckbox";



function Main () {
    const [taskMainAll, setTaskMainAll] = useState([]); //хранилище тасок.
    const [value, setValue] = useState(''); //хранилище input, setValue- изменение значения value.

    const addTask = () => {

        if (value !== '') {

            setTaskMainAll([...taskMainAll, value])
            
        }

         // ... spread оператор

    }
    

   
    console.log(taskMainAll)

    
    return(
        <div className="main">
            <div className="mainButtonAdd"><button  onClick={() => addTask()}><Button /></button></div> 
            
            <Input value={value} setValue={setValue} />
            
            {taskMainAll && taskMainAll.map((item, index) => 
            <div key={index}> 
            <div className="goal">
                <img width="25" src={bagSvg} alt="boy" />
            <InputCheckbox value={value} setValue={setValue}  />{item}</div>
            </div>)}
            
        </div>
    );
    
    
}

export default Main;