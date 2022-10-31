import React from 'react'
import { useAuthState } from '../../Context'
import classes from './Main.module.css'

const Main = (props) => {
    const user = useAuthState()

    return(
        <div className={classes.main}>
            <h2>hello, {user.userDetails}</h2>        
        </div>
    )
}

export default Main