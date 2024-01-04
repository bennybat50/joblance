
export default function LoginPop() {
    return (
        <div>
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
                                                        <input name="username" type="text" required="" className="form-control" placeholder="Usearname*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="email" type="text" className="form-control" required="" placeholder="Password*" />
                                                    </div>
                                                </div>


                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <div className=" form-check">
                                                            <input type="checkbox" className="form-check-input" id="Password3" />
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
                                        {/* <!--Login Employer Content--> / */}
                                        <div className="tab-pane fade" id="login-Employer">
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="username" type="text" required="" className="form-control" placeholder="Usearname*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="email" type="text" className="form-control" required="" placeholder="Password*" />
                                                    </div>
                                                </div>


                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <div className=" form-check">
                                                            <input type="checkbox" className="form-check-input" id="Password4" />
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
                                    <li><a href="javascript" className="facebook-clr"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" className="twitter-clr"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" className="linkedin-clr"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" className="google-clr"><i className="fab fa-google"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}