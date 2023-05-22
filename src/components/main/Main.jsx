import "./main.scss"
import React, { useState } from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'

import Input from "../input/Input";
import Button from "../button/Button";

import {v4 as uuidv4 } from "uuid";

function Main () {
    const [taskMainAll, setTaskMainAll] = useState([]); //хранилище тасок.
    const [value, setValue] = useState(''); //хранилище input, setValue- изменение значения value.
   

    const getValueInput = (event) => {
        setValue(event.target.value); //текст с инпута ложим в свой 'State' setValue 
       //  console.log(event);
    }
    

    const addTask = () => {
        const task = {
            text: value,
            checked: false,
            id: uuidv4(),
        }
        if (value !== '') { 
            setTaskMainAll([...taskMainAll, task])   
            setValue(''); 
    }
         // ... spread оператор    
         
         console.log(taskMainAll)
         
    }
    const checkBoxOn = (id) => {
        const changeTaskMainAll = taskMainAll.map((task) => {
            if(task.id === id) {
                return{
                    ...task,
                    checked: !task.checked,
                }
            }
            return task
        })   
        setTaskMainAll(changeTaskMainAll)
        
    }
    

    const delTask = (id) => {
        setTaskMainAll(taskMainAll.filter(obj => obj.id != id))
        };
      
        
    return(
        <div className="main">
            <div className="mainButtonAdd"><button  onClick={() => addTask() } ><Button /></button></div> 
            
            <Input type='text' value={value} onChange={(event) => getValueInput(event)}/>
            
            {taskMainAll && taskMainAll.map((item, index) => 
            <div key={index}> 
            <div className={item.checked ? 'linethrou goal' : 'goal'} >   
                <button className="mainButtonAdd" onClick={() => delTask(item.id) }><img width="25" src={bagSvg} alt="bag"  /></button>
                <Input  type='checkbox' value={item.checked} onClick={() => checkBoxOn(item.id)}/>
                {item.text}</div>
            </div>)}
        </div>
    );  
}
export default Main;