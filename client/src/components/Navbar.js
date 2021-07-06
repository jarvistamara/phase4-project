import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    if (props.logged_In) {
        return (
            <div>
                <h2>Hey, {props.user.name}! Welcome to your personal Library.</h2>
                <Link to='/signup'><button>SIGNUP</button></Link>
            </div>
        )
    } else {
    return (
        <div>
            <Link to='/signup'><button>SIGNUP</button></Link> 
            <Link to='/login'><button>LOGIN</button></Link>
        </div>
    )
    }
}
export default Navbar