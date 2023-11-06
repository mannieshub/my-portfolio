import React from "react";
import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import NavbarComponent from "./navbar- component";
import ExpComponent from "./expComponent";
import ProfileComponent from "./new-card";
const cardStyles={
  height:"520px",
  backgroundColor:"#CFCFCF",
  borderRadius:"40px",
  width:"400px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.25)"
}
const circles={
  height:"250px",
  width:"250px",
  borderRadius:"200px",
  backgroundColor:"#white",
}
const profileImg={
  height:"250px",
  borderRadius:"250px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.3)"
}
const textStyles={
  fontColor:"white",
  fontSize:"15px"
}
const contentStyles={
  height:"120px",
  backgroundColor:"#222222",
  borderRadius:"20px",
  width:"300px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.1)"
}
const iconSkills={
  height:"100px",
  width:"100px",
  borderRadius:"200px",
  backgroundColor:"#CECECE",
}
const onClickProgramming=()=>{

}
const onClickEnglish=()=>{

}
function App() {
  return (
    <>
    <body style={{backgroundColor:"#474747", height: "100vh"} }>
      <div>
      <NavbarComponent title="Portfolio" />
      <div className="container">
        <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-4">
          <div className="card" style={cardStyles}>
              <div className="card mx-auto mt-5" style={circles}>
              <img src="./components/profile.png" style={profileImg}alt="" />
              
              </div>
              <div className="p-4" style={textStyles}>
                <b style={{fontSize:"20px"}}>Hello My name is Pongpisut Prasri .</b> <br />
                I am a student at KMUTNB in Colleage of Industrial Technology in the field of engineering electronics computer . In my free time I always listening to music and play computer games .
                Sometimes I study coding or new technology. <br />
                <b>My GitHub Profile: <a href="https://github.com/mannieshub">github.com/mannieshub</a></b>
              </div>
              
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
        <div className="card" style={cardStyles}>
          <b className="mt-3 mx-auto" style={{fontSize:"25px"}}>Skills and Experience</b>
          <div className="mx-auto">
            <div className="card mt-3" style={contentStyles}>
                  <div className="card mt-2 ms-2" style={iconSkills}>
                    <img src="./components/programming.png" alt="" />
                  </div>
            </div>
            <div className="card mt-3" style={contentStyles}>
              <div className="card mt-2 ms-2" style={iconSkills}>
                <img src="./components/eng.png" alt="" />
              </div>
            </div>
            <div className="card mt-3" style={contentStyles}>
              <div className="card mt-2 ms-2" style={iconSkills}>
                <img src="./components/heartrate.png" alt="" />
              </div>
            </div>
          </div>
          
        </div>
        </div>
        <div className="col-1"></div>
      </div>
      </div>
      
    </div>
    </body>
    </>
  );
}

export default App;
