import React, { useState } from 'react'

const BookForm = ({addNewBook}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')
    const [summary, setSummary] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [isRead, setIsRead] = useState(false)

 
    const handleBooleanChange = (e) => {
        if (e.target.value === "true") {
            setIsRead(true)
        } else {
            setIsRead(false)
        }
    }

    const handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        addNewBook({
            title: title,
            author: author,
            genre: genre,
            description: description,
            summary: summary,
            book_cover: bookCover,
            is_read: isRead
        })
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
                <label>Description:</label>
                <input type='text' id='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <br/><br/>
                <label>Summary:</label>
                <input type='text' id='summary' value={summary} onChange={(e) => setSummary(e.target.value)}/>
                <br/><br/>
                <label>Book Cover:</label>
                <input type='text' id='bookCover' value={bookCover} onChange={(e) => setBookCover(e.target.value)}/>
                <br/><br/>
                <label>Have you read this book?</label>
                <label><input type="radio" value="true" checked={isRead === true} onChange={handleBooleanChange} />Yes</label>
                <label><input type="radio" value="false" checked={isRead === false} onChange={handleBooleanChange}/>No</label>
                <div>Selected option is : {isRead}</div>
                <br/><br/>
                <input className="button" type='submit' />
            </form>
        </div>
    )
}
export default BookForm