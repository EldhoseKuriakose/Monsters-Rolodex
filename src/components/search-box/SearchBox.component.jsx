import React from 'react';
import './SearchBox.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder='search monsters'
        onChange={handleChange} 
    />
);