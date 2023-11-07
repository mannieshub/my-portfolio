import React from "react";
import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import NavbarComponent from "./navbar- component";
import MenuButton from "./menu";
const cardStyles = {
  height: "520px",
  backgroundColor: "#282828",
  borderRadius: "40px",
  width: "400px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.25)",
};
const circles = {
  height: "250px",
  width: "250px",
  borderRadius: "200px",
  backgroundColor: "#white",
};
const profileImg = {
  height: "250px",
  borderRadius: "250px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.3)",
};
const textStyles = {
  color: "white",
  fontSize: "15px",
};


function App() {
  const [event,setEvent]=React.useState()
  return (
    <>
      <body style={{ backgroundColor: "#474747", height: "100vh" }}>
        <div>
          <NavbarComponent title="Portfolio" />
          <div className="container">
            <div className="row mt-5">
              <div className="col-1"></div>
              <div className="col-4">
                <div className="card" style={cardStyles}>
                  <div className="card mx-auto mt-5" style={circles}>
                    <img
                      src="./components/profile.png"
                      style={profileImg}
                      alt=""
                    />
                  </div>
                  <div className="p-4" style={textStyles}>
                    <b style={{ fontSize: "20px" }}>
                      Hello My name is Pongpisut Prasri .
                    </b>{" "}
                    <br />
                    I am a student at KMUTNB in Colleage of Industrial
                    Technology in the field of engineering electronics computer
                    . In my free time I always listening to music and play
                    computer games . Sometimes I study coding or new technology.{" "}
                    <br />
                    <div className="mt-2">
                        <b>
                        My GitHub Profile:{" "}
                        <a href="https://github.com/mannieshub">
                          github.com/mannieshub
                        </a>
                      </b>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-4">
                <div className="card" style={cardStyles}>
                  <b className="mt-3 mx-auto" style={{ fontSize: "25px",color:"white" }}>
                    Skills and Experience
                  </b>
                  <div className="mx-auto">
                    <MenuButton img="./components/coding.png" text="Programming"></MenuButton>
                    <MenuButton img="./components/dictionary.png" text="English"></MenuButton>
                    <MenuButton img="./components/experience.png" text="My Project"></MenuButton>
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
