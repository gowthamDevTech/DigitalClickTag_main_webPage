import React from 'react'

export function Home3content() {
  return (
    <>
    <header className="header">
        <a href="#" className="logo"><img src="./images/image.png" alt="" /></a>
        <div className="fas fa-bars"></div>
        <nav className="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#service">services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#team">team</a></li>
                <li><a href="careers.html">career</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    </header>

  <section id="home" className="home">
      <h1>Bring your Business Online</h1>
      <h2>with IT Company Services</h2>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </section>

  <section id="about" className="about">
    <h1 className="heading">about us</h1>
    <div className="row">
        <div className="content">
            <h3>We make creativity work for your brand!</h3>
            <p>Ours is a team of creatives that is brainstorming on great ideas,<b> all. the. time.</b><br />
                With our skills put together, you get an ensemble capable of doing anything and everything your brand needs.</p>
            <a href="#"><button className="btn">Read More</button></a>
        </div>
    </div>
  </section>

  <div className="pt-5 pb-5" style={{backgroundColor: "#f2f2f2"}}>
    <div className="container">
      <div className="row">
        <div className="section-head col-sm-12" id="service">
          <h1>Our Services</h1>
          <p>We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-laptop"></i></span>
            <h6>Web App Development</h6>
            <p>Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-android"></i></span>
            <h6>Mobile App Development</h6>
            <p>We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-magic"></i></span>
            <h6>Digital Marketing</h6>
            <p>The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script> */}

  <section className="counters">
    <div className="container">
        <div>
            <i className="far fa-clock fa-4x"></i>
            <div className="counter" data-target="13500">0</div>
            <h3>Working Hours</h3>
        </div>
        <div>
            <i className="fas fa-gift fa-4x"></i>
            <div className="counter" data-target="720">0</div>
            <h3>Completed Projects</h3>
        </div>
        <div>
            <i className="fas fa-users fa-4x"></i>
            <div className="counter" data-target="480">0</div>
            <h3>Happy Clients</h3>
        </div>
        <div>
            <i className="fas fa-award fa-4x"></i>
            <div className="counter" data-target="120">0</div>
            <h3>Awards Received</h3>
        </div>
    </div>
  </section>

  <div className="pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="section-head-1 col-sm-12" style={{textAlign: "center"}}>
          <h4 style={{marginTop: "-5rem"}} id="portfolio"><span>Our</span> Projects</h4>
          <p>The objective of IT Company is to enable a large number of youth to take up <br />industry-relevant skill training that will help them<br /> in securing a better livelihood.</p>
        </div>
        
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
            <h6>Project-1</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.<br /><br /><br /></p>
          </div>
        </div>
        
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
            <h6>Project-2</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.<br /><br /><br /></p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
            <h6>Project-3</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.<br /><br /><br /></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="communicate">
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <a href="#contact"><button className="btn">Contact Now</button></a>
  </div>

  <div className="testimonials mt-100">
    <div className="container">
        <div className="section-header" style={{textAlign: "center"}}>
            <h2 style={{marginTop: "-15rem"}}>Testimonials</h2>
            <p style={{fontSize: "2rem"}}>See what people have to say about us</p>
        </div>

        <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item row align-items-center">
                <div className="testimonial-img">
                    <img src="./images/testimonial-1.jpg" alt="Testimonial image" />
                </div>
                <div className="testimonial-text">
                    <h3>Person-1</h3>
                    <h4>Designation</h4>
                    <p>Testimonial</p>
                </div>
            </div>
            <div className="testimonial-item row align-items-center">
                <div className="testimonial-img">
                    <img src="./images/testimonial-2.jpg" alt="Testimonial image" />
                </div>
                <div className="testimonial-text">
                    <h3>Person-2</h3>
                    <h4>Designation</h4>
                    <p>Testimonial</p>
                </div>
            </div>
            <div className="testimonial-item row align-items-center">
                <div className="testimonial-img">
                    <img src="./images/testimonial-3.jpg" alt="Testimonial image" />
                </div>
                <div className="testimonial-text">
                    <h3>Person-3</h3>
                    <h4>Designation</h4>
                    <p>Testimonial</p>
                </div>
            </div>
            <div className="testimonial-item row align-items-center">
                <div className="testimonial-img">
                    <img src="./images/testimonial-4.jpg" alt="Testimonial image" />
                </div>
                <div className="testimonial-text">
                    <h3>Person-4</h3>
                    <h4>Designation</h4>
                    <p>Testimonial</p>
                </div>
            </div>
            <div className="testimonial-item row align-items-center">
                <div className="testimonial-img">
                    <img src="./images/testimonial-5.jpg" alt="Testimonial image" />
                </div>
                <div className="testimonial-text">
                    <h3>Person-5</h3>
                    <h4>Designation</h4>
                    <p>Testimonial</p>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div className="clients mt-100">
    <div className="container">
        <div className="section-header">
            <h2>Our Clients</h2>
            <p>We don&apos;t just build softwares, we build your business.</p>
        </div>
        <div className="owl-carousel clients-carousel">
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
            <img src="./images/image.png" alt="Client Logo" />
        </div>
    </div>
  </div>

  <a href="#" className="back-to-top"><i className="ion-ios-arrow-up"></i></a>
  {/* <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/lightbox/js/lightbox.min.js"></script> */}

  <section className="team" style={{marginTop: "7rem"}}>
    <h1 className="heading" style={{marginTop: "-1.5rem"}} id="team">our team</h1>
    <p></p>
    <div className="row">
        <div className="card">
            <div className="image">
                <img src="./images/pexels-andrea-piacquadio-845434.jpg" alt="Team member 1" />
            </div>
            <div className="info">
                <h3>Schott Watkins</h3>
                <span>Web Developer</span>
                <div className="icons">
                    <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
                    <a href="https://twitter.com/login" className="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="card">
            <div className="image">
                <img src="./images/pexels-vinicius-wiesehofer-1130624.jpg" alt="Team member 1" />
            </div>
            <div className="info">
                <h3>Nicole Bell</h3>
                <span>Mobile Developer</span>
                <div className="icons">
                    <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
                    <a href="https://twitter.com/login" className="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="card">
            <div className="image">
                <img src="./images/pexels-hussein-altameemi-2776353.jpg" alt="Team member 1" />
            </div>
            <div className="info">
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <div className="icons">
                    <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
                    <a href="https://twitter.com/login" className="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="card">
            <div className="image">
                <img src="./images/pexels-andrea-piacquadio-745136.jpg" alt="Team member 1" />
            </div>
            <div className="info">
                <h3>Rose Matthews</h3>
                <span>Web Designer</span>
                <div className="icons">
                    <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
                    <a href="https://twitter.com/login" className="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section id="contact" className="contact">
    <h1 className="heading">get in touch</h1>
  </section>
  <div className="contact-in">
    <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin" width="100%" height="auto" style={{border: 0}} allowFullScreen={true} loading="lazy"></iframe>
    </div>
    <div className="contact-form">
        <form action="./contactme.php" method="POST">
            <input type="text" name="name" placeholder="Name" className="contact-form-txt" required />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" maxLength={10} className="contact-form-phone" />
            <input type="email" name="email" placeholder="Email" className="contact-form-email" required />
            <textarea placeholder="Your Message" name="message" className="contact-form-txtarea" required></textarea>
            <input type="submit" value="Submit" name="submit" className="contact-form-btn" />
        </form>
    </div>
  </div>

  <section className="faq">
    <h1 className="heading" style={{marginTop: "-2rem", color: "#00bfff"}} id="faq">FAQ</h1>
    <div className="row">
        <div className="accordion-container">
            <div className="accordion">
                <div className="accordion-header">
                    <span>+</span>
                    <h3>How much will it cost?</h3>
                </div>
                <div className="accordion-body">
                    <p>To get a better idea of the cost of what you want to build, give us a quick phone call. We&apos;ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. 
                        Then we&apos;ll be able to give you a ballpark figure. 
                        If you&apos;re still interested, we&apos;ll come to your place of business and come up with a firm quote.</p>
                </div>
            </div>
            <div className="accordion">
                <div className="accordion-header">
                    <span>+</span>
                    <h3>How long it takes to design?</h3>
                </div>
                <div className="accordion-body">
                    <p>The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. 
                        The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.</p>
                </div>
            </div>
            <div className="accordion">
                <div className="accordion-header">
                    <span>+</span>
                    <h3>How do I associate with IT Company?</h3>
                </div>
                <div className="accordion-body">
                    <p>The process begins when you contact us with your requirements. We analyze your requirements and respond to you. 
                        On the basis of the further discussion, you can choose an engagement model that suits you the best. 
                        After that, we begin the process of development.</p>
                </div>
            </div>
            <div className="accordion">
                <div className="accordion-header">
                    <span>+</span>
                    <h3>Can you help my current site look more professional?</h3>
                </div>
                <div className="accordion-body">
                    <p>Yes. Give us your requirements and we have experienced expertise to help you give a 
                        new professional look that really wonders!</p>
                </div>
            </div>
            <div className="accordion">
                <div className="accordion-header">
                    <span>+</span>
                    <h3>When do I pay?</h3>
                </div>
                <div className="accordion-body">
                    <p>For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. 
                        We understand that this is a big investment and want to help you budget for the expense in whatever way possible.
                        We accept checks, PayPal, and all major credit cards.</p>
                </div>
            </div>
        </div>
    </div>
  </section>

  <div className="footer">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>About Us</h4>
                    <ul>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#">Home</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#about">About us</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#service">Our services</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#">Terms & condition</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#team">Team</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="careers.html">Career</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#contact">Contact</a></li>
                        <li><i className="ion-ios-arrow-forward"></i> <a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact" style={{fontSize: "1.5rem"}}>
                    <h4>Contact Us</h4>
                    <p>
                        1300  Center Avenue<br />
                        Fresno, California<br />
                        United States <br />
                        <strong>Phone:</strong> +123-456-7890<br />
                        <strong>Email:</strong> info@example.com<br />
                    </p>

                    <div className="social-links">
                        <a href="https://www.facebook.com/"><i className="ion-logo-facebook"></i></a>
                        <a href="https://twitter.com/login?lang=en"><i className="ion-logo-twitter"></i></a>
                        <a href="https://www.linkedin.com/"><i className="ion-logo-linkedin"></i></a>
                        <a href="https://www.instagram.com/"><i className="ion-logo-instagram"></i></a>
                        <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i className="ion-logo-googleplus"></i></a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-newsletter">
                    <h4>Subscription</h4>
                    <p>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
                    <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 copyright" style={{color: "#fff", fontSize: "1.3rem"}}>
                Copyright &copy; 2021 IT Company Website. All Rights Reserved.
            </div>
        </div>
    </div>
  </div>

  <a href="#" className="back-to-top"><i className="ion-ios-arrow-up"></i></a>
    </>
  )
}
