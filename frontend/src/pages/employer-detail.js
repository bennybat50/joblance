import banner_1 from "../assets/images/images/banner/1.jpg"
import video_bg from "../assets/images/images/video-bg.jpg"
import f_bg from "../assets/images/images/f-bg.jpg"
import logo_dark from "../assets/images/images/logo-dark.png"
import employer_bg from "../assets/images/images/employer-bg.jpg"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import thumb from "../assets/images/images/gallery/thumb/pic1.jpg"
import thumb2 from "../assets/images/images/gallery/thumb/pic2.jpg"
import thumb3 from "../assets/images/images/gallery/thumb/pic3.jpg"
import thumb4 from "../assets/images/images/gallery/thumb/pic4.jpg"
import thumb5 from "../assets/images/images/gallery/thumb/pic5.jpg"
import thumb6 from "../assets/images/images/gallery/thumb/pic6.jpg"
import thumb7 from "../assets/images/images/gallery/thumb/pic7.jpg"
import thumb8 from "../assets/images/images/gallery/thumb/pic8.jpg"
import thumb9 from "../assets/images/images/gallery/thumb/pic9.jpg"
import thumb10 from "../assets/images/images/gallery/thumb/pic10.jpg"
import thumb11 from "../assets/images/images/gallery/thumb/pic11.jpg"
import thumb12 from "../assets/images/images/gallery/thumb/pic12.jpg"
import compIc1 from "../assets/images/images/jobs-company/pic1.jpg"
import compIc2 from "../assets/images/images/jobs-company/pic2.jpg"
import compIc3 from "../assets/images/images/jobs-company/pic3.jpg"
import Signup_Pop from "../components/Signup_Pop"
import LoginPop from "../components/LoginPop"
import PublicHeader from "../components/PublicHeader"


