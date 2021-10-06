import React from 'react'
import cake4 from '../Images/cake4.jpg'
import cake1 from '../Images/cake.jpg'
import cake2 from '../Images/birthday.jpg'
import cake3 from '../Images/cake4.jpg'
import k1 from '../Images/k1.jpg'
import k2 from '../Images/k2.jpg'
import k3 from '../Images/k3.jpg'

export default function About() {
    return (
        <div>
            <div className="row"  style={{"padding": "2%"}}>
          <div className="col" >
           <h4 style={{"font-family": "quicksandlight" , "font-size": "35px"}}>Choose Your Flavour</h4>
           <p style={{"color": "#7c7c7c" , "font-size": "20px" , "line-height": "28px" , "font-family": "Cambria" }}>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin , lorem qui bibendum auctor , nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin gravida nibh Ipsum proin gravida nibh vel velit nisi elit consequa . </p>
          </div>
          <div className="col">
          <img src={cake4} alt="cake2" style={{"width": "auto", "height":"auto"}}/>
          </div>
          <div className="col">
            <div className="container">
                <div className="row g-2">
                  <div className="col-6">
                   
                    <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "font-size": "40px" ,"font-family":"Quicksandlight"}}>420</span>
                    <p style={{"color": "#c9a74d" , "font-size": "16px" ,"font-family":"Quicksandlight"}}>Projects</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "font-size": "40px" ,"font-family":"Quicksandlight"}}>254</span>
                    <p style={{"color": "#c9a74d" , "font-size": "16px" ,"font-family":"Quicksandlight"}}>Awards</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "font-size": "40px" ,"font-family":"Quicksandlight"}}>853</span>
                    <p style={{"color": "#c9a74d" , "font-size": "16px" ,"font-family":"Quicksandlight"}}>Celebrations</p>
                  </div>
                  <div className="col-6">
                   <span className="eltdf-counter eltdf-zero-counter" style={{"color": "#c9a74d" , "font-size": "40px" ,"font-family":"Quicksandlight"}}>987</span>
                    <p style={{"color": "#c9a74d" , "font-size": "16px" ,"font-family":"Quicksandlight"}}>customers</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      
      <div className="row g-0">
        <div className="col col-md" style={{"background-color": "#C5A368"}}>
            <h2 style={{"font-size":" 35px ","line-height":" 1.1em", "color":"white", "padding-top": "25%" ,"padding-left": "20%"}}>Best Design</h2>
            <p style={{"padding-left": "20%" ,"padding-right": "15%", "font-size": "20px" ,"font-family": "Cambria",  "color": "white", "padding-top": "3%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin gravida nibh</p>
            <button type="button" className="btn btn-primary btn-lg" style={{"background-color":"black", "margin-top": "10%" ,"margin-left": "20%" ,"font-size": "16px" ,"margin-bottom": "20%"}}>PURCHASE NOW</button>
        </div>
        <div className="col-sm col-md">
            <div className="container">
                <div className="row row-cols-3" style={{"padding-top": "8%", "padding-left": "5%", "padding-right": "5%"}}> 
                  <div className="col" >
                      <img src={cake1} alt="cake1" style={{    width: "-webkit-fill-available"}}/>
                      <h3 style={{"text-align": "center" ,"font-size": "23px" ,"font-family": "Cambria"}}>Specialties</h3>
                      <p style={{"font-family": "Times New Roman" ,"font-size":"17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col">
                    <img src={cake3} alt="cake2" style={{ width:" -webkit-fill-available"}}/>
                    <h3 style={{"text-align": "center" ,"font-size": "23px", "font-family": "Cambria"}}>Specialties</h3>
                    <p style={{"font-family": "Times New Roman", "font-size": "17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col">
                    <img src={cake2} alt="cake3" style={{width:" -webkit-fill-available"}}/>
                    <h3 style={{"text-align": "center" ,"font-size": "23px", "font-family": "Cambria"}}>Specialties</h3>
                    <p style={{"font-family": "Times New Roman", "font-size": "17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col" style={{"padding-top": "5%"}}>
                      <img src={k1} alt="cake4" style={{  width:" -webkit-fill-available"}}/>
                    <h3 style={{"text-align": "center" ,"font-size": "23px", "font-family": "Cambria"}}>Specialties</h3>
                    <p style={{"font-family": "Times New Roman", "font-size": "17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p></div>
                  <div className="col" style={{"padding-top": "5%"}}>
                    <img src={k2} alt="cake5" style={{   width:" -webkit-fill-available"}}/>
                    <h3 style={{"text-align": "center" ,"font-size": "23px", "font-family": "Cambria"}}>Specialties</h3>
                    <p style={{"font-family": "Times New Roman", "font-size": "17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p>
                  </div>
                  <div className="col" style={{"padding-top": "5%"}}>
                      <img src={k3} alt="cake6" style={{  width:" -webkit-fill-available"}}/>
                    <h3 style={{"text-align": "center" ,"font-size": "23px", "font-family": "Cambria"}}>Specialties</h3>
                    <p style={{"font-family": "Times New Roman", "font-size": "17px" ,"text-align": "center" ,"padding-left": "10%", "padding-right": "10%"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliq bibin.</p></div>
                </div>
              </div>
        </div> 
      </div>
        </div>
    )
}
