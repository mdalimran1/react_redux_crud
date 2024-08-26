import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

//first step
const initialBooks = {
  
  books: [
    { id: uuidv4(), title: "Love Bangladesh", author: "Imran" },
    { id: uuidv4(), title: "Love Latter", author: "Imran" },
  ],
};

export const BookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks : (state,action) =>{
      state.books.push(action.payload)
    },
    deleteBooks:(state,action)=>{
      state.books = state.books.filter((book)=>book.id !==action.payload)
    },
    editBook:(state,action)=>{
      const {id,title,author} = action.payload;
      state.books = state.books.map((book)=> book.id === id ? action.payload : book)
    }
  },
});
export const { showBooks , addBooks ,deleteBooks,editBook} = BookSlice.actions;
export default BookSlice.reducer;
