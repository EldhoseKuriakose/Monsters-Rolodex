import React from 'react';
import './SearchBox.styles.css';

export const SearchBox = ({ onSearchChange }) => (
    <input
        className='search'
        type='search'
        placeholder='Search monsters'
        onChange={onSearchChange} 
    />
);