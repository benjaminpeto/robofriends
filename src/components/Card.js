import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="tc grow near-black bg-light-blue dib br3 pa3 ma2 bw2 shadow-5">
            <img alt='profile' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;