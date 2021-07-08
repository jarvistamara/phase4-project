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
        .then(b => {
            if (b){
                if (b.error) {
                    setError(b.error)
                } else {
                    setBooks(b)
                }
            } else {
                setError("Not Authorized")
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
        .then(b => {
            setBooks([...Books, b])
            setToggleForm(false)
        })
    }

    const booksList = books.map(b => <BookLink key={b.id} book={b}/>)

    if (error === '') {

    return (
        <div>
            <ul>
                {booksList}
                {toogleForm ? <BookForm addNewBook={addNewBook} /> : 
                <button onClick={() => setToggleForm(true)}>Add New Book</button>}
            </ul>
        </div>
    )
    } else {
        return (
            <div>
                <h3>Not Authorized</h3>
                <h4>Please Sign up or Login</h4>
            </div>
        )
    }
}
export default Books