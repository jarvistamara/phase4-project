import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    
    if (props.loggedIn) {
        return (
            <div className='nav-bar-welcome'>
                <img scr='/client/src/images/logo.png' />
                <Link to='/logout'><button className="button sign-out" onClick={props.userLogout}>SIGN OUT</button></Link>
                <h1>Hey, {props.user.name}! Welcome to your Personal Library.</h1>
            </div>
        )
    } else {
    return (
        <div className='nav-bar-signin'>
            <h2>PERSONAL BOOK LIBRARY APP.</h2>
            <h4>Please Login To View Your Books.</h4>
            <Link to='/signup'><button className="button">SIGN UP</button></Link> 
            <Link to='/login'><button className="button">LOGIN</button></Link>
        </div>
    )
    }
}
export default Navbar

{/* <div className="row">
                <div className='container'>
                    <div className="column">
                        <img src={books.book_cover}/>
                    </div>
                    <div className="column">
                        <Link to={`/books/${books.id}`}><li>{books.title} ~ {books.author}</li></Link>
                        <p className='summary'>{books.summary}</p>
                        <p className='genre-read'>Genre:{books.genre}   |   Read by you: {books.is_read === true ? 'Yes' : 'No'}</p>
                        
                    </div>
                </div>   
            </div> */}