import React from 'react';
import MainItem from './MainItem';
import './style.css';

const items = [
    {
        imageSrc: 'images/Helmet.png',
        title: 'Шлем',
        description: 'Шлем увеличивает показатель защиты, уклонения и снижения урона, получаемого персонажем.',
    },
    {
        imageSrc: 'images/Armor.png',
        title: 'Броня',
        description: 'Броня сильно увеличивает показатель защиты.',
    },
    {
        imageSrc: 'images/Gloves.png',
        title: 'Перчатки',
        description: 'Перчатки слегка увеличивают показатель защиты и сильно - точность атак персонажа.',
    },
    {
        imageSrc: 'images/Boots.png',
        title: 'Обувь',
        description: 'Обувь слегка увеличивает показатель защиты и сильно - уклонение от атак врага.',
    },
    {
        imageSrc: 'images/Kaiv.png',
        title: 'Основное оружие',
        description: 'Основное оружие используется в наследной стойке персонажа и доступно с начала игры.',
    },
    {
        imageSrc: 'images/kibelius.png',
        title: 'Пробуждённое оружие',
        description: 'Пробуждённое оружие используется в соответствующей стойке и доступно после выполнения цепочки заданий.',
    },
];

const Main = () => (
    <div className="main">
        {items.map((item, index) => (
            <MainItem
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
            />
        ))}
    </div>
);

export default Main;