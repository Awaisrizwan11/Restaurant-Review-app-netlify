import React, { useState,useEffect } from 'react'
import {NavDropdown} from 'react-bootstrap'

import { NavLink,useHistory,Redirect } from 'react-router-dom'
import './Navbar.css'

let Show_login;
let Logout;
export default function Navbar() {

  const[useremail,setUserEmail] = useState() ;

          useEffect(() => {
            
            Show_login()

        },[])

                Show_login = () =>{

                if(localStorage.getItem('newUser'))
                setUserEmail(localStorage.getItem('newUser')) 
                
              }
  
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('newUser'))
    
    console.log(user)

     Logout =() =>  {
        
           localStorage.clear() 
           history.push('/register')
            return <Redirect to="/register" />
            
    }

    
  
   
    return (
      
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact activeClassName='active_class' to='/dashboard' className="navbar-brand">Dashboard</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink exact activeClassName='active_class' to='/home' className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName='active_class' to='/about' className="nav-link">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact activeClassName='active_class' to='/contact' className="nav-link">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName='active_class' to='/login' className="nav-link">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName='active_class' to='/register' className="nav-link">Registation</NavLink>
      </li>
      
    
    </ul>
   
  </div>

 
          
 
  {useremail?
  
    <NavDropdown style={{"color":"aqua"}} title={user.email} >
       <NavDropdown.Item onClick={Logout}  > Logout</NavDropdown.Item >

    </NavDropdown>
    
     

      :null
}
     
      </nav>
      </div>
     
       
    )
}
export { Show_login,Logout}  ;