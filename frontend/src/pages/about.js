import banner_1 from "../assets/images/images/banner/1.jpg"
import f_bg from "../assets/images/images/f-bg.jpg"
import icon1 from "../assets/images/images/work-process/icon1.png"
import icon4 from "../assets/images/images/work-process/icon4.png"
import icon3 from "../assets/images/images/work-process/icon3.png"
import gir_large from "../assets/images/images/gir-large.png"
import w1 from "../assets/images/images/client-logo/w1.png"
import w2 from "../assets/images/images/client-logo/w2.png"
import w3 from "../assets/images/images/client-logo/w3.png"
import w4 from "../assets/images/images/client-logo/w4.png"
import w5 from "../assets/images/images/client-logo/w5.png"
import w6 from "../assets/images/images/client-logo/w6.png"
import logo_white from "../assets/images/images/logo-white.png"

    import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from "react-router-dom"

export default function About(){

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5, 
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

    return(
        <div data-anm=".anm">

    <div className=" link-tag page-wraper">

        {/* <!-- HEADER START --> */}
        <header className=" link-tag site-header header-style-3 h-page-11-hdr mobile-sider-drawer-menu">

            <div className=" link-tag sticky-header main-bar-wraper  navbar-expand-lg">
                <div className=" link-tag main-bar">

                    <div className=" link-tag container-fluid clearfix">

                        <div className=" link-tag logo-header">
                            <div className=" link-tag logo-header-inner logo-header-one">
                                <a href="index">
                                    <img src="images/logo-11.png" alt=""/>
                                </a>
                            </div>
                        </div>

                        {/* <!-- NAV Toggle Button --> */}
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                            className=" link-tag navbar-toggler collapsed">
                            <span className=" link-tag sr-only">Toggle navigation</span>
                            <span className=" link-tag icon-bar icon-bar-first"></span>
                            <span className=" link-tag icon-bar icon-bar-two"></span>
                            <span className=" link-tag icon-bar icon-bar-three"></span>
                        </button>

                        {/* <!-- MAIN Vav --> */}
                        <div className=" link-tag nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                            <ul className=" link-tag  nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/job-list">Jobs</Link></li>
                                <li><Link to="/employer-list">Employers</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
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
                    <span className=" link-tag close"></span>
                    <form role="search" id="searchform" action="https://thewebmax.org/search" method="get"
                        className=" link-tag radius-xl">
                        <input className=" link-tag form-control" value="" name="q" type="search" placeholder="Type to search" />
                        <span className=" link-tag input-group-append">
                            <button type="button" className=" link-tag search-btn">
                                <i className=" link-tag fa fa-paper-plane"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>



        </header>
        {/* <!-- HEADER END --> */}

      
        {/* <!-- CONTENT START --> */}
        <div className=" link-tag page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className=" link-tag wt-bnr-inr overlay-wraper bg-center"  style={{ backgroundImage: `url(${banner_1})` }}>
            	<div className=" link-tag overlay-main site-bg-white opacity-01"></div>
                <div className=" link-tag container">
                    <div className=" link-tag wt-bnr-inr-entry">
                    	<div className=" link-tag banner-title-outer">
                        	<div className=" link-tag banner-title-name">
                        		<h2 className=" link-tag wt-title">About Us</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul className=" link-tag wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END -->         

            <!-- JOBS CATEGORIES SECTION START --> */}
            <div className=" link-tag section-full p-t120 p-b90 site-bg-gray twm-job-categories-area2">
                {/* <!-- TITLE START--> */}
                <div className=" link-tag section-head center wt-small-separator-outer">
                    <div className=" link-tag wt-small-separator site-text-primary">
                       <div>Jobs by Categories</div>                                
                    </div>
                    <h2 className=" link-tag wt-title">Choose Your Desire Category</h2>
                </div>                  
                {/* <!-- TITLE END-->  */}
                
                <div className=" link-tag container">

                    <div className=" link-tag twm-job-categories-section-2 m-b30">
                       
                        <div className=" link-tag job-categories-style1 m-b30">
                            <div className=" link-tag row">
                            
                                {/* <!-- COLUMNS 1 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-dashboard"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">9,185 Jobs</div>
                                            <a href="job-detail">Business Development</a>
                                        </div>                               
                                    </div>
                                </div>

                                {/* <!-- COLUMNS 2 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-project-management"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">3,205 Jobs</div>
                                            <a href="job-detail">Project Management</a>
                                        </div>                               
                                    </div>
                                </div>
                                
                                {/* <!-- COLUMNS 3 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-note"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">2,100 Jobs</div>
                                            <a href="job-detail">Content Writer</a>
                                        </div>                               
                                    </div>
                                </div>
                                
                                {/* <!-- COLUMNS 4 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-customer-support"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">1,500 Jobs</div>
                                            <a href="job-detail">Costomer Services</a>
                                        </div>                               
                                    </div>
                                </div>
                                
                                {/* <!-- COLUMNS 5 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-bars"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">9,185 Jobs</div>
                                            <a href="job-detail">Finance</a>
                                        </div>                               
                                    </div>
                                </div>

                                {/* <!-- COLUMNS 6 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-user"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">3,205 Jobs</div>
                                            <a href="job-detail">Marketing</a>
                                        </div>                               
                                    </div>
                                </div>
                                
                                {/* <!-- COLUMNS 7 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-computer"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">2,100 Jobs</div>
                                            <a href="job-detail">Design &amp; Art</a>
                                        </div>                               
                                    </div>
                                </div>
                                
                                {/* <!-- COLUMNS 8 -->  */}
                                <div className=" link-tag col-lg-3 col-md-6">
                                    <div className=" link-tag job-categories-block-2 m-b30">
                                        <div className=" link-tag twm-media">
                                            <div className=" link-tag flaticon-coding"></div>
                                        </div>                                   
                                        <div className=" link-tag twm-content">
                                            <div className=" link-tag twm-jobs-available">1,500 Jobs</div>
                                            <a href="job-detail">Web Development</a>
                                        </div>                               
                                    </div>
                                </div>                                         

                            </div>
                        </div>

                        <div className=" link-tag text-center job-categories-btn">
                            <a href="job-grid" className=" link-tag  site-button">All Categories</a>
                        </div>

                    </div>

                </div>

            </div>   
            {/* <!-- JOBS CATEGORIES SECTION END -->

            <!-- HOW IT WORK SECTION START --> */}
            <div className=" link-tag section-full p-t120 p-b90 site-bg-white twm-how-it-work-area2">
                        
                <div className=" link-tag container">
                    <div className=" link-tag row">
                        <div className=" link-tag col-lg-4 col-md-12">
                            {/* <!-- TITLE START--> */}
                                <div className=" link-tag section-head left wt-small-separator-outer">
                                    <div className=" link-tag wt-small-separator site-text-primary">
                                    <div>How It Works </div>                                
                                    </div>
                                    <h2 className=" link-tag wt-title">Follow our steps we will help you.</h2>
                                    
                                </div>
                                <ul className=" link-tag description-list">
                                    <li>
                                        <i className=" link-tag feather-check"></i>
                                        Trusted & Quality Job 
                                    </li>
                                    <li>
                                        <i className=" link-tag feather-check"></i>
                                        International Job 
                                    </li>
                                    <li>
                                        <i className=" link-tag feather-check"></i>
                                        No Extra Charge 
                                    </li>
                                    <li>
                                        <i className=" link-tag feather-check"></i>
                                        Top Companies 
                                    </li>
                                </ul>                  
                            {/* <!-- TITLE END--> */}
                        </div>
                        <div className=" link-tag col-lg-8 col-md-12">
                            <div className=" link-tag twm-w-process-steps-2-wrap">
                                <div className=" link-tag row">
                                    <div className=" link-tag col-xl-6 col-lg-6 col-md-6">
                                        <div className=" link-tag twm-w-process-steps-2">
                                            <div className=" link-tag twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                                <span className=" link-tag twm-large-number text-clr-sky">01</span>
                                                <div className=" link-tag twm-media">
                                                    <span><img src={icon1} alt="icon1"/></span>
                                                </div>
                                                <h4 className=" link-tag twm-title">Register<br/>Your Account</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
        
                                    <div className=" link-tag col-xl-6 col-lg-6 col-md-6">
                                        <div className=" link-tag twm-w-process-steps-2">
                                            <div className=" link-tag twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                                <span className=" link-tag twm-large-number text-clr-yellow">02</span>
                                                <div className=" link-tag twm-media">
                                                    <span><img src={icon4} alt="icon1"/></span>
                                                </div>
                                                <h4 className=" link-tag twm-title">Search <br/>
                                                    Your Job</h4>                                                
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                        
                                        </div>
                                    </div>
        
                                    <div className=" link-tag col-xl-6 col-lg-6 col-md-6">
                                        <div className=" link-tag twm-w-process-steps-2">
                                            <div className=" link-tag twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                                <span className=" link-tag twm-large-number text-clr-pink">03</span>
                                                <div className=" link-tag twm-media">
                                                    <span><img src={icon3} alt="icon1"/></span>
                                                </div>
                                                <h4 className=" link-tag twm-title">Apply <br/>For Dream Job</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className=" link-tag col-xl-6 col-lg-6 col-md-6">
                                        <div className=" link-tag twm-w-process-steps-2">
                                            <div className=" link-tag twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                                <span className=" link-tag twm-large-number text-clr-green">04</span>
                                                <div className=" link-tag twm-media">
                                                    <span><img src={icon3} alt="icon1"/></span>
                                                </div>
                                                <h4 className=" link-tag twm-title">Upload <br/>Your Resume</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className=" link-tag twm-how-it-work-section">
                        
                    </div>                  
                </div>

            </div>   
            {/* <!-- HOW IT WORK SECTION END -->

            <!-- EXPLORE NEW LIFE START --> */}
            <div className=" link-tag section-full p-t120 p-b120 twm-explore-area bg-cover " style={{ backgroundImage: `url(${banner_1})` }}>
                <div className=" link-tag container">

                    <div className=" link-tag section-content">
                        <div className=" link-tag row">

                            <div className=" link-tag col-lg-4 col-md-12">
                                <div className=" link-tag twm-explore-media-wrap">
                                    <div className=" link-tag twm-media">
                                        <img src={gir_large} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className=" link-tag col-lg-8 col-md-12">
                                <div className=" link-tag twm-explore-content-outer">
                                    <div className=" link-tag twm-explore-content">

                                        <div className=" link-tag twm-l-line-1"></div>
                                        <div className=" link-tag twm-l-line-2"></div>

                                        <div className=" link-tag twm-r-circle-1"></div>
                                        <div className=" link-tag twm-r-circle-2"></div>

                                        <div className=" link-tag twm-title-small">Explore New Life</div>
                                        <div className=" link-tag twm-title-large">
                                            <h2>Don’t just find. be found 
                                            put your CV in front of 
                                            great employers </h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                                        </div>
                                        <div className=" link-tag twm-upload-file">
                                            <button type="button" className=" link-tag site-button">Upload Your Resume <i className=" link-tag feather-upload"></i></button>
                                        </div>

                                        
                                    </div>
                                    <div className=" link-tag twm-bold-circle-right"></div>
                                    <div className=" link-tag twm-bold-circle-left"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>
            {/* <!-- EXPLORE NEW LIFE END --> */}

            {/* <!-- TOP COMPANIES START --> */}
            <div className=" link-tag section-full p-t120  site-bg-white twm-companies-wrap">
                  
                {/* <!-- TITLE START--> */}
                <div className=" link-tag section-head center wt-small-separator-outer">
                    <div className=" link-tag wt-small-separator site-text-primary">
                       <div>Top Companies</div>                                
                    </div>
                    <h2 className=" link-tag wt-title">Get hired in top companies</h2>
                </div>                  
                {/* <!-- TITLE END--> */}

                <div classNameNa link-tag me="container">
      <div classNameNa link-tag me="section-content">
        <Slider {...settings}>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w1} alt="" />
            </a>
          </div>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w2} alt="" />
            </a>
          </div>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w3} alt="" />
            </a>
          </div>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w4} alt="" />
            </a>
          </div>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w5} alt="" />
            </a>
          </div>
          <div classNameNa link-tag me="item">
            <a href="employer-list">
              <img src={w6} alt="" />
            </a>
          </div>
          {/* Repeat the above structure for additional items */}
        </Slider>
      </div>
    </div>
              
            
            </div>
            {/* <!-- TOP COMPANIES END --> */}
                     
     
        </div>
        {/* <!-- CONTENT END -->

        <!-- FOOTER START --> */}
        <footer className=" link-tag footer-dark"  style={{ backgroundImage: `url(${f_bg})` }}>
            <div className=" link-tag container">

                {/* <!-- NEWS LETTER SECTION START --> */}
                <div className=" link-tag ftr-nw-content">
                    <div className=" link-tag row">
                        <div className=" link-tag col-md-5">
                            <div className=" link-tag ftr-nw-title">
                                Join our email subscription now to get updates 
                                on new jobs and notifications.
                            </div>
                        </div>
                        <div className=" link-tag col-md-7">
                            <form>
                                <div className=" link-tag ftr-nw-form">
                                    <input name="news-letter" className=" link-tag form-control" placeholder="Enter Your Email" type="text"/>
                                    <button className=" link-tag ftr-nw-subcribe-btn">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- NEWS LETTER SECTION END -->
                <!-- FOOTER BLOCKES START -->   */}
                <div className=" link-tag footer-top">
                    <div className=" link-tag row">

                        <div className=" link-tag col-lg-3 col-md-12">
                            
                            <div className=" link-tag widget widget_about">
                                <div className=" link-tag logo-footer clearfix">
                                    <a href="index"><img src={logo_white} alt=""/></a>
                                </div>
                                <p>Many desktop publishing packages and web page editors now.</p>
                                <ul className=" link-tag ftr-list">
                                    <li><p><span>Address :</span>65 Sunset CA 90026, USA </p></li>
                                    <li><p><span>Email :</span>example@max.com</p></li>
                                    <li><p><span>Call :</span>555-555-1234</p></li>
                                </ul>
                            </div>                            
                            
                        </div> 

                        <div className=" link-tag col-lg-9 col-md-12">
                            <div className=" link-tag row">
                               
                                <div className=" link-tag col-lg-3 col-md-6 col-sm-6">
                                    <div className=" link-tag widget widget_services ftr-list-center">
                                        <h3 className=" link-tag widget-title">For Candidate</h3>
                                        <ul>
                                            <li><a href="dashboard">User Dashboard</a></li>
                                            <li><a href="dash-resume-alert">Alert resume</a></li>
                                            <li><a href="candidate-grid">Candidates</a></li>
                                            <li><a href="blog-list">Blog List</a></li>
                                            <li><a href="blog-single">Blog single</a></li>
                                        </ul>
                                    </div>
                                </div>
                            
                                <div className=" link-tag col-lg-3 col-md-6 col-sm-6">
                                    <div className=" link-tag widget widget_services ftr-list-center">
                                        <h3 className=" link-tag widget-title">For Employers</h3>
                                        <ul>
                                            <li><a href="dash-post-job">Post Jobs</a></li>
                                            <li><a href="blog-grid">Blog Grid</a></li>
                                            <li><a href="contact">Contact</a></li>
                                            <li><a href="job-list">Jobs Listing</a></li>
                                            <li><a href="job-detail">Jobs details</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className=" link-tag col-lg-3 col-md-6 col-sm-6">
                                    <div className=" link-tag widget widget_services ftr-list-center">
                                        <h3 className=" link-tag widget-title">Helpful Resources</h3>
                                        <ul>
                                            <li><a href="faq">FAQs</a></li>
                                            <li><a href="employer-detail">Employer detail</a></li>
                                            <li><a href="dash-my-profile">Profile</a></li>
                                            <li><a href="error-404">404 Page</a></li>
                                            <li><a href="pricing">Pricing</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className=" link-tag col-lg-3 col-md-6 col-sm-6">  
                                    <div className=" link-tag widget widget_services ftr-list-center">
                                        <h3 className=" link-tag widget-title">Quick Links</h3>
                                        <ul>
                                            <li><a href="index">Home</a></li>
                                            <li><a href="about-1">About us</a></li>
                                            <li><a href="dash-bookmark">Bookmark</a></li>
                                            <li><a href="job-grid">Jobs</a></li>
                                            <li><a href="employer-list">Employer</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>  

                        </div> 

                    </div>
                </div>
                {/* <!-- FOOTER COPYRIGHT --> */}
                <div className=" link-tag footer-bottom">
                
                    <div className=" link-tag footer-bottom-info">
                    
                        <div className=" link-tag footer-copy-right">
                            <span className=" link-tag copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
                        </div>
                        <ul className=" link-tag social-icons">
                            <li><a href="javascript:void(0);" className=" link-tag fab fa-facebook-f"></a></li>
                            <li><a href="javascript:void(0);" className=" link-tag fab fa-twitter"></a></li>
                            <li><a href="javascript:void(0);" className=" link-tag fab fa-instagram"></a></li>
                            <li><a href="javascript:void(0);" className=" link-tag fab fa-youtube"></a></li>
                        </ul>
                        
                    </div>
                    
                </div>

            </div>
    
        </footer>
        {/* <!-- FOOTER END -->

        <!-- BUTTON TOP START --> */}
		<button className=" link-tag scroltop"><span className=" link-tag fa fa-angle-up  relative" id="btn-vibrate"></span></button>

        {/* <!--Model Popup Section Start-->
            <!--Signup popup --> */}
            <div className=" link-tag modal fade twm-sign-up" id="sign_up_popup" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabindex="-1">
                <div className=" link-tag modal-dialog modal-dialog-centered">
                    <div className=" link-tag modal-content">
                        <form>

                            <div className=" link-tag modal-header">
                                <h2 className=" link-tag modal-title" id="sign_up_popupLabel">Sign Up</h2>
                                <p>Sign Up and get access to all the features of Jobzilla</p>
                                <button type="button" className=" link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className=" link-tag modal-body">
                                <div className=" link-tag twm-tabs-style-2">
                                    <ul className=" link-tag nav nav-tabs" id="myTab" role="tablist">

                                    {/* <!--Signup Candidate-->   */}
                                    <li className=" link-tag nav-item" role="presentation">
                                        <button className=" link-tag nav-link active" data-bs-toggle="tab" data-bs-target="#sign-candidate" type="button"><i className=" link-tag fas fa-user-tie"></i>Candidate</button>
                                    </li>
                                    {/* <!--Signup Employer--> */}
                                    <li className=" link-tag nav-item" role="presentation">
                                        <button className=" link-tag nav-link" data-bs-toggle="tab" data-bs-target="#sign-Employer" type="button"><i className=" link-tag fas fa-building"></i>Employer</button>
                                    </li>
                                    
                                    </ul>
                                    <div className=" link-tag tab-content" id="myTabContent">
                                    {/* <!--Signup Candidate Content-->   */}
                                    <div className=" link-tag tab-pane fade show active" id="sign-candidate">
                                        <div className=" link-tag row">

                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="username" type="text" required="" className=" link-tag form-control" placeholder="Usearname*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="email" type="text" className=" link-tag form-control" required="" placeholder="Password*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="phone" type="text" className=" link-tag form-control" required="" placeholder="Email*"/>
                                                </div>
                                            </div>
            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="phone" type="text" className=" link-tag form-control" required="" placeholder="Phone*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <div className=" link-tag  form-check">
                                                        <input type="checkbox" className=" link-tag form-check-input" id="agree1"/>
                                                        <label className=" link-tag form-check-label" for="agree1">I agree to the <a href="javascript:;">Terms and conditions</a></label>
                                                        <p>Already registered?
                                                            <button className=" link-tag twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" link-tag col-md-12">
                                                <button type="submit" className=" link-tag site-button">Sign Up</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {/* <!--Signup Employer Content-->  */}
                                    <div className=" link-tag tab-pane fade" id="sign-Employer">
                                        <div className=" link-tag row">

                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="username" type="text" required="" className=" link-tag form-control" placeholder="Usearname*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="email" type="text" className=" link-tag form-control" required="" placeholder="Password*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="phone" type="text" className=" link-tag form-control" required="" placeholder="Email*"/>
                                                </div>
                                            </div>
            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <input name="phone" type="text" className=" link-tag form-control" required="" placeholder="Phone*"/>
                                                </div>
                                            </div>
                                            
                                            <div className=" link-tag col-lg-12">
                                                <div className=" link-tag form-group mb-3">
                                                    <div className=" link-tag  form-check">
                                                        <input type="checkbox" className=" link-tag form-check-input" id="agree2"/>
                                                        <label className=" link-tag form-check-label" for="agree2">I agree to the <a href="javascript:;">Terms and conditions</a></label>
                                                        <p>Already registered?
                                                            <button className=" link-tag twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" link-tag col-md-12">
                                                <button type="submit" className=" link-tag site-button">Sign Up</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div> 
                            </div>

                            <div className=" link-tag modal-footer">
                                <span className=" link-tag modal-f-title">Login or Sign up with</span>
                                <ul className=" link-tag twm-modal-social">
                                    <li><a href="javascript" className=" link-tag facebook-clr"><i className=" link-tag fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" className=" link-tag twitter-clr"><i className=" link-tag fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" className=" link-tag linkedin-clr"><i className=" link-tag fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" className=" link-tag google-clr"><i className=" link-tag fab fa-google"></i></a></li>
                                </ul>
                            </div>

                        </form>
                    </div>
                </div>
                
            </div>
            {/* <!--Login popup --> */}
            <div className=" link-tag modal fade twm-sign-up" id="sign_up_popup2" aria-hidden="true" aria-labelledby="sign_up_popupLabel2" tabindex="-1">
                <div className=" link-tag modal-dialog modal-dialog-centered">
                    <div className=" link-tag modal-content">
                    
                        <form>
                            <div className=" link-tag modal-header">
                                <h2 className=" link-tag modal-title" id="sign_up_popupLabel2">Login</h2>
                                <p>Login and get access to all the features of Jobzilla</p>
                                <button type="button" className=" link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className=" link-tag modal-body">
                                <div className=" link-tag twm-tabs-style-2">
                                    <ul className=" link-tag nav nav-tabs" id="myTab2" role="tablist">

                                        {/* <!--Login Candidate-->   */}
                                        <li className=" link-tag nav-item">
                                            <button className=" link-tag nav-link active" data-bs-toggle="tab" data-bs-target="#login-candidate" type="button"><i className=" link-tag fas fa-user-tie"></i>Candidate</button>
                                        </li>
                                        {/* <!--Login Employer--> */}
                                        <li className=" link-tag nav-item">
                                            <button className=" link-tag nav-link" data-bs-toggle="tab" data-bs-target="#login-Employer" type="button"><i className=" link-tag fas fa-building"></i>Employer</button>
                                        </li>
                                    
                                    </ul>
                                    
                                    <div className=" link-tag tab-content" id="myTab2Content">
                                        {/* <!--Login Candidate Content-->   */}
                                        <div className=" link-tag tab-pane fade show active" id="login-candidate">
                                            <div className=" link-tag row">

                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <input name="username" type="text" required="" className=" link-tag form-control" placeholder="Usearname*"/>
                                                    </div>
                                                </div>
                                                
                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <input name="email" type="text" className=" link-tag form-control" required="" placeholder="Password*"/>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <div className=" link-tag  form-check">
                                                            <input type="checkbox" className=" link-tag form-check-input" id="Password3"/>
                                                            <label className=" link-tag form-check-label rem-forgot" for="Password3">Remember me <a href="javascript:;">Forgot Password</a></label>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" link-tag col-md-12">
                                                    <button type="submit" className=" link-tag site-button">Log in</button>
                                                    <div className=" link-tag mt-3 mb-3">Don't have an account ? 
                                                        <button className=" link-tag twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        {/* <!--Login Employer Content-->  */}
                                        <div className=" link-tag tab-pane fade" id="login-Employer">
                                            <div className=" link-tag row">

                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <input name="username" type="text" required="" className=" link-tag form-control" placeholder="Usearname*"/>
                                                    </div>
                                                </div>
                                                
                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <input name="email" type="text" className=" link-tag form-control" required="" placeholder="Password*"/>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className=" link-tag col-lg-12">
                                                    <div className=" link-tag form-group mb-3">
                                                        <div className=" link-tag  form-check">
                                                            <input type="checkbox" className=" link-tag form-check-input" id="Password4"/>
                                                            <label className=" link-tag form-check-label rem-forgot" for="Password4">Remember me <a href="javascript:;">Forgot Password</a></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className=" link-tag col-md-12">
                                                    <button type="submit" className=" link-tag site-button">Log in</button>
                                                    <div className=" link-tag mt-3 mb-3">Don't have an account ? 
                                                        <button className=" link-tag twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div> 
                            </div>
                            <div className=" link-tag modal-footer">
                                <span className=" link-tag modal-f-title">Login or Sign up with</span>
                                <ul className=" link-tag twm-modal-social">
                                    <li><a href="javascript" className=" link-tag facebook-clr"><i className=" link-tag fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" className=" link-tag twitter-clr"><i className=" link-tag fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" className=" link-tag linkedin-clr"><i className=" link-tag fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" className=" link-tag google-clr"><i className=" link-tag fab fa-google"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* <!--Model Popup Section End--> */}

 	</div>




{/* <!-- STYLE SWITCHER END ==== --> */}

</div>
    )
}