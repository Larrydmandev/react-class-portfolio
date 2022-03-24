import react from 'react'

function Navbar(params) {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Portfolio</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{paddingLeft: '30%'}}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/Projects">Projects</a>
              </li>      
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navbar