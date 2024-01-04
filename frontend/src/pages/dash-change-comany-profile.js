import { Link } from "react-router-dom"
import logo from "../assets/images/images/logo-dark.png"

export default function ChanageCompanyProfilr(){
    return(
        <body>

   

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
                    {/* <!-- Left Side Content End --> */}
                    
                    {/* <!-- Right Side Content --> */}
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
                                                        <img src="images/user-avtar/pic1.jpg" alt="" />
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
                                                        <img src="images/user-avtar/pic2.jpg" alt="" />
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
                                                        <img src="images/user-avtar/pic3.jpg" alt=""/>
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
                                                        <img src="images/user-avtar/pic4.jpg" alt=""/>
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
                                                        <img src="images/user-avtar/pic4.jpg" alt=""/>
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
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            
            <div className="admin-nav scrollbar-macosx">
                <ul>
                    <li className="active">
                        <a href="dashboard.html"><i className="fa fa-home"></i><span className="admin-nav-text">Dashboard</span></a>
                    </li>

                    <li>
                        <a href="dash-company-profile.html"><i className="fa fa-user-tie"></i><span className="admin-nav-text">Company Profile</span></a>
                    </li>
                    <li>
                    	<a href="dash-manage-job.html"><i className="fa fa-suitcase"></i><span className="admin-nav-text">Manage Jobs</span></a>
                    </li>
                    <li>
                    	<a href="dash-post-job.html"><i className="fa fa-suitcase"></i><span className="admin-nav-text">Jobs</span></a>
                    </li>
                    <li>
                        <a href="dash-candidates.html"><i className="fa fa-user-friends"></i><span className="admin-nav-text">Candidates</span></a>
                    </li> 

                    <li>
                        <a href="dash-package.html"><i className="fa fa-money-bill-alt"></i><span className="admin-nav-text">Packages</span></a>
                    </li>
                      
                    <li>
                    	<a href="dash-messages.html"><i className="fa fa-envelope"></i><span className="admin-nav-text">Messages</span></a>
                       
                    </li>
                   
                    <li>
                        <a href="dash-my-profile.html"><i className="fa fa-user"></i><span className="admin-nav-text">My Profile</span></a>
                    </li>

                    <li>
                        <a href="dash-change-password.html"><i className="fa fa-fingerprint"></i><span className="admin-nav-text">Change Password</span></a>
                    </li>
                    
                    <li>
                        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#delete-dash-profile"><i className="fa fa-trash-alt"></i><span className="admin-nav-text">Delete Profile</span></a>
                    </li>  
                                       
                    <li>
                        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#logout-dash-profile"><i className="fa fa-share-square"></i><span className="admin-nav-text">Logout</span></a>
                    </li>                    
                    
                </ul>
            </div>   
        </nav>

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <div className="content-admin-main">

            	<div className="wt-admin-right-page-header clearfix">
                    <h2>Company Profile!</h2>
                    <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Company Profile!</span></div>
                </div>

                {/* <!--Logo and Cover image--> */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
                        
                        <div className="row">
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    
                                    <div className="dashboard-profile-pic">
                                        <div className="dashboard-profile-photo">
                                            <img src="images/jobs-company/pic1.jpg" alt=""/>
                                            <div className="upload-btn-wrapper">
                                                <div id="upload-image-grid"></div>
                                                <button className="site-button button-sm">Upload Photo</button>
                                                <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png"/>
                                            </div>
                                        </div>
                                        <p><b>Company Logo :- </b> Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable files are .jpg & .png</p>
                                    </div>

                                </div> 
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="dashboard-cover-pic">
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                    <p><b>Background Banner Image :- </b> Max file size is 1MB, Minimum dimension: 770 x 310 And Suitable files are .jpg & .png</p> 
                                </div>                                    
                            </div>

                        </div>
                                    
                    </div>
                </div> 

                {/* <!--Basic Information--> */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Basic Informations</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <form>
                            <div className="row">
                                                
                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_name" type="text" placeholder="Devid Smith"/>
                                                <i className="fs-input-icon fa fa-user "></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_phone" type="text" placeholder="(251) 1234-456-7890"/>
                                                <i className="fs-input-icon fa fa-phone-alt"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com"/>
                                                <i className="fs-input-icon fa fa-envelope"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Website</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_website" type="text" placeholder="https://.../"/>
                                                <i className="fs-input-icon fa fa-globe-americas"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Est. Since</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_since" type="text" placeholder="Since..."/>
                                                <i className="fs-input-icon fa fa-globe-americas"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group city-outer-bx has-feedback">
                                            <label>Team Size</label>
                                            <div className="ls-inputicon-box">  
                                                <select className="wt-select-box selectpicker" name="team-size" data-live-search="true" title="team-size" id="city" data-bv-field="size">
                                                    <option className="bs-title-option" value="">5-10</option>
                                                    <option className="" value="">10+</option>
                                                    <option className="" value="">20+</option>
                                                    <option className="" value="">50+</option>
                                                </select>
                                                <i className="fs-input-icon fa fa-sort-numeric-up"></i>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows="3" placeholder="Greetings! We are Galaxy Software Development Company."></textarea>
                                        </div>
                                    </div>
                                   
                                                                                                
                                    <div className="col-lg-12 col-md-12">                                   
                                        <div className="text-left">
                                            <button type="submit" className="site-button">Save Changes</button>
                                        </div>
                                    </div> 
                                                                        
                                
                            </div>
                       </form>             
                    </div>
                </div>

                {/* <!--Photo gallery-->/ */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Photo Gallery</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        
                        <div className="row">
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                </div>
                            </div>
                                                                                            
                            <div className="col-lg-12 col-md-12">                                   
                                <div className="text-left">
                                    <button type="submit" className="site-button">Save Changes</button>
                                </div>
                            </div> 
                                                                    
                            
                        </div>
                                 
                    </div>
                </div>

                {/* <!--Video gallery--> */}
                <div className="panel panel-default">

                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Video Gallery</h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Youtube</label>
                                    <div className="ls-inputicon-box input_fields_youtube"> 
                                        <input className="form-control wt-form-control" name="mytext[]" type="text" placeholder="https://www.youtube.com/"/>
                                        <i className="fs-input-icon fab fa-youtube"></i>
                                    </div>
                                    <div className="text-right m-tb10">
                                        <button className="add_field_youtube">Add More Fields <i className="fa fa-plus"></i></button>
                                    </div>
                                </div>                                    
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Vimeo</label>
                                    <div className="ls-inputicon-box input_fields_vimeo"> 
                                        <input className="form-control wt-form-control" name="mytext[]" type="text" placeholder="https://vimeo.com/"/>
                                        <i className="fs-input-icon fab fa-vimeo-v"></i>
                                    </div>
                                    <div className="text-right m-tb10">
                                        <button className="add_field_vimeo">Add More Fields <i className="fa fa-plus"></i></button>
                                    </div>                                        
                                </div> 
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="custome-video-upload form-group">
                                    <label>Custom Video</label>
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                </div> 
                            </div> 
                            
                            <div className="col-lg-12 col-md-12">                                   
                                <div className="text-left">
                                    <button type="submit" className="site-button">Save Changes</button>
                                </div>
                            </div> 

                        </div>           
                    </div> 
                    
                </div>

                {/* <!--Social Network--> */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Social Network</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <form>
                            <div className="row">
                                   
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group">
                                            <label>Facebook</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.facebook.com/"/>
                                                <i className="fs-input-icon fab fa-facebook-f"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://twitter.com/"/>
                                                <i className="fs-input-icon fab fa-twitter"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>linkedin</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.linkedin.com/"/>
                                                <i className="fs-input-icon fab fa-linkedin-in"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">     
                                        <div className="form-group">
                                            <label>Whatsapp</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.whatsapp.com/"/>
                                                <i className="fs-input-icon fab fa-whatsapp"></i>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <div className="col-lg-4 col-md-6">                               
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.instagram.com/"/>
                                                <i className="fs-input-icon fab fa-instagram"></i>
                                            </div>
                                        </div>
                                    </div>    
                                        
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Pinterest</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.pinterest.com/"/>
                                                <i className="fs-input-icon fab fa-pinterest-p"></i>
                                            </div>
                                        </div>                 
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Tumblr</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.tumblr.com/"/>
                                                <i className="fs-input-icon fab fa-tumblr"></i>
                                            </div>
                                        </div>                                                                                          
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Youtube</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.youtube.com/"/>
                                                <i className="fs-input-icon fab fa-youtube"></i>
                                            </div>
                                        </div>                  
                                    </div> 
                                                                                                
                                <div className="col-lg-12 col-md-12">                                   
                                        <div className="text-left">
                                            <button type="submit" className="site-button">Save Changes</button>
                                        </div>
                                    </div> 
                                                                        
                                
                            </div>
                       </form>             
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
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  -->

<!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div> */}
{/*     
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-company-profilea39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-company-profile61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-company-profilecce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-company-profile13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-company-profile19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-company-profilefe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-company-profileab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-company-profile5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-company-profile5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-company-profile28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}

</body>
    )
}