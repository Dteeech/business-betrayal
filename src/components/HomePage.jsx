import React, { useState, useEffect } from 'react';
import PlayerInput from './PlayerInput';
import ChooseDifficulty from './ChooseDifficulty';
import '../index.css';
import '../App.css';

const HomePage = () => {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const localStorageKey = 'Liste des joueurs';
    const localStorageCount = 'compteur de tours';

    const handleAddPlayer = (playerName) => {
        if (players.length < 20) {
            const updatedPlayers = [...players, playerName];
            setPlayers(updatedPlayers);
            setSelectedPlayer(null);
            localStorage.setItem(localStorageKey, JSON.stringify(updatedPlayers));
        }
    };

    useEffect(() => {
        const storedPlayers = localStorage.getItem(localStorageKey);
        if (storedPlayers) {
            setPlayers(JSON.parse(storedPlayers));
        }
    }, []);

    useEffect(() => {
        const storedCount = localStorage.getItem(localStorageCount);
        if (storedCount) {
            setCount(JSON.parse(storedCount));
        }
    }, []);


    const handleResetLocalStorage = () => {
        localStorage.removeItem(localStorageKey);
        setPlayers([]);
    };

    const handleEditPlayer = (index) => {
        setSelectedPlayer(index);
    };

    const handleDeletePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
        setSelectedPlayer(null);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedPlayers));
    };

    const handleUpdatePlayer = (newName) => {
        const updatedPlayers = [...players];
        updatedPlayers[selectedPlayer] = newName;
        setPlayers(updatedPlayers);
        setSelectedPlayer(null);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedPlayers));
    };

    const handleCountRounds = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(localStorageCount, JSON.stringify(newCount));
    };

    return (
        <>
            <h1>Business Betrayal</h1>
            <ChooseDifficulty />
            <div className="card">
                <button onClick={handleCountRounds}>
                    Nombre de tours {count}
                </button>
                <h2>Welcome to our app.</h2>
                <p>
                    Our addon aims to optimize the role of the game master by automating certain tasks and
                </p>
                <p>providing a central platform to manage the game's progression.</p>
            </div>
            <PlayerInput onAddPlayer={handleAddPlayer} />
            <h2>Liste des Joueurs :</h2>
            <ul className="playersList">
                {players.map((player, index) => (
                    <li className="playerItem card" key={index}>
                        {selectedPlayer === index ? (
                            <>
                                <input
                                    type="text"
                                    value={players[selectedPlayer]}
                                    onChange={(e) => {
                                        const newPlayers = [...players];
                                        newPlayers[selectedPlayer] = e.target.value;
                                        setPlayers(newPlayers);
                                    }}
                                />
                                <button className='ValidatePlayerbtn' onClick={() => handleUpdatePlayer(players[selectedPlayer])}>
                                    {players[selectedPlayer] === '' ? 'Modifier' : 'Valider'}
                                </button>
                            </>
                        ) : (
                            <>
                                {player}
                                <button className='UpdatePlayerbtn' onClick={() => handleEditPlayer(index)}>Modifier</button>
                                <button className='DeletePlayerbtn' onClick={() => handleDeletePlayer(index)}>
                                    <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                                        <path fill="white" transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                    </svg>
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <h2>Recommencer la partie</h2>
            <button className="btn-class-name" onClick={handleResetLocalStorage}>
                <span className="back"></span>
                <span className="front"></span>
            </button>
        </>
    );
};

export default HomePage;
