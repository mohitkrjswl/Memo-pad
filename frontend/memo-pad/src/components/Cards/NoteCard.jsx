import React from 'react'
import moment from 'moment'
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className='note-card'>
      <div className="flex items-center justify-between">
        <div>
          <h6 className='text-sm font-medium'>{title}</h6>
          <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
        </div>
        <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-400'}`} onClick={onPinNote} />
      </div>
      <p className='text-xs text-slate-600 mt-2'>{content.slice(0, 60)}</p>
      <div className='flex items-center justify-between mt-2'>
        <div className='text-xs text-slate-500'>{tags.map((item) => `#${item}`)}</div>
        <div className='flex items-center gap-2'>
          <MdCreate className='icon-btn hover:text-sky-500' onClick={onEdit} />
          <MdDelete className='icon-btn hover:text-black' onClick={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default NoteCard;
