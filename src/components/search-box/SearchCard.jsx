import React from 'react';
import './SearchCard.css';

export const SearchCard = ({placeholder, handleChange}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}/>
)