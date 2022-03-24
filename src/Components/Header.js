import React from 'react';
import Navbar from './Navbar';
import Progress from './Progress'
import Cards from './Cards';
import Portfolio from './Portfolio';
import Footer from "./Footer"

function Header(params) {
    return(
        <div>   
            <Navbar/>
           <div className='d-flex hd' style={{paddingTop: '20%', paddingLeft: '20%'}}>
                <div>  
                    <h1>My Name is <span style={{color: 'green'}}>Lanre</span></h1>
                    <h1>I am A Programmer</h1>
                    <h1 id='text'></h1>
                </div>
                <div>
                    <img src='../images/rinon.png' style={{width: '400px', height: '400px', borderRadius: '50%', position: 'absolute', bottom: '4px'}}/>
                </div>
           </div>
           <Progress/>
           <Cards/>
           <Portfolio/>
           <Footer/>
        </div>
    )
}


export default Header
