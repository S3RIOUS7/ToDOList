import React from 'react'
import "/Projects/reactProjects/my-todo-list/src/components/button/button.scss"

const Button = () => {
  return (
    <div>
      <button className="buttonMain"><div className="button"> + </div>
       <button className="button--Add" >Add New Task</button></button>
    </div>
  )
}

export default Button;