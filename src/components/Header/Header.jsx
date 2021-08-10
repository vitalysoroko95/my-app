import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="http://logok.org/wp-content/uploads/2019/09/Dow-Jones-Logo-640x480.png"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login
            </NavLink>}
        </div>
        </header>
    )
}

export default Header;