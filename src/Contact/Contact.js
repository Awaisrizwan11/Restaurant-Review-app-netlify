import React , { Fragment } from 'react'
import './Contact.css'
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdb-react-ui-kit';

import { MDBInput } from "mdbreact";

export default function Contact() {
    return (
        <div>
           <div class="bgimg">
 
 
       <div class="row">
        <h1>Contact Us <MDBIcon icon="sync" spin size="1x" fixed />
        <span className="sr-only">Loading...</span> </h1> 
         
        
       </div>

     
       <div class="container px-4">
        <div class="row gx-5">
          <div class="col " >
           <div class="p-3 border bg-light shadow p-3 mb-5 bg-white rounded"><form class="row g-3">
            <div class="col-md-6">
           
              <MDBInput label="Email" icon="user"/>
            </div>
            <div class="col-md-6">
              
              <MDBInput label="Password"  icon="unlock" />
            </div>
            <div class="col-12">
             
              <MDBInput label="Address"  icon="location-arrow" />
            </div>
           
            <div class="col-md-6">
             
              <MDBInput label="City"  icon="city" />
            </div>
            
          
           
            <div class="col-12 ">
            <Fragment>
            <MDBBtn rounded outline color="secondary" ><MDBIcon far icon="gem" className="mr-2" />Submit</MDBBtn>
            </Fragment>
            </div>
          </form></div>
          </div>
          <div class="col">
            <div class="p-4  border bg-light shadow p-3 mb-5 bg-white rounded">
              
              <h4> <MDBIcon icon="at" />    E-Mail:</h4>
              <p> example@gmail.com</p> <br/>
               <h4>  <i class="fa fa-phone-square" aria-hidden="true"></i>   Phone #:</h4>
          <p> 09123466789</p><br/>
          <h4> <i class="fa fa-map-marker" aria-hidden="true"></i>   Location</h4>
          <p> Rawalpindi, Pakistan</p>
         
          </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    
        
    )
}
