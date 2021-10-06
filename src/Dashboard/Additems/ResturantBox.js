import React from 'react';

import birthday from '../../Images/birthday.jpg'
export default function ResturantBox(props) {
  return (


  <div className="card " style={{maxWidth: "14rem", marginRight:"15px"}} >
    <img className="card-img-top " src={birthday} alt="birthday1"/>
    <div className="card-body">
      <h5 className="card-title">Post BY :{props.user_name}</h5>
      <p className="card-text">Restaurant Review :{props.restaurant_review}</p>
      <p className="card-text"><small className="text-muted">Restaurant Name :{props.restaurant_name}</small></p>
    </div>
  </div>

  )
  
}

   
 