import React, { useState, useEffect } from 'react'
import BookForm from '../components/BookForm'
import BookLink from '../components/BookLink'

const Books = () => {
    const [Books, setBooks] = useState([])
    const [error, setError] = useState('')
    const [toggleForm, setToggleForm] = useState(false)

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
            if (data) {
                if (data.error) {
                    setError(data.error)
                } else {
                    console.log(data)
                    setBooks(data)
                }
            } else {
                setError("Not Authorized")
            }
        })
        console.log(Books)
    }, [])

    const addNewBook = (book) => {
        fetch('/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            setBooks([...Books, data])
            
        })
        setToggleForm(false)
    }

    const booksList = Books.map(book => <BookLink key={book.id} book={book}/>)

    if (error === '') {
        return (
            <div>
                <h2>Your Books:</h2>
                <p>Click on a Book below to view Book details.</p>
                <ol><h4>{booksList} </h4></ol>
                {toggleForm ? <BookForm addNewBook={addNewBook} /> : <button onClick={() => setToggleForm(true)}>Add A New Book</button>}
            </div>
        )
        } else {
            return (
                <div>
                    <h3>Not Authorized</h3>
                    <h4>Please Sign up or Login!</h4>
                </div>
            )
        }
}
export default Books