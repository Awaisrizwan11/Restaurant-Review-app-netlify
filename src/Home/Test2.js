import React from 'react'
import k4 from '../Images/k4.png'
import k5 from '../Images/k5.png'
import k6 from '../Images/k6.png'
import k7 from '../Images/k7.png'

export default function Test2() {
    return (
        <div>
            <div className="row" style={{paddingTop:"20px"}}>
            <div className="bg-image"></div>
                <div className='Test2'>
                        <div className="col-md-2">
                        <img className="img-responsive" src={k4} alt='k4'/>
                        </div>
                        <div className="col-md-2">
                        <img className="img-responsive" src={k5} alt='k5'/>
                        </div>

                        <div className="col-md-2">
                        <img className="img-responsive" src={k6} alt='k6'/>
                        </div>
                        <div className="col-md-2">
                        <img className="img-responsive" src={k7} alt='k7'/>
                        </div>
                        </div>   
                        </div>
                        
        </div>
    )
}
