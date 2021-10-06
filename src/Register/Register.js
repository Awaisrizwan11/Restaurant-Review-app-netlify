import React , {useState,Fragment} from 'react'
import './Register.css'
import cake from '../Images/cake2.jpg'
import swil from 'sweetalert'
import axios from 'axios'
import { MDBIcon,MDBInput } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Register() {

    
const[User,setUser] = useState({}) ;

const updateUser = (type,value) =>{
    let x = User;
    if (type === 'name') User.name = value;
    else if (type === 'email') User.email = value;
    else if(type === 'password') User.password = value;
    else if(type === 'phone_number') User.phone_number = value;
    setUser(x)

}

const saveUser = (event)=>{
    event.preventDefault()


    console.log(User)
    axios.post('http://localhost:9000/api/register',User)
    .then((r) => { 
        console.log(r)
        swil('Successfully Register' ,'congrax you are Successfully Register','success')})
    .catch((err) => {if(err.response.status === 404) swil('>:(' ,'Values are Incomplete','error')} );


}

    return (
        
        <section class="h-100 bg-dark" style={{backgroundColor:"rgb(52 58 64)"}}>
        <div class="container py-5 h-100" style={{width: "100%"}}>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col " style={{display:"contents","text-align": "center"}}>
              <div class="card card-registration my-4" style={{backgroundColor:"#1a191f"}}>
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                       src={cake} 
                      alt="register"
                      class="img-fluid"
                      style={{"border-top-left-radius": ".25rem", "border-bottom-left-radius": ".25rem"}}
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                    <h2 className="title">Registration Info</h2>
                        <form method="POST">
                            <div className="input-group"  >
                            <MDBIcon fas icon="user-alt" style={{color:"white"}}/>
                            <MDBInput label="Username"  
                                value={User.name} onChange={(e)=>{ updateUser('name',e.target.value)}} />
                            </div>
                           
                            <div className="input-group">
                            <MDBIcon fas icon="at"  style={{color:"white"}}/>
                            <MDBInput label="Your e-mail" 
                                value={User.email} onChange={(e)=>{updateUser('email',e.target.value)}}/>
                            </div>
    
                            <div className="input-group">
                            <MDBIcon fas icon="unlock" style={{color:"white"}}/>
                            <MDBInput label='Password input' id='typePassword' type='password' 
                                value={User.email} onChange={(e)=>{updateUser('password',e.target.value)}}/>
                            </div>
    
                            <div className="input-group">
                            <MDBIcon fas icon="phone" style={{color:"white"}}/>
                            <MDBInput label='Number input' id='typeNumber' type='number' 
                                value={User.phone_number} onChange={(e)=>{updateUser('phone_number',e.target.value)}}/>
                            </div>
                            <div className="p-t-10">
                                <Fragment>
                            <MDBBtn onClick={saveUser} rounded outline color="secondary" ><MDBIcon far icon="gem" className="mr-2" />Submit</MDBBtn>
                         </Fragment>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    )}
    
   
      
     