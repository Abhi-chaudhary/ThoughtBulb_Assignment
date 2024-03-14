import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
     
      <div className="header-items">
       

        <Link to="/tickets" className="btn btn-block">
          View  Tickets
        </Link>
      </div>
    </div>
  );
}

export default Home;
