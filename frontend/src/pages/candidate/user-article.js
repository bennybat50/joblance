import { Link, useNavigate } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
// import { IoTrashOutline } from "react-icons/io5";
// import { MdOutlineEdit } from "react-icons/md";
export default function UserArticle() {
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        const getJob = async () => {
            let api_url = BASEURL + "/article/user/" + userDetails._id;
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                console.log(res.data);
                setJobs(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getJob();
    }, []);

    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this article?");
        
        if (shouldDelete) {
            let api_url = BASEURL + "/article/delete/" + id;
            const headers = { Authorization: `Bearer ${token}` };
    
            try {
                const res = await axios.delete(api_url, { headers });
                console.log(res.data);
                alert("Article deleted");
                setJobs((previousJobs) => previousJobs.filter(job => job._id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    }
    

    return (
        <div>
            {/* <!-- HEADER START --> */}
            <PublicHeader />
            {/* <!-- HEADER END --> */}
            {/* <!-- CONTENT START --> */}
            <div class="page-content">

                {/* <!-- OUR BLOG START --> */}
                <div class="section-full p-t120  p-b90 site-bg-white">


                    <div class="container">
                        <div class="row">

                            <div class="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">

                                <UserNav />

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                <div class="twm-right-section-panel candidate-save-job site-bg-gray">
                                    {/* <!--Filter Short By--> */}
                                    <div class="product-filter-wrap d-flex justify-content-between align-items-center">
                                        <span class="woocommerce-result-count-left"> My Articles</span>

                                        <button className="site-button" onClick={()=>navigate("/create-article")}>Create Article</button>

                                    </div>

                                    <div class="twm-jobs-list-wrap">
                                        <ul>
                                            {jobs.map((data) => {
                                                return (<>
                                                    <li>
                                                        <div  className="d-flex align-items-start justify-content-between gap-5 mb-5">
                                                            <div className="d-flex align-items-center justify-content-start gap-5">
                                                                <figure style={{height:"100px", width: "100px"}}>
                                                                    <img src={data.image} alt="" style={{height:"100%", width: "100%", objectFit:"cover"}} />
                                                                </figure>
                                                                <div class="twm-mid-content">
                                                                <Link to={`/blog/${data._id}`} class="twm-job-title">
                                                                        <h4>{data.title}</h4>
                                                                    </Link>
                                                                    <p class="twm-job-address">{data.content} </p>
                                                                
                                                                </div>

                                                            </div>
                                                            <div  className="d-flex align-items-start  gap-2 ">
                                                                <button style={{border:"none", background:"transparent"}} onClick={()=>navigate(`/edit-my-article/${data._id}`)}>Edit</button>
                                                                <button style={{border:"none", background:"transparent"}} onClick={()=>handleDelete(data._id)}>Delete</button>
                                                            </div>
                                                            {/* <div class="twm-right-content">
                                                                <div class="twm-jobs-category green"><span class="twm-bg-green">{data.job_id.jobType}</span></div>
                                                                <div class="twm-jobs-amount">{data.job_id.offeredSalary}  <span>/ Annually</span></div>
                                                                <Link to={`/job-detail/${data.job_id._id}`} class="twm-jobs-browse site-text-primary">View Job Details</Link>
                                                            </div> */}
                                                        </div>
                                                    </li></>)
                                            })}



                                        </ul>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- OUR BLOG END --> */}



            </div>
            {/* <!-- CONTENT END --> */}
        </div>)
}