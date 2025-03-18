import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import "./styles.scss";
import { createUserApi } from "../../utils/api";
import { notification } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const slidePage = useRef(null);
  const nextBtnFirst = useRef(null);
  const prevBtnSec = useRef(null);
  const nextBtnSec = useRef(null);
  const prevBtnThird = useRef(null);
  const nextBtnThird = useRef(null);
  const prevBtnFourth = useRef(null);
  const submitBtn = useRef(null);
  const progressBar = useRef(null);
  const elementsRef = useRef({
    progressText: null,
    progressCheck: null,
    bullet: null,
  });
  const [current, setCurrent] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: 2,
    phoneNumber: "",
    username: "",
    password: "",
    re_password: "",
  });

  useEffect(() => {
    elementsRef.current.progressText =
      progressBar.current.querySelectorAll(".step > p");
    elementsRef.current.progressCheck =
      progressBar.current.querySelectorAll(".step > .check");
    elementsRef.current.bullet =
      progressBar.current.querySelectorAll(".step > .bullet");
  }, []);

  const handleNextBtnFirst = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "-25%";
    elementsRef.current.progressText[current - 1].classList.add("active");
    elementsRef.current.progressCheck[current - 1].classList.add("active");
    elementsRef.current.bullet[current - 1].classList.add("active");
    setCurrent(current + 1);
  };

  const handleNextBtnSec = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "-50%";
    elementsRef.current.progressText[current - 1].classList.add("active");
    elementsRef.current.progressCheck[current - 1].classList.add("active");
    elementsRef.current.bullet[current - 1].classList.add("active");
    setCurrent(current + 1);
  };

  const handleNextBtnThird = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "-75%";
    elementsRef.current.progressText[current - 1].classList.add("active");
    elementsRef.current.progressCheck[current - 1].classList.add("active");
    elementsRef.current.bullet[current - 1].classList.add("active");
    setCurrent(current + 1);
  };

  const handlePrevBtnSec = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "0%";
    elementsRef.current.progressText[current - 2].classList.remove("active");
    elementsRef.current.progressCheck[current - 2].classList.remove("active");
    elementsRef.current.bullet[current - 2].classList.remove("active");
    setCurrent(current - 1);
  };

  const handlePrevBtnThird = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "-25%";
    elementsRef.current.progressText[current - 2].classList.remove("active");
    elementsRef.current.progressCheck[current - 2].classList.remove("active");
    elementsRef.current.bullet[current - 2].classList.remove("active");
    setCurrent(current - 1);
  };

  const handlePreBtnFourth = (event) => {
    event.preventDefault();
    slidePage.current.style.marginLeft = "-50%";
    elementsRef.current.progressText[current - 2].classList.remove("active");
    elementsRef.current.progressCheck[current - 2].classList.remove("active");
    elementsRef.current.bullet[current - 2].classList.remove("active");
    setCurrent(current - 1);
  };

  const handleAddActiveClass = (num) => {
    elementsRef.current.progressText[num].classList.add("active");
    elementsRef.current.progressCheck[num].classList.add("active");
    elementsRef.current.bullet[num].classList.add("active");
  };
  const handleRemoveActiveClass = (num) => {
    elementsRef.current.progressText[num].classList.remove("active");
    elementsRef.current.progressCheck[num].classList.remove("active");
    elementsRef.current.bullet[num].classList.remove("active");
  };

  //handle submit
  const handleBtnSubmitForm = () => {
    if (elementsRef.current.bullet[current - 1]) {
      elementsRef.current.bullet[current - 1].classList.add("active");
      elementsRef.current.progressText[current - 1].classList.add("active");
      elementsRef.current.progressCheck[current - 1].classList.add("active");
      setCurrent(current + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const createUser = async (values) => {
      try {
        const res = await createUserApi(values);
        if (res.data.success) {
          notification.success({
            message: res.data.message,
            description: "You have successfully signed up. You can now log in.",
          });
          navigate("/login");
        } else {
          notification.error({
            message: res.data.message,
            description: "User already exists.",
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    //validate form
    const validate = () => {
      let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (!formData.firstName) {
        alert("Please enter your first name!");
        slidePage.current.style.marginLeft = "0%";
        handleRemoveActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(1);
        return false;
      } else if (!formData.lastName) {
        alert("Please enter your last name!");
        slidePage.current.style.marginLeft = "0%";
        handleRemoveActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(1);
        return false;
      } else if (!formData.email) {
        alert("Please enter valid email!");
        slidePage.current.style.marginLeft = "-25%";
        handleAddActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(2);
        return false;
      } else if (!regexEmail.test(formData.email)) {
        alert("Please enter a valid email address!");
        slidePage.current.style.marginLeft = "-25%";
        handleAddActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(2);
        return false;
      } else if (!formData.phoneNumber) {
        alert("Please enter your number phone!");
        slidePage.current.style.marginLeft = "-25%";
        handleAddActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(2);
        return false;
      } else if (!vnf_regex.test(formData.phoneNumber)) {
        alert("Please enter valid number phone!");
        slidePage.current.style.marginLeft = "-25%";
        handleAddActiveClass(0);
        handleRemoveActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(2);
      } else if (!formData.dob) {
        alert("Please enter your date of birth!");
        slidePage.current.style.marginLeft = "-50%";
        handleAddActiveClass(0);
        handleAddActiveClass(1);
        handleRemoveActiveClass(2);
        handleRemoveActiveClass(3);
        setCurrent(3);
        return false;
      } else if (!formData.password) {
        alert("Please enter your password!");
        handleRemoveActiveClass(3);
        return false;
      } else if (formData.password !== formData.re_password) {
        alert("Your password is not match");
        handleRemoveActiveClass(3);
        return false;
      }
      handleAddActiveClass(3);
      return true;
    };

    if (validate()) {
      createUser(formData);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="form-container">
          <header>Signup Form</header>
          <div ref={progressBar} className="progress-bar">
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
            <form action="#" onSubmit={handleSubmitForm}>
              <div className="page slide-page" ref={slidePage}>
                <div className="title">Basic Info:</div>
                <div className="field">
                  <div className="label">First Name</div>
                  <input type="text" name="firstName" onChange={handleChange} />
                </div>
                <div className="field">
                  <div className="label">Last Name</div>
                  <input type="text" name="lastName" onChange={handleChange} />
                </div>

                <div className="field">
                  <button
                    ref={nextBtnFirst}
                    onClick={(e) => handleNextBtnFirst(e)}
                    className="firstNext next"
                  >
                    Next
                  </button>
                </div>
                <Link to="../Login">Have an account?</Link>
              </div>

              <div className="page">
                <div className="title">Contact Info:</div>
                <div className="field">
                  <div className="label">Email Address</div>
                  <input type="text" name="email" onChange={handleChange} />
                </div>
                <div className="field">
                  <div className="label">Phone Number</div>
                  <input
                    type="Number"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </div>
                <div className="field btns">
                  <button
                    ref={prevBtnSec}
                    onClick={(e) => handlePrevBtnSec(e)}
                    className="prev-1 prev"
                  >
                    Previous
                  </button>
                  <button
                    ref={nextBtnSec}
                    onClick={(e) => handleNextBtnSec(e)}
                    className="next-1 next"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="page">
                <div className="title">Date of Birth:</div>
                <div className="field">
                  <div className="label">Date</div>
                  <input type="date" name="dob" onChange={handleChange} />
                </div>
                <div className="field">
                  <div className="label">Gender</div>
                  <select name="gender" onChange={handleChange}>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                    <option value={2}>Other</option>
                  </select>
                </div>
                <div className="field btns">
                  <button
                    ref={prevBtnThird}
                    onClick={(e) => handlePrevBtnThird(e)}
                    className="prev-2 prev"
                  >
                    Previous
                  </button>
                  <button
                    ref={nextBtnThird}
                    onClick={(e) => handleNextBtnThird(e)}
                    className="next-2 next"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="page">
                <div className="title">Login Details:</div>
                <div className="field">
                  <div className="label">Username</div>
                  <input type="text" name="username" onChange={handleChange} />
                </div>
                <div className="field">
                  <div className="label">Password</div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <div className="label">Repeat Password</div>
                  <input
                    type="password"
                    name="re_password"
                    onChange={handleChange}
                  />
                </div>

                <div className="field btns">
                  <button
                    ref={prevBtnFourth}
                    onClick={(e) => handlePreBtnFourth(e)}
                    className="prev-3 prev"
                  >
                    Previous
                  </button>
                  <button
                    ref={submitBtn}
                    onClick={(e) => handleBtnSubmitForm(e)}
                    className="submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
