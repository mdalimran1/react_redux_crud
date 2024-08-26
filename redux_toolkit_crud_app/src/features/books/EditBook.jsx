import React, { useState } from 'react';
import '../../styles/index.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBook } from './BookSlice';
const EditBook = () => {


  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({id,title,author}))
    navigate('/show-book',{replace:true});
  };



  return (
    <div className='edit add-book'>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" name='title' id='title' value={title} onChange={(e)=>
            setTitle(e.target.value)
          } required/>
        </div>
        <div>
          <label htmlFor="author">Author : </label>
          <input type="text" name='author' id='author' value={author} onChange={(e)=>
            setAuthor(e.target.value)
          } required/>
        </div>
        <div>
        <button type='submit'>Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;


