import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/candidates/pic1.jpg"
import pic2 from "../assets/images/images/candidates/pic2.jpg"
import pic3 from "../assets/images/images/candidates/pic3.jpg"
import pic4 from "../assets/images/images/candidates/pic4.jpg"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"


export default function DashCandidates(){
    return(
        <div>

   

	<div className="page-wraper">
    
        <Dash_Header />           
    	
        

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <div className="content-admin-main">

                <div className="wt-admin-right-page-header clearfix">
                    <h2>Candidates</h2>
                    <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Candidates</span></div>
                </div>

                <div className="twm-pro-view-chart-wrap">

                    <div className="col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default site-bg-white m-t30">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0"><i className="far fa-list-alt"></i>All Candidates</h4>
                            </div>
                            <div className="panel-body wt-panel-body">
                                <div className="twm-D_table p-a20 table-responsive">
                                    <table id="candidate_data_table" className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" onclick="checkAll(this)"/></th>
                                                <th>Name</th>
                                                <th>Applied for</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--1--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Wanda Montgomery </h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>UI Designer</td>
                                                <td>15/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Peter Hawkins</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Medical Professed</td>
                                                <td>16/06/2023 at 11:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Ralph Johnson</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Bank Manager</td>
                                                <td>17/06/2023 at 01:15 pm</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-red">Rejects</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Randall Henderson</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>IT Contractor</td>
                                                <td>18/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic3} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Randall Warren</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Digital & Creative</td>
                                                <td>22/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic4} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Wanda Montgomery </h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>UI Designer</td>
                                                <td>15/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic5} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Wanda Montgomery </h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>UI Designer</td>
                                                <td>15/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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

                                            {/* <!--8--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Wanda Montgomery </h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>UI Designer</td>
                                                <td>15/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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

                                            {/* <!--9--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Wanda Montgomery </h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>UI Designer</td>
                                                <td>15/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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

                                            {/* <!--10--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic3} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Peter Hawkins</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Medical Professed</td>
                                                <td>16/06/2023 at 11:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
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

                                            {/* <!--11--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic4} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Ralph Johnson</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Bank Manager</td>
                                                <td>17/06/2023 at 01:15 pm</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-red">Rejects</span></div></td>
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

                                            {/* <!--12--> */}
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic5} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Randall Henderson</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>IT Contractor</td>
                                                <td>18/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Pending</span></div></td>
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

                                            {/* <!--13--> */}
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td>
                                                    <div className="twm-DT-candidates-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Randall Warren</h4>
                                                                <p className="twm-candidate-address">
                                                                    <i className="feather-map-pin"></i>New York
                                                                </p>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Digital & Creative</td>
                                                <td>22/06/2023 at 10:35 am</td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">Approved</span></div></td>
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
                                                <th></th>
                                                <th>Name</th>
                                                <th>Applied for</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th></th>
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




{/* <!-- STYLE SWITCHER  ======= -->  */}
{/* <div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-candidatesa39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-candidates61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-candidatescce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-candidates13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-candidates19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-candidatesfe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-candidatesab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-candidates5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-candidates5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-candidates28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div> */}
{/* <!-- STYLE SWITCHER END ==== --> */}



</div>
    )
}