import Header from '../header/Header'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
import Top from '../Topbar/Top';
import './Signup.css';


const Signup = () => {
    return (
        <>
        <Header />
        <Navbar />

        <br/><br/>
      <div className="container main-content text-center align-items-center">
        <div className="row text-center align-items-center justify-content-center">
            <div className="col-md-5 login-form">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-Enter-Password" />
                <button type="button" className="btn login-btn">Sign Up</button>
                <p>Already have an Account <Link to="./Login">Login in</Link></p>
            </div>
        </div>
    </div>
<br/><br/>

<Top />
      <Footer />
        </>
    );
}

export default Signup;