import logoSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/images.jpg'
import handSvg from '/Projects/reactProjects/my-todo-list/src/assets/img/hand.jpg'
import  "./Header.scss"

function Header(){

    return(
        <div className="header">
        <div className="container">
        <div className="header__logo">
            <img width="45" src= {logoSvg} alt="boy" />
            <div>
              <h1>Hi Shobhit</h1> <img width="45" src= {handSvg} alt="hand"/>
              <p>tasks pending</p>
            </div>
          </div>
        </div>
        </div>
    );
}
export default Header;