import React from 'react';
import './navmenu.scss'


const NavMenu = () => {
    return (
        <div className="navmenu">
            <img
                className="navmenu__image"
                src={require('../../Assets/logo.png')}
                alt="Canopy Logo"
            />
            <h1
                children="|||"
                className="navmenu__rotate-90"
                onClick={() => console.log('future feature: navigate')}
            />
        </div>
    )
}

export default NavMenu