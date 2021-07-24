import React, { useState } from 'react'

const Signup = ({userLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [errorDetails, setErrorDetails] = useState('[]')
    const [invaildLogin, setInvalidLogin] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const headersConfig = {method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        })}

        fetch('/signup', headersConfig)
        .then(res => res.json())
        .then(user => {
            console.log(user)

            if (user.error) {
                setErrors(user.error)
                setErrorDetails(user.exception)
                setInvalidLogin(true)
            } else {
                userLogin(user)
                
            }
        })
    }

    return (
        <div className='login-container'>
            <h1>Sign Up Below!</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                <br/><br/>
                <label>Username:</label><br/>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password:</label><br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <label>Password Confirmation:</label><br/>
                <input type='password' id='passwordConfirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <br/>
                <input type='submit' />
                <div>
                    {invaildLogin ? <p className="error"> {errors} : {errorDetails.slice(-118)}</p> : <p> </p>}
                </div>
            </form>
        </div>
    )
}
export default Signup







