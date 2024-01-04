import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import pic2 from "../assets/images/images/jobs-company/pic2.jpg"
import pic3 from "../assets/images/images/jobs-company/pic3.jpg"
import pic4 from "../assets/images/images/jobs-company/pic4.jpg"
import pic5 from "../assets/images/images/jobs-company/pic5.jpg"
import logo from "../assets/images/images/logo-dark.png"
// import logo_white from "../assets/images/images/logo-white.png"


export default function DashBookmark(){
    return(
        <div>

   

	<div className="page-wraper">
    
        <header id="header-admin-wrap" className="header-admin-fixed">
        
            {/* <!-- Header Start --> */}
            <div id="header-admin">
                <div className="container">
                    
                    {/* <!-- Left Side Content --> */}
                    <div className="header-left">
                        <div className="nav-btn-wrap">
                            <a className="nav-btn-admin" id="sidebarCollapse">
                                <span className="fa fa-angle-left"></span>
                            </a>                           
                        </div>
                    </div>
                    {/* <!-- Left Side Content End -->
                    
                    <!-- Right Side Content --> */}
                    <div className="header-right">
                        <ul className="header-widget-wrap">
                            {/* <!--Message--> */}
                            <li className="header-widget dashboard-message-dropdown">

                                <div className="dropdown">
                                    <a href="javascript:;" className="dropdown-toggle jobzilla-admin-messange" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                                        <i className="far fa-envelope"></i>
                                        <span className="notification-animate">4</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="ID-MSG_dropdown">
                                        <div className="message-list dashboard-widget-scroll">
                                            <ul>
                                                <li className="clearfix">
                                                    <span className="msg-avtar">
                                                        <img src={pic1} alt=""/>
                                                    </span>
                                        
                                                    <div className="msg-texting">
                                                        <strong>Alexa Johnson</strong> 
                                                        <small className="msg-time">
                                                            <span className="far fa-clock p-r-5"></span>12 mins ago
                                                        </small>
                                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="msg-avtar">
                                                        <img src={pic2} alt=""/>
                                                    </span>
                                        
                                                    <div className="msg-texting">
                                                        <strong>Johan Smith</strong> 
                                                        <small className="msg-time">
                                                            <span className="far fa-clock p-r-5"></span>2 hours ago
                                                        </small>
                                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="msg-avtar">
                                                        <img src={pic3} alt=""/>
                                                    </span>
                                        
                                                    <div className="msg-texting">
                                                        <strong>Bobby Brown</strong> 
                                                        <small className="msg-time">
                                                            <span className="far fa-clock p-r-5"></span>3 hours ago
                                                        </small>
                                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="msg-avtar">
                                                        <img src={pic4} alt=""/>
                                                    </span>
                                        
                                                    <div className="msg-texting">
                                                        <strong>David Deo</strong> 
                                                        <small className="msg-time">
                                                            <span className="far fa-clock p-r-5"></span>4 hours ago
                                                        </small>
                                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                    </div>
                                                </li>                                                                              
                                            </ul>
                                            <div className="message-view-all">
                                                <a href="javascript:;">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            {/* <!--Notification--> */}
                            <li className="header-widget dashboard-noti-dropdown">

                                <div className="dropdown">
                                    <a  href="javascript:;" className="dropdown-toggle jobzilla-admin-notification" id="ID-NOTI_dropdown" data-bs-toggle="dropdown">
                                        <i className="far fa-bell"></i>
                                        <span className="notification-animate">8</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="ID-NOTI_dropdown">
                                        <div className="dashboard-widgets-header">You have 7 notifications</div>
                                        <div className="noti-list dashboard-widget-scroll">
                                            <ul>
                                                    
                                                <li>
                                                    <a href="#">
                                                        <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                        <span className="noti-texting">Devid applied for <b>Webdesigner.</b> </span> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                        <span className="noti-texting">Nikol sent you a message. </span> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                        <span className="noti-texting">lucy bookmarked your <b>SEO Expert</b> Job! </span> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                        <span className="noti-texting">Your job for <b>teacher</b> has been approved! </span> 
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="#">
                                                        <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                        <span className="noti-texting">Thor applied for <b>Team Leader</b>. </span> 
                                                    </a>
                                                </li>
                                                                                                                                                                                                                                                                
                                            </ul>

                                            <div className="noti-view-all">
                                                    <a href="javascript:;">View All</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>



                            </li>

                            {/* <!--Account--> */}
                            <li className="header-widget">
								<div className="dashboard-user-section">
                                	<div className="listing-user">
                                        <div className="dropdown">
                                            <a href="javascript:;" className="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                                <div className="user-name text-black">
                                                    <span>
                                                        <img src={pic1} alt=""/>
                                                    </span>Nikola Tesla
                                                </div> 
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                                                  
                                                <ul>
                                                    <li><a href="dashboard.html"><i className="fa fa-home"></i>Dashboard</a></li>
                                                    <li><a href="dash-messages.html"><i className="fa fa-envelope"></i> Messages</a></li>
                                                    <li><a href="dash-my-profile.html"><i className="fa fa-user"></i> Profile</a></li>
                                                    <li><a href="index.html"><i className="fa fa-share-square"></i> Logout</a></li>
                                                </ul>
                                                    
                                                
                                            </div>
                                        </div>

                                    </div>                                
                               </div>
                            </li>

                        </ul>
                    </div>
                    {/* <!-- Right Side Content End --> */}
        
                </div>
            </div>
            {/* <!-- Header End --> */}
        
        </header>            
    	
        {/* <!-- Sidebar Holder --> */}
        <nav id="sidebar-admin-wraper">
          <div className="page-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="admin-nav scrollbar-macosx">
            <ul>
              <li className="active">
                <Link to="/dashboard">
                  <i className="fa fa-home"></i>
                  <span className="admin-nav-text">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-company-profile">
                  <i className="fa fa-user-tie"></i>
                  <span className="admin-nav-text">Company Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-manage-job">
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Manage Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-post-job">
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-candidates">
                  <i className="fa fa-user-friends"></i>
                  <span className="admin-nav-text">Candidates</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-package">
                  <i className="fa fa-money-bill-alt"></i>
                  <span className="admin-nav-text">Packages</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-messages">
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">Messages</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-my-profile">
                  <i className="fa fa-user"></i>
                  <span className="admin-nav-text">My Profile</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-change-password">
                  <i className="fa fa-fingerprint"></i>
                  <span className="admin-nav-text">Change Password</span>
                </Link>
              </li>

              <li>
                <Link to="/javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-dash-profile"
                >
                  <i className="fa fa-trash-alt"></i>
                  <span className="admin-nav-text">Delete Profile</span>
                </Link>
              </li>

              <li>
                <Link to="/javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#logout-dash-profile"
                >
                  <i className="fa fa-share-square"></i>
                  <span className="admin-nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <div className="content-admin-main">

                <div className="wt-admin-right-page-header clearfix">
                    <h2>Bookmark</h2>
                    <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Bookmarked Jobs</span></div>
                </div>

                <div className="twm-pro-view-chart-wrap">

                    <div className="col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default site-bg-white m-t30">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0"><i className="far fa-bookmark"></i>Bookmarked Jobs</h4>
                            </div>
                            <div className="panel-body wt-panel-body">
                                <div className="twm-D_table p-a20 table-responsive">
                                    <table id="jobs_bookmark_table" className="table table-bordered twm-bookmark-list-wrap">
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Job Types</th>
                                                <th>Post Timing</th>
                                                <th>Applied Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--1--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Senior Web Designer</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!--2--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Sr. Rolling Stock Technician</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-brown">Intership</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--3--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic3} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>IT Department Manager</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-purple">Fulltime</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--4--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic4} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Art Production Specialist</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-sky">Freelancer</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--5--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic5} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Recreation & Fitness Worker</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Temporary</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--6--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Senior Web Designer</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!--7--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Sr. Rolling Stock Technician</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Job Types</th>
                                                <th>Post Timing</th>
                                                <th>Applied Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                                                      
            </div>

    	</div>

        {/* <!--Delete Profile Popup--> */}
        <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h4 className="modal-title">Do you want to delete your profile?</h4>
                </div>
                <div className="modal-footer">
                    <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                    <button type="button" className="site-button outline-primary">Yes</button>
                </div>
            </div>
            </div>
        </div>


        {/* <!--Logout Profile Popup--> */}
        <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h4 className="modal-title">Do you want to Logout your profile?</h4>
                </div>
                <div className="modal-footer">
                    <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                    <button type="button" className="site-button outline-primary">Yes</button>
                </div>
            </div>
            </div>
        </div>

	</div>





{/* <!-- STYLE SWITCHER  ======= -->  */}
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-bookmarka39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-bookmark61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-bookmarkcce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-bookmark13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-bookmark19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-bookmarkfe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-bookmarkab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-bookmark5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-bookmark5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-bookmark28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
{/* <!-- STYLE SWITCHER END ==== --> */}



</div>
    )
}