import React from 'react'
import { Link, useHistory, useState } from 'react-router-dom'
import logo from '../images/logo.png'


const Navbar = (props) => {
    const history = useHistory()
    
    if (props.loggedIn) {
        return (
             <div className="row-nav">
                <div className='container nav-bar-welcome'>
                    <div className="column-nav">
                    <Link to='/'><button className="button sign-out" onClick={history.push('/')}>HOME</button></Link>
                    <Link to='/logout'><button className="button sign-out" onClick={props.userLogout}>SIGN OUT</button></Link>
                    </div>
                    <div className="column-nav">
                    <Link to='/'><img className='new-logo' src={logo} alt='logo'/></Link>
                    <h2>Hey, {props.user.name}! <br/>Welcome to your Personal Library.</h2>
                    </div>
                </div>   
            </div> 
        )
    } else {
    return (
         <div className="row-nav">
                <div className='container nav-bar-welcome'>
                    <div className="column-nav">
                    <img className='new-logo' src={logo} alt='logo'/>
                    </div>
                    <div className="column-nav signup-instructions">
                        <h4>KEEP TRACK OF YOUR FAVORITE NOVELS.</h4>
                        <h2>Sign up for 
                            <br />
                            FREE!.</h2>
                    </div>
                    <div className="column-nav">
                        <Link to='/signup'><button className="button">SIGN UP</button></Link> 
                        <Link to='/login'><button className="button">LOGIN</button></Link>
                    </div>
                </div>   
            </div> 
    )
    }
}
export default Navbar
