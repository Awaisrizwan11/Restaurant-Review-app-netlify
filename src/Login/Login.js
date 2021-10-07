import React, { useState } from 'react'
import './login.css'
import logo from '../Images/logo.png'
import banner from '../Images/slider-7-background-2.jpg'
import swil from 'sweetalert'
import axios from 'axios'
import { useHistory } from 'react-router'
import { MDBIcon, MDBInput } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Show_login } from '../Components/Navbar'


export default function Login() {

    const history = useHistory()
    const [User, setUser] = useState({});

    const updateUser = (type, value) => {
        let x = User;

        if (type === 'email') User.email = value;
        else if (type === 'password') User.password = value;

        setUser(x)

    }



    const Login_user = (event) => {
        event.preventDefault()


        console.log(User)
        axios.post('http://localhost:9000/api/login', User)
            .then((r) => {
                localStorage.setItem('newUser', JSON.stringify(User))
                localStorage.setItem('User', JSON.stringify(r.data))
                history.push('/dashboard')
                console.log(r)
                Show_login()
                swil('Successfully Register', 'congrax you are Successfully Register', 'success')
            })
            .catch((err) => { if (err.response.status === 404) swil('>:(', 'Values are Incomplete', 'error') });

    }




    return (


        <div>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-sm-6 login-section-wrapper">
                        <div className="brand-wrapper">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <div className="login-wrapper my-auto">
                            <h1 className="login-title" style={{"font-family": "cursive"}}>Login</h1>

                            <div className="text-center mb-3">

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                                    <MDBIcon fab icon='facebook-f' size='lg' />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                                    <MDBIcon fab icon='twitter' size='lg' />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                                    <MDBIcon fab icon='google' size='lg' />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                                    <MDBIcon fab icon='instagram' size='lg' />
                                </MDBBtn>
                            </div>




                            <form action="#!">

                                <div className="input-group">
                                    <MDBIcon fas icon="at" style={{ display: "flex", "align-items": "center", "justify-content": "space-around" }} />
                                    <MDBInput label="Your e-mail"
                                        value={User.email} onChange={(e) => { updateUser('email', e.target.value) }} />
                                </div>
                                <div className="input-group">
                                    <MDBIcon fas icon="unlock" style={{ display: "flex", "align-items": "center", "justify-content": "space-around" }} />
                                    <MDBInput label='Password input' id='typePassword' type='password'
                                        value={User.email} onChange={(e) => { updateUser('password', e.target.value) }} />
                                </div>
                                <MDBBtn onClick={Login_user} rounded className='mx-2' color='secondary'>
                                    LOGIN
                                </MDBBtn>


                            </form>
                            <a href="#!" className="forgot-password-link">Forgot password?</a>
                            <p className="login-wrapper-footer-text">Don't have an account? <a href="/register" className="text-reset">Register here</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block" >
                        <img src={banner} alt="login1" className="img-fluid" />
                    </div>
                </div>
            </div>

        </div>

    )
}
