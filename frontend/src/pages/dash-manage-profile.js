import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import pic2 from "../assets/images/images/jobs-company/pic2.jpg"
import pic3 from "../assets/images/images/jobs-company/pic3.jpg"
import pic4 from "../assets/images/images/jobs-company/pic4.jpg"
import pic5 from "../assets/images/images/jobs-company/pic5.jpg"
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"


export default function DashManageJob(){
    return(
        <div>

   

        <div className="page-wraper">
        
            <Dash_Header />              
            
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
                        <h2>Manage Jobs</h2>
                        <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>My Job Listing</span></div>
                    </div>
    
                    {/* <!--Basic Information--> */}
                    <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0"><i className="fa fa-suitcase"></i> Job Details</h4>
                        </div>
                        <div className="panel-body wt-panel-body p-a20 m-b30 ">
                            <div className="twm-D_table p-a20 table-responsive">
                                <table id="jobs_bookmark_table" className="table table-bordered twm-bookmark-list-wrap">
                                    <thead>
                                        <tr>
                                            <th>Job Title</th>
                                            <th>Category</th>
                                            <th>Job Types</th>
                                            <th>Applications</th>
                                            <th>Created & Expired</th>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Web Designer</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">Part Time</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">03 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Product Manager</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-brown">Intership</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">05 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>PHP Developer</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-purple">Fulltime</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">06 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Product Designer</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-sky">Freelancer</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">13 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Gym Trainer</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-golden">Temporary</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">08 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Web Designer</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">14 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                        </a>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                            <td>Product Manager</td>
                                            <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                            <td><a href="javascript:;" className="site-text-primary">10 Applied</a></td>
                                            <td>
                                                <div>08/06/2023</div>
                                                <div>28/06/2023</div>
                                            </td>
                                            
                                            <td>
                                                <div className="twm-table-controls">
                                                    <ul className="twm-DT-controls-icon list-unstyled">
                                                        <li>
                                                            <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="fa fa-eye"></span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <span className="far fa-edit"></span>
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
                                            <th>Category</th>
                                            <th>Job Types</th>
                                            <th>Applications</th>
                                            <th>Created & Expired</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                </table>
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
            <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  aria-hidden="true">
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
                <li><a className="theme-skin skin-1" href="dash-manage-jobsa39b.html?theme=css/skin/skin-1"></a></li>
                <li><a className="theme-skin skin-2" href="dash-manage-jobs61e7.html?theme=css/skin/skin-2"></a></li>
                <li><a className="theme-skin skin-3" href="dash-manage-jobscce5.html?theme=css/skin/skin-3"></a></li>
                <li><a className="theme-skin skin-4" href="dash-manage-jobs13f7.html?theme=css/skin/skin-4"></a></li>
                <li><a className="theme-skin skin-5" href="dash-manage-jobs19a6.html?theme=css/skin/skin-5"></a></li>
                <li><a className="theme-skin skin-6" href="dash-manage-jobsfe5c.html?theme=css/skin/skin-6"></a></li>
                <li><a className="theme-skin skin-7" href="dash-manage-jobsab47.html?theme=css/skin/skin-7"></a></li>
                <li><a className="theme-skin skin-8" href="dash-manage-jobs5f8d.html?theme=css/skin/skin-8"></a></li>
                <li><a className="theme-skin skin-9" href="dash-manage-jobs5663.html?theme=css/skin/skin-9"></a></li>
                <li><a className="theme-skin skin-10" href="dash-manage-jobs28ac.html?theme=css/skin/skin-10"></a></li>
                
            </ul>           
            
        </div>    
    </div>
    <!-- STYLE SWITCHER END ==== --> */}
    
    </div>
    )
}