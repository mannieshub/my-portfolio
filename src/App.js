import React from "react";
import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import NavbarComponent from "./navbar- component";
import ExpComponent from "./expComponent";
import ProfileComponent from "./new-card";

function App() {
  return (
    <body style={{backgroundColor:"#DAD7D7", height: "100vh"}}>
      <div>
      <NavbarComponent title="Portfolio" />
      <div className="row mt-5"></div>
      <div className="row mt-3"></div>

      <div className="container mt-5">
        {" "}
        {/* ใช้ container เพื่อกำหนดขอบเขตของเนื้อหา */}
        <div className="row">
          <div className="col-md-4">
            <div className="col-4"></div>
            <div className="col-4">
            </div>
            <div className="col-4">
              <ProfileComponent
              type="My name is"
              title="Pongpisut Prasri"
              img="./components/Profile.jpg"
              name="Internship"
              url=""></ProfileComponent>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <ExpComponent
                  type="Mini Project"
                  title="Web Application"
                  img="./components/Book.png"
                  name=" EnET-C Lesson Plan Checker"
                  url="https://github.com/mannieshub/SE_pro-/blob/main/document/usermanual.pdf"
                ></ExpComponent>
              </div>
              <div className="col-md-4">
              <ExpComponent
                  type="University Final Project"
                  title="Mobile Application"
                  img="./components/heartrate.png"
                  name="CHD 10 Years Assessment"
                  url="https://github.com/mannieshub/Mobile_application_for_Assessing_likelihood_of_CHD"
                ></ExpComponent>
              </div>
              <div className="col-md-4">
              <ExpComponent
                  type="Experience"
                  title="Knowledge"
                  img="./components/Programming.png"
                  name="Programming + Tools"
                ></ExpComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
    
  );
}

export default App;
