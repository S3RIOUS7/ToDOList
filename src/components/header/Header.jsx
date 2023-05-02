import logoSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/images.jpg'
import handSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/hand.jpg'
import  "./Header.scss"

function Header(){

    return(
        <div className="container">
        <div className="header">
        <div className='headerDiskr'>
        <div className="header__logo">
            <img width="45" src= {logoSvg} alt="boy" /></div>
            <div className="logoDiskr">
              <div className='logoDiskrImg'><h1>Hi Shobhit</h1> <div className="logoHand"><img src= {handSvg} alt="hand"/></div></div>
             <p>{} tasks pending</p>
            </div></div>
            <div className='headerTitle'><h1>TaskDO</h1></div>
            <div className='headerLogIn'><h2>login</h2></div>
        </div>
        </div>
    );
}
export default Header;