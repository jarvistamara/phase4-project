import React, { useEffect, useState } from 'react'

import BookEditForm from '../components/BookEditForm'


const Book = (props) => {
    const [book, setBook] = useState([])
    const [errors, setErrors] = useState('')
    const [bookForm, setBookForm] = useState(false)


    useEffect(() => {
        fetch(`/books/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                setBook(data)
                console.log(data) 
            }
        })
    }, [props.match.params.id])

    const editBook = (book) => {
        const headerConfig = { 
            method: 'PATCH', 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            }, 
            body: JSON.stringify(book)}
        fetch(`/books/${book.id}`, headerConfig)
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                setBook(data)
                console.log(data) 
            }
        })
        setBookForm(false)
    }


    const changeFormState = (e) => {
        setBookForm(true)
    }    
    return (
        <div className='book-container'>
            <h1>{book.title} ~ {book.author}</h1>
            <div className="column">
                <img src={book.book_cover} alt='book'/>
            </div>
            
            <h3>Genre: {book.genre} </h3>
            <p>{book.description}</p>
            <div className='spacer'>
            {bookForm ? <BookEditForm editBook={editBook} book={book}/> : <button onClick={changeFormState}>EDIT</button>} 
            </div>
        </div>
    )
    
}
export default Book