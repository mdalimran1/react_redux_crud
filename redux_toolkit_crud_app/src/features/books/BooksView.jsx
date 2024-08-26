import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/index.css'
import { deleteBooks } from './BookSlice';
import { Link } from 'react-router-dom';


const BooksView = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  const handleDelete =(id)=>{
      dispatch(deleteBooks(id))
  }
  return (
    <div className='show-book'>
      <h1>Lists of Books</h1>
      <table className="styled-table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                {/* <td>{id}</td> */}
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to='/edit-book' state={{ id,title,author }}>
                  <button className="edit-btn"
                  >Edit</button>
                  </Link>
                  <button className="delete-btn"
                  onClick={()=>handleDelete(id)}
                  >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BooksView;
