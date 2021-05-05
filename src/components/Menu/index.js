import React from 'react';
import './style.css'
function Menu () {
    return (
            <nav >
                
        <ul>
            <li><a href="googe.com">link1</a></li>
            <li><a href="googe.com">link2</a>
            <ul>
                <li><a href="googe.com">link adentro</a></li>
                <li><a href="googe.com">link afuera</a></li>
            </ul>
            </li>
            <li><a href="googe.com">link 3</a></li>
            <li><a href="googe.com">link4</a></li>
        </ul>
    </nav>
    )

    
};

export default Menu;