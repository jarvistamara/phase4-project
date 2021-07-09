import React from 'react'
import { Link } from 'react-router-dom'

const BookCard= ({books}) => {
    return (
        <div className='book-card'>
         <div className='book-card-span'></div>
          <Link to={`/books/${books.id}`}>
              <li>{books.title} ~ {books.author}</li> 
              </Link>  
              <p>{books.summary}</p>
              <div className='book-card-space'></div>
        </div>
    )
}
export default BookCard