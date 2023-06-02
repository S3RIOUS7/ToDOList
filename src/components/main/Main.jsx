import "./main.scss"
import React, { useState } from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'
import penSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/pen.png'
import dickSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/dick.png'


import Input from "../input/Input";
import Button from "../button/Button";

import {v4 as uuidv4 } from "uuid";
import { AllTasks } from "../../hooks/hooks";

function Main () {

    const [taskMainAll, setTaskMainAll, madeTask] = React.useContext(AllTasks)
    const [value, setValue] = useState(''); //state(хранилище) input, setValue- изменение значения value.
    const [selectedItem, setSelectedItem] = useState(''); // хранилище
    const [editTitle, setEditTitle] = useState('');// хранилище тайтла выбраной таски 
    
    const getValueInput = (event) => {
        setValue(event.target.value); //текст с инпута ложим в свой 'State' setValue (target.value(свойство ивента) target -ссылка на объект)
       //  console.log(event);
    }
    const addTask = () => {
        const task = { 
            text: value,
            checked: false,
            id: uuidv4(), //динамический id
        }
        if (value !== '') { 
            setTaskMainAll([...taskMainAll, task])   
            setValue(''); // сбрасывает стате инпута на пустую строку
            
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
   
    console.log()

   // const madeTask = taskMainAll.filter(md => md.checked !== false)
    
    const delTask = (id) => {
        setTaskMainAll(taskMainAll.filter(obj => obj.id !== id))
       
        };


    const editTask = (id, text) => {  
        setSelectedItem(id);// ложиться в стейт
        setEditTitle(text);// ложиться в стейт

    }
    const changeTitle = (event) => {

        setEditTitle(event.target.value)
    }
    const saveNewTask = (id) => {       
        const changeTaskMainAll = taskMainAll.map((task) => {
            if(task.id === id) {
                return{
                    ...task,
                    text: editTitle,
                }
            }
            return task
        })   
        setTaskMainAll(changeTaskMainAll);
       setSelectedItem('');
    }
    
    return(
        <div className="main">
            <div className="mainButtonAdd"><button  onClick={() => addTask()}><Button />{madeTask.length}</button></div>
            
            <div className="mainButtonAdd"><Input type='text' value={value} onChange={(event) => getValueInput(event)}/> </div> 
            
            {taskMainAll && taskMainAll.map((task, index) => 

            <div key={index}> 
            <div className={task.checked ? 'linethrou goal' : 'goal'} >   
                <button className="mainButtonAdd" onClick={() => delTask(task.id) }><img width="25" src={bagSvg} alt="bag"  /></button>
                <button className="mainButtonAdd" onClick={() => editTask(task.id, task.text)} ><img width="30" src={penSvg} alt="pen" /></button>
                <Input  type='checkbox' checked={task.checked} onChange={() => checkBoxOn(task.id)}/>
                {selectedItem === task.id ? <Input value={editTitle} onChange={(event) => changeTitle(event)}/> : task.text}
                 <button className="mainButtonAdd"  onClick={() => saveNewTask(task.id)} ><img width="28" src={dickSvg} alt="pen" /></button></div>
            </div>)}
        </div>
    );  
}
export default Main;



