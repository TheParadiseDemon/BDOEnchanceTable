import React, { useState } from 'react';
import items from './items';

const GuessItemGame = () => {
    const [description, setDescription] = useState('');
    const [userGuess, setUserGuess] = useState('');
    const [message, setMessage] = useState('');

    const getRandomItemDescription = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex].description;
    };

    const startGame = () => {
        const randomDescription = getRandomItemDescription();
        setDescription(randomDescription);
        setMessage('');
        setUserGuess('');
    };

    const handleGuess = () => {
        if (!userGuess.trim()) {
            setMessage('Введите ваш ответ.');
            return;
        }

        const correctItem = items.find(item => item.description === description);

        if (correctItem && userGuess.toLowerCase() === correctItem.name.toLowerCase()) {
            setMessage('Правильно! Вы угадали.');
        } else {
            setMessage('Неправильно. Попробуйте еще раз.');
        }
    };

    return (
        <div>
            <h2>Игра "Угадай персонажа по описанию."</h2>
            <p>{description}</p>
            <input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
            />
            <button onClick={handleGuess}>Проверить</button>
            <button onClick={startGame}>Новое описание</button>
            <p>{message}</p>
        </div>
    );
};

export default GuessItemGame;