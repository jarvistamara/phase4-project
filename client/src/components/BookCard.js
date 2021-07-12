import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../containers/Book'


const BookCard= ({books}) => {
    const [updatedBook, setUpdatedBook] = useState([])
    
    
    
    const singleBook = updatedBook.map(b => <Book key={b.id} book={b}/>)

    return (
        <div>
            <div className="row">
                <div className='container'>
                    <div className="column">
                        <img src={books.book_cover}/>
                    </div>
                    <div className="column">
                        <Link to={`/books/${books.id}`}><li>{books.title} ~ {books.author}</li></Link>
                        <p className='summary'>{books.summary}</p>
                        <p className='genre-read'>Genre:{books.genre}   |   Read by you: {books.is_read === true ? 'Yes' : 'No'}</p>
                        <div className='buttons container'>
                        </div>
                    </div>
                </div>   
            </div>
            <div className='space'></div>
        </div>
    )
}
export default BookCard

