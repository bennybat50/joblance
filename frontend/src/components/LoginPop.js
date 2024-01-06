import { useState } from "react";

export default function LoginPop() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [err, setErr] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (email === "" || Password === "") {
      setErr(true);
      return;
    }

    const loginData = {
      email: email,
      password: Password,
    };

    console.log(loginData);
    

       
    fetch("http://localhost:7300/company-login", {
        method:"POST",
        headers:{"Content-Type": "Application/json"},
        body:JSON.stringify(loginData)
      })
      .then((data)=>{
          console.log(data)
          alert("Company logged in");
          localStorage.setItem("company-details", data)
          // Navigate("/sign-in")
      })
      .catch((err)=> console.log(err.message))

  };

  return (
    <div>
      <div
        className="modal fade twm-sign-up"
        id="sign_up_popup2"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h2 className="modal-title" id="sign_up_popupLabel2">
                  Login
                </h2>
                <p>Login and get access to all the features of Jobzilla</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="twm-tabs-style-2">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    {/* <!--Login Candidate-->   */}
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#login-candidate"
                        type="button"
                      >
                        <i className="fas fa-user-tie"></i>Candidate
                      </button>
                    </li>
                    {/* <!--Login Employer--> */}
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#login-Employer"
                        type="button"
                      >
                        <i className="fas fa-building"></i>Employer
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTab2Content">
                    <form action="">
                    {/* <!--Login Candidate Content-->   */}
                    <div
                      className="tab-pane fade show active"
                      id="login-candidate"
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group mb-3">
                            <input
                              name="username"
                              type="text"
                              required=""
                              className="form-control"
                              placeholder="Usearname*"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group mb-3">
                            <input
                              name="email"
                              type="text"
                              className="form-control"
                              required=""
                              placeholder="Password*"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group mb-3">
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="Password3"
                              />
                              <label
                                className="form-check-label rem-forgot"
                                for="Password3"
                              >
                                Remember me{" "}
                                <a href="javascript:;">Forgot Password</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="site-button">
                            Log in
                          </button>

                          <div className="mt-3 mb-3">
                            Don't have an account ?
                            <button
                              className="twm-backto-login"
                              data-bs-target="#sign_up_popup"
                              data-bs-toggle="modal"
                              data-bs-dismiss="modal"
                            >
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                        </form>
                    {/* <!--Login Employer Content--> / */}
                    <form action="" onSubmit={login}>
                      <div className="tab-pane fade" id="login-Employer">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="username"
                                type="email"
                                // required=""
                                className="form-control"
                                placeholder="email*"
                              />
                            </div>
                            <div>
                              {err === true && email === "" ? (
                                <span>Enter email</span>
                              ) : (
                                email === null
                              )}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={Password}
                                name="email"
                                type="text"
                                className="form-control"
                                // required=""
                                placeholder="Password*"
                              />
                            </div>
                            <div>
                              {err === true && Password === "" ? (
                                <span>Enter MISTAKE</span>
                              ) : (
                                Password === null
                              )}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <div className=" form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="Password4"
                                />
                                <label
                                  className="form-check-label rem-forgot"
                                  for="Password4"
                                >
                                  Remember me{" "}
                                  <a href="javascript:;">Forgot Password</a>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <button className="site-button">
                              Log in
                            </button>
                            <div className="mt-3 mb-3">
                              Don't have an account ?
                              {/* <button
                                className="twm-backto-login"
                                data-bs-target="#sign_up_popup"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                              >
                                Sign Up
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <span className="modal-f-title">Login or Sign up with</span>
                <ul className="twm-modal-social">
                  <li>
                    <a href="javascript" className="facebook-clr">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript" className="twitter-clr">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript" className="linkedin-clr">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript" className="google-clr">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
