import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./styles.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Register = () => {
  const [data, setData] = useState([]);
  const slidePage = useRef(null);
  const nextBtnFirst = useRef(null);
  const prevBtnSec = useRef(null);

  console.log(nextBtnFirst);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}api/v1/getallusers`
        );
        console.log(res.data);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div className="form-wrapper">
        <div className="form-container">
          <header>Signup Form</header>
          <div className="progress-bar">
            <div className="step">
              <p>Name</p>
              <div className="bullet">
                <span>1</span>
              </div>
              <div className="check fas fa-check"></div>
            </div>
            <div className="step">
              <p>Contact</p>
              <div className="bullet">
                <span>2</span>
              </div>
              <div className="check fas fa-check"></div>
            </div>
            <div className="step">
              <p>Birth</p>
              <div className="bullet">
                <span>3</span>
              </div>
              <div className="check fas fa-check"></div>
            </div>
            <div className="step">
              <p>Submit</p>
              <div className="bullet">
                <span>4</span>
              </div>
              <div className="check fas fa-check"></div>
            </div>
          </div>
          <div className="form-outer">
            <form action="#">
              <div className="page slide-page" ref={slidePage}>
                <div className="title">Basic Info:</div>
                <div className="field">
                  <div className="label">First Name</div>
                  <input type="text" />
                </div>
                <div className="field">
                  <div className="label">Last Name</div>
                  <input type="text" />
                </div>
                <div className="field">
                  <button ref={nextBtnFirst} className="firstNext next">
                    Next
                  </button>
                </div>
              </div>

              <div className="page">
                <div className="title">Contact Info:</div>
                <div className="field">
                  <div className="label">Email Address</div>
                  <input type="text" />
                </div>
                <div className="field">
                  <div className="label">Phone Number</div>
                  <input type="Number" />
                </div>
                <div className="field btns">
                  <button ref={prevBtnSec} className="prev-1 prev">
                    Previous
                  </button>
                  <button className="next-1 next">Next</button>
                </div>
              </div>

              <div className="page">
                <div className="title">Date of Birth:</div>
                <div className="field">
                  <div className="label">Date</div>
                  <input type="text" />
                </div>
                <div className="field">
                  <div className="label">Gender</div>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field btns">
                  <button className="prev-2 prev">Previous</button>
                  <button className="next-2 next">Next</button>
                </div>
              </div>

              <div className="page">
                <div className="title">Login Details:</div>
                <div className="field">
                  <div className="label">Username</div>
                  <input type="text" />
                </div>
                <div className="field">
                  <div className="label">Password</div>
                  <input type="password" />
                </div>
                <div className="field btns">
                  <button className="prev-3 prev">Previous</button>
                  <button className="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
