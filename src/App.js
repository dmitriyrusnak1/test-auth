import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import { AuthProvider } from './Context'
import Login from './Pages/Login/Login'
import Main from './Pages/Main/Main'
import { me } from './Context'

const App = (props) => {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <div className="main">
          <Switch>
            <Route exact path="/" render={()=><ProtectedRoute Component={Main}/>}/>
            <Route path="/login" render={()=><Login/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>

  )
}
export default App
