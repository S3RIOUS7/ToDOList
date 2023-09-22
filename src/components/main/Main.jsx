import "./main.scss"
import React from "react";
import bagSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/bag.png'
import penSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/pen.png'
import dickSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/dick.png'


import Input from "../input/Input";
import Button from "../button/Button";


import { useSelector, useDispatch } from 'react-redux';
import {  toggleTask, delTask, saveNewTask, setValue, setSelectedItem, setEditTitle } from '../../redux/actions';


function Main() {
  // Используем useSelector для получения состояния из Redux
  const value = useSelector((state) => state.value);
  const selectedItem = useSelector((state) => state.selectedItem);
  const editTitle = useSelector((state) => state.editTitle);
  const taskMainAll = useSelector((state) => state.taskMainAll);

  const dispatch = useDispatch();

  const getValueInput = (event) => {
    dispatch(setValue(event.target.value));
  };

  const handleAddTask = () => {
    if (value !== '') {
      dispatch({ type: 'NEW_ADD_TASK', payload: { text: value } });
      dispatch(setValue(''));
    }
  };

  const checkBoxOn = (id) => {
    dispatch(toggleTask(id)); // Используем dispatch для переключения флага задачи
  };

  const handleDelTask = (id) => {
    dispatch(delTask(id)); // Используем dispatch для удаления задачи
  };

  const handleEditTask = (id, text) => {
    dispatch(setSelectedItem(id));
    dispatch(setEditTitle(text));
  };

  const handleChangeTitle = (event) => {
    dispatch(setEditTitle(event.target.value));
  };

  const handleSaveNewTask = (id) => {
    dispatch(saveNewTask(id, editTitle)); // Используем dispatch для сохранения отредактированной задачи
    dispatch(setSelectedItem(''));
  };

  return (
    <div className="main">
      <div className="mainButtonAdd">
        <button onClick={handleAddTask}>
          <Button />
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


