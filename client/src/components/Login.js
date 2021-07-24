import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom' 


const Login = ({userLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [invaildLogin, setInvalidLogin] = useState(false)
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
            console.log(response)
            if (response.error) {
                setErrors(response.error)
                setInvalidLogin(true)
                history.push('/login')
            } else {
                userLogin(response)
                
            }
        })
    }

    return (
        <div className='login-container'>
            <h1>LOGIN BELOW:</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <input type='submit' />
                <div>
                    {invaildLogin ? <p className="error"> {errors[0]}</p> : <p> </p>}
                </div>
            </form>
        </div>
    )
}
export default Login