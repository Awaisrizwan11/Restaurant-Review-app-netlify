import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader ,MDBBtn} from 'mdb-react-ui-kit';
import './Cardhome2.css'

export default function Cardhome2() {
  return (
    <div className='Container' style={{paddingTop:"20px"}}>
    <div className="row" >
     <div className='col'>

    

      <MDBCard background='danger' className='text-white1 mb-3' >
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Danger card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
</div>

<div className='col'>
      <MDBCard className='text-white2 mb-3' >
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    <div className='col'>
      <MDBCard background='warning' className='text-white3 mb-3' >
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Warning card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
     
      
    </div>
    
    </div></div>
  );
}