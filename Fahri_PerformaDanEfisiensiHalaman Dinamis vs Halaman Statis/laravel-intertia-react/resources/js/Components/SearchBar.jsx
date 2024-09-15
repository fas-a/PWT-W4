import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

function SearchBar(props) {
  // const navigate = useNavigate();
  // const [isFocused, setIsFocused] = useState(false);

  // const handleSignInClick = () => {
  //   navigate('/login');
  // };

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // useEffect(() => {
  //   if (isFocused) {
  //     navigate('/SearchResultPage');
  //   }
  // }, [isFocused, navigate]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input 
          type="text" 
          value={props.searchTerm}
          onChange={props.handleInputChange}
          placeholder="Search movies, logos..." 
          className="w-full sm:w-96 px-4 py-2 text-gray-700 bg-white rounded sm:rounded-l focus:outline-none"
        />
        <Button text="Search" className="w-full sm:w-auto px-5 py-2 font-semibold bg-custom-blue-light text-dark-text rounded sm:rounded-r"/>
      </div>
      <div className="mt-2 sm:mt-0">
        <Button 
          text="Sign in" 
          className="w-full sm:w-auto bg-dark-hover px-5 py-3 font-semibold text-dark-text rounded"
        />
      </div>
    </>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBar;