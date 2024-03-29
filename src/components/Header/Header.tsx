import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'


export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logout: () => void
}


const Header: React.FC<MapPropsType & DispatchPropsType> = ({isAuth, login, logout}) => {
  return (
    <header className={style.header}>
      <img src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0' alt='img'></img>
      <div className={style.login}>
        {isAuth ? <div>{login} - <button className={style.button} onClick={logout}>Log out</button></div>
        : <NavLink to='/login'>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;