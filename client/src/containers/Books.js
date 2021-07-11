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
            } else {
                setError(error)
                console.log(error)
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

            <div className='container-books'>
                <div className='form-container'>
                {toggleForm ? <BookForm addNewBook={addNewBook} /> : <button className='button two' onClick={() => setToggleForm(true)}>Add A New Book</button>}
                </div>
                <h1>Saved Books:</h1>
                <ul><h4>{bookList} </h4></ul>
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