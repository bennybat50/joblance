import { Link } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader";


export default function DashPostJob() {
  return (
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
              <h2>Post a Job</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Job Submission Form</span>
              </div>
            </div>

            {/* <!--Logo and Cover image--> */}
            {/* <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
                        
                        <div className="row">
                                
                            <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                    
                                    <div className="dashboard-profile-pic">
                                        <div className="dashboard-profile-photo">
                                            <img src="images/jobs-company/pic1.jpg" alt="">
                                            <div className="upload-btn-wrapper">
                                                <button className="site-button button-sm">Upload Photo</button>
                                                <input type="file" name="myfile">
                                            </div>
                                        </div>
                                        <p><b>Company Logo :- </b> Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable files are .jpg & .png</p>
                                    </div>
                                </div> 
                            </div>

                            <div className="col-lg-12 col-md-6">
                                <div className="dashboard-cover-pic">
                                    <form action="upload.php" className="dropzone"></form>
                                    <p><b>Background Banner Image :- </b> Max file size is 1MB, Minimum dimension: 770 x 310 And Suitable files are .jpg & .png</p> 
                                </div>                                    
                            </div>

                        </div>
                                    
                    </div>
                </div>   */}

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">
                  <i className="fa fa-suitcase"></i>Job Details
                </h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form>
                  <div className="row">
                    {/* <!--Job title-->             */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Job Title</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Devid Smith"
                          />
                          <i className="fs-input-icon fa fa-address-card"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Job Category-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group city-outer-bx has-feedback">
                        <label>Job Category</label>
                        <div className="ls-inputicon-box ">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="j-category"
                            data-bv-field="size"
                          >
                            <option disabled selected value="">
                              Select Category
                            </option>
                            <option>Accounting and Finance</option>
                            <option>Clerical &amp; Data Entry</option>
                            <option>Counseling</option>
                            <option>Court Administration</option>
                            <option>Human Resources</option>
                            <option>Investigative</option>
                            <option>IT and Computers</option>
                            <option>Law Enforcement</option>
                            <option>Management</option>
                            <option>Miscellaneous</option>
                            <option>Public Relations</option>
                          </select>
                          <i className="fs-input-icon fa fa-border-all"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Job Type-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Job Type</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              Select Category
                            </option>
                            <option>Full Time</option>
                            <option>Freelance</option>
                            <option>Part Time</option>
                            <option>Internship</option>
                            <option>Temporary</option>
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Offered Salary-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Offered Salary</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="salary"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              Salary
                            </option>
                            <option>$500</option>
                            <option>$1000</option>
                            <option>$1500</option>
                            <option>$2000</option>
                            <option>$2500</option>
                          </select>
                          <i className="fs-input-icon fa fa-dollar-sign"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Experience-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Experience</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="E.g. Minimum 3 years"
                          />
                          <i className="fs-input-icon fa fa-user-edit"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Qualification-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Qualification</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Qualification Title"
                          />
                          <i className="fs-input-icon fa fa-user-graduate"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Gender-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Gender</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="gender"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <i className="fs-input-icon fa fa-venus-mars"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Country-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Country</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="country"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              Country
                            </option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>The Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                          </select>
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--City-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>City</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker  form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="city"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              City
                            </option>
                            <option>Sydney</option>
                            <option>Melbourne</option>
                            <option>Brisbane</option>
                            <option>Perth</option>
                            <option>Adelaide</option>
                            <option>Gold Coast</option>
                            <option>Cranbourne</option>
                            <option>Newcastle</option>
                            <option>Wollongong</option>
                            <option>Geelong</option>
                            <option>Hobart</option>
                            <option>Townsville</option>
                            <option>Ipswich</option>
                          </select>
                          <i className="fs-input-icon fa fa-map-marker-alt"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Location-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Location</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Type Address"
                          />
                          <i className="fs-input-icon fa fa-map-marker-alt"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Latitude-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Latitude</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Los Angeles"
                          />
                          <i className="fs-input-icon fa fa-map-pin"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--longitude-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Longitude</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Los Angeles"
                          />
                          <i className="fs-input-icon fa fa-map-pin"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Email Address--> */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Email Address</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Devid@example.com"
                          />
                          <i className="fs-input-icon fas fa-at"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Website--> */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Website</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_website"
                            type="text"
                            placeholder="https://.../"
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Est. Since--> */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Est. Since</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_since"
                            type="text"
                            placeholder="Since..."
                          />
                          <i className="fs-input-icon fa fa-clock"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Complete Address--> */}
                    <div className="col-xl-12 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Complete Address</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_since"
                            type="text"
                            placeholder="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA"
                          />
                          <i className="fs-input-icon fa fa-home"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--Description--> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality."
                        ></textarea>
                      </div>
                    </div>

                    {/* <!--Start Date--> */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Start Date</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control datepicker"
                            data-provide="datepicker"
                            name="company_since"
                            type="text"
                            placeholder="mm/dd/yyyy"
                          />
                          <i className="fs-input-icon far fa-calendar"></i>
                        </div>
                      </div>
                    </div>

                    {/* <!--End Date--> */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control datepicker"
                            data-provide="datepicker"
                            name="company_since"
                            type="text"
                            placeholder="mm/dd/yyyy"
                          />
                          <i className="fs-input-icon far fa-calendar"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="text-left">
                        <button type="submit" className="site-button m-r5">
                          Publish Job
                        </button>
                        <button
                          type="submit"
                          className="site-button outline-primary"
                        >
                          Save Draft
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Delete Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="delete-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Do you want to delete your profile?</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Logout Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="logout-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Do you want to Logout your profile?</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
<!-- JAVASCRIPT  FILES ========================================= --> 
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
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-post-joba39b?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-post-job61e7?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-post-jobcce5?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-post-job13f7?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-post-job19a6?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-post-jobfe5c?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-post-jobab47?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-post-job5f8d?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-post-job5663?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-post-job28ac?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}
