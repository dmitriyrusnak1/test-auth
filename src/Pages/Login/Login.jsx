import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import { loginUser, useAuthDispatch } from '../../Context'
import styles from './Login.module.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const dispatch = useAuthDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        let payload = {email: email, password: password}
        try{
            let response = await loginUser(dispatch, payload)
            if(!response) return console.log('net')
            history.push('/')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className={styles.container}>
            {localStorage.currentUser && <Redirect to="/"/>}
            <div className={styles.formContainer}>
                <h1>Login Page</h1>
                <form>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                        <label htmlFor='email'>Username</label>
                        <input type='text' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className={styles.loginFormItem}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleLogin}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login