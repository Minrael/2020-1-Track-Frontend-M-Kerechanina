import React from 'react';
//import { Router, Link} from 'react-router-dom';
import styles from '../../styles/Header.css';
import back_arrow from '../../static/left-arrow-key.svg';
import search from '../../static/search.svg';
import more from '../../static/more.svg';
import HeaderButton from './HeaderButton';
import Avatar from './Avatar';

//TODO:Исправить ошибку, которая возникает при запуске теста HeaderButton.test.js, если оставить этот код
/*const BackButton = () => {
    return (
        <Router>
        <Link to='/user/signin'>
            <HeaderButton name = 'back-button' src = { back_arrow }/>
        </Link>
        </Router>
    )
}*/

const UserInfo = () => {
    return(
    <div className='user-info'>
        <Avatar/>
        <div className = 'name' styles = {styles}>
            <div className = 'user-name'>Дженнифер</div>
            <div className = 'last-visit'>была 2 часа назад</div>
        </div>
    </div>
    )
}

export default function Header() {
    return (
        <div className='header'>
            <HeaderButton name = 'back-button' src = { back_arrow }/>
            <UserInfo/>
            <HeaderButton name = 'search-button' src = { search }/>
            <HeaderButton name = 'more-button' src = { more }/>
        </div>
        )
}