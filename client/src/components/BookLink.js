import React from 'react'
import { Link } from 'react-router-dom'

const BookLink = (book) => {
    return (
        <div>
          <Link to={`/books/${book.id}`}>
              <li>{book.title} - {book.author}</li> 
            
              </Link>  
        </div>
    )
}
export default BookLink