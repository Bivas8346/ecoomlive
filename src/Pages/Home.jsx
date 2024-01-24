import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            {/* <!-- Page Content --> */}
            {/* <!-- Banner Starts Here --> */}
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="caption">
                                <h2>Ecommerce HTML Template</h2>
                                <div class="line-dec"></div>
                                <p>DEMO HTML Template can be DONE BY BIVAS DAS theme. Total <strong>5 pages</strong> included. USE RAZORPAY BOOTSTRAP.</p>
                                   
                                <div class="main-button">
                                    <a href="/">Order Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Ends Here --> */}

            {/* <!-- Featured Starts Here --> */}
            <div class="featured-items">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                                <div class="line-dec"></div>
                                <h1>Featured Items</h1>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="owl-carousel owl-theme">
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-01.jpg" alt="Item 1" />
                                        <h4>PAPE JENS</h4>
                                        <h6>INR-1500.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-02.jpg" alt="Item 2" />
                                        <h4>odio JENS</h4>
                                        <h6>INR-25000.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-03.jpg" alt="Item 3" />
                                        <h4>Integer JACKETS</h4>
                                        <h6>INR-3550.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../../assets/images/item-04.jpg" alt="Item 4" />
                                        <h4>Urna Hand Bags</h4>
                                        <h6>INR-6500.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-05.jpg" alt="Item 5" />
                                        <h4>Morbi BAGS</h4>
                                        <h6>INR-550.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-06.jpg" alt="Item 6" />
                                        <h4>Sed Red SHOES</h4>
                                        <h6>INR-4500.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-04.jpg" alt="Item 7" />
                                        <h4>Urna Hand Bags</h4>
                                        <h6>INR-6500.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-05.jpg" alt="Item 8" />
                                        <h4>Morbi BAGS</h4>
                                        <h6>INR-550.00</h6>
                                    </div>
                                </Link>
                                <Link to="/single">
                                    <div class="featured-item">
                                        <img src="../assets/images/item-06.jpg" alt="Item 9" />
                                        <h4>Sed Red SHOES</h4>
                                        <h6>INR-4500.00</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Featred Ends Here --> */}




        </>
    )
}

export default Home