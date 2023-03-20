import React, { useState } from 'react';
import Teams from './Teams';
import Player from './Player';
import "./Player.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";
import { db } from './index.js'

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
            teams: [],
        }
    }

    async componentDidMount() {
        const players = [];
        const teams = [];

        await getDocs(collection(db, "players"))
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    players.push(doc.data());
                })
            })

        await getDocs(collection(db, "teams"))
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    teams.push(doc.data());
                })
            })
        
        this.setState({
            players: players,
            teams: teams,
        })
    }

    handleClick = async (e) => {
        e.preventDefault();
        const soldFor = document.getElementById('soldFor').value;
        const soldTo = document.getElementById('soldTo').value;
        const playerId = document.getElementById('playerId').value;
        const name = document.getElementById('playerName').value;
        const playerInBid = this.state.players.filter((player)=> player.id == playerId);
        // console.log(playerInBid);
        const status = playerInBid[0].status;

        // console.log(soldFor);
        // console.log(soldTo);
        // console.log(playerId);
        // console.log(status);
        // console.log(name);

        const updatedTeams = this.state.teams;
        const updatedPlayers = this.state.players;

        var flag = false;
        updatedTeams.forEach((team) => {
            if(team.name == soldTo && status == 'Unsold') {
              team.players.push(name);
              team.points = team.points - soldFor;
              flag = true;
            }
        })

        updatedPlayers.forEach((player) => {
          if(player.id == playerId && flag === true) {
            player.team = soldTo;
            player.value = soldFor;
            player.status = 'Sold';
            flag = false;
          }
        })

        this.setState({
          players: updatedPlayers,
          teams: updatedTeams
        })
    }

    render() {
        const {players, teams} = this.state;

        return (
            <div className='teams-and-players'>
                <Teams
                    teams={teams} 
                />

                {players.map((player) => {
                    return <Player 
                            id={player.id}
                            name={player.name}
                            team={player.team}
                            value={player.value}
                            status={player.status}
                           />
                })}

                <div className='player-bottom'>
                    <form className="player-input">
                        <input 
                            placeholder="Player ID" 
                            className="input" 
                            id="playerId"
                            type="number"
                        />
                        <input 
                            placeholder="Player name" 
                            className="input" 
                            id="playerName"
                            type="text"
                        />
                        <input 
                            placeholder="Sold For" 
                            className="input" 
                            id="soldFor"
                            type="number"
                        />
                        <input 
                            placeholder="Sold To" 
                            type="text" 
                            className="input" 
                            id="soldTo"
                        />
                        <button className="submit-button" type='submit' onClick={this.handleClick}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Players;