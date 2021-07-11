import React, { useEffect, useState } from 'react'
import Books from './Books'

const Book = () => {
    const [book, setBook] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/books/${props.match.params.id}`)
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
    }, [props.match.params.id])

    const deleteBook = (id) => {
        const headerConfig = { method: 'DELETE', headers: { 'Content-Type': 'application/json'}}
        fetch(`/books/${id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((newBook) => {
                    const updatedBook = book.map(b => b.id === id ? newBook : b)
                    setBooks({
                        ...book,
                        updatedBook
                    })
                })
            } else {
                setError(error)
                console.log(error)
            }
        })
    }

    const editBook = (book) => {
        const headerConfig = { method:}
        
    }

    return (
        <div>
            <h1>TESTING</h1>
        </div>
    )
}
export default Book