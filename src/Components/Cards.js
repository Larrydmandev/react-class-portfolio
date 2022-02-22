import react from "react";

function Cards(params) {
    return(
        <section className="bg-light card-sec" style={{height: '140vh', marginTop: '10%'}}>
            <h2 className="title">My Services</h2>
            <div className="row" style={{marginTop: '10%', paddingLeft: '5%'}}>
                <div className="col-4 main">
                    <div className='card ' style={{width: '19rem' , height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                               <i class="fa-brands fa-mdb" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>UI/UX Design</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='card' style={{width: '19rem' , height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                               <i class="fa-solid fa-chart-area" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>Web Design</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='card' style={{width: '19rem' , height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                                <i class="fa-solid fa-bell" id="icn" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>Web Development</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '5%' , paddingLeft: '5%'}}>
                <div className="col-4 cd">
                    <div className='card' style={{width: '19rem' , height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                                <i class="fa-solid fa-chart-pie" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>Graphic Design</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='card' style={{width: '19rem' , height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                              <i class="fa-brands fa-apple" id="pos" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='card' style={{width: '19rem', height: '15rem'}}>
                        <div className='card-body' style={{textAlign: 'center'}}>
                            <div className="card-pos">
                               <i class="fa-solid fa-at" style={{color: 'white', fontSize: '50px'}}></i>
                            </div>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards