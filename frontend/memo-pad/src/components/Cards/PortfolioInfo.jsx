import React from 'react'
import { getInitials } from '../../utils/helper';
const PortfolioInfo = ({ userInfo, onLogout }) => {
  return (
    userInfo && (
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-blue-100'>{getInitials(userInfo.fullName)}
        </div>
        <div>
          <p className='text-sm font-medium text-slate-200'>{userInfo.fullName}</p>
          <button className='text-sm text-slate-200 underline' onClick={onLogout}>Logout</button>
        </div>
      </div>
    )
  )
}

export default PortfolioInfo;