import React from 'react';

const SearchBox = ({ searchfield, onSearchChange}) => {
    return (
        <div className='pa2'>
           <input
            className='pa3 b--yellow bg-light-blue near-black'
            type='search'
            placeholder='Search Robots'
            onChange={onSearchChange} /> 
        </div>
    );
}

export default SearchBox;