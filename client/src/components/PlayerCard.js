import React from "react"



export const PlayerCard = ( props ) => {
    return (
        <div className="player-card">
                <h2 className="player">{props.playerName}</h2>
                <p className="country">{props.country}</p>
                <p className="searches">Searches this week: {props.searches}</p>
        </div>
    )
}