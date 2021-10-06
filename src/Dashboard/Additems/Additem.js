import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swil from 'sweetalert'
import axios from 'axios'
import './Additem.css'
import {GetList} from "../Dashboard";
export default function Additem() {

    
     
const[User,setUser] = useState({}) ;

const updateUser = (type,value) =>{
    let x = User;
    if (type === 'user_name') User.user_name = value;
    else if (type === 'restaurant_name') User.restaurant_name = value;
    else if(type === 'restaurant_review') User.restaurant_review = value;
    else if(type === 'restaurant_img') User.restaurant_img = value;
    setUser(x)

}

const dispatch = useDispatch()

// const addimg=()=>{

//   axios.post('http://localhost:9000/api/postimg') 
//   .then((r) => { 
//     console.log(r)})
//     .catch((err) => {if(err.response.status === 404) console.log(err)})
// }


const additem = (event)=>{
    event.preventDefault()

    const item = {
        user_name: User.user_name,
       restaurant_name: User.restaurant_name,
        restaurant_review: User.restaurant_review,
        restaurant_img:User.restaurant_img
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
    let token = localStorage.getItem("User");

    axios.post('http://localhost:9000/api/addpost',User , {  headers: { 'x-auth-token': token}})
    .then((r) => { 
        GetList();
        console.log(r)
        swil('Successfully Register' ,'congrax you are Successfully Register','success')
      
      }
        
        
        )
    
    .catch((err) => {if(err.response.status === 404) swil('>:(' ,'Values are Incomplete','error')} );

    

}


    return (
        <div className="shadow p-3 bg-white rounded"><h3>Add Reviews</h3>
        <form  >
            <div className="form-group " >
                <label >User-Name</label>
                <input type="text" className="form-control "  placeholder="User-Name"
                 value={User.user_name} onChange={(e)=>{ updateUser('user_name',e.target.value)}} /> 
              </div>
            <div className="form-group">
              <label >Restaurant-Name</label>
              <input type="email" className="form-control  "  placeholder="Restaurant-Name"
             value={User.restaurant_name} onChange={(e)=>{ updateUser('restaurant_name',e.target.value)}} /> 
            </div>

            <div className="form-group">
                <label>Restaurant-Reviews</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                value={User.restaurant_review} onChange={(e)=>{ updateUser('restaurant_review',e.target.value)}} /> 
                
              </div>
            
              <div className="form-group">
                <label > file input</label>
                <input type="file" className="form-control-file" formAction='http://localhost:9000/api/upload' id="exampleFormControlFile1" method='post' encType="multipart/form-data"
                 value={User.restaurant_img} onChange={(e)=>{ updateUser('restaurant_img',e.target.value)}} /> 
              </div>
            <br/>
            <button onClick={additem} type="submit" className="btn btn-primary">Submit</button>
          </form>
     </div>

        
    )
}
