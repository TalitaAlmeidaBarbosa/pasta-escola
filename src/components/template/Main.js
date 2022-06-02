import './Main.css';
import React from 'react';
import Header from './Header';

export default function Main(props) {
    return (
        <div className="content">
            <h2>{props.title}</h2>
            
            <main>
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}