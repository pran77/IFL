import React from 'react';
import './index.css';

class Team extends React.Component {

    render() {
        const { name, points, players } = this.props;
        return (
            <div className='team'>
                <div className='team-name'>
                    <div>{name}</div>
                </div>
                <div className='team-points'>
                    <div>{points}</div>
                </div>
                <div className='team-players'>
                    <div>
                        {players.map((player) => {
                            return (
                                <div className="player">{player}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;