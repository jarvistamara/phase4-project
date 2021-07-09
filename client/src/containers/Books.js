import React, { useState, useEffect } from 'react'
import BookForm from '../components/BookForm'
import BookCard from '../components/BookCard'

const Books = () => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState('')
    const [toggleForm, setToggleForm] = useState(false)

    useEffect(() => {
        fetch('/books')
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((books) => {
                    setBooks(books)
                })
            }
        })
    }, [])

    const addNewBook = (book) => {
        fetch('/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            setBooks([...books, data])
        })
        setToggleForm(false)
    }

    const bookList = books.map(b => <BookCard key={b.id} books={b}/>)

    if (error === '') {
        return (
            <div>
                <h2>Your Books:</h2>
                <p>Click on a Book below to view Book details.</p>
                <ul><h4>{bookList} </h4></ul>
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