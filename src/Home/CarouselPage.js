import React  from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBCarouselElement,MDBCarouselCaption,} from 'mdb-react-ui-kit';
//import k1 from '../Images/slider-7-background-2.jpg'
import k2 from '../Images/k2.jpg'
import k3 from '../Images/k3.jpg'

import './CarouselPage.css'

export default function CarouselPage() {
  return (
    <MDBCarousel showIndicators showControls fade >
    <MDBCarouselInner>
      <MDBCarouselItem itemId={0}>
        <MDBCarouselElement src={k3} style={{"height": "auto"}} alt='pic1'  />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p1>Nulla vitae elit libero, a pharetra augue mollis interdum.</p1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={1}>
        <MDBCarouselElement src={k2} style={{"height": "auto"}} alt='pic2' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <MDBCarouselElement src={k3} style={{"height": "auto"}} alt='pic3' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p1>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p1>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  );
}

