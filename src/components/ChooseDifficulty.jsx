import React from 'react';
import '../ChooseDifficulty.css'
import Frame from '../assets/Frame.png';
import easyButton from '../assets/easy-button.svg';
const ChooseDifficulty = () => {

    return (
        <>
            <div className='difficulty-container'>

                <img className='difficulty-title' src={Frame} style={{ width: '300px' }} />


                <div className='difficulty-container_buttons'>
                    <div id='difficulty-btn_pink'>
                        <button className='difficulty-btn'>
                            Easy
                        </button>

                    </div>
                    <div id='difficulty-btn_green'>
                        <button className='difficulty-btn'>
                            Medium
                        </button>
                    </div>
                    <div id='difficulty-btn_red'>

                        <button className='difficulty-btn'>
                            Hard
                        </button>
                    </div>

                </div >



            </div >

        </>
    )
}

export default ChooseDifficulty;
