import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
            {/* <!-- Page Content --> */}
            {/* <!-- Items Starts Here --> */}
            <div class="featured-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="section-heading">
                                <div class="line-dec"></div>
                                <h1>Featured Items</h1>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <div id="filters" class="button-group">
                                <button class="btn btn-primary" data-filter="*">All Products</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="featured container no-gutter">

                <div class="row posts">
                    <div id="1" class="item new col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-01.jpg" alt=""/>
                                    <h4>PAPE JENS</h4>
                                    <h6>INR-1500.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="2" class="item high col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-02.jpg" alt=""/>
                                    <h4>odio JENS</h4>
                                    <h6>INR-25000.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="3" class="item low col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-03.jpg" alt=""/>
                                    <h4>Integer JACKETS</h4>
                                    <h6>INR-3550.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="4" class="item low col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-04.jpg" alt=""/>
                                    <h4>Sed Red SHOES</h4>
                                    <h6>INR-4500.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="5" class="item new high col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-05.jpg" alt=""/>
                                    <h4>Morbi BAGS</h4>
                                    <h6>INR-550.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="6" class="item new col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-06.jpg" alt=""/>
                                    <h4>Urna Hand Bags</h4>
                                    <h6>INR-6500.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="7" class="item new high col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-03.jpg" alt=""/>
                                    <h4>Proin JACKET</h4>
                                    <h6>INR-758.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="8" class="item low new col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-02.jpg" alt=""/>
                                    <h4>Nullam JENS</h4>
                                    <h6>INR-859.00</h6>
                            </div>
                        </Link>
                    </div>
                    <div id="9" class="item new col-md-4">
                        <Link to="/single">
                            <div class="featured-item">
                                <img src="../assets/images/product-01.jpg" alt=""/>
                                    <h4>Cras JENS</h4>
                                    <h6>INR-950.00</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div class="page-navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul>
                                <li class="current-page"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Featred Page Ends Here --> */}
        </>
    )
}

export default Products