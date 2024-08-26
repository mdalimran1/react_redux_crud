import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navber from '../layout/Navber';
import Footer from '../layout/Footer';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BooksView from '../features/books/BooksView';
import AddBook from '../features/books/AddBook';
import EditBook from './../features/books/EditBook';

const Index = () => {
  return (
    <BrowserRouter>
    <Navber />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/show-book" element={<BooksView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path='/edit-book' element={<EditBook />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Index;
