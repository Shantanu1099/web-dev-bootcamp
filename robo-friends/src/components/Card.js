import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div 
        className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src = 
            { `https://robohash.org/${id}?200x200` } alt ="Robo-Images"/>
            <div>
                <h2>{ name }</h2>
                <h4>{ email }</h4>
            </div>
        </div>
    );
}

export default Card;