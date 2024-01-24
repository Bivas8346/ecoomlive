import React from 'react'

const Footer = () => {
  return (
    <>


      {/* <!-- Subscribe Form Starts Here --> */}
      <div class="subscribe-form">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <div class="line-dec"></div>
                <h1>Subscribe on PAYRAZOR now!</h1>
              </div>
            </div>
            <div class="col-md-8 offset-md-2">
              <div class="main-content">
                <p>Integer vel turpis ultricies, lacinia ligula id, lobortis augue. Vivamus porttitor dui id dictum efficitur. Phasellus vel interdum elit.</p>
                <div class="container">
                  <form id="subscribe" action="" method="get">
                    <div class="row">
                      <div class="col-md-7">
                        <fieldset>
                          <input name="email" type="text" class="form-control" id="email" required="" />
                        </fieldset>
                      </div>
                      <div class="col-md-5">
                        <fieldset>
                          <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Subscribe Form Ends Here --> */}

      {/* <!-- Footer Starts Here --> */}
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="logo">
                <img src="../assets/images/header-logo.png" alt="" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="footer-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Help</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">How It Works ?</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="social-icons">
                <ul>
                  <li><a href="https://www.facebook.com/" target='blank'><i class="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/?lang=en-in" target='blank'><i class="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/login" target='blank'><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="/"><i class="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Ends Here --> */}


      {/* <!-- Sub Footer Starts Here --> */}
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text">
                <p>Made By &copy; BIVAS DAS 24/01/2024 FOR PAYMENTGATEWAY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sub Footer Ends Here --> */}
    </>
  )
}

export default Footer