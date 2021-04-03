import './About.css';
import about1 from '../../images/about1.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
<div className="container about" id="About">
<div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-7 left">

                            <h3>About Us</h3>

                        <h1>WELCOME TO <br /><span>SM PIZZINI</span></h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quos eligendi, ullam facere facilis, doloribus fugit
                            quisquam dolores blanditiis ipsum
                            accusantium dignissimos placeat laboriosam nemo aliquid!
      Tenetur, odit sit labore iste autem sed.</p>
                        <Link to="#"><button type="button" className="btn about-btn">Read More</button></Link>
    </div>

<div className="col-md-5 right">
                        <img className="img-responsive img-fluid" src={about1} alt="pizza" />
</div>


</div>
        </div>
        </>
    
    );
};

export default About;
