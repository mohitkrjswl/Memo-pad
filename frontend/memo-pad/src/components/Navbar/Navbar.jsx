import React, { useState } from 'react'
import PortfolioInfo from '../Cards/PortfolioInfo';
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';


const Navbar = ({ userInfo }) => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login")
  };

  const handleSearch = () => {

  };

  const onClearSearch = () => {
    setSearchQuerry("");
  }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-semibold text-black py-2'>Memo-Pad</h2>
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
