import react from "react";
import {Link} from 'react-router-dom'

function ErrorPage(params) {
  return (
    <div className="text-center mt-5 display-5">
      <h1>Sorry the page you requested for was moved or does exist</h1>
      <button className="btn btn-success">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
