export default function Signup_Pop() {
    return (
        <div>
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
                                                        <input name="phone" type="text" className="form-control" required="" placeholder="Email*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="phone" type="text" className="form-control" required="" placeholder="Phone*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <div className=" form-check">
                                                            <input type="checkbox" className="form-check-input" id="agree1" />
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
                                                <div className="col-md-12">
                                                <a
                                                className="twm-nav-sign-up site-button mt-3"
                                                data-bs-toggle="modal"
                                                href="#sign_up_popup2"
                                                role="button"
                                            >
                                                <i className="feather-log-in "></i> Login
                                            </a>
                                                    {/* <button type="submit" className="site-button mt-3"  href="#sign_up_popup2">Login</button> */}
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!--Signup Employer Content-->  */}
                                        <div className="tab-pane fade" id="sign-Employer">
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
                                                        <input name="phone" type="text" className="form-control" required="" placeholder="Email*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="phone" type="text" className="form-control" required="" placeholder="Phone*" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <div className=" form-check">
                                                            <input type="checkbox" className="form-check-input" id="agree2" />
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