import { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search functionality here
    console.log(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search here ..."
        value={searchValue}
        onChange={handleChange}
        className="px-2 py-1 rounded-md text-slate-700 font-sans"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default Search;