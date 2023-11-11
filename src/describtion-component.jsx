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
                    <b style={{color:"white",fontSize:"22px"}} className="p-3">English</b><br />
                    <ul style={{color:"white",fontSize:"20px"}} className="ms-4 mt-2">
                        <li>Speaking  <b>at beginner level</b></li>
                        <li>Listening <b>at beginer level</b></li>
                        <li>Writing   <b>at intermidiate</b></li>
                        <li>Reading   <b>at intermidiate</b></li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <b style={{color:"white",fontSize:"22px"}} className="p-3">Tools</b><br />
                    <div className="row mt-3 ms-2">
                        <div className="col-3"><img src="./components/figma.png" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/postman-icon.svg" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/docker.png" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/firebase.png" style={imgStyles}alt="" /></div>
                        
                    </div>
                    <div className="row mt-3 ms-2">
                        <div className="col-3"><img src="./components/git.png" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/vscode.png" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/Azure.png" style={imgStyles}alt="" /></div>
                        <div className="col-3"><img src="./components/mysql.png" style={imgStyles}alt="" /></div>
                    </div>
                    
                    </div>
                    
                </div>
                <div className="mt-3">
                    <b style={{color:"white",fontSize:"22px"}} className="p-3">Programming language & Framework</b><br />
                    {/* <div className="card mx-auto mt-3" style={{width:"97%",height:"120px",backgroundColor:"#505050",borderRadius:"20px"}}> */}
                       <div className="row mt-5 ms-3">
                        <div className="col-1"><img src="./components/java.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/python.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/javascript.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/html.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/css.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/sql.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/nodejs.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/react.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/bootstrap.png" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/rust.svg" style={imgStyles} alt="" /></div>
                        <div className="col-1"><img src="./components/golang.png" style={imgStyles} alt="" /></div>
                       </div>
                    {/* </div> */}
                </div>
                
                <div className="mt-5">
                <b style={{color:"white",fontSize:"22px"}} className="p-3">My Project</b><br />
                <div style={{color:"white"}} >
                    <ul className="ms-4 mt-2">
                        <li style={{fontSize:"20px"}}>University Final Project</li>
                        <span style={{fontSize:"20px"}} >Mobile Application for Assessing likelihood of Corona Heart Disease</span> <br />
                        <div className="mt-1">
                          <span>It is an application for estimating the risk of coronary heart disease within 10 years, using machine learning to assess risk and using a chatbot to answer corona heart disease questions to users.</span> <br />
                          <b>GitHub : <a href="https://github.com/mannieshub/University_Final_Project">github/mannieshub/University_Final_Project</a></b>
                        </div>
                        
                        <li className="mt-3" style={{fontSize:"20px"}}>Mini Project</li>
                        <span style={{fontSize:"20px"}}>Web Application Project "Lesson plan checker"</span> <br />
                        <div>
                          It is an application used for tracking the study plans of students in the EnET-C field. There will be a community system for use in deciding to register for courses. <br />
                          <b>GitHub : <a href="https://github.com/mannieshub/SE_pro-">github/mannieshub/SE_Pro</a></b>
                        </div>
                        
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
