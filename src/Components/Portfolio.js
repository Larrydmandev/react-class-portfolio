import react from "react";

function Portfolio(params) {
    return (
        <section style={{marginTop: '10%'}}>
            <h2 className="title port-h2">My Portfolio</h2>

            <div className="row m-row1">
               <div className="col-4">
                  <img src="../images/benz.jpg" className="img-fluid img-port" />
                  <button className="btn btn-primary img-btn">View More</button>
               </div>
               <div className="col-4">
                   <img src="../images/virgin.jpg" className="img-fluid img-port" />
                   <button className="btn btn-primary img-btn">View More</button>
               </div>
               <div className="col-4">
                   <img src="../images/nike.jpg" className="img-fluid img-port" />
                   <button className="btn btn-primary img-btn">View More</button>
               </div>
            </div>
            <div className="row m-row2">
               <div className="col-4">
                  <img src="../images/benz.jpg" className="img-fluid img-port" />
                  <button className="btn btn-primary img-btn">View More</button>
               </div>
               <div className="col-4">
                  <img src="../images/virgin.jpg" className="img-fluid img-port" />
                  <button className="btn btn-primary img-btn">View More</button>
               </div>
               <div className="col-4">
                   <img src="../images/nike.jpg" className="img-fluid img-port" />
                   <button className="btn btn-primary img-btn">View More</button>
               </div>
            </div>
        </section>
    )
};



export default Portfolio