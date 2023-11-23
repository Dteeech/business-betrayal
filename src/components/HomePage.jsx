import React, { useState, useEffect } from 'react';
import PlayerInput from './PlayerInput';
import NavBar from './Nav'; // Ajout de l'import du composant NavBar
import ChooseDifficulty from './ChooseDifficulty';
import '../index.css';
import '../App.css';

const HomePage = () => {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const localStorageKey = 'Liste des joueurs';


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

    return (
        <>
            <h1>Business Betrayal</h1>

            <ChooseDifficulty />



            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
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
                                    onChange={(e) =>
                                        setPlayers((updatedPlayers) => {
                                            const newPlayers = [...updatedPlayers];
                                            newPlayers[selectedPlayer] = e.target.value;
                                            return newPlayers;
                                        })
                                    }
                                />
                                <button onClick={() => handleUpdatePlayer(players[selectedPlayer])}>
                                    {players[selectedPlayer] === '' ? 'Modifier' : 'Valider'}
                                </button>
                                <button onClick={() => setSelectedPlayer(null)}>Annuler</button>
                            </>
                        ) : (
                            <>
                                {player}
                                <button onClick={() => handleEditPlayer(index)}>Modifier</button>
                                <button onClick={() => handleDeletePlayer(index)}>X</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <h2>Recommencer la partie</h2>
            <button class="btn-class-name" onClick={handleResetLocalStorage}>

                <span class="back"></span>

                <span class="front"></span>
            </button>

        </>
    );
};

export default HomePage;
