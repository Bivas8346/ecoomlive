import React from 'react'

const Contact = () => {
    return (
        <>

            {/* <!-- Page Content --> */}
            {/* <!-- About Page Starts Here --> */}
            <div class="contact-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                                <div class="line-dec"></div>
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="map">

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width={"100%"} height={"500px"} frameBorder={"0"} style={{ border: "0" }} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="right-content">
                                <div class="container">
                                    <form id="contact" action="" method="post">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <fieldset>
                                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-6">
                                                <fieldset>
                                                    <input name="email" type="text" class="form-control" id="email" placeholder="Your email..." required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" class="button">Send Message</button>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="share">
                                                    <h6>You can also keep in touch on: <span><a href="https://www.facebook.com/" target='blank'><i class="fa fa-facebook"></i></a><a href="https://www.linkedin.com/login" target='blank'><i class="fa fa-linkedin"></i></a><a href="https://twitter.com/?lang=en-in" target='blank'><i class="fa fa-twitter"></i></a></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Page Ends Here --> */}


        </>
    )
}

export default Contact