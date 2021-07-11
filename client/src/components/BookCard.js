import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../containers/Book'


const BookCard= ({books}) => {
    const [updatedBook, setUpdatedBook] = useState([])
    const [error, setError] = useState('')

    



    const deleteBook = (id) => {
        const headerConfig = { method: 'DELETE', headers: { 'Content-Type': 'application/json'}}
        fetch(`/books/${book.id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    const update = book.map(b => b.id === id ? data : b)
                    setUpdatedBook({
                        ...book,
                        update
                    })
                })
            } else {
                setError(error)
                console.log(error)
            }
        })
    }

    const editBook = (book) => {
        const headerConfig = { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(book)}
        fetch(`/books/${book.id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    const update = book.map(b => b === data ? data : b)
                    setUpdatedBook({
                        ...book,
                        update
                    })
                })
            } else {
                setError(error)
                console.log(error)
            }
        })
    }
    const book = updatedBook.map(b => <Book key={b.id} editBook={editBook} deleteBook={deleteBook} book={b}/>)

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

