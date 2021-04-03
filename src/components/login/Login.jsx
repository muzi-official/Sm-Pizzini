import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
import './Login.css';
import Top from '../Topbar/Top';


const Login =() => {


    return (
        <>
<Header />
<Navbar />

<br/><br/>
    <div className="container main-content text-center align-items-center">
        <div className="row  text-center align-items-center justify-content-center">
            <div className="col-md-5 login-form">
                <h1>Login</h1>
                <input type="email" placeholder="Enter Your Email" />
                <input type="password" placeholder="Password" />
                <button type="button" className="btn login-btn">Login</button>
                <p>Not have an Account <Link to="./Signup">Sign Up</Link></p>
     <button type="button" id="authentication" className=" d-inline btn login-btn"><i className="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;Continue With Facebook</button>
     <button type="button" id="authentication" className="d-inline btn login-btn"><i className="fa fa-google"></i>&nbsp;&nbsp;&nbsp;Continue With Google</button>
        </div>
    </div>
    </div>
    <br/><br/>

<Top />
    <Footer />

        </>
    );
}
export default Login;