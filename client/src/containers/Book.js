import React, { useEffect, useState } from 'react'


const Book = (props) => {
    const [book, setBook] = useState([])
    const [errors, setErrors] = useState('')
    
    useEffect(() => {
        fetch(`/books/${props.match.params.id}`)
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((data) => {
                    setBook(data)
                    console.log(book)
                })
            } else {
                setErrors(errors)
                console.log(errors)
            }
        })
    }, [props.match.params.id])

    return (
        <div className='book-container'>
            <h1>{book.title} ~ {book.author}</h1>
            <img src={book.book_cover} alt='book'/>
            <h3>Genre: {book.genre} </h3>
            <p>{book.description}</p>
        </div>
    )
}
export default Book