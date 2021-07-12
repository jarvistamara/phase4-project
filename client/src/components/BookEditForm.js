import React, { Component } from 'react'

class BookEditForm extends Component {
        state = {
        id: this.props.book.id,
        title: this.props.book.title,
        author: this.props.book.author,
        genre: this.props.book.genre,
        description: this.props.book.description,
        summary: this.props.book.summary,
        book_cover: this.props.book.book_cover,
        is_read: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleBooleanChange = (e) => {
        if (e.target.value === "true") {
            this.setState({
               is_read: true 
            })
           
        } else {
            this.setState({
                is_read: false 
             })
        }
    }

    handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        this.props.editBook(this.state)
       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' id='title' value={this.state.title} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Author:</label>
                    <input type='text' id='author' value={this.state.author} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Genre:</label>
                    <input type='text' id='genre' value={this.state.genre} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Description:</label>
                    <input type='text' id='description' value={this.state.description} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Summary:</label>
                    <input type='text' id='summary' value={this.state.summary} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Book Cover:</label>
                    <input type='text' id='book_cover' value={this.state.book_cover} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Have you read this book?</label>
                    <label><input type="radio" value="true" checked={this.state.is_read === true} onChange={this.handleBooleanChange} />Yes</label>
                    <label><input type="radio" value="false" checked={this.state.is_read === false} onChange={this.handleBooleanChange}/>No</label>
                    <br/><br/>
                    <input className="button" type='submit' />
                </form>
            </div>
        )
    }
}
export default BookEditForm
