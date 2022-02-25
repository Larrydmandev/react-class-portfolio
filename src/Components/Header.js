import React from 'react';

function Header(params) {
    const textDisplay = document.getElementById('text')
    const phrases = [' HTML.', ' CSS.', ' REACT.']
    let i = 0
    let j = 0
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false


    function loop() {
        isEnd = false
        //textDisplay.innerHTML = currentPhrase.join('')
        if (i < phrases.length) {        
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j])
                j++
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j])
                j--
            }

            if (j == phrases[i].length) {
                isEnd = true
               isDeleting = true
            }

            if (isDeleting && j === 0) {
                currentPhrase = []
                isDeleting = false
               i++ 
               if (i == phrases.length)   {
                   i = 0
               }
            }
        }
        const spedUp = Math.random() * (80 - 50) + 50
        const normalSpeed = Math.random() * (300 - 200) +  200
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
        setTimeout(loop,time)
    }
    loop()



    return(
        <div className='d-flex hd' style={{paddingTop: '20%', paddingLeft: '20%'}}>
            <div>  
                <h1>My Name is <span style={{color: 'green'}}>Lanre</span></h1>
                <p>and i am a <span style={{color: 'green'}}>Programmer using</span></p>
                {/* <h3>i do</h3> */}
                <h1 id='text'></h1>
            </div>
            <div>
                <img src='../images/rinon.png' style={{width: '400px', height: '400px', borderRadius: '50%', position: 'absolute', bottom: '4px'}}/>
            </div>
        </div>
    )
}


export default Header
