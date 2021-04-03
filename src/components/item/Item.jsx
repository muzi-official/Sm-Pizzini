import './Item.css';
import pizza1 from '../../images/pizza1.png';
import pizza2 from '../../images/pizza2.png';
import pizza3 from '../../images/pizza3.png';
import pizza4 from '../../images/pizza4.png';
import pizza5 from '../../images/pizza5.png';
import pizza6 from '../../images/pizza6.png';

const Item = () => {
    return (
        <>
            <div className="container-fluid item">
                <div className="row align-items-center text-center justify-content-center">


                    <div className="col-md-10 cards">
                        <div className="row align-items-left text-center justify-content-left">
                            <div className="col-md-4"><img src={pizza1} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Low Carb Pizza</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$34</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 cards">
                        <div className="row align-items-center text-center justify-content-center">
                            <div className="col-md-4"><img src={pizza2} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Pizza Biscuit Bake</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$25</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 cards">
                        <div className="row align-items-left text-center justify-content-left">
                            <div className="col-md-4"><img src={pizza3} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Crazy Crust Pizza</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$49</h1>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-10 cards">
                        <div className="row align-items-left text-center justify-content-left">
                            <div className="col-md-4"><img src={pizza4} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Beer Pizza Crust</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$39</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 cards">
                        <div className="row align-items-left text-center justify-content-left">
                            <div className="col-md-4"><img src={pizza5} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Pizza Prosciutto</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$19</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 cards">
                        <div className="row align-items-left text-center justify-content-left">
                            <div className="col-md-4"><img src={pizza6} alt="img" /></div>
                            <div className="col-md-4">
                                <h1>Pizza Margeitta</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>$9</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container-fluid section">
                <div className="row align-items-center text-center justify-content-center">
                    <div className="col-md-12 section">
                        <div className="row align-items-center text-center justify-content-center">



                            <div className="col-md-4">
                                <img src={pizza1} alt="img" />
                                <h1>Crazy Crust Pizza</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$39</h1>
                            </div>


                            <div className="col-md-4">
                                <img src={pizza2} alt="img" />
                                <h1>Beer Pizza Crust</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$25</h1>
                            </div>




                            <div className="col-md-4">
                                <img src={pizza3} alt="img" />
                                <h1>Pizza Biscuit Bake</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$49</h1>
                            </div>


                            <div className="col-md-4">
                                <img src={pizza1} alt="img" />
                                <h1>Pizza Margeitta</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$39</h1>
                            </div>


                            <div className="col-md-4">
                                <img src={pizza2} alt="img" />
                                <h1>Pizza Prosciutto</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$19</h1>
                            </div>




                            <div className="col-md-4">
                                <img src={pizza3} alt="img" />
                                <h1>Low Carb Pizza</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus soluta ut expedita alias praesentium dolor ex accusantium ipsa hic vero!
                                    </p>
                                <h1>$34</h1>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Item;