export default function EmployerDetail() {
    return (


        <div>

            {/* <!-- LOADING AREA START ===== --> */}
            {/* <div className="loading-area">
    <div className="loading-box"></div>
    <div className="loading-pic">
        <div className="wrapper">
            <div className="cssload-loader"></div>
        </div>
    </div>
</div> */}
            {/* <!-- LOADING AREA  END ====== --> */}

            <div className="page-wraper">

                {/* <!-- HEADER START --> */}
                <PublicHeader/>
                {/* <!-- HEADER END --> */}


                {/* <!-- CONTENT START --> */}
                <div className="page-content">

                    {/* <!-- INNER PAGE BANNER --> */}
                    <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${banner_1})` }}>
                        <div className="overlay-main site-bg-white opacity-01"></div>
                        <div className="container">
                            <div className="wt-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <h2 className="wt-title">Employer Detail</h2>
                                    </div>
                                </div>
                                {/* <!-- BREADCRUMB ROW -->                          */}

                                <div>
                                    <ul className="wt-breadcrumb breadcrumb-style-2">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Employer Detail</li>
                                    </ul>
                                </div>

                                {/* <!-- BREADCRUMB ROW END -->*/}
                            </div>
                        </div>
                    </div>
                    {/* <!-- INNER PAGE BANNER END -->

        <!-- Employer Detail START --> */}
                    <div className="section-full  p-t120 p-b90 bg-white">
                        <div className="container">


                            <div className="section-content">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8 col-md-12">
                                        {/* <!-- Candidate detail START --> */}
                                        <div className="cabdidate-de-info">
                                            <div className="twm-employer-self-wrap">
                                                <div className="twm-employer-self-info">
                                                    <div className="twm-employer-self-top">
                                                        <div className="twm-media-bg">
                                                            <img src={employer_bg} alt="#" />
                                                        </div>


                                                        <div className="twm-mid-content">

                                                            <div className="twm-media">
                                                                <img src={pic1} alt="#" />
                                                            </div>

                                                            <h4 className="twm-job-title">Galaxy Software Development</h4>
                                                            <p className="twm-employer-address"><i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-employer-websites site-text-primary">https://thewebmax.com</a>
                                                            <div className="twm-employer-self-bottom">
                                                                <a href="javascript:;" className="site-button outline-primary">Add Review</a>
                                                                <a href="javascript:;" className="site-button">Follow Us</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <h4 className="twm-s-title">About Company</h4>

                                            <p>UUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>

                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui  officia deserunt mollitia animi.</p>
                                            <p>Opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that  hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly  allegedly more when oh arrogantly vehement irresistibly fussy.? </p>

                                            <h4 className="twm-s-title">Responsabilities</h4>
                                            <ul className="description-list-2">
                                                <li>
                                                    <i className="feather-check"></i>
                                                    Establish and promote design guidelines, best practices and standards.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>
                                                    Accurately estimate design tickets during planning sessions.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>
                                                    Partnering with product and engineering to translate business and user goals.
                                                </li>

                                            </ul>

                                            <h4 className="twm-s-title">Share Profile</h4>
                                            <div className="twm-social-tags">
                                                <a href="javascript:void(0)" className="fb-clr">Facebook</a>
                                                <a href="javascript:void(0)" className="tw-clr">Twitter</a>
                                                <a href="javascript:void(0)" className="link-clr">Linkedin</a>
                                                <a href="javascript:void(0)" className="whats-clr">Whatsapp</a>
                                                <a href="javascript:void(0)" className="pinte-clr">Pinterest</a>
                                            </div>

                                            <div className="twm-two-part-section">
                                                <div className="row">

                                                    <div className="col-lg-6 col-md-6">
                                                        <h4 className="twm-s-title">Office Photos</h4>
                                                        <div className="tw-sidebar-gallery">
                                                            <ul>
                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                            <img src={thumb} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                            <img src={thumb2} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb ">
                                                                        <a className="elem" href="images/gallery/pic3.jpg" title="Title 3" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                                            <img src={thumb3} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic4.jpg" title="Title 4" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                                            <img src={thumb4} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic5.jpg" title="Title 5" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                                            <img src={thumb5} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic6.jpg" title="Title 6" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                                            <img src={thumb6} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic7.jpg" title="Title 7" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                            <img src={thumb7} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic8.jpg" title="Title 8" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                            <img src={thumb8} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb ">
                                                                        <a className="elem" href="images/gallery/pic9.jpg" title="Title 9" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                                            <img src={thumb9} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic10.jpg" title="Title 10" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                                            <img src={thumb10} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic11.jpg" title="Title 11" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                                            <img src={thumb11} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="tw-service-gallery-thumb">
                                                                        <a className="elem" href="images/gallery/pic12.jpg" title="Title 12" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                                            <img src={thumb12} alt="" />
                                                                            <i className="fa fa-file-image"></i>
                                                                        </a>
                                                                    </div>
                                                                </li>

                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <h4 className="twm-s-title">Video</h4>
                                                        <div className="video-section-first" style={{ backgroundImage: `url(${video_bg})` }}>
                                                            <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video play-now-video">
                                                                <i className="icon feather-play"></i>
                                                                <span className="ripple"></span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <h4 className="twm-s-title">Available Jobs</h4>
                                            <div className="twm-jobs-list-wrap">
                                                <ul>
                                                    <li>
                                                        <div className="twm-jobs-list-style1 mb-5">
                                                            <div className="twm-media">
                                                                <img src={compIc1} alt="#" />
                                                            </div>
                                                            <div className="twm-mid-content">
                                                                <a href="job-detail.html" className="twm-job-title">
                                                                    <h4>Senior Web Designer<span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                                                </a>
                                                                <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            </div>
                                                            <div className="twm-right-content">
                                                                <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                                                <div className="twm-jobs-amount">$1000 <span>/ Month</span></div>
                                                                <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="twm-jobs-list-style1 mb-5">
                                                            <div className="twm-media">
                                                                <img src={compIc2} alt="#" />
                                                            </div>
                                                            <div className="twm-mid-content">
                                                                <a href="job-detail.html" className="twm-job-title">
                                                                    <h4>Senior Stock Technician<span className="twm-job-post-duration">/ 15 days ago</span></h4>
                                                                </a>
                                                                <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            </div>
                                                            <div className="twm-right-content">
                                                                <div className="twm-jobs-category green"><span className="twm-bg-brown">Intership</span></div>
                                                                <div className="twm-jobs-amount">$1000 <span>/ Month</span></div>
                                                                <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="twm-jobs-list-style1 mb-5">
                                                            <div className="twm-media">
                                                                <img src={compIc3} alt="#" />
                                                            </div>
                                                            <div className="twm-mid-content">
                                                                <a href="job-detail.html" className="twm-job-title">
                                                                    <h4 className="twm-job-title">IT Department Manager<span className="twm-job-post-duration">/ 6 Month ago</span></h4>
                                                                </a>
                                                                <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            </div>
                                                            <div className="twm-right-content">
                                                                <div className="twm-jobs-category green"><span className="twm-bg-purple">Fulltime</span></div>
                                                                <div className="twm-jobs-amount">$1000 <span>/ Month</span></div>
                                                                <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 rightSidebar">

                                        <div className="side-bar-2">

                                            <div className="twm-s-map mb-5">
                                                <h4 className="section-head-small mb-4">Location</h4>
                                                <div className="twm-s-map-iframe">
                                                    <iframe height="270" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                                                </div>
                                            </div>


                                            <div className="twm-s-info-wrap mb-5">
                                                <h4 className="section-head-small mb-4">Profile Info</h4>
                                                <div className="twm-s-info">
                                                    <ul>

                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-money-bill-wave"></i>
                                                                <span className="twm-title">Offered Salary</span>
                                                                <div className="twm-s-info-discription">$20 / Day</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-clock"></i>
                                                                <span className="twm-title">Experience</span>
                                                                <div className="twm-s-info-discription">6 Year</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-venus-mars"></i>
                                                                <span className="twm-title">Gender</span>
                                                                <div className="twm-s-info-discription">Male</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-mobile-alt"></i>
                                                                <span className="twm-title">Phone</span>
                                                                <div className="twm-s-info-discription">+291  560 56456</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-at"></i>
                                                                <span className="twm-title">Email</span>
                                                                <div className="twm-s-info-discription">thewebmaxdemo@gmail.com</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-book-reader"></i>
                                                                <span className="twm-title">Qualification</span>
                                                                <div className="twm-s-info-discription">Developer</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-map-marker-alt"></i>
                                                                <span className="twm-title">Address</span>
                                                                <div className="twm-s-info-discription">1363-1385 Sunset Blvd Angeles, CA 90026 ,USA</div>
                                                            </div>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>

                                            <div className="twm-s-contact-wrap mb-5">
                                                <h4 className="section-head-small mb-4">Contact us</h4>
                                                <div className="twm-s-contact">
                                                    <div className="row">

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="phone" type="text" className="form-control" required placeholder="Phone" />
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

                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* <!-- Employer Detail END -->*/}


                </div>
                {/* <!-- CONTENT END -->

    <!-- FOOTER START --> */}
                <footer className="footer-dark" style={{ backgroundImage: f_bg }}>
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
                                            <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text" />
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
                                            <a href="index.html"><img src="images/logo-light.png" alt="" /></a>
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
                                                    <li><a href="dashboard.html">User Dashboard</a></li>
                                                    <li><a href="dash-resume-alert.html">Alert resume</a></li>
                                                    <li><a href="candidate-grid.html">Candidates</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-single.html">Blog single</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">For Employers</h3>
                                                <ul>
                                                    <li><a href="dash-post-job.html">Post Jobs</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="job-list.html">Jobs Listing</a></li>
                                                    <li><a href="job-detail.html">Jobs details</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">Helpful Resources</h3>
                                                <ul>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="employer-detail.html">Employer detail</a></li>
                                                    <li><a href="dash-my-profile.html">Profile</a></li>
                                                    <li><a href="error-404.html">404 Page</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">Quick Links</h3>
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about-1.html">About us</a></li>
                                                    <li><a href="dash-bookmark.html">Bookmark</a></li>
                                                    <li><a href="job-grid.html">Jobs</a></li>
                                                    <li><a href="employer-list.html">Employer</a></li>
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
                {/* <!-- FOOTER END -->

    <!-- BUTTON TOP START --> */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

                <Signup_Pop />
                <LoginPop />
                {/* <!--Model Popup Section End--> */}

            </div>



            {/* <!-- JAVASCRIPT  FILES ========================================= --> 
<script  src="js/jquery-3.6.0.min.js"></script><!-- JQUERY.MIN JS -->
<script  src="js/popper.min.js"></script><!-- POPPER.MIN JS -->
<script  src="js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script  src="js/magnific-popup.min.js"></script><!-- MAGNIFIC-POPUP JS -->
<script  src="js/waypoints.min.js"></script><!-- WAYPOINTS JS -->
<script  src="js/counterup.min.js"></script><!-- COUNTERUP JS -->
<script  src="js/waypoints-sticky.min.js"></script><!-- STICKY HEADER -->
<script  src="js/isotope.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/imagesloaded.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/owl.carousel.min.js"></script><!-- OWL  SLIDER  -->
<script  src="js/theia-sticky-sidebar.js"></script><!-- STICKY SIDEBAR  -->
<script  src="js/lc_lightbox.lite.js" ></script><!-- IMAGE POPUP -->
<script  src="js/bootstrap-select.min.js"></script><!-- Form js -->
<script  src="js/dropzone.js"></script><!-- IMAGE UPLOAD  -->
<script  src="js/jquery.scrollbar.js"></script><!-- scroller -->
<script  src="js/bootstrap-datepicker.js"></script><!-- scroller -->
<script  src="js/jquery.dataTables.min.js"></script><!-- Datatable -->
<script  src="js/dataTables.bootstrap5.min.js"></script><!-- Datatable -->
<script  src="js/chart.js"></script><!-- Chart -->
<script  src="js/bootstrap-slider.min.js"></script><!-- Price range slider -->
<script  src="js/swiper-bundle.min.js"></script><!-- Swiper JS -->
<script  src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  --> */}

            {/* <!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

<div className="switcher-btn-bx">
    <a className="switch-btn">
        <span className="fa fa-cog fa-spin"></span>
    </a>
</div>

<div className="styleswitcher-inner">

    <h6 className="switcher-title">Color Skin</h6>
    <ul className="color-skins">
        <li><a className="theme-skin skin-1" href="employer-detaila39b.html?theme=css/skin/skin-1"></a></li>
        <li><a className="theme-skin skin-2" href="employer-detail61e7.html?theme=css/skin/skin-2"></a></li>
        <li><a className="theme-skin skin-3" href="employer-detailcce5.html?theme=css/skin/skin-3"></a></li>
        <li><a className="theme-skin skin-4" href="employer-detail13f7.html?theme=css/skin/skin-4"></a></li>
        <li><a className="theme-skin skin-5" href="employer-detail19a6.html?theme=css/skin/skin-5"></a></li>
        <li><a className="theme-skin skin-6" href="employer-detailfe5c.html?theme=css/skin/skin-6"></a></li>
        <li><a className="theme-skin skin-7" href="employer-detailab47.html?theme=css/skin/skin-7"></a></li>
        <li><a className="theme-skin skin-8" href="employer-detail5f8d.html?theme=css/skin/skin-8"></a></li>
        <li><a className="theme-skin skin-9" href="employer-detail5663.html?theme=css/skin/skin-9"></a></li>
        <li><a className="theme-skin skin-10" href="employer-detail28ac.html?theme=css/skin/skin-10"></a></li>
        
    </ul>           
    
</div>    
</div> */}
            {/* <!-- STYLE SWITCHER END ==== --> */}

        </div>


    )
}