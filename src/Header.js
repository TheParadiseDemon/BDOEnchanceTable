import React from 'react';
import './style.css';

const Header = () => (
    <div className="header">
        <div className="header-menu">
            <div className="header-menu-item header-menu-item-active">
                Общая информация
            </div>
            <div className="header-menu-item">Шансы заточки предметов</div>
            <div className="header-menu-item">Персонажи</div>
            <div className="header-menu-item">Экипировка</div>
        </div>
        <div className="header-name">
            <p>Black Desert online</p>
        </div>
    </div>
);

export default Header;