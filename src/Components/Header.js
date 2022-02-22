import React from 'react';

function Header(params) {
    return(
        <div className='d-flex hd' style={{paddingTop: '20%', paddingLeft: '20%'}}>
            <div>  
                <h1>My Name is <span style={{color: 'green'}}>Lanre</span></h1>
                <p>and i hate <span style={{color: 'red'}}>React</span></p>
            </div>
            <div>
                <img src='../images/rinon-profile.jpg' style={{width: '400px', height: '400px', borderRadius: '50%', position: 'absolute', bottom: '4px'}}/>
            </div>
        </div>
    )
}

export default Header