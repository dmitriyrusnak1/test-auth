import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../../Context'
import { me } from '../../Context'

const ProtectedRoute  = ({ Component, ...rest }) => {

    const dispatch = useAuthDispatch()
    const user = useAuthState()

    useEffect(() => {
        if(!user){
            let data = JSON.parse(localStorage.currentUser)
            if(data.token){
              me(dispatch, data.token)
            }
        }
    }, [])

    return(
        <Route {...rest} render={(props)=>{
            if(localStorage.currentUser){
                return <Component/>
            }else{
                return <Redirect to="/login"/>
            }
        }}/>
    )
}

export default ProtectedRoute