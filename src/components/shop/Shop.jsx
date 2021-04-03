import shop from '../../images/shop.jpg';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
    return (
        <>
            <div className="col-md-12 shop">
                <div className="row">

                <img src={shop} alt="Shop"/>
                    
            <div className="centered">
            <h3>Free Delivery With</h3>

                        <h1>PIZZA OF THE DAY</h1>
                        <h4>Only 8.99 USD</h4>
                        <Link to="#"><button type="button" className="btn shop-btn">CALL NOW</button></Link>
                        </div>
                    </div>   
            </div>
                     </>

    );
};

export default Shop;
