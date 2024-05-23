import React, { useState } from 'react'
import TagInput from '../../components/inputpassword/TagInput'
import { MdClose } from 'react-icons/md';

const AddNotes = ({ noteData, type, onclose }) => {

  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  // Add note
  const addNewNote = async () => { };

  // Edit note
  const editNote = async () => { };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content")
      return;
    }
    setError("");
    if (type === 'edit') {
      editNote()
    } else
      addNewNote()
  }

  return (

    <div className='relative'>
      <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-blue-100'
        onClick={onclose}>
        <MdClose className='text-xl text-slate-500' />
      </button>

      <div className='flex flex-col gap-2'>
        <label className='input-label'>TITLE</label>
        <input
          type='text'
          className='text-sm text-slate-950 outline-none'
          placeholder='Enter your title'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>CONTENT</label>
        <textarea
          type='text'
          className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-sm'
          placeholder='Content'
          rows={10}
          value={content}
          onChange={({ target }) => setcontent(target.value)}
        />
      </div>
      <div className='mt-3'>
        <label className='input-label'>TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className='text-red-400 text-xs pt-4'>{error}</p>}
      <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>Add</button>
    </div>

  )
}

export default AddNotes;