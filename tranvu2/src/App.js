import React, { useState } from 'react';
import './App.css';
import AddBookForm from './AddBookForm';

function App() {
 const [books, setBooks] = useState([]);

 const addBook = (book) => {
    setBooks([...books, book]);
 };

 return (
    
    <div className="AddBookForm">
      <h2 className='list'>List of books</h2>
        {books.map((book, index) => (
        <div key={index} className="book">
          <p className='mot'>Title: {book.title} </p>
          <p className='hai'>Author: {book.author} </p>
          <p>Genre: {book.genre} </p>
        </div>
      ))}
      <h2 className='add'>Add new Book</h2>

      <AddBookForm addBook={addBook} />
      
    </div>
 );
}

export default App;