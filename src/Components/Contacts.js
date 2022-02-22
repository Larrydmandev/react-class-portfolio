import react from "react";

function Contacts(params) {
    return(
        <section style={{marginTop: '10%'}}>
            <h2 className="title" style={{marginBottom: '10%'}}>Contact Me</h2>
            <form>
                <div className="d-flex  form-div"> 
                <div class="mb-3">
                    <input type="name" placeholder="Enter your full name" className='form-control form-name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  
                    <input type="email" placeholder="Enter your full email" className='form-control form-email'  id="exampleInputPassword1"/>
                </div>
                </div>
                
                <div class="mb-4">
                    <textarea name="" className='form-text form-control' cols="10" rows="10" placeholder="Your Message"></textarea>
                </div>
                <p className="text-danger form-p">Leave a Message for me</p>
                <button type="submit" className="btn btn-primary form-btn rounded-pill">Submit</button>
            </form>
        </section>
    )
}

export default Contacts