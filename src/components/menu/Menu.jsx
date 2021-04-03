import './Menu.css';
import about1 from '../../images/menu.png';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
<div className="container about" id="Menu">
<div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-5 right">
                        <img className="img-responsive img-fluid" src={about1} alt="pizza" />
                    </div>


                    <div className="col-md-7 left">

                            <h3>The Pizza Menu</h3>

                        <h1>SM PIZZA THIN CRUST</h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quos eligendi, ullam facere facilis, doloribus fugit
                            quisquam dolores blanditiis ipsum
                            accusantium dignissimos placeat laboriosam nemo aliquid!
      Tenetur, odit sit labore iste autem sed.</p>
                        <Link to="#"><button type="button" className="btn about-btn">View More</button></Link>
    </div>




</div>
        </div>
        </>
    
    );
};

export default Menu;
