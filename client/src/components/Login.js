import React, { useState } from 'react'

const Login = ({userLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        const headersConfig = {method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })}
        fetch('/login', headersConfig)
        .then(res => res.json())
        .then(user => userLogin(user))
    }

    return (
        <div>
            <h3>LOGIN BELOW:</h3>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Login