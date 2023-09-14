import "./main.scss"
import React, { useState } from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'
import penSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/pen.png'
import dickSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/dick.png'


import Input from "../input/Input";
import Button from "../button/Button";

import {v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, delTask, editTask, saveNewTask } from '../../redux/actions';
function Main() {
  const [value, setValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [editTitle, setEditTitle] = useState('');

  // Используем useSelector для получения состояния из Redux
  const taskMainAll = useSelector((state) => state.taskMainAll);

  // Используем useDispatch для получения функции dispatch из Redux
  const dispatch = useDispatch();

  const getValueInput = (event) => {
    setValue(event.target.value);
  };

  const handleAddTask = () => {
    const task = {
      text: value,
      checked: false,
      id: uuidv4(),
    };
    if (value !== '') {
      dispatch(addTask(task)); // Используем dispatch для добавления задачи
      setValue('');
    }
  };

  const checkBoxOn = (id) => {
    dispatch(toggleTask(id)); // Используем dispatch для переключения флага задачи
  };

  const handleDelTask = (id) => {
    dispatch(delTask(id)); // Используем dispatch для удаления задачи
  };

  const handleEditTask = (id, text) => {
    setSelectedItem(id);
    setEditTitle(text);
  };

  const handleChangeTitle = (event) => {
    setEditTitle(event.target.value);
  };

  const handleSaveNewTask = (id) => {
    dispatch(saveNewTask(id, editTitle)); // Используем dispatch для сохранения отредактированной задачи
    setSelectedItem('');
  };

  return (
    <div className="main">
      <div className="mainButtonAdd">
        <button onClick={handleAddTask}>
          <Button />{/* Ваш компонент Button */}
        </button>
      </div>

      <div className="mainButtonAdd">
        <Input type='text' value={value} onChange={getValueInput} />
      </div>

      {taskMainAll && taskMainAll.map((task) => (
        <div key={task.id}>
          <div className={task.checked ? 'linethrou goal' : 'goal'}>
            <button className="mainButtonAdd" onClick={() => handleDelTask(task.id)}>
              <img width="25" src={bagSvg} alt="bag" />
            </button>
            <button className="mainButtonAdd" onClick={() => handleEditTask(task.id, task.text)}>
              <img width="30" src={penSvg} alt="pen" />
            </button>
            <Input type='checkbox' checked={task.checked} onChange={() => checkBoxOn(task.id)} />
            {selectedItem === task.id ? (
              <Input value={editTitle} onChange={handleChangeTitle} />
            ) : (
              task.text
            )}
            <button className="mainButtonAdd" onClick={() => handleSaveNewTask(task.id)}>
              <img width="28" src={dickSvg} alt="pen" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;


