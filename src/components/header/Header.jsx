import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <>
            <div className="container-fluid header position-sticky">
                <div className="row align-items-center justify-content-center text-center">

        <div className="left-header col-md-4 align-items-center">
                        <span>&#60;</span> <h3 className="d-inline">SM Pizzini </h3>
                        <h4 className="d-inline">by Syed Muzammil</h4><span>&#62;</span>
                        <Link to="#"><button className="btn d-inline" type="button"><i className="fas fa-external-link-alt"></i></button></Link>
        </div>




        <div className="col-md-6 center-header">
       
                        <button className="btn d-inline" type="submit"><Link to="#"> <i className="fas fa-shopping-cart"></i>  Add to Cart</Link></button>


                        <select className="selectpicker">
                            <option>$85</option>
                            <option>Ketchup</option>
                            <option>Relish</option>
                        </select>


                        <select className="selectpicker">
                            <option>Services</option>
                            <option>Ketchup</option>
                            <option>Relish</option>
                        </select>

</div>


                    <div className="col-md-2 right-header">
                        <Link to="./Login"><button className="btn login" type="submit">LOGIN</button></Link>
                        <Link to="#"><button className="btn" type="button"><i className="far fa-heart"></i></button></Link>

                        <Link to="#"><button className="btn" type="button"><i className="fas fa-chevron-down"></i></button></Link>


        </div>




      
    </div>
</div>
        </>
    );
}

export default Header;