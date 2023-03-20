import React from 'react';
import Team from './Team';

const Teams = (props) => {

    const { teams } = props;
    return (
        <div className='teams'>
            {teams.map((team)=>{
                return <Team 
                        name={team.name}
                        key={team.id}
                        points={team.points}
                        players={team.players}
                        />
            })}
        </div>
    )
}

export default Teams;