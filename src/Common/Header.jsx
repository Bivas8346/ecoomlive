import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>

      {/* <!-- Pre Header --> */}
      <div id="pre-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <span>Suspendisse laoreet magna vel diam lobortis imperdiet</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="/"><img src="../assets/images/header-logo.png" alt="" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home
                  {/* <span class="sr-only">(current)</span> */}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to ="/product">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to ="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to ="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header