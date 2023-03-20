import React, { useState } from 'react';
import Teams from './Teams';
import "./Player.css"

export default function Player (props) {
    
    const {id, name, team, value, status} = props;

    return (
        <div className='team-and-player'>

            <div className='player'>
                <div className='player-top'>
                    <div className='player-id'>{id}</div>
                    <div className='player-name'>{name}</div>
                    <div className='player-team-id'>{team}</div>
                    <div className='player-value'>{value}</div>
                    <div className='player-status' id='playerStatus'>{status}</div>
                </div>

                {/* <div className='player-bottom'>
                    <form className="player-input">
                        <input 
                            placeholder="Sold For" 
                            className="input" 
                            id="soldfor"
                            type="number"
                        />
                        <input 
                            placeholder="Sold To" 
                            type="number" 
                            className="input" 
                            id="soldto"
                        />
                        <button className="submit-button" type='submit' onClick={handleClick}>
                            Submit
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}