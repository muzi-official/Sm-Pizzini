import deliveryBoy from '../../images/delivery.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="container-fluid contact-section">

                <div className="container contact" id="Contact">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-8 left">
                            <h3>Quick Delivery</h3>
                            <h1>ORDER A <br /><span>PIZZA NOW</span></h1>
                            <form id="formdata" className="contactform" name="contactform">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="fname" placeholder="First Name"
                                            name="fname" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="lname" placeholder="Last Name"
                                            name="lname" required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="address"
                                            placeholder="Enter Street Address" name="address" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="apartment" placeholder="Apartment / Room"
                                            name="apartment" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="number" className="form-control" id="phone" placeholder="Phone Number"
                                            name="phone" required />
                                    </div>


                                    <div className="form-group col-md-12">
                                    <select className="selectpicker">
                                        <option className="opt_main">Pizza Type</option>
                                        <option className="opt_main">Ketchup</option>
                                        <option className="opt_main">Relish</option>
                                            <option className="opt_main">Ketchup</option>
                                            <option className="opt_main">Relish</option>
                                    </select>
                                    </div>


                                    <div className="form-group col-md-6">
                                        <input type="number" className="form-control" id="Enumber" placeholder="Enter Number"
                                            name="Enumber" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select className="selectpicker">
                                            <option className="opt_main">Size</option>
                                            <option className="opt_main">Ketchup</option>
                                            <option className="opt_main">Relish</option>
                                            <option className="opt_main">Ketchup</option>
                                            <option className="opt_main">Relish</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" className="btn contact-btn">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-4 right">
                            <img className="img-responsive img-fluid" src={deliveryBoy} alt="Delivery Boy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;