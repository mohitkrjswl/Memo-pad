import React from 'react'
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-semibold text-black py-2'>Memo-Pad
      </h2>

      <PortfoiloInfo />
    </div>
  )
}

export default Navbar