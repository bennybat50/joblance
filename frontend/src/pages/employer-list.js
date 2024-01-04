import { Link } from "react-router-dom";
import logo_11 from "../assets/images/images/logo-11.png";
import f_bg from "../assets/images/images/f-bg.jpg"
import bgImage from "../assets/images/images/banner/1.jpg";
import "../styles/datepicker.css";
import "../styles/dropzone.css";
// import "../styles/flaticon.css"
import "../styles/scrollbar.css";
import "../styles/style.css";
import banner_1 from "../assets/images/images/banner/1.jpg"
import add_bg from "../assets/images/images/add-bg.jpg"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg";
import pic2 from "../assets/images/images/jobs-company/pic2.jpg";
import pic3 from "../assets/images/images/jobs-company/pic3.jpg";
import pic4 from "../assets/images/images/jobs-company/pic4.jpg";
import pic5 from "../assets/images/images/jobs-company/pic5.jpg"
import logo_white from "../assets/images/images/logo-white.png"
import Signup_Pop from "../components/Signup_Pop";
import LoginPop from "../components/LoginPop";
import PublicHeader from "../components/PublicHeader";


export default function  EmployerList(){
    return(
        <div >
         {/* HEADERR START */}
      <PublicHeader/>
      {/* HEADER END  */}

    


      {/* CONTENT START */}
      <div className="page-content">

{/* <!-- INNER PAGE BANNER --> */}
<div className="wt-bnr-inr overlay-wraper bg-center"  style={{ backgroundImage: `url(${banner_1})` }}>
    <div className="overlay-main site-bg-white opacity-01"></div>
    <div className="container">
        <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
                <div className="banner-title-name">
                    <h2 className="wt-title">Employers List</h2>
                </div>
            </div>
            {/* <!-- BREADCRUMB ROW -->                             */}
            
                <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                        <li><a href="index">Home</a></li>
                        <li>Employers List</li>
                    </ul>
                </div>
            
            {/* <!-- BREADCRUMB ROW END -->                         */}
        </div>
    </div>
</div>
{/* <!-- INNER PAGE BANNER END --> */}


{/* <!-- Employer List START --> */}
<div className="section-full p-t120  p-b90 site-bg-white">
    

    <div className="container">
        <div className="row">
            
            <div className="col-lg-4 col-md-12 rightSidebar">

                <div className="side-bar">

                    <div className="sidebar-elements search-bx">
                                                                
                        <form>

                            <div className="form-group mb-4">
                                <h4 className="section-head-small mb-4">Category</h4>
                                <select className="wt-select-bar-large selectpicker form-select form-select-lg mb-3"  data-live-search="true" data-bv-field="size">
                                    <option selected>All Category</option>
                                    <option>Web Designer</option>
                                    <option>Developer</option>
                                    <option>Acountant</option>
                                </select>
                            </div>

                            <div className="form-group mb-4">
                                <h4 className="section-head-small mb-4">Keyword</h4>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Job Title or Keyword"/>
                                    <button className="btn" type="button"><i className="feather-search"></i></button>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <h4 className="section-head-small mb-4">Location</h4>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search location"/>
                                    <button className="btn" type="button"><i className="feather-map-pin"></i></button>
                                </div>
                            </div>

                            <div className="twm-sidebar-ele-filter">
                                <h4 className="section-head-small mb-4">Job Type</h4>
                                <ul>
                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">Freelance</label>
                                        </div>
                                        <span className="twm-job-type-count">09</span>
                                    </li>

                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                                            <label className="form-check-label" for="exampleCheck2">Full Time</label>
                                        </div>
                                        <span className="twm-job-type-count">07</span>
                                    </li>

                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck3"/>
                                            <label className="form-check-label" for="exampleCheck3">Internship</label>
                                        </div>
                                        <span className="twm-job-type-count">15</span>
                                    </li>

                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck4"/>
                                            <label className="form-check-label" for="exampleCheck4">Part Time</label>
                                        </div>
                                        <span className="twm-job-type-count">20</span>
                                    </li>

                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck5"/>
                                            <label className="form-check-label" for="exampleCheck5">Temporary</label>
                                        </div>
                                        <span className="twm-job-type-count">22</span>
                                    </li>

                                    <li>
                                        <div className=" form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck6"/>
                                            <label className="form-check-label" for="exampleCheck6">Volunteer</label>
                                        </div>
                                        <span className="twm-job-type-count">25</span>
                                    </li>

                                </ul>
                            </div>

                            <div className="twm-sidebar-ele-filter">
                                <h4 className="section-head-small mb-4">Date Posts</h4>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio1"/>
                                            <label className="form-check-label" for="exampleradio1">Last hour</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio2"/>
                                            <label className="form-check-label" for="exampleradio2">Last 24 hours</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio3"/>
                                            <label className="form-check-label" for="exampleradio3">Last 7 days</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio4"/>
                                            <label className="form-check-label" for="exampleradio4">Last 14 days</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio5"/>
                                            <label className="form-check-label" for="exampleradio5">Last 30 days</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="exampleradio6"/>
                                            <label className="form-check-label" for="exampleradio6">All</label>
                                        </div>
                                    </li>
                 
                                </ul>
                            </div>

                            <div className="twm-sidebar-ele-filter">
                                <h4 className="section-head-small mb-4">Type of employment</h4>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="Freelance1"/>
                                            <label className="form-check-label" for="Freelance1">Freelance</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="FullTime1"/>
                                            <label className="form-check-label" for="FullTime1">Full Time</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="Intership1"/>
                                            <label className="form-check-label" for="Intership1">Intership</label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="Part-Time1"/>
                                            <label className="form-check-label" for="Part-Time1">Part Time</label>
                                        </div>
                                    </li>
                 
                                </ul>
                            </div>
                            
                        </form>
                        
                    </div>

                    <div className="widget tw-sidebar-tags-wrap">
                        <h4 className="section-head-small mb-4">Tags</h4>
                        
                        <div className="tagcloud">
                            <a href="job-list">General</a>
                            <a href="job-list">Jobs </a>
                            <a href="job-list">Payment</a>                                            
                            <a href="job-list">Application </a>
                            <a href="job-list">Work</a>
                            <a href="job-list">Recruiting</a>
                            <a href="job-list">Employer</a>
                            <a href="job-list">Income</a>
                            <a href="job-list">Tips</a>
                        </div>
                    </div>

                    
                </div>

                <div className="twm-advertisment" style={{ backgroundImage: `url(${add_bg})` }}>
                   <div className="overlay"></div>
                   <h4 className="twm-title">Recruiting?</h4>
                   <p>Get Best Matched Jobs On your <br/>
                    Email. Add Resume NOW!</p>
                    <a href="about-1" className="site-button white">Read More</a> 
                </div>

            </div>

            <div className="col-lg-8 col-md-12">
                {/* <!--Filter Short By--> */}
                <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                    <span className="woocommerce-result-count-left">Showing 2,150 jobs</span>
                   
                    <form className="woocommerce-ordering twm-filter-select" method="get">
                        <span className="woocommerce-result-count">Short By</span>
                        <select className="wt-select-bar-2 selectpicker form-select form-select-lg mb-3"  data-live-search="true" data-bv-field="size">
                            <option>Most Recent</option>
                            <option>Freelance</option>
                            <option>Full Time</option>
                            <option>Internship</option>
                            <option>Part Time</option>
                            <option>Temporary</option>
                        </select>
                        <select className="wt-select-bar-2 selectpicker form-select form-select-lg mb-3"  data-live-search="true" data-bv-field="size">
                            <option>Show 10</option>
                            <option>Show 20</option>
                            <option>Show 30</option>
                            <option>Show 40</option>
                            <option>Show 50</option>
                            <option>Show 60</option>
                        </select>
                    </form>

                </div>

                <div className="twm-employer-list-wrap">
                    <ul>
                         <li>
                             <div className="twm-employer-list-style1 mb-5">
                                 <div className="twm-media">
                                     <img src={pic1} alt="#"/>
                                 </div>
                                 <div className="twm-mid-content">
                                     <Link to="/employer-detail" className="twm-job-title link-tag">
                                         <h5>Herbal Ltd</h5>
                                     </Link>
                                     <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                     <Link to="/employer-detail" className="twm-job-websites site-text-primary">Accountancy</Link>
                                 </div>
                                 <div className="twm-right-content">
                                    
                                     <div className="twm-jobs-vacancies"><span>25</span>Vacancies</div>
                                 </div>
                             </div>
                         </li>

                         <li>
                             <div className="twm-employer-list-style1 mb-5">
                                 <div className="twm-media">
                                     <img src={pic2} alt="#"/>
                                 </div>
                                 <div className="twm-mid-content">
                                     <Link to="/employer-detail" className="twm-job-title link-tag">
                                         <h5>Artistre Studio PVT Ltd</h5>
                                     </Link>
                                     <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                     <Link to="/employer-detail" className="twm-job-websites site-text-primary">IT Contractor</Link>
                                 </div>
                                 <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>30</span>Vacancies</div>
                                 </div>
                             </div>
                         </li>

                         <li>
                             <div className="twm-employer-list-style1 mb-5">
                                 <div className="twm-media">
                                     <img src={pic3} alt="#"/>
                                 </div>
                                 <div className="twm-mid-content">
                                     <Link to="/employer-detail" className="twm-job-title link-tag">
                                         <h5 className="twm-job-title">Wins Developers</h5>
                                     </Link>
                                     <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                     <Link to="/employer-detail" className="twm-job-websites site-text-primary">Banking</Link>
                                 </div>
                                 <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>32</span>Vacancies</div>
                                 </div>
                             </div>
                         </li>

                         <li>
                             <div className="twm-employer-list-style1 mb-5">
                                 <div className="twm-media">
                                     <img src={pic4} alt="#"/>
                                 </div>
                                 <div className="twm-mid-content">
                                     <Link to="/employer-detail" className="twm-job-title link-tag">
                                         <h5 className="twm-job-title">Thewebmax PVT Ltd</h5>
                                     </Link>
                                     <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                     <Link to="/employer-detail" className="twm-job-websites site-text-primary">Digital & Creative</Link>
                                 </div>
                                 <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>38</span>Vacancies</div>
                                 </div>
                             </div>
                         </li>

                         <li>
                             <div className="twm-employer-list-style1 mb-5">
                                 <div className="twm-media">
                                     <img src={pic5} alt="#"/>
                                 </div>
                                 <div className="twm-mid-content">
                                     <Link to="/employer-detail" className="twm-job-title link-tag">
                                         <h5 className="twm-job-title">Robo Tech</h5>
                                     </Link>
                                     <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                     <Link to="/employer-detail" className="twm-job-websites site-text-primary">Sales & Marketing</Link>
                                 </div>
                                 <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>40</span>Vacancies</div>
                                 </div>
                             </div>
                         </li>

                         <li>
                            <div className="twm-employer-list-style1 mb-5">
                                <div className="twm-media">
                                    <img src={pic1} alt="#"/>
                                </div>
                                <div className="twm-mid-content">
                                    <Link to="/employer-detail" className="twm-job-title link-tag">
                                        <h5>Galaxy IT Solution</h5>
                                    </Link>
                                    <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                    <Link to="/employer-detail" className="twm-job-websites site-text-primary">Leisure & Tourismm</Link>
                                </div>
                                <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>38</span>Vacancies</div>
                                </div>
                            </div>
                         </li>

                         <li>
                            <div className="twm-employer-list-style1 mb-5">
                                <div className="twm-media">
                                    <img src={pic2} alt="#"/>
                                </div>
                                <div className="twm-mid-content">
                                    <Link to="/employer-detail" className="twm-job-title link-tag">
                                        <h5>Coderbotics solutions</h5>
                                    </Link>
                                    <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                    <Link to="/employer-detail" className="twm-job-websites site-text-primary">Consultancy</Link>
                                </div>
                                <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>35</span>Vacancies</div>
                                </div>
                            </div>
                         </li>

                         <li>
                            <div className="twm-employer-list-style1 mb-5">
                                <div className="twm-media">
                                    <img src={pic3} alt="#"/>
                                </div>
                                <div className="twm-mid-content">
                                    <Link to="/employer-detail" className="twm-job-title link-tag">
                                        <h5 className="twm-job-title">Microsoft solution</h5>
                                    </Link>
                                    <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                    <Link to="/employer-detail" className="twm-job-websites site-text-primary">Technologies</Link>
                                </div>
                                <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>65</span>Vacancies</div>
                                </div>
                            </div>
                         </li>

                         <li>
                            <div className="twm-employer-list-style1 mb-5">
                                <div className="twm-media">
                                    <img src={pic4}alt="#"/>
                                </div>
                                <div className="twm-mid-content">
                                    <Link to="/employer-detail" className="twm-job-title link-tag">
                                        <h5 className="twm-job-title">Dot Circle PVT Ltd</h5>
                                    </Link>
                                    <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                    <Link to="/employer-detail" className="twm-job-websites site-text-primary">Sales & Marketing</Link>
                                </div>
                                <div className="twm-right-content">
                                    <div className="twm-jobs-vacancies"><span>50</span>Vacancies</div>
                                </div>
                            </div>
                         </li>

                        
                    </ul>
                </div>

                <div className="pagination-outer">
                    <div className="pagination-style1">
                        <ul className="clearfix">
                            <li className="prev"><a href="javascript:;"><span> <i className="fa fa-angle-left"></i> </span></a></li>
                            <li><a href="javascript:;">1</a></li>
                            <li className="active"><a href="javascript:;">2</a></li>
                            <li><a href="javascript:;">3</a></li>
                            <li><a className="javascript:;" href="javascript:;"><i className="fa fa-ellipsis-h"></i></a></li>
                            <li><a href="javascript:;">5</a></li>
                            <li className="next"><a href="javascript:;"><span> <i className="fa fa-angle-right"></i> </span></a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>   
{/* <!-- Employer List END --> */}



</div>
      {/* CONTENT END*/}

      {/* <!-- FOOTER START --> */}
        <footer className="footer-dark" style={{ backgroundImage: `url(${f_bg})` }}>
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
                {/* <!-- NEWS LETTER SECTION END -->
                <!-- FOOTER BLOCKES START -->   */}
                <div className="footer-top">
                    <div className="row">

                        <div className="col-lg-3 col-md-12">
                            
                            <div className="widget widget_about">
                                <div className="logo-footer clearfix">
                                    <a href="index"><img src={logo_white} alt=""/></a>
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
                                            <li><a href="dashboard">User Dashboard</a></li>
                                            <li><a href="dash-resume-alert">Alert resume</a></li>
                                            <li><a href="candidate-grid">Candidates</a></li>
                                            <li><a href="blog-list">Blog List</a></li>
                                            <li><a href="blog-single">Blog single</a></li>
                                        </ul>
                                    </div>
                                </div>
                            
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">For Employers</h3>
                                        <ul>
                                            <li><a href="dash-post-job">Post Jobs</a></li>
                                            <li><a href="blog-grid">Blog Grid</a></li>
                                            <li><a href="contact">Contact</a></li>
                                            <li><a href="job-list">Jobs Listing</a></li>
                                            <li><a href="job-detail">Jobs details</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Helpful Resources</h3>
                                        <ul>
                                            <li><a href="faq">FAQs</a></li>
                                            <li><a href="employer-detail">Employer detail</a></li>
                                            <li><a href="dash-my-profile">Profile</a></li>
                                            <li><a href="error-404">404 Page</a></li>
                                            <li><a href="pricing">Pricing</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6">  
                                    <div className="widget widget_services ftr-list-center">
                                        <h3 className="widget-title">Quick Links</h3>
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
                <div className="footer-bottom">
                
                    <div className="footer-bottom-info">
                    
                        <div className="footer-copy-right">
                            <span className="copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
                        </div>
                        <ul className="social-icons">
                            <li><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
                            <li><a href="javascript:void(0);" className="fab fa-twitter"></a></li>
                            <li><a href="javascript:void(0);" className="fab fa-instagram"></a></li>
                            <li><a href="javascript:void(0);" className="fab fa-youtube"></a></li>
                        </ul>
                        
                    </div>
                    
                </div>

            </div>
    
        </footer>
        {/* <!-- FOOTER END --> */}
{/* 
        <!-- BUTTON TOP START --> */}
		<button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>
{/* 
        <!--Model Popup Section Start-->
            <!--Signup popup --> */}
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
                                                        <label className="form-check-label" for="agree1">I agree to the <a href="javascript:;">Terms and conditions</a></label>
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
                                    {/* <!--Signup Employer Content-->  */}
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
                                                        <label className="form-check-label" for="agree2">I agree to the <a href="javascript:;">Terms and conditions</a></label>
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
                                    <li><a href="javascript" className="facebook-clr"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" className="twitter-clr"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" className="linkedin-clr"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" className="google-clr"><i className="fab fa-google"></i></a></li>
                                </ul>
                            </div>

                        </form>
                    </div>
                </div>
                
            </div>
            {/* <!--Login popup -->/ */}
            <Signup_Pop />
            <LoginPop />
        {/* <!--Model Popup Section End-->/ */}


        </div>
    )
}