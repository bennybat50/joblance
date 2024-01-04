import { Link } from "react-router-dom";
import banner_1 from "../assets/images/images/banner/1.jpg"
import f_bg from "../assets/images/images/f-bg.jpg"
import logo_11 from "../assets/images/images/logo-11.png";
import logo_white from "../assets/images/images/logo-white.png"


export default function Contact(){
    return(
        <div>
            
<body data-anm=".anm">
 

 <div className="page-wraper">

     {/* <!-- HEADER START --> */}
     <header className="site-header header-style-3 h-page-11-hdr mobile-sider-drawer-menu">

         <div className="sticky-header main-bar-wraper  navbar-expand-lg">
             <div className="main-bar">

                 <div className="container-fluid clearfix">

                     <div className="logo-header">
                         <div className="logo-header-inner logo-header-one">
                             <a className="link-tag" href="index">
                             <img src={logo_11} alt="" />

                             </a>
                         </div>
                     </div>

                     {/* <!-- NAV Toggle Button --> */}
                     <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                         className="navbar-toggler collapsed">
                         <span className="sr-only">Toggle navigation</span>
                         <span className="icon-bar icon-bar-first"></span>
                         <span className="icon-bar icon-bar-two"></span>
                         <span className="icon-bar icon-bar-three"></span>
                     </button>

                     {/* <!-- MAIN Vav --> */}
                     <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                         <ul className=" nav navbar-nav">
                             <li><Link className="link-tag" to="/">Home</Link></li>
                             <li><Link className="link-tag" to="/job-list">Jobs</Link></li>
                             <li><Link className="link-tag" to="/employer-list">Employers</Link></li>
                             <li><Link className="link-tag" to="/about">About Us</Link></li>
                             <li><Link className="link-tag" to="/contact">Contact</Link></li>
                         </ul>

                     </div>

                     {/* <!-- Header Right Section--> */}
                     <div className=" link-tag extra-nav header-2-nav">
                            <div className=" link-tag extra-cell">
                                <div className=" link-tag header-search">
                                    <a href="#search" className=" link-tag header-search-icon"><i className=" link-tag feather-search"></i></a>
                                </div>
                            </div>
                            <div className=" link-tag extra-cell">
                                <div className=" link-tag header-nav-btn-section">
                                    <div className=" link-tag twm-nav-btn-left">
                                        <a className=" link-tag twm-nav-sign-up" data-bs-toggle="modal" href="#sign_up_popup"
                                            role="button">
                                            <i className=" link-tag feather-log-in"></i> Sign Up
                                        </a>
                                    </div>
                                    <div className=" link-tag twm-nav-btn-right">
                                        <Link to="/dash-post-job" className=" link-tag twm-nav-post-a-job">
                                            <i className=" link-tag feather-briefcase"></i> Post a job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
             </div>

             {/* <!-- SITE Search --> */}
             <div id="search">
                 <span className="close"></span>
                 <form role="search" id="searchform" action="https://thewebmax.org/search" method="get"
                     className="radius-xl">
                     <input className="form-control" value="" name="q" type="search" placeholder="Type to search" />
                     <span className="input-group-append">
                         <button type="button" className="search-btn">
                             <i className="fa fa-paper-plane"></i>
                         </button>
                     </span>
                 </form>
             </div>
         </div>



     </header>
     {/* <!-- HEADER END --> */}
   
     {/* <!-- CONTENT START --> */}
     <div className="page-content">

         {/* <!-- INNER PAGE BANNER --> */}
         <div className="wt-bnr-inr overlay-wraper bg-center"  style={{ backgroundImage: `url(${banner_1})` }}>
             <div className="overlay-main site-bg-white opacity-01"></div>
             <div className="container">
                 <div className="wt-bnr-inr-entry">
                     <div className="banner-title-outer">
                         <div className="banner-title-name">
                             <h2 className="wt-title">Contact Us</h2>
                         </div>
                     </div>
                     {/* <!-- BREADCRUMB ROW -->                             */}
                     
                         <div>
                             <ul className="wt-breadcrumb breadcrumb-style-2">
                                 <li><a className="link-tag" href="index">Home</a></li>
                                 <li>Contact Us</li>
                             </ul>
                         </div>
                     
                     {/* <!-- BREADCRUMB ROW END --> */}
                 </div>
             </div>
         </div>
         {/* <!-- INNER PAGE BANNER END --> */}
        
         {/* <!-- CONTACT FORM --> */}
         <div className="section-full twm-contact-one">   
             <div className="section-content">
                 <div className="container">
                         
                     {/* <!-- CONTACT FORM--> */}
                     <div className="contact-one-inner">
                         <div className="row">

                             <div className="col-lg-6 col-md-12">
                                 <div className="contact-form-outer">

                                     {/* <!-- TITLE START--> */}
                                     <div className="section-head left wt-small-separator-outer">
                                         <h2 className="wt-title">Send Us a Message</h2>
                                         <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                                     </div>
                                     {/* <!-- TITLE END-->  */}

                                     <form  className="cons-contact-form" method="post" action="https://thewebmax.org/jobzilla/form-handler2.php">
                                         <div className="row">

                                             <div className="col-lg-6 col-md-6">
                                                 <div className="form-group mb-3">
                                                     <input name="username" type="text" required className="form-control" placeholder="Name"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-6 col-md-6">
                                                 <div className="form-group mb-3">
                                                 <input name="email" type="text" className="form-control" required placeholder="Email"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-6 col-md-6">
                                                 <div className="form-group mb-3">
                                                     <input name="phone" type="text" className="form-control" required placeholder="Phone"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-6 col-md-6">
                                                 <div className="form-group mb-3">
                                                     <input name="subject" type="text" className="form-control" required placeholder="Subject"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                 <textarea name="message" className="form-control" rows="3" placeholder="Message"></textarea>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-md-12">
                                                 <button type="submit" className="site-button">Submit Now</button>
                                             </div>
                                             
                                         </div>
                                     </form>
                                 </div>
                             </div> 

                             <div className="col-lg-6 col-md-12">
                                 <div className="contact-info-wrap">

                                     <div className="contact-info">
                                         <div className="contact-info-section">  
                                                 
                                                 <div className="c-info-column">
                                                     <div className="c-info-icon"><i className=" fas fa-map-marker-alt"></i></div>
                                                     <h3 className="twm-title">In the bay area?</h3>
                                                     <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                 </div>  

                                                 <div className="c-info-column">
                                                     <div className="c-info-icon custome-size"><i className="fas fa-mobile-alt"></i></div>
                                                     <h3 className="twm-title">Feel free to contact us</h3>
                                                     <p><a className="link-tag" href="tel:+216-761-8331">+2 900 234 4241</a></p>
                                                     <p><a className="link-tag" href="tel:+216-761-8331">+2 900 234 3219</a></p>
                                                 </div>

                                                 <div className="c-info-column">
                                                     <div className="c-info-icon"><i className="fas fa-envelope"></i></div>
                                                     <h3 className="twm-title">Support</h3>
                                                     <p>infohelp@gmail.com</p>
                                                     <p>support12@gmail.com</p>
                                                 </div>
                                         
                                         </div>
                                     </div>

                                 </div>
                             </div>

                         </div>
                     </div>
                     
                 </div>
                 
             </div>
         </div>
         <div className="gmap-outline">
             <div className="google-map">
                 <div style={{ width: '100%' }}>
                     <iframe height="460" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                 </div>
             </div>
         </div>
   

     </div>
     {/* <!-- CONTENT END --> */}

     {/* <!-- FOOTER START --> */}
     <footer className="footer-dark"  style={{ backgroundImage: `url(${f_bg})` }}>
         <div className="container">

             {/* <!-- NEWS LETTER SECTION START --> */}
             <div className="ftr-nw-content">
                 <div className="row">
                     <div className="col-md-5">
                         <div className="ftr-nw-title">
                             Join our email subscription now to get updates 
                             on new jobs and notifications.
                         </div>
                     </div>
                     <div className="col-md-7">
                         <form>
                             <div className="ftr-nw-form">
                                 <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text"/>
                                 <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
             {/* <!-- NEWS LETTER SECTION END --> */}
             {/* <!-- FOOTER BLOCKES START -->   */}
             <div className="footer-top">
                 <div className="row">

                     <div className="col-lg-3 col-md-12">
                         
                         <div className="widget widget_about">
                             <div className="logo-footer clearfix">
                                 <a className="link-tag" href="index"><img src={logo_white} alt=""/></a>
                             </div>
                             <p>Many desktop publishing packages and web page editors now.</p>
                             <ul className="ftr-list">
                                 <li><p><span>Address :</span>65 Sunset CA 90026, USA </p></li>
                                 <li><p><span>Email :</span>example@max.com</p></li>
                                 <li><p><span>Call :</span>555-555-1234</p></li>
                             </ul>
                         </div>                            
                         
                     </div> 

                     <div className="col-lg-9 col-md-12">
                         <div className="row">
                            
                             <div className="col-lg-3 col-md-6 col-sm-6">
                                 <div className="widget widget_services ftr-list-center">
                                     <h3 className="widget-title">For Candidate</h3>
                                     <ul>
                                         <li><a className="link-tag" href="dashboard">User Dashboard</a></li>
                                         <li><a className="link-tag" href="dash-resume-alert">Alert resume</a></li>
                                         <li><a className="link-tag" href="candidate-grid">Candidates</a></li>
                                         <li><a className="link-tag" href="blog-list">Blog List</a></li>
                                         <li><a className="link-tag" href="blog-single">Blog single</a></li>
                                     </ul>
                                 </div>
                             </div>
                         
                             <div className="col-lg-3 col-md-6 col-sm-6">
                                 <div className="widget widget_services ftr-list-center">
                                     <h3 className="widget-title">For Employers</h3>
                                     <ul>
                                         <li><a className="link-tag" href="dash-post-job">Post Jobs</a></li>
                                         <li><a className="link-tag" href="blog-grid">Blog Grid</a></li>
                                         <li><a className="link-tag" href="contact">Contact</a></li>
                                         <li><a className="link-tag" href="job-list">Jobs Listing</a></li>
                                         <li><a className="link-tag" href="job-detail">Jobs details</a></li>
                                     </ul>
                                 </div>
                             </div>

                             <div className="col-lg-3 col-md-6 col-sm-6">
                                 <div className="widget widget_services ftr-list-center">
                                     <h3 className="widget-title">Helpful Resources</h3>
                                     <ul>
                                         <li><a className="link-tag" href="faq">FAQs</a></li>
                                         <li><a className="link-tag" href="employer-detail">Employer detail</a></li>
                                         <li><a className="link-tag" href="dash-my-profile">Profile</a></li>
                                         <li><a className="link-tag" href="error-404">404 Page</a></li>
                                         <li><a className="link-tag" href="pricing">Pricing</a></li>
                                     </ul>
                                 </div>
                             </div>

                             <div className="col-lg-3 col-md-6 col-sm-6">  
                                 <div className="widget widget_services ftr-list-center">
                                     <h3 className="widget-title">Quick Links</h3>
                                     <ul>
                                         <li><a className="link-tag" href="index">Home</a></li>
                                         <li><a className="link-tag" href="about-1">About us</a></li>
                                         <li><a className="link-tag" href="dash-bookmark">Bookmark</a></li>
                                         <li><a className="link-tag" href="job-grid">Jobs</a></li>
                                         <li><a className="link-tag" href="employer-list">Employer</a></li>
                                     </ul>
                                 </div>
                             </div>

                         </div> 

                     </div> 

                 </div>
             </div>
             {/* <!-- FOOTER COPYRIGHT --> */}
             <div className="footer-bottom">
             
                 <div className="footer-bottom-info">
                 
                     <div className="footer-copy-right">
                         <span className="copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
                     </div>
                     <ul className="social-icons">
                         <li><a className="link-tag" href="javascript:void(0);-f"></a></li>
                         <li><a className="link-tag" href="javascript:void(0);"></a></li>
                         <li><a className="link-tag" href="javascript:void(0);m"></a></li>
                         <li><a className="link-tag" href="javascript:void(0);"></a></li>
                     </ul>
                     
                 </div>
                 
             </div>

         </div>
 
     </footer>
     {/* <!-- FOOTER END --> */}

     {/* <!-- BUTTON TOP START --> */}
     <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

     {/* <!--Model Popup Section Start--> */}
         {/* <!--Signup popup --> */}
         <div className="modal fade twm-sign-up" id="sign_up_popup" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabindex="-1">
             <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content">
                     <form>

                         <div className="modal-header">
                             <h2 className="modal-title" id="sign_up_popupLabel">Sign Up</h2>
                             <p>Sign Up and get access to all the features of Jobzilla</p>
                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>

                         <div className="modal-body">
                             <div className="twm-tabs-style-2">
                                 <ul className="nav nav-tabs" id="myTab" role="tablist">

                                 {/* <!--Signup Candidate-->   */}
                                 <li className="nav-item" role="presentation">
                                     <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#sign-candidate" type="button"><i className="fas fa-user-tie"></i>Candidate</button>
                                 </li>
                                 {/* <!--Signup Employer--> */}
                                 <li className="nav-item" role="presentation">
                                     <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sign-Employer" type="button"><i className="fas fa-building"></i>Employer</button>
                                 </li>
                                 
                                 </ul>
                                 <div className="tab-content" id="myTabContent">
                                 {/* <!--Signup Candidate Content-->   */}
                                 <div className="tab-pane fade show active" id="sign-candidate">
                                     <div className="row">

                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="username" type="text" required="" className="form-control" placeholder="Usearname*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="email" type="text" className="form-control" required="" placeholder="Password*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="phone" type="text" className="form-control" required="" placeholder="Email*"/>
                                             </div>
                                         </div>
         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="phone" type="text" className="form-control" required="" placeholder="Phone*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <div className=" form-check">
                                                     <input type="checkbox" className="form-check-input" id="agree1"/>
                                                     <label className="form-check-label" for="agree1">I agree to the <a className="link-tag" href="javascript:;">Terms and conditions</a></label>
                                                     <p>Already registered?
                                                         <button className="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="col-md-12">
                                             <button type="submit" className="site-button">Sign Up</button>
                                         </div>
                                         
                                     </div>
                                 </div>
                                 {/* <!--Signup Employer Content--> / */}
                                 <div className="tab-pane fade" id="sign-Employer">
                                     <div className="row">

                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="username" type="text" required="" className="form-control" placeholder="Usearname*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="email" type="text" className="form-control" required="" placeholder="Password*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="phone" type="text" className="form-control" required="" placeholder="Email*"/>
                                             </div>
                                         </div>
         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <input name="phone" type="text" className="form-control" required="" placeholder="Phone*"/>
                                             </div>
                                         </div>
                                         
                                         <div className="col-lg-12">
                                             <div className="form-group mb-3">
                                                 <div className=" form-check">
                                                     <input type="checkbox" className="form-check-input" id="agree2"/>
                                                     <label className="form-check-label" for="agree2">I agree to the <a className="link-tag" href="javascript:;">Terms and conditions</a></label>
                                                     <p>Already registered?
                                                         <button className="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
                                         <div className="col-md-12">
                                             <button type="submit" className="site-button">Sign Up</button>
                                         </div>
                                         
                                     </div>
                                 </div>
                                 
                                 </div>
                             </div> 
                         </div>

                         <div className="modal-footer">
                             <span className="modal-f-title">Login or Sign up with</span>
                             <ul className="twm-modal-social">
                                 <li><a className="link-tag" href="javascript" ><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a className="link-tag" href="javascript" ><i className="fab fa-twitter"></i></a></li>
                                 <li><a className="link-tag" href="javascript" ><i className="fab fa-linkedin-in"></i></a></li>
                                 <li><a className="link-tag" href="javascript" ><i className="fab fa-google"></i></a></li>
                             </ul>
                         </div>

                     </form>
                 </div>
             </div>
             
         </div>
         {/* <!--Login popup -->/ */}
         <div className="modal fade twm-sign-up" id="sign_up_popup2" aria-hidden="true" aria-labelledby="sign_up_popupLabel2" tabindex="-1">
             <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content">
                 
                     <form>
                         <div className="modal-header">
                             <h2 className="modal-title" id="sign_up_popupLabel2">Login</h2>
                             <p>Login and get access to all the features of Jobzilla</p>
                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div className="modal-body">
                             <div className="twm-tabs-style-2">
                                 <ul className="nav nav-tabs" id="myTab2" role="tablist">

                                     {/* <!--Login Candidate-->   */}
                                     <li className="nav-item">
                                         <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#login-candidate" type="button"><i className="fas fa-user-tie"></i>Candidate</button>
                                     </li>
                                     {/* <!--Login Employer--> */}
                                     <li className="nav-item">
                                         <button className="nav-link" data-bs-toggle="tab" data-bs-target="#login-Employer" type="button"><i className="fas fa-building"></i>Employer</button>
                                     </li>
                                 
                                 </ul>
                                 
                                 <div className="tab-content" id="myTab2Content">
                                     {/* <!--Login Candidate Content-->   */}
                                     <div className="tab-pane fade show active" id="login-candidate">
                                         <div className="row">

                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <input name="username" type="text" required="" className="form-control" placeholder="Usearname*"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <input name="email" type="text" className="form-control" required="" placeholder="Password*"/>
                                                 </div>
                                             </div>
                                             
                                             
                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <div className=" form-check">
                                                         <input type="checkbox" className="form-check-input" id="Password3"/>
                                                         <label className="form-check-label rem-forgot" for="Password3">Remember me <a className="link-tag" href="javascript:;">Forgot Password</a></label>
                                                         
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="col-md-12">
                                                 <button type="submit" className="site-button">Log in</button>
                                                 <div className="mt-3 mb-3">Don't have an account ? 
                                                     <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                 </div>
                                             </div>
                                             
                                         </div>
                                     </div>
                                     {/* <!--Login Employer Content--> / */}
                                     <div className="tab-pane fade" id="login-Employer">
                                         <div className="row">

                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <input name="username" type="text" required="" className="form-control" placeholder="Usearname*"/>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <input name="email" type="text" className="form-control" required="" placeholder="Password*"/>
                                                 </div>
                                             </div>
                                             
                                             
                                             <div className="col-lg-12">
                                                 <div className="form-group mb-3">
                                                     <div className=" form-check">
                                                         <input type="checkbox" className="form-check-input" id="Password4"/>
                                                         <label className="form-check-label rem-forgot" for="Password4">Remember me <a className="link-tag" href="javascript:;">Forgot Password</a></label>
                                                     </div>
                                                 </div>
                                             </div>
                                             
                                             <div className="col-md-12">
                                                 <button type="submit" className="site-button">Log in</button>
                                                 <div className="mt-3 mb-3">Don't have an account ? 
                                                     <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                 </div>
                                             </div>
                                             
                                         </div>
                                     </div>
                                 
                                 </div>
                             </div> 
                         </div>
                         <div className="modal-footer">
                             <span className="modal-f-title">Login or Sign up with</span>
                             <ul className="twm-modal-social">
                                 <li><a className="link-tag" href="javascript"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a className="link-tag" href="javascript"><i className="fab fa-twitter"></i></a></li>
                                 <li><a className="link-tag" href="javascript"><i className="fab fa-linkedin-in"></i></a></li>
                                 <li><a className="link-tag" href="javascript"><i className="fab fa-google"></i></a></li>
                             </ul>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
     {/* <!--Model Popup Section End--> */}

  </div>


{/* <!-- STYLE SWITCHER  ======= -->  */}
<div className="styleswitcher">

 <div className="switcher-btn-bx">
     <a className="switch-btn">
         <span className="fa fa-cog fa-spin"></span>
     </a>
 </div>
{/*  
 <div className="styleswitcher-inner">
 
     <h6 className="switcher-title">Color Skin</h6>
     <ul className="color-skins">
         <li><a className="theme-skin skin-1" className="link-tag" href="contacta39b?theme=css/skin/skin-1"></a></li>
         <li><a className="theme-skin skin-2" className="link-tag" href="contact61e7?theme=css/skin/skin-2"></a></li>
         <li><a className="theme-skin skin-3" className="link-tag" href="contactcce5?theme=css/skin/skin-3"></a></li>
         <li><a className="theme-skin skin-4" className="link-tag" href="contact13f7?theme=css/skin/skin-4"></a></li>
         <li><a className="theme-skin skin-5" className="link-tag" href="contact19a6?theme=css/skin/skin-5"></a></li>
         <li><a className="theme-skin skin-6" className="link-tag" href="contactfe5c?theme=css/skin/skin-6"></a></li>
         <li><a className="theme-skin skin-7" className="link-tag" href="contactab47?theme=css/skin/skin-7"></a></li>
         <li><a className="theme-skin skin-8" className="link-tag" href="contact5f8d?theme=css/skin/skin-8"></a></li>
         <li><a className="theme-skin skin-9" className="link-tag" href="contact5663?theme=css/skin/skin-9"></a></li>
         <li><a className="theme-skin skin-10" className="link-tag" href="contact28ac?theme=css/skin/skin-10"></a></li>
         
     </ul>           
     
 </div>     */}
</div>
{/* <!-- STYLE SWITCHER END ==== --> */}


</body>

        </div>
    )
}