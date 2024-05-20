import React from 'react'
import { getInitials } from '../../utils/helper';
const PortfolioInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200'>{getInitials("Mohit Jaiswal")}</div>
      <div>
        <p className='text-sm font-medium'>Mohit Jaiswal</p>
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default PortfolioInfo;