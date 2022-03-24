import react from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {Link} from 'react-router-dom'

function Projects(params) {
    return(
        <section>
            <Navbar/>
            <div className="" style={{marginBottom: '10%', marginTop: '5%'}}>
                <h1 className="title" style={{textAlign: 'center'}}>My Projects</h1>
            </div>

            <div className="row" style={{marginBottom : '10%'}}>
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot-bootstrap.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>Bootstrap Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot 7.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>Admin Dashboard Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot 8.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>E-Commerce Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
            </div>






            <div className="row">
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot 10.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>Bootstrap Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot 6.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>CSS Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
               <div className="col-4" style={{}}>
                    <img src="../images/Screenshot 8.png" alt="" style={{width: '100%', height: '100%', marginBottom: '3%'}}/>
                    <h6 style={{textAlign: 'center'}}>Bootstrap Project</h6>
                    <button className="btn btn-primary" style={{position: 'relative', left:'40%'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>View More</Link>
                    </button>
                </div>
            </div>
              
           

          <Footer/>
        </section>
    )
}

export default Projects