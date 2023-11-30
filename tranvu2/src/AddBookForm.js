
import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
 const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',

 });

 const { title, author, genre, } = formData;

 const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const onSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    setFormData({ title: '', author: '', genre: '', yearPublished: '' });
 };

 return (
    <form onSubmit={onSubmit} className='formAdd'>
      <input className='title'
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        placeholder="Title"
        required
      />
      <input className='author'
        type="text"
        name="author"
        value={author}
        onChange={onChange}
        placeholder="Author"
        required
      />
      <input className='genre'
        type="text"
        name="genre"
        value={genre}
        onChange={onChange}
        placeholder="Genre"
        required
      />

      <button type="submit">Add Book</button>
    </form>
 );
};

export default AddBookForm;