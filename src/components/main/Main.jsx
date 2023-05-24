import "./main.scss"
import React, { useState } from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'
import penSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/pen.png'

import Input from "../input/Input";
import Button from "../button/Button";

import {v4 as uuidv4 } from "uuid";

function Main () {
    const [taskMainAll, setTaskMainAll] = useState([]); //хранилище тасок.
    const [value, setValue] = useState(''); //хранилище input, setValue- изменение значения value.
    const [selectedItem, setSelectedItem] = useState('');

    const getValueInput = (event) => {
        setValue(event.target.value); //текст с инпута ложим в свой 'State' setValue (target.value(свойство ивента) target -ссылка на объект)
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
         // ... spread оператор  развернули массив, таск добавили
     
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
        setTaskMainAll(taskMainAll.filter(obj => obj.id !== id))
        };

    const changeTask = (id, text) =>{
        
        setSelectedItem(id);

        console.log(id)
        console.log(text)
    }

    return(
        <div className="main">
            <div className="mainButtonAdd"><button  onClick={() => addTask() } ><Button /></button></div>
            
            <div className="mainButtonAdd"><Input type='text' value={value} onChange={(event) => getValueInput(event)}/> </div> 
            
            {taskMainAll && taskMainAll.map((task, index) => 

            <div key={index}> 
            <div className={task.checked ? 'linethrou goal' : 'goal'} >   
                <button className="mainButtonAdd" onClick={() => delTask(task.id) }><img width="25" src={bagSvg} alt="bag"  /></button>
                <button className="mainButtonAdd" onClick={() => changeTask(task.id, task.text)}><img width="30" src={penSvg} alt="pen" /></button>
                <Input  type='checkbox' checked={task.checked} onChange={() => checkBoxOn(task.id)}/>
                {selectedItem === task.id ? <Input value={task.text}/> : task.text}</div>
            </div>)}
        </div>
    );  
}
export default Main;