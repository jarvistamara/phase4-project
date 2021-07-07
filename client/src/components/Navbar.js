import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    
    if (props.loggedIn) {
        return (
            <div>
                <h2>Hey, {props.user.name}! Welcome to your Personal Library.</h2>
                <Link to='/signout'><button>SIGNOUT</button></Link>
            </div>
        )
    } else {
    return (
        <div>
            <h2>PERSONAL BOOK LIBRARY APP.</h2>
            <h4>Please Login To View Your Books.</h4>
            <Link to='/signup'><button>SIGNUP</button></Link> 
            <Link to='/login'><button>LOGIN</button></Link>
        </div>
    )
    }
}
export default Navbar