import './Header.css';
import {NavLink} from "react-router-dom";
import React from "react";
function Header (){

        return (
            <div className="Header">
                <header className="Header-header">
                    <img className={"logo"} src={"./img/to-do-list.jpg"} alt="Logo To Do liste"/>
                    <nav className={"header-nav"}>
                        <ul className={"nav-ul"}>
                            <li>
                                <NavLink activeClassName="active" to={"/"}>Liste</NavLink>
                            </li>


                        </ul>
                    </nav>
                </header>
            </div>
        );
}
export default Header;

