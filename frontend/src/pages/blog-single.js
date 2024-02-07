import { useEffect, useState } from "react";
import banner_1 from "../assets/images/images/banner/1.jpg"
import axios from "axios";
import {BASEURL} from "../common/config"
import { Link, useParams } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";

export default function BlogSingle(){
    const [blogs, setBlogs] = useState()
    const [recentArticle, setResentArticle] = useState()
    const { blogID } = useParams()

    useEffect(()=>{
        const getArticle = async () => {
            let api_url = BASEURL + "/articles/" + blogID
            console.log(api_url)
            // const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url);
                console.log(res.data.data)
                setBlogs(res.data.data)
            } catch (err) {
                console.log(err);
            }
        };
        getArticle()
    },[])



    useEffect(()=>{
        const getRecentArticle = async () => {
            let api_url = BASEURL + "/articles/" 
            console.log(api_url)
            // const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url);
                console.log(res.data.data)
                setResentArticle(res.data.data.slice(0, 5))
            } catch (err) {
                console.log(err);
            }
        };
        getRecentArticle()
    },[])
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
     
    <PublicHeader />

      

        <div className="page-content">

            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-center"    style={{ backgroundImage: `url(${banner_1})` }}>
        
                <div className="overlay-main site-bg-white opacity-01"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Blog detail</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW -->                             */}
                        
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Blog detail</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
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
                                {/* <!-- BLOG START --> */}
                                <div className="blog-post-single-outer">
                                    <div className="blog-post-single bg-white">                                    
                                            {
                                                blogs && (

                                                        <div className="wt-post-info">
                                            
                                                            <div className="wt-post-media m-b30 " style={{height:"400px", width:"100%",}} >
                                                                <img src={blogs.image} style={{height:"100%", width:"100%", objectFit:"cover"}} alt=""/>
                                                            </div>
                                                            
                                                            <div className="wt-post-title ">
                                                                <div className="wt-post-meta-list">
                                                                    <div className="wt-list-content post-date">{blogs.createdAt.slice(0, 10)}</div>
                                                                    <div className="wt-list-content post-author">By {blogs.user_id.fullName}</div>
                                                                </div> 
                                                                <h3 className="post-title">{blogs.title}</h3>
                                                                
                                                            </div>
                                                            
                                                            <div className="wt-post-discription">

                                                                <p>{blogs.content}</p>
                                                                
                                                                {/* <p>
                                                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Harvel is a copyright protection platform for next-gen creators, crawling the web on a daily basis in order to find piracy links and copyright infringement of your content. I
                                                                </p>

                                                                <h4 className="twm-blog-s-title">About Business Network</h4>

                                                                <p>
                                                                    Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. 
                                                                </p> */}

                                                                {/* <div className="wt-post-discription">
                                                                    <blockquote>
                                                                        <p><span>"</span> A business consulting agency is involved in the planning, implementation, 
                                                                            and education  of businesses.
                                                                        </p>
                                                                        <strong>Richard Anderson</strong>
                                                                    </blockquote>
                                                                </div> 

                                                                <h4 className="twm-blog-s-title">Get Your Resume Done Right</h4>

                                                                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. </p> */}
                                                                
                                                            </div> 
                                                            

                                                            <div className="post-single-list">
                                                                <ul className="description-list-2">
                                                                    <li>
                                                                        <i className="feather-check"></i>
                                                                        You need to create an account to find the best and preferred job.
                                                                    </li>
                                                                    <li>
                                                                        <i className="feather-check"></i>
                                                                        After creating the account, you have to apply for the desired job.
                                                                    </li>
                                                                    <li>
                                                                        <i className="feather-check"></i>
                                                                        After filling all the relevant information you have to upload your resume.
                                                                    </li>
                                                                
                                                                </ul>
                                                                
                                                            </div>


                                                            <div className="twm-posts-author">
                                                                <div className="twm-post-author-pic">
                                                                    <img src="images/blog/post-author.jpg" alt="#"/>
                                                                </div>
                                                                <div className="twm-post-author-content">
                                                                    <span>435 Posts Since 2018</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    </p>
                                                                    <strong>Rosalina William</strong>
                                                                </div>
                                                            </div>
                                                            
                                                            
                                                            
                                                        </div>
                                                )
                                            }

                                        

                                    </div>

                                    <div className="post-area-tags-wrap">
                                        <div className="post-social-icons-wrap">
                                            <h4 className="mb-4">Share</h4>
                                            <ul className="post-social-icons">
                                                <li><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
                                                <li><a href="javascript:void(0);" className="fab fa-twitter"></a></li>
                                                <li><a href="javascript:void(0);" className="fab fa-linkedin-in"></a></li>
                                                <li><a href="javascript:void(0);" className="fab fa-google"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="post-navigation m-t30">
                                        <div className="post-nav-links">
                                            <div className="post-nav-item nav-post-prev">
                                                <div className="nav-post-arrow"> 
                                                    <a href="blog-list.html">
                                                        <i className="fa fa-angle-left"></i>
                                                    </a>
                                                </div>
                                                <div className="nav-post-meta"> 
                                                    <a href="blog-list.html">The wise man therefore always holds
                                                        in these matters to this principle</a>
                                                </div>
                                            </div>
                                            <div className="post-nav-item nav-post-next">
                                                <div className="nav-post-arrow"> 
                                                    <a href="blog-list.html">
                                                        <i className="fa fa-angle-right"></i>
                                                    </a>
                                                </div>
                                                <div className="nav-post-meta"> 
                                                    <a href="blog-list.html">Rejects pleasures to secure other
                                                        greater pleasures</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                

                                    <div className="clear" id="comment-list">
                                        <div className="comments-area" id="comments">
                                            <h3 className="section-head-small mb-4">Comments</h3>
                                            <div>
                                                {/* <!-- COMMENT LIST START --> */}
                                                <ol className="comment-list">
                                                    <li className="comment">
                                                        {/* <!-- COMMENT BLOCK --> */}
                                                        <div className="comment-body">

                                                            <div className="comment-author">
                                                                <img className="avatar photo" src="images/blog/comment/pic1.jpg" alt=""/>
                                                                <div className="comment-meta">
                                                                    <a href="javascript:void(0);">Apr 05, 2023</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-info">                                                
                                                                <cite className="fn">Richard Anderson</cite>
                                                                <div className="reply">
                                                                    <a href="javscript:;" className="comment-reply-link">Reply</a>
                                                                </div>                                        
                                                                <p>No one rejects, dislikes, or avoids pleasure itself, because pleasure, but 
                                                                    because those who do not know how to pursue.
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="comment">
                                                        {/* <!-- COMMENT BLOCK --> */}
                                                        <div className="comment-body">

                                                            <div className="comment-author">
                                                                <img className="avatar photo" src="images/blog/comment/pic2.jpg" alt=""/>
                                                                <div className="comment-meta">
                                                                    <a href="javascript:void(0);">Apr 08, 2023</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-info">                                                
                                                                <cite className="fn">Devid Abraham</cite>
                                                                <div className="reply">
                                                                    <a href="javscript:;" className="comment-reply-link">Reply</a>
                                                                </div>                                        
                                                                <p>No one rejects, dislikes, or avoids pleasure itself, because pleasure, but 
                                                                    because those who do not know how to pursue.
                                                                </p>
                                                            </div>

                                                        </div>
                                                        {/* <!-- SUB COMMENT BLOCK --> */}
                                                        
                                                    </li>
                                                </ol>
                                                {/* <!-- COMMENT LIST END -->
                                                
                                                <!-- LEAVE A REPLY START --> */}
                                                <div className="comment-respond m-t30" id="respond">
                    
                                                    <h3 className="comment-reply-title section-head-small mb-4" id="reply-title">Leave a reply
                                                        <small>
                                                            <a style={{display:"none"}} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
                                                        </small>
                                                    </h3>
                    
                                                    <form className="comment-form" id="commentform" method="post">
                                                        <div className="row">
                                                            <div className="comment-form-author col-md-6 mb-3">
                                                                <label>Your Name* <span className="required">*</span></label>
                                                                <input className="form-control" type="text" value="" name="user-comment" placeholder="Your Name*" id="author"/>
                                                            </div>
                                                            
                                                            <div className="comment-form-email col-md-6 mb-3">
                                                                <label>Your Email* <span className="required">*</span></label>
                                                                <input className="form-control" type="text" value="" name="email" placeholder="Your Email*"/>
                                                            </div>
                                                                                                                
                                                            <div className="comment-form-comment col-md-12 mb-4">
                                                                <label>Message*</label>
                                                                <textarea className="form-control" rows="8" name="comment" placeholder="Message*" id="comment"></textarea>
                                                            </div>
                                                            
                                                            <div className="form-submit">
                                                                <button type="submit" className="site-button">Submit Now</button>
                                                            </div>
                                                        </div>
                                                        
                                                    </form>
                    
                                                </div>
                                                {/* <!-- LEAVE A REPLY END -->/ */}
                                        </div>
                                        </div>
                                    </div>
                                </div>                             
                            </div>
                            
                            <div className="col-lg-4 col-md-12 rightSidebar">

                                <div className="side-bar">
                                    <div className="widget search-bx">
                                                                                
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search"/>
                                                <button className="btn" type="button" id="button-addon2"><i className="feather-search"></i></button>
                                            </div>
                                        </form>
                                        
                                    </div>
    
                                    <div className="widget all_services_list">
                                        <h4 className="section-head-small mb-4">Categories</h4> 
                                        <div className="all_services m-b30">
                                            <ul>
                                                <li><a href="job-detail.html">Categories</a> <span className="badge">08</span></li>
                                                <li><a href="job-detail.html">Education</a> <span className="badge">12</span></li>
                                                <li><a href="job-detail.html">Information</a><span className="badge">15</span></li>
                                                <li><a href="job-detail.html">Jobs</a><span className="badge">25</span></li>
                                                <li><a href="job-detail.html">Learn</a><span className="badge">36</span></li>
                                                <li><a href="job-detail.html">Skill</a><span className="badge">12</span></li>
                                            </ul>
                                        </div>
                                    </div>
    
                                    <div className="widget recent-posts-entry">
                                        <h4 className="section-head-small mb-4">Recent Article</h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx ">
                                                {
                                                    recentArticle && recentArticle.map((data)=>(

                                                        <Link to={`/blog/${data._id}`} className="widget-post clearfix " style={{marginBottom:"40px"}}>
                                                            <div className="wt-post-media r" style={{height:"100px", marginBottom:"20px"}}>
                                                                <img src={data.image}   style={{height:"100%", objectFit:"cover"}}  alt=""/>
                                                            </div>
                                                            <div className="wt-post-info">
                                                                <div className="wt-post-header">
                                                                    <span className="post-date">{data.createdAt.slice(0,10)}</span>
                                                                    <span className="post-title"> 
                                                                        <a href="blog-single.html">{data.title}</a>
                                                                    </span>
                                                                </div>                                                    
                                                            </div>
                                                        </Link>
            
                                                    ))
                                                }
    
                                         
                                                    
                                            </div>
                                        </div>
                                    </div>
    
                                   
    
                                    <div className="widget tw-sidebar-tags-wrap">
                                        <h4 className="section-head-small mb-4">Tags</h4>
                                        
                                        <div className="tagcloud">
                                            <a href="job-list.html">General</a>
                                            <a href="job-list.html">Jobs </a>
                                            <a href="job-list.html">Payment</a>                                            
                                            <a href="job-list.html">Application </a>
                                            <a href="job-list.html">Work</a>
                                            <a href="job-list.html">Recruiting</a>
                                            <a href="job-list.html">Employer</a>
                                            <a href="job-list.html">Income</a>
                                            <a href="job-list.html">Tips</a>
                                        </div>
                                    </div>
    
                                    
                                </div>
    
    
                            </div>
                        
                        </div>
                                                
                    </div>
                    
                </div>
                
            </div>   
            {/* <!-- OUR BLOG E//ND -->           */}
            
     
        </div>
        {/* <!-- CONTENT END -->

        <!-- FOOTER START --> */}
        <footer className="footer-dark" style={{backgroundImage: 'url(images/f-bg.jpg)', backgroundPosition: 'center'}}>
     
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
                            <span className="copyrights-text">Copyright © 2023 by Joblance All Rights Reserved.</span>
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


        </div>
    )
}