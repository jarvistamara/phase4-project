import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    
    if (props.loggedIn) {
        return (
            <div className='nav-bar-welcome'>
                <h2>Hey, {props.user.name}! Welcome to your Personal Library.</h2>
                <Link to='/logout'><button onClick={props.userLogout}>SIGN OUT</button></Link>
            </div>
        )
    } else {
    return (
        <div className='nav-bar-signin'>
            <h2>PERSONAL BOOK LIBRARY APP.</h2>
            <h4>Please Login To View Your Books.</h4>
            <Link to='/signup'><button>SIGN UP</button></Link> 
            <Link to='/login'><button>LOGIN</button></Link>
        </div>
    )
    }
}
export default Navbar