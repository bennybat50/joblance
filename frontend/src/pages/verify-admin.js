import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BASEURL } from "../common/config";
import right_pic1 from "../assets/images/images/home-11/banner-bg/right-pic1.jpg";
import Admin_Nav from "../components/admin-nav";
import "../styles/verify-admin.css"

export default function VerifyAdmin() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [err, setErr] = useState(false);


  const location = useLocation();



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


    axios.post(`${BASEURL}/user-login`, loginData).then(async (res) => {
      console.log(res.data)
      if (res.data.message == null) {
        alert("admin logged in");

        localStorage.setItem("adminToken", res.data.token)

        if (res.data.data.role === "admin") {
          localStorage.setItem("admin-details", JSON.stringify(res.data.data))
          window.location.href = "/dashboard";
        } 

      } else {
        alert(res.data.message);
      }
    }).catch((err) => {
      console.log(err.message)
    })
  };

  const switchRole = (e) => {
    setRole(e)
  }

  return (
    <div className="" style={{

     
    }}>
   
              

                <div className="tab-content verify-admin-modal container" id="myTab2Content">

                  {/* <!--Login Employer Content--> / */}
                  <form action="" onSubmit={login} className="border p-3" style={{ }}>

                  
              <h2 className="modal-title text-center mb-5">
                Login
              </h2>
                    <div className="tab-pane show fade" id="login-Employer">
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
  );
}
