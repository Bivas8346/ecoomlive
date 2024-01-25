import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Single = () => {

  const [product, setProduct] = useState({
    name: "Branded Jens",
    price: 1500
  })

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_4gZVni03nkdfdY",
      amount: data.amount,
      currency: data.currency,
      name: product.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://razorpay-testpaybackend.onrender.com/api/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        }
        catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc"
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const handlePayment = async () => {
    try {
      const orderUrl = "https://razorpay-testpaybackend.onrender.com/api/orders";
      const { data } = await axios.post(orderUrl, { amount: product.price });
      console.log(data);
      initPayment(data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>

      {/* <!-- Single Starts Here --> */}
      <div class="single-product">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <div class="line-dec"></div>
                <h1>Single Product</h1>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-slider">
                <div id="slider" class="flexslider">


                  <img src="../assets/images/big-01.jpg" width={500} />


                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-content">
                <h4>{product.name}</h4>
                <h6>price: <span> {product.price}</span></h6>
                <p>Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. </p>
                <span>7 left on stock</span>

                <button onClick={handlePayment} type="submit" class="button">Order Now</button>

                <div class="down-content">
                  <div class="categories">
                    <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Single Page Ends Here --> */}
    </>
  )
}

export default Single