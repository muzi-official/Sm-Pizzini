import './Content.css';
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <>
            <div className="row">
                <div className="col-md-12" id="banner">




                    <div className="col-md-9 content">

                        <h2>Pizza Delivery</h2>

                        <h1>SM PiZZINI</h1>
                        <p className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos eligendi, ullam facere facilis, doloribus fugit
                        quisquam dolores blanditiis ipsum
                        accusantium dignissimos placeat laboriosam nemo aliquid!
      Tenetur, odit sit labore iste autem sed.</p>

                        <Link to="#"><button type="button" className="btn content-btn">Delivery Now</button></Link>

                    </div>

                </div>
            </div>


        </>
    );
}

export default Banner;