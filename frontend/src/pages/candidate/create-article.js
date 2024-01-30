import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
export default function CreateAticle() {

    const userDetails = JSON.parse(localStorage.getItem("user-details"));

    const token = localStorage.getItem("token");


  
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [publicData, setPublicData] = useState("");
    const [interest, setInterest] = useState();
    const [interestID, setInterestId] = useState("");
    const [err, setErr] = useState(false);
    const [refresh, setRefresh] = useState(0);


   

    // Job category
    useEffect(() => {
        fetch(`${BASEURL}/job-categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((res) => {
                setInterest(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Fetch error:", error.message);
            });
    }, []);

    const handleinterest = (event) => {
        setInterestId(event.target.value);
    };


    const handleArticle = async (event) => {
        event.preventDefault();
        if(title === "" || image === "" || content === "" || interestID === "" || publicData === ""){
            setErr(true)
            return
        }
        let articleData = {
            title: title,
            image:image,
            content: content,
            isPublic: publicData,
            jobCategory_id: interestID,
            user_id: userDetails._id,
            
        }
        console.log(articleData)
        let api_url = BASEURL + "/create-article";
        await axios.post(api_url, articleData)
        .then((res)=>{
            console.log(res.data)
        })
        alert("Article posted")
        // setRefresh(refresh + 1)
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
                                {/* <!--Filter Short By--> */}
                                <div class="twm-right-section-panel site-bg-gray">
                                    <form onSubmit={handleArticle}>


                                        {/* <!--Basic Information--> */}
                                        <div class="panel panel-default">
                                            <div class="panel-heading wt-panel-heading p-a20">
                                                <h4 class="panel-tittle m-a0">create Article</h4>
                                            </div>
                                            <div class="panel-body wt-panel-body p-a20 m-b30 ">

                                                <div class="row">
                                                    
                                                   
                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label> Title</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setTitle(e.target.value)}
                                                                    value={title} placeholder="Devid Smith" />
                                                                <i class="fs-input-icon fa fa-user "></i>
                                                            </div>
                                                            <div>
                                                                {
                                                                    err === true &&  title === ""? (<p style={{color: "red"}}>enter title</p>) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3 col-lg-3 col-md-12">
                                                        <div class="form-group">
                                                            <label>Image</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setImage(e.target.value)}
                                                                    value={image} placeholder="https://image.png" />
                                                                <i class="fs-input-icon fa fa-user "></i>
                                                            </div>
                                                            <div>
                                                                {
                                                                    err === true &&  image === ""? (<p style={{color: "red"}}>enter image</p>) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Public</label>
                                                            <div class="ls-inputicon-box">
                                                                <select
                                                                    className="wt-select-box selectpicker form-select form-select-lg mb-3"
                                                                    data-live-search="true"
                                                                    title=""
                                                                    id="j-category"
                                                                    data-bv-field="size"
                                                                    onChange={(e) => setPublicData(e.target.value === "true")}
                                                                    value={publicData.toString()}
                                                                >
                                                                    <option value="">Select</option>
                                                                    <option value="true">true</option>
                                                                    <option value="false">false</option>
                                                                
                                                                </select>
                                                                <i class="fs-input-icon fa fa-border-all"></i>
                                                            </div>
                                                            <div>
                                                                {
                                                                    err === true &&  publicData === ""? (<p style={{color: "red"}}>enter public</p>) : null
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>

                          

                                                   



                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Interest</label>
                                                            <div class="ls-inputicon-box">
                                                                <select
                                                                    className="wt-select-box selectpicker form-select form-select-lg mb-3"
                                                                    data-live-search="true"
                                                                    title=""
                                                                    id="j-category"
                                                                    data-bv-field="size"
                                                                    onChange={handleinterest}
                                                                    value={interestID}
                                                                >
                                                                    <option value="">Select Interest</option>
                                                                    {interest &&
                                                                        interest.map((int) => (
                                                                            <option key={int._id} value={int._id}>
                                                                                {int.name}
                                                                            </option>
                                                                        ))}
                                                                </select>
                                                                <i class="fs-input-icon fa fa-border-all"></i>
                                                            </div>
                                                            <div>
                                                                {
                                                                    err === true &&  interestID === ""? (<p style={{color: "red"}}>enter interest</p>) : null
                                                                }
                                                            </div>


                                                        </div>
                                                    </div>

                                                  

                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label>Content</label>
                                                            <textarea class="form-control" rows="3"
                                                                onChange={(e) => setContent(e.target.value)}
                                                                value={content}
                                                            ></textarea>
                                                        </div>
                                                        <div>
                                                                {
                                                                    err === true &&  content === ""? (<p style={{color: "red"}}>enter content</p>) : null
                                                                }
                                                            </div>

                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="text-left">
                                                            <button type="submit" class="site-button">Save Changes</button>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>


                                    </form>
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