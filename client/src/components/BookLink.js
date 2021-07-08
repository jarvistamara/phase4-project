import React from 'react'
import { Link } from 'react-router-dom'

const BookLink = ({b}) => {
    return (
        <div>
          <Link to={`/books/${b.id}`}>
              <img className='book-cover' src={b.book_cover} alt='book_cover' />
              <li>{b.title} ~ {b.author}</li> 
              </Link>  
        </div>
    )
}
export default BookLink