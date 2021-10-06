import React from 'react'
import cake4 from '../Images/cake4.jpg'
import cake1 from '../Images/cake.jpg'
import cake2 from '../Images/birthday.jpg'
import cake3 from '../Images/cake4.jpg'
import k1 from '../Images/k1.jpg'
import k2 from '../Images/k2.jpg'
import k3 from '../Images/k3.jpg'
import './About.css'
export default function About() {
    return (
        <div>
            <div className="row"  style={{"padding": "2%"}}>
          <div className="col" >
           <h4 style={{"fontFamily": "quicksandlight" , "fontSize": "35px"}}>Choose Your Flavour</h4>
           <p style={{"color": "#7c7c7c" , "fontSize": "20px" , "lineHeight": "28px" , "fontFamily": "Cambria" }}>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin , lorem qui bibendum auctor , nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin gravida nibh Ipsum proin gravida nibh vel velit nisi elit consequa . </p>
          </div>
          <div className="col">
          <img src={cake4} alt="cake2" style={{"width": "auto", "height":"auto"}}/>
          </div>
          <div className="col">
            <div className="container">
                <div className="row g-2">
                  <div className="col-6">
                   
                    <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "fontSize": "40px" ,"fontFamily":"Quicksandlight"}}>420</span>
                    <p style={{"color": "#c9a74d" , "fontSize": "16px" ,"fontFamily":"Quicksandlight"}}>Projects</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "fontSize": "40px" ,"fontFamily":"Quicksandlight"}}>254</span>
                    <p style={{"color": "#c9a74d" , "fontSize": "16px" ,"fontFamily":"Quicksandlight"}}>Awards</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "fontSize": "40px" ,"fontFamily":"Quicksandlight"}}>853</span>
                    <p style={{"color": "#c9a74d" , "fontSize": "16px" ,"fontFamily":"Quicksandlight"}}>Celebrations</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "fontSize": "40px" ,"fontFamily":"Quicksandlight"}}>987</span>
                    <p style={{"color": "#c9a74d" , "fontSize": "16px" ,"fontFamily":"Quicksandlight"}}>customers</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      
      <div className="row g-0">
        <div className="col col-md-4" style={{"backgroundColor": "#C5A368"}}>
            <h2 style={{"fontSize":" 35px ","lineHeight":" 1.1em", "color":"white", "paddingTop": "25%" ,"paddingLeft": "20%"}}>Best Design</h2>
            <p style={{"paddingLeft": "20%" ,"paddingRight": "15%", "fontSize": "20px" ,"fontFamily": "Cambria",  "color": "white", "paddingTop": "3%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin gravida nibh</p>
            <button type="button" className="btn btn-primary btn-lg" style={{"backgroundColor":"black", "marginTop": "10%" ,"marginLeft": "20%" ,"fontSize": "16px" ,"marginBottom": "20%"}}>PURCHASE NOW</button>
        </div>
        <div className="col-sm col-md-8">
            <div className="container">
                <div className="row row-cols-3" style={{"paddingTop": "8%", "paddingLeft": "5%", "paddingRight": "5%"}}> 
                  <div className="col" >
                      <img src={cake1} alt="cake1" style={{    width: "-webkit-fill-available"}}/>
                      <h3 style={{"textAlign": "center" ,"fontSize": "23px" ,"fontFamily": "Cambria"}}>Specialties</h3>
                      <p style={{"fontFamily": "Times New Roman" ,"fontSize":"17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col">
                    <img src={cake3} alt="cake2" style={{ width:" -webkit-fill-available"}}/>
                    <h3 style={{"textAlign": "center" ,"fontSize": "23px", "fontFamily": "Cambria"}}>Specialties</h3>
                    <p style={{"fontFamily": "Times New Roman", "fontSize": "17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col">
                    <img src={cake2} alt="cake3" style={{width:" -webkit-fill-available"}}/>
                    <h3 style={{"textAlign": "center" ,"fontSize": "23px", "fontFamily": "Cambria"}}>Specialties</h3>
                    <p style={{"fontFamily": "Times New Roman", "fontSize": "17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col" style={{"paddingTop": "5%"}}>
                      <img src={k1} alt="cake4" style={{  width:" -webkit-fill-available"}}/>
                    <h3 style={{"textAlign": "center" ,"fontSize": "23px", "fontFamily": "Cambria"}}>Specialties</h3>
                    <p style={{"fontFamily": "Times New Roman", "fontSize": "17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p></div>
                  <div className="col" style={{"paddingTop": "5%"}}>
                    <img src={k2} alt="cake5" style={{   width:" -webkit-fill-available"}}/>
                    <h3 style={{"textAlign": "center" ,"fontSize": "23px", "fontFamily": "Cambria"}}>Specialties</h3>
                    <p style={{"fontFamily": "Times New Roman", "fontSize": "17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col" style={{"paddingTop": "5%"}}>
                      <img src={k3} alt="cake6" style={{  width:" -webkit-fill-available"}}/>
                    <h3 style={{"textAlign": "center" ,"fontSize": "23px", "fontFamily": "Cambria"}}>Specialties</h3>
                    <p style={{"fontFamily": "Times New Roman", "fontSize": "17px" ,"textAlign": "center" ,"paddingLeft": "10%", "paddingRight": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p></div>
                </div>
              </div>
        </div> 
      </div>
        </div>
    )
}
