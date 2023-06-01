import React, { useContext } from "react"
import logoSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/images.jpg'
import handSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/hand.jpg'
import  "./Header.scss"
import { AllTasks } from "../../hooks/hooks";



function Header(){

    const [taskMainAll] = React.useContext(AllTasks)

    
    return(
        <div className="container">
        <div className="header">
        <div className='headerDiskr'>
        <div className="header__logo">
            <img width="45" src= {logoSvg} alt="boy" /></div>
            <div className="logoDiskr">
              <div className='logoDiskrImg'>Hi Shobhit <div className="logoHand"><img src= {handSvg} alt="hand"/></div></div>
             <p> {taskMainAll.length} tasks pending</p>
            </div></div>
            <div className='headerTitle'><h1>TaskDO</h1></div>
            <div className='headerLogIn'>Login</div>
        </div>
        </div>
    );
}
export default Header;