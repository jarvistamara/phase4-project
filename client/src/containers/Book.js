import React, { useEffect, useState } from 'react'
import BookEditForm from '../components/BookEditForm'


const Book = (props) => {
    const [book, setBook] = useState([])
    const [errors, setErrors] = useState('')
    const [bookForm, setBookForm] = useState(false)

    useEffect(() => {
        fetch(`/books/${props.match.params.id}`)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    setBook(data)
                    console.log(data)
                })
            } else {
                setErrors(errors)
            }
        })
    }, [props.match.params.id])

    const deleteBook = (id) => {
        const headerConfig = { method: 'DELETE', headers: { 'Content-Type': 'application/json'}}
        fetch(`/books/${book.id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    const update = book.map(b => b.id === id ? data : b)
                    setBook({
                        update
                    })
                })
            } else {
                setErrors(errors)
            }
        })
    }

    const editBook = (book) => {
        const headerConfig = { 
            method: 'PATCH', 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            }, 
            body: JSON.stringify(book)}
        fetch(`/books/${book.id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    const update = book.map(b => b === data ? data : b)
                    setBook({
                        update
                    })
                })
            } else {
                setErrors(errors)
            }
        })
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
            {bookForm ? <BookEditForm editBook={editBook} book={book}/> : <button onClick={changeFormState}>EDIT</button>} | <button onClick={deleteBook}>DELETE</button>
            </div>
        </div>
    )
}
export default Book