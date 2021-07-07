import React, { useState } from 'react'

const Signup = ({userLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = (e) => {
        // prevents a sending of a post request on submit
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => userLogin(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password:</label>
                <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <label>Password Confirmation:</label>
                <input type='text' id='passwordConfirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Signup