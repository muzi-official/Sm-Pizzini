import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small  pt-4">

                <div className="container text-center text-md-left">

                    <div className="row">

                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">POPULAR PIZZA</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Pizza Prosciutto</Link>
                                </li>
                                <li>
                                    <Link to="#">Low Carb Pizza</Link>
                                </li>
                                <li>
                                    <Link to="#">Pizza Margeitta</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">TRENDING SEARCHES</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Crazy Crust Pizza</Link>
                                </li>
                                <li>
                                    <Link to="#">Crazy Crust Pizza</Link>
                                </li>
                                <li>
                                    <Link to="#">Pizza Biscuit Bake</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Contact US</Link>
                                </li>
                                <li>
                                    <Link to="#">Syedmuzammilashfaque@gmail.com</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="col-md-2 mx-auto">

                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow &nbsp;&nbsp;Us</h5>
                            <ul className="list-unstyled">
                                <li className="d-inline">
                                    <Link to="https://www.facebook.com/officialmuzi/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                </li>
                                <li className="d-inline">
                                    <Link to="https://www.facebook.com/officialmuzi/" target="_blank"><i className="fa fa-twitter"></i></Link>
                                </li>
                                <li className="d-inline">
                                    <Link to="https://www.facebook.com/officialmuzi/" target="_blank"><i className="fa fa-instagram"></i></Link>
                                </li>
                                <li className="d-inline">
                                    <Link to="https://www.facebook.com/officialmuzi/" target="_blank"><i className="fa fa-youtube"></i></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 All Right Reserved:
       <Link to="https://www.youtube.com/channel/UCZh1mUDnt9k9jmzXpd_okGw" target="_blank">  SM Pizzini.com</Link>
                </div>
            </footer>
        </>
    );
}
export default Footer;