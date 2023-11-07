import React from "react";

const describtionStyle = {
  width: "100%",
  height: "750px",
  borderRadius: "40px",
  backgroundColor:"#282828",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.1)",
};
const imgStyles={
    height:"60px",
    width:"60px"
  }
const Describtion = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="card" style={describtionStyle}>
              <div className="card-header" style={{ height: "70px",display:"flex" ,borderTopLeftRadius:"40px",borderTopRightRadius:"40px"}}>
                <b className="mx-auto mt-1" style={{color:"white",fontSize:"25px"}}>Skills and Experience</b>
              </div>
              <div className="card-body " style={{backgroundColor:"#282828",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px"}}>
                <div className="row">
                    <div className="col-6">
                    <b style={{color:"white",fontSize:"18px"}} className="p-3">English</b><br />
                    <ul style={{color:"white"}} className="ms-4 mt-2">
                        <li>Speaking  <b>at beginner level</b></li>
                        <li>Listening <b>at beginer level</b></li>
                        <li>Writing   <b>at intermidiate</b></li>
                        <li>Reading   <b>at intermidiate</b></li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <b style={{color:"white",fontSize:"18px"}} className="p-3">Tools</b><br />
                    <div className="row mt-3 ms-2">
                        <div className="col-2"><img src="./components/figma.png" style={imgStyles}alt="" /></div>
                        <div className="col-2"><img src="./components/postman-icon.svg" style={imgStyles}alt="" /></div>
                        <div className="col-2"><img src="./components/docker.png" style={imgStyles}alt="" /></div>
                        <div className="col-2"><img src="./components/firebase.png" style={imgStyles}alt="" /></div>
                        <div className="col-2"><img src="./components/Azure.png" style={imgStyles}alt="" /></div>
                    </div>
                    
                    </div>
                    
                </div>
                <div>
                    <b style={{color:"white",fontSize:"18px"}} className="p-3">Programming</b><br />
                    {/* <div className="card mx-auto mt-3" style={{width:"97%",height:"120px",backgroundColor:"#505050",borderRadius:"20px"}}> */}
                       <div className="row mt-4 ms-3">
                        <div className="col-1"><img src="./components/java.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/python.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/javascript.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/html.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/css.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/sql.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/nodejs.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/react.png" style={imgStyles} alt="" /></div>
                       </div>
                    {/* </div> */}
                </div>
                
                <div className="mt-4">
                <b style={{color:"white",fontSize:"18px"}} className="p-3">My Project</b><br />
                <div style={{color:"white"}} >
                    <ul className="ms-4 mt-2">
                        <li>University Final Project</li>
                        Mobile Application for Assessing likelihood of Corona Heart Disease <br />
                        It is an application for estimating the risk of coronary heart disease within 10 years, using machine learning to assess risk and using a chatbot to answer corona heart disease questions to users. <br />
                        GitHub : <a href="https://github.com/mannieshub/University_Final_Project">github/mannieshub/University_Final_Project</a>
                        <li className="mt-3">Mini Project</li>
                        Web Application Project "Lesson plan checker" <br />
                        It is an application used for tracking the study plans of students in the EnET-C field. There will be a community system for use in deciding to register for courses. <br />
                        GitHub : <a href="https://github.com/mannieshub/SE_pro-">github/mannieshub/SE_Pro</a>
                    </ul>
                </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Describtion;
