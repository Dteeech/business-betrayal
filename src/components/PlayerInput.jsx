import React, { useState } from 'react';
import addPlayerPng from '../assets/icon-add-player.png';
const PlayerInput = ({ onAddPlayer }) => {

    const [playerName, setPlayerName] = useState(['']);
    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleAddPlayer = () => {
        if (playerName.trim() !== '') {
            onAddPlayer(playerName);
            setPlayerName('');
        }

    };



    return (
        <div className='container'>
            <div>
                <input placeholder='Ajoutez un nom' className='input' type="text" value={playerName} onChange={handleInputChange} />
            </div>
            <div className='addPlayerbtn_container'>



                <button type="button" class="button" onClick={handleAddPlayer}>
                    <span class="button__text"> Add name</span>
                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button>
            </div>
        </div>
    );
};
export default PlayerInput;
