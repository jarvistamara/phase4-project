import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import Books from './Books'

const Book = (props) => {
    const [book, setBook] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/books/${props.match.params.id}`)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((books) => {
                    setBook(books)
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
                .then((data) => {
                    const updatedBook = book.map(b => b.id === id ? data : b)
                    setBook({
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
        const headerConfig = { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(book)}
        fetch(`/books/${id}`, headerConfig)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    const updatedBook = book.map(b => b === data ? data : b)
                    setBook({
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

    const userBook = book.map(b => <BookCard key={book.id} editBook={editBook} deleteBook={deleteBook} book={book} />)

    return (
        <div>
            <img src={books.book_cover}/>
            
        </div>
    )
}
export default Book