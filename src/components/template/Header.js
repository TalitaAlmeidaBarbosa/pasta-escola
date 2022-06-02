import './Header.css';
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Header(props){
    return (
        <header className="header">
            <Logo/>
            <Menu/>
        </header>
    )
}