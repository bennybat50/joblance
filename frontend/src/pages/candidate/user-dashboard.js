import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
export default function UserDashboard() {
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

                               <UserNav/>

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                {/* <!--Filter Short By--> */}
                                <div class="twm-right-section-panel site-bg-gray">
                                    <div class="wt-admin-right-page-header">
                                        <h2>Randall Henderson</h2>
                                        <p>IT Contractor</p>
                                    </div>

                                    <div class="twm-dash-b-blocks mb-5">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-12 mb-3">
                                                <div class="panel panel-default">
                                                    <div class="panel-body wt-panel-body dashboard-card-2 block-gradient">
                                                        <div class="wt-card-wrap-2">
                                                            <div class="wt-card-icon-2"><i class="flaticon-job"></i></div>
                                                            <div class="wt-card-right wt-total-active-listing counter ">25</div>
                                                            <div class="wt-card-bottom-2 ">
                                                                <h4 class="m-b0">Job Acceptance</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-12 mb-3">
                                                <div class="panel panel-default">
                                                    <div class="panel-body wt-panel-body dashboard-card-2 block-gradient-2">
                                                        <div class="wt-card-wrap-2">
                                                            <div class="wt-card-icon-2"><i class="flaticon-resume"></i></div>
                                                            <div class="wt-card-right  wt-total-listing-view counter ">435</div>
                                                            <div class="wt-card-bottom-2">
                                                                <h4 class="m-b0">Total Applications</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-12 mb-3">
                                                <div class="panel panel-default">
                                                    <div class="panel-body wt-panel-body dashboard-card-2 block-gradient-3">
                                                        <div class="wt-card-wrap-2">
                                                            <div class="wt-card-icon-2"><i class="flaticon-envelope"></i></div>
                                                            <div class="wt-card-right wt-total-listing-review counter ">28</div>
                                                            <div class="wt-card-bottom-2">
                                                                <h4 class="m-b0">Messages</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="twm-pro-view-chart-wrap">
                                        <div class="row">
                                            

                                            <div class="col-xl-12 col-lg-12 col-md-12 mb-4">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading wt-panel-heading p-a20">
                                                        <h4 class="panel-tittle m-a0">Inbox</h4>
                                                    </div>
                                                    <div class="panel-body wt-panel-body bg-white">
                                                        <div class="dashboard-messages-box-scroll scrollbar-macosx">

                                                            <div class="dashboard-messages-box">
                                                                <div class="dashboard-message-avtar"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                                                                <div class="dashboard-message-area">
                                                                    <h5>Lucy Smith<span>18 June 2023</span></h5>
                                                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                                </div>
                                                            </div>

                                                            <div class="dashboard-messages-box">
                                                                <div class="dashboard-message-avtar"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                                                                <div class="dashboard-message-area">
                                                                    <h5>Richred paul<span>19 June 2023</span></h5>
                                                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                                </div>
                                                            </div>

                                                            <div class="dashboard-messages-box">
                                                                <div class="dashboard-message-avtar"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                                                                <div class="dashboard-message-area">
                                                                    <h5>Jon Doe<span>20 June 2023</span></h5>
                                                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                                </div>
                                                            </div>

                                                            <div class="dashboard-messages-box">
                                                                <div class="dashboard-message-avtar"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                                                                <div class="dashboard-message-area">
                                                                    <h5>Thomas Smith<span>22 June 2023</span></h5>
                                                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation. </p>
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
                    </div>
                </div>
                {/* <!-- OUR BLOG END --> */}



            </div>
            {/* <!-- CONTENT END --> */}
        </div>)
}