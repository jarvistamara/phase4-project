import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    
    if (props.logged_In) {
        return (
            <div>
                <h2>Hey, {props.user}! Welcome to your personal Library.</h2>
                <Link to='/signout'><button>SIGNOUT</button></Link>
            </div>
        )
    } else {
    return (
        <div>
            <h3>TESTING HEROKU</h3>
            <Link to='/signup'><button>SIGNUP</button></Link> 
            <Link to='/login'><button>LOGIN</button></Link>
        </div>
    )
    }
}
export default Navbar