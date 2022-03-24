import react from "react";
import Navbar from "../Navbar";
import Footer from '../Footer'


function About(params) {
  return (
    <section>
      <Navbar />
      <div style={{marginTop: '5%'}}>
        <h1 style={{textAlign: 'center'}}>About The Company</h1>
      </div>
      <div>
        <p style={{fontSize: '20px', textAlign: 'center', width: '70%', position: 'relative', left: '20%'}}>
          <span style={{fontSize: '80px'}}>𝕎𝕖</span>are a tech company focused on providing awesome and fun websites for our users. We were founded in the year 2020 by Larry Dev and Mark Rvber there are both now a main part of this company 
        </p>
      </div>
      
      <div style={{marginTop: '5%', marginBottom: '5%'}}>
        <h1 style={{textAlign: 'center'}} className="title">About Our Workers</h1>
      </div>


      <div className="row">
        <div className="col-4">
          <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/larrydev.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Larry Dev</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>CEO</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{width: '18rem', marginLeft: '10%'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/markdasher.jpg" alt="" className="rounded-circle" style={{width: '40%', height: '40%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Mark Dasher</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>COO</h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/samroberto.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Sam Roberto</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>CFO</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginTop: '5%'}}>
        <div className="col-4">
          <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/leo.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Leo Mclaren</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>UI/UX Designer</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/griffinWooldridge.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Griffin Wolldridge</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>Frontend Developer</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card main-card" style={{width: '18rem'}}>
            <div className="card-body">
              <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                <img src="../images/sazadaryan.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
              </div>
              <h5 className="card-title" style={{textAlign: 'center'}}>Sazad Aryan</h5>
              <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>Backend Developer</h6>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
  
      <Footer/>
    </section>
  );
}

export default About;
