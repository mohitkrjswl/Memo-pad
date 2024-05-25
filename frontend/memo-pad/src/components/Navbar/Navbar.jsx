import React, { useState } from 'react'
import PortfolioInfo from '../Cards/PortfolioInfo';
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';


const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login")
  };

  const handleSearch = () => {
    if (searchQuerry) {
      onSearchNote(searchQuerry)
    }
  };

  const onClearSearch = () => {
    setSearchQuerry("");
    handleClearSearch();
  }

  return (
    <div className='bg-slate-900 flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to bg-purple-700 py-2'>Memo-Pad </h2>
      <SearchBar
        value={searchQuerry}
        onChange={({ target }) => {
          setSearchQuerry(target.value)
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch} />

      <PortfolioInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
