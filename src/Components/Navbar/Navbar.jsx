import React from 'react'
import classes from './Navbar.module.css'
import { logout, useAuthDispatch, useAuthState } from '../../Context'

const Navbar = (props) => {
    const dispatch = useAuthDispatch()
    const user = useAuthState()

    console.log(user)

    const exit = () => {
        logout(dispatch)
    }

    return(
        <div className={classes.main}>
            <h3>Auth app</h3>
            <div>
                {localStorage.currentUser && <button onClick={exit}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar