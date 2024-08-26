import React,{useState} from 'react'
import '../../styles/index.css'
import { useDispatch } from 'react-redux';
import { addBooks } from './BookSlice';
import {useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
      e.preventDefault();
      setTitle('');
      setAuthor('');
      const book = {id:uuidv4(),title,author}
      dispatch(addBooks(book));
      navigate('/show-book',{replace:true})
  }
  return (
    <div className='add-book'>
      <h1>Add Book</h1>
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
          <button type='submit'>Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook