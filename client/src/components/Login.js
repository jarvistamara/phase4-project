import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom' 


const Login = ({userLogin, setLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [invalidLogin, setInvalidLogin] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        fetch('/login', {
            method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })})
        .then(res => res.json())
        .then(response => {
            console.log(response.errors)
            if (response.errors) {
                console.log("false")
                setLoggedIn(false)
                setErrors(response.errors)
                setInvalidLogin(true)
                
            } else {
                userLogin(response)
                
            }
        })
    }

    if (userLogin === false) {
        history.push('/login')
    } else {
        if (userLogin === true) {
            history.push('/') 
        }
    }

    return (
        <div className='login-container'>
            <h1>LOGIN BELOW:</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br/>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password:</label><br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <input type='submit' />
                <div>
                    {invalidLogin ? <p className="error"> {errors}</p> : <p> </p>}
                </div>
            </form>
        </div>
    )
}
export default Login