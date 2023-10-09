import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState(''); 
  const [isSearching, setIsSearching] = useState(false); 

 
  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

   
    setIsSearching(!!text);
  };


  const handleCancelClick = () => {
    setSearchText('');
    setIsSearching(false);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();

   
  };

  return (
    <form className="flex justify-center items-center mx-auto mt-32 w-screen" onSubmit={handleSubmit}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          type="text"
          id="simple-search"
          className="bg-white border text-green-900 text-sm rounded-lg block w-full pl-4 p-2.5"
          value={searchText}
          onChange={handleInputChange}
          required
        />
        {isSearching ? (
          <button
            type="button"
            onClick={handleCancelClick}
            className="absolute inset-y-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Cancel</span>
          </button>
        ) : (
          <button
            type="submit"
            className="absolute inset-y-0 right-0 p-2.5 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
