import React, { useState, useEffect } from 'react'
import './dashboard.css'

import Additem from './Additems/Additem'
import axios from 'axios'
import ResturantBox from './Additems/ResturantBox'

let GetList;
export default function Dashboard() {
    const [items, setitems] = useState([])

    useEffect(() => {
       GetList();
       
    },[])
     GetList = () =>  {
        axios.get('http://localhost:9000/api/getpost')
        .then(res => {
            console.log(res.data)
            setitems(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }
    const itemslist = items.map((obj,index) => {

        return    <ResturantBox user_name={obj.user_name} restaurant_name={obj.restaurant_name} restaurant_review={obj.restaurant_review}  key={index}/>


    })

    
    return    <div className="row" style={{padding: "20px" ,"background-color": "#7947a7bf"}}>
                <div className="col">
                    <Additem />
                </div>
                <div className="col-8">
                    <div className="row row-cols-1 row-cols-md-2 g-4" style={{paddingTop:"15px"}}> {itemslist}</div>
                </div>
            </div>


}

export { GetList };