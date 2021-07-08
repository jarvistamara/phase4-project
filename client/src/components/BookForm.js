import React, { useState } from 'react'

const BookForm = ({addNewBook}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [isRead, setIsRead] = useState(false)
    const [isUnread, setIsUnread] = useState(false)
    const [bookCover, setBookCover] = useState('')

    const handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        fetch('/login', {method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            author: author,
            genre: genre,
            isRead: is_read,
            isUnread: is_unread,
            bookCover: book_cover
        })})
        .then(res => res.json())
        .then(user => userLogin(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/><br/>
                <label>Author:</label>
                <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <br/><br/>
                <label>Genre:</label>
                <input type='text' id='genre' value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <br/><br/>
                <label>Have you read this book?</label>
                <select id='isRead' onChange={(e) => {
                    if (value === true) {
                        setIsRead(e.target.value)
                    } else {
                        setIsUnread(e.target.value)
                    }
                }} >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>                    
                </select>
                <br/><br/>
                <label>Book Cover:</label>
                <input type='text' id='bookCover' value={bookCover} onChange={(e) => setBookCover(e.target.value)}/>
                <br/><br/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default BookForm