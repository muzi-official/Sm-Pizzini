import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {


  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container navbar">
        <Link className="navbar-brand" to="./Home">SM <span className="pizzini_logo">Pizzini</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="./Home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Menu</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop <i className="fa fa-check"></i>
          </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Burger News</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Pizza</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Sandwish</Link>
              </div>
            </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  News <i className="fa fa-check"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Burger News</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Pizza</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Sandwish</Link>
                </div>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
            </li>
          </ul>
  
        </div>
        </div>
  </nav>
    </>
  );
}

export default Navbar;