import React from 'react'
import {Link} from 'react-router-dom';
import styles from '../styles/Header.css'
import back_arrow from '../static/left-arrow-key.svg';
import search from '../static/search.svg';
import more from '../static/more.svg';
import avatar from '../static/american.svg';


/*function HeaderButton(){

}*/

export function BackButton() {
    return (
        <Link to={`${process.env.PUBLIC_URL}/user/signin`}>
          <div className = 'back-arrow'>
            <img alt='back-arrow' src = { back_arrow } />
          </div>
        </Link>
    )
}

export function SearchButton() {
    return(
        <div className = 'search-button'><img alt = 'search-button' src = { search } /></div>
    )
}

export function MoreButton() {
    return(
        <div className = 'more-button'><img alt = 'more-button' src = { more } /></div>
    )
}

export function UserInfo() {
    return(
    <div className='user-info'>
        <div className = 'divAvatar'>
            <img className = 'avatar' alt='avatar' src = { avatar } />
        </div>
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
            <BackButton/>
            <UserInfo/>
            <SearchButton/>
            <MoreButton/>
        </div>
        )
}