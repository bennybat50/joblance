import banner_1 from "../assets/images/images/banner/1.jpg"
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
// import thumb11 from "../assets/images/images/gallery/thumb/pic11.jpg"
import thumb12 from "../assets/images/images/gallery/thumb/pic12.jpg"
import video_bg from "../assets/images/images/video-bg.jpg"
import logo_dark from "../assets/images/images/logo-dark.png"
// import add_gb  from "../assets/images/images/logo-dark.png"
import f_bg from "../assets/images/images/f-bg.jpg"
import add_bg from "../assets/images/images/add-bg.jpg"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import job_detail from "../assets/images/images/job-detail-bg.jpg"


export default function JobDetail(){
    return(
        
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
    <header className="site-header header-style-3 mobile-sider-drawer-menu">
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar">
                    <div className="container-fluid clearfix">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <a href="index.html">
                                <img src={logo_dark} alt="" />

                                </a>
                            </div>
                        </div>
                        
                        {/* NAV Toggle Button */}
                        <button
                            id="mobile-side-drawer"
                            data-target=".header-nav"
                            data-toggle="collapse"
                            type="button"
                            className="navbar-toggler collapsed"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        {/* MAIN Nav */}
                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                            <ul className="nav navbar-nav">
                                {/* ... (your menu items) */}
                            </ul>
                        </div>

                        {/* Header Right Section */}
                        <div className="extra-nav header-2-nav">
                            <div className="extra-cell">
                                <div className="header-search">
                                    <a href="#search" className="header-search-icon">
                                        <i className="feather-search"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="extra-cell">
                                <div className="header-nav-btn-section">
                                    <div className="twm-nav-btn-left">
                                        <a
                                            className="twm-nav-sign-up"
                                            data-bs-toggle="modal"
                                            href="#sign_up_popup"
                                            role="button"
                                        >
                                            <i className="feather-log-in"></i> Sign Up
                                        </a>
                                    </div>
                                    <div className="twm-nav-btn-right">
                                        <a href="dash-post-job.html" className="twm-nav-post-a-job">
                                            <i className="feather-briefcase"></i> Post a job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SITE Search */}
                <div id="search">
                    <span className="close"></span>
                    <form
                        role="search"
                        id="searchform"
                        action="https://thewebmax.org/search"
                        method="get"
                        className="radius-xl"
                    >
                        <input
                            className="form-control"
                            value=""
                            name="q"
                            type="search"
                            placeholder="Type to search"
                        />
                        <span className="input-group-append">
                            <button type="button" className="search-btn">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </header>
    {/* <!-- HEADER END -->

  
    <!-- CONTENT START --> */}
    <div className="page-content">

        {/* <!-- INNER PAGE BANNER --> */}
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{backgroundImage: `url(${banner_1})`}}>
            <div className="overlay-main site-bg-white opacity-01"></div>
            <div className="container">
                <div className="wt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="wt-title">IT Department Manager</h2>
                        </div>
                    </div>
                    {/* <!-- BREADCRUMB ROW -->*/}
                    
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="index.html">Home</a></li>
                                <li>Job Detail</li>
                            </ul>
                        </div>
                    
                    {/* <!-- BREADCRUMB ROW END -->*/}
                </div>
            </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}



        {/* <!-- OUR BLOG START --> */}
        <div className="section-full  p-t120 p-b90 bg-white">
            <div className="container">
            
                {/* <!-- BLOG SECTION START --> */}
                <div className="section-content">
                    <div className="row d-flex justify-content-center">
                    
                        <div className="col-lg-8 col-md-12">
                            {/* <!-- Candidate detail START --> */}
                            <div className="cabdidate-de-info">
                                <div className="twm-job-self-wrap">
                                    <div className="twm-job-self-info">
                                        <div className="twm-job-self-top">
                                            <div className="twm-media-bg">
                                                <img src={job_detail} alt="#"/>
                                                <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                            </div>
                                            
                                            
                                            <div className="twm-mid-content">

                                                <div className="twm-media">
                                                    <img src={pic1} alt="#"/>
                                                </div>

                                                <h4 className="twm-job-title">Senior Web Designer , Developer <span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                                <p className="twm-job-address"><i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                <div className="twm-job-self-mid">
                                                    <div className="twm-job-self-mid-left">
                                                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                        <div className="twm-jobs-amount">$2000 - $2500 <span>/ Month</span></div>
                                                    </div>
                                                    <div className="twm-job-apllication-area">Application ends:
                                                        <span className="twm-job-apllication-date">October 1, 2025</span>
                                                    </div>
                                                </div>

                                                <div className="twm-job-self-bottom">
                                                    <a className="site-button" data-bs-toggle="modal" href="#apply_job_popup" role="button">
                                                        Apply Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <h4 className="twm-s-title">Job Description:</h4>

                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                                    consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
                                </p>

                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                                  
                                
                                <h4 className="twm-s-title">Requirments:</h4>
                                <ul className="description-list-2">
                                    <li>
                                        <i className="feather-check"></i>
                                        Must be able to communicate with others to convey information effectively.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Personally passionate and up to date with current trends and technologies, committed to quality and comfortable working with adult media.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Rachelor or Master degree level educational background.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        4 years relevant PHP dev experience.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Troubleshooting, testing and maintaining the core product software and databases.
                                    </li>

                                </ul>

                                <h4 className="twm-s-title">Responsabilities:</h4>
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
                                        Partnering with product and engineering to translate business and user goals into elegant and practical designs. that can deliver on key business and user metrics.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Present and defend designs and key deliverables to peers and executive level stakeholders.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i>
                                        Execute all visual design stages from concept to final hand-off to engineering.
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

                                <h4 className="twm-s-title">Location</h4>
                                <div className="twm-m-map mb-5">
                                    <div className="twm-m-map-iframe">
                                        <iframe height="310" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                                    </div>
                                </div>

                                <div className="twm-two-part-section">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-12">
                                            <h4 className="twm-s-title">Office Photos</h4>
                                            <div className="tw-sidebar-gallery">
                                                <ul>
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                <img src={thumb} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                <img src={thumb} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb ">
                                                            <a className="elem" href="images/gallery/pic3.jpg" title="Title 3"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                                <img src={thumb2} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic4.jpg" title="Title 4"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                                <img src={thumb3} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic5.jpg" title="Title 5"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                                <img src={thumb4} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic6.jpg" title="Title 6"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                                <img src={thumb5} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic7.jpg" title="Title 7" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                <img src={thumb6} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic8.jpg" title="Title 8" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                <img src={thumb7} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb ">
                                                            <a className="elem" href="images/gallery/pic9.jpg" title="Title 9"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                                <img src={thumb8} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic10.jpg" title="Title 10"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                                <img src={thumb9} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic11.jpg" title="Title 11"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                                <img src={thumb10} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                    <li>
                                                        <div className="tw-service-gallery-thumb">
                                                            <a className="elem" href="images/gallery/pic12.jpg" title="Title 12"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                                <img src={thumb12} alt=""/>
                                                                <i className="fa fa-file-image"></i>     
                                                            </a>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
            
                                            </div> 
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <h4 className="twm-s-title">Video</h4>
                                            <div className="video-section-first"  style={{backgroundImage: `url(${video_bg})`}}>
                                                <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video play-now-video">
                                                    <i className="icon feather-play"></i>
                                                    <span className="ripple"></span>
                                                </a>
                                            </div> 
                                        </div>

                                    </div>
                                </div>

                                
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12 rightSidebar">

                            <div className="side-bar mb-4">
                                <div className="twm-s-info2-wrap mb-5">
                                    <div className="twm-s-info2">
                                        <h4 className="section-head-small mb-4">Job Information</h4>
                                        <ul className="twm-job-hilites">
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <span className="twm-title">Date Posted</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-eye"></i>
                                                <span className="twm-title">8160 Views</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-file-signature"></i>
                                                <span className="twm-title">6 Applicants</span>
                                            </li>
                                        </ul>
                                        <ul className="twm-job-hilites2">

                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span className="twm-title">Date Posted</span>
                                                    <div className="twm-s-info-discription">April 22, 2023</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span className="twm-title">Location</span>
                                                    <div className="twm-s-info-discription">Munchen, Germany</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-user-tie"></i>
                                                    <span className="twm-title">Job Title</span>
                                                    <div className="twm-s-info-discription">Web Developer</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-clock"></i>
                                                    <span className="twm-title">Experience</span>
                                                    <div className="twm-s-info-discription">3 Year</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-suitcase"></i>
                                                    <span className="twm-title">Qualification</span>
                                                    <div className="twm-s-info-discription">Bachelor Degree </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    <i className="fas fa-venus-mars"></i>
                                                    <span className="twm-title">Gender</span>
                                                    <div className="twm-s-info-discription">Both</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="twm-s-info-inner">
                                                    
                                                    <i className="fas fa-money-bill-wave"></i>
                                                    <span className="twm-title">Offered Salary</span>
                                                    <div className="twm-s-info-discription">$2000-$2500 / Month</div>
                                                </div>
                                            </li>

                                        </ul>
                                        
                                    </div>
                                </div>

                                <div className="widget tw-sidebar-tags-wrap">
                                    <h4 className="section-head-small mb-4">Job Skills</h4>
                                    
                                    <div className="tagcloud">
                                        <a href="javascript:void(0)">Html</a>
                                        <a href="javascript:void(0)">Python</a>
                                        <a href="javascript:void(0)">WordPress</a>                                            
                                        <a href="javascript:void(0)">JavaScript</a>
                                        <a href="javascript:void(0)">Figma</a>
                                        <a href="javascript:void(0)">Angular</a>
                                        <a href="javascript:void(0)">Reactjs</a>
                                        <a href="javascript:void(0)">Drupal</a>
                                        <a href="javascript:void(0)">Joomla</a>
                                    </div>
                                </div>

                            </div>

                            <div className="twm-s-info3-wrap mb-5">
                                <div className="twm-s-info3">
                                    <div className="twm-s-info-logo-section">
                                        <div className="twm-media">
                                            <img src={pic1} alt="#"/>
                                        </div>
                                        <h4 className="twm-title">Senior Web Designer , Developer</h4>
                                    </div>
                                    <ul>

                                        <li>
                                            <div className="twm-s-info-inner">
                                                <i className="fas fa-building"></i>
                                                <span className="twm-title">Company</span>
                                                <div className="twm-s-info-discription">Software Development</div>
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
                                                <i className="fas fa-desktop"></i>
                                                <span className="twm-title">Website</span>
                                                <div className="twm-s-info-discription">https://themeforest.net</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="twm-s-info-inner">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span className="twm-title">Address</span>
                                                <div className="twm-s-info-discription">1363-1385 Sunset Blvd Angeles, CA
                                                    90026 ,USA</div>
                                            </div>
                                        </li>

                                    </ul>
                                    <a href="about-1.html" className=" site-button">Vew Profile</a>
                                    
                                </div>
                            </div>

                            <div className="twm-advertisment" style={{backgroundImage: `url(${add_bg})`}}>
                                <div className="overlay"></div>
                                <h4 className="twm-title">Recruiting?</h4>
                                <p>Get Best Matched Jobs On your <br/>
                                 Email. Add Resume NOW!</p>
                                 <a href="javascript:;" className="site-button white">Read More</a> 
                             </div>


                        </div>
                    
                    </div>
                                            
                </div>
                
            </div>
            
        </div>   
        {/* <!-- OUR BLOG END -->           */}
        
 
    </div>
    {/* <!-- CONTENT END -->

    <!-- FOOTER START --> */}
    <footer className="footer-dark"  style={{backgroundImage: `url(${f_bg})`}}>
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
                                <a href="index.html"><img src="images/logo-light.png" alt=""/></a>
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
    {/* <!-- FOOTER END --> */}

    {/* <!-- BUTTON TOP START --> */}
    <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

    {/* <!--apply job popup --> */}
    <div className="modal fade" id="apply_job_popup" aria-hidden="true" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                    <div className="modal-header">
                        <h4 className="modal-title" id="sign_up_popupLabel">Apply For This Job</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                
                <div className="modal-body">
                    <div className="apl-job-inpopup">
                        {/* <!--Basic Information--> */}
                        <div className="panel panel-default">
                            
                            <div className="panel-body wt-panel-body p-a20 ">

                                <div className="twm-tabs-style-1">
                                        
                                    <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <div className="ls-inputicon-box"> 
                                                        <input className="form-control" name="company_name" type="text" placeholder="Devid Smith"/>
                                                        <i className="fs-input-icon fa fa-user "></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <div className="ls-inputicon-box"> 
                                                        <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com"/>
                                                        <i className="fs-input-icon fas fa-at"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <textarea className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Upload Resume</label>
                                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone dz-clickable"><div className="dz-default dz-message"><span><i className="sl sl-icon-plus"></i> Click here or drop files to upload</span></div></form>
                                                    <small>If you do not have a resume document, you may write your brief professional profile <a className="site-text-primary" href="javascript:void(0);">here</a></small>
                                                </div>                                    
                                            </div>

                                        
                                                            
                                            <div className="col-xl-12 col-lg-12 col-md-12"> 
                                                <div className="text-left">
                                                    <button type="submit" className="site-button">Send Application</button>
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
        
    </div>

    {/* <!--Model Popup Section Start-->
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
                                <li><a href="javascript.html" className="facebook-clr"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="javascript.html" className="twitter-clr"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="javascript.html" className="linkedin-clr"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="javascript.html" className="google-clr"><i className="fab fa-google"></i></a></li>
                            </ul>
                        </div>

                    </form>
                </div>
            </div>
            
        </div>
        {/* <!--Login popup --> */}
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

                                    {/* <!--Login Candidate--> */}
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
                                                        <label className="form-check-label rem-forgot" for="Password3">Remember me <a href="javascript:;">Forgot Password</a></label>
                                                        
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
                                    {/* <!--Login Employer Content-->  */}
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
                                                        <label className="form-check-label rem-forgot" for="Password4">Remember me <a href="javascript:;">Forgot Password</a></label>
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
                                <li><a href="javascript.html" className="facebook-clr"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="javascript.html" className="twitter-clr"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="javascript.html" className="linkedin-clr"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="javascript.html" className="google-clr"><i className="fab fa-google"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
        <li><a className="theme-skin skin-1" href="job-detaila39b.html?theme=css/skin/skin-1"></a></li>
        <li><a className="theme-skin skin-2" href="job-detail61e7.html?theme=css/skin/skin-2"></a></li>
        <li><a className="theme-skin skin-3" href="job-detailcce5.html?theme=css/skin/skin-3"></a></li>
        <li><a className="theme-skin skin-4" href="job-detail13f7.html?theme=css/skin/skin-4"></a></li>
        <li><a className="theme-skin skin-5" href="job-detail19a6.html?theme=css/skin/skin-5"></a></li>
        <li><a className="theme-skin skin-6" href="job-detailfe5c.html?theme=css/skin/skin-6"></a></li>
        <li><a className="theme-skin skin-7" href="job-detailab47.html?theme=css/skin/skin-7"></a></li>
        <li><a className="theme-skin skin-8" href="job-detail5f8d.html?theme=css/skin/skin-8"></a></li>
        <li><a className="theme-skin skin-9" href="job-detail5663.html?theme=css/skin/skin-9"></a></li>
        <li><a className="theme-skin skin-10" href="job-detail28ac.html?theme=css/skin/skin-10"></a></li>
        
    </ul>           
    
</div>    
</div> */}
{/* <!-- STYLE SWITCHER END ==== --> */}

</div>
    )
}