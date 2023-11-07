import React from "react";
const contentStyles = {
  height: "120px",
  backgroundColor: "black",
  borderRadius: "20px",
  width: "300px",
  boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.1)",
};
const iconSkills = {
  height: "100px",
  width: "100px",
  borderRadius: "200px",
  backgroundColor: "grey",
};

const MenuButton = (props) => {
  return (
    <div className="card mt-3" style={contentStyles}>
      <div className="row">
        <div className="col-4">
          <div className="card mt-2 ms-2" style={iconSkills}>
            <img
              src={props.img}
              className="mx-auto mt-3"
              style={{ width: "70px", height: "70px" }}
              alt=""
            />
          </div>
        </div>
        <div
          className="col-8 mx-auto mt-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <b style={{ color: "white", fontSize: "20px" }}>{props.text}</b>
        </div>
      </div>
    </div>
  );
};
export default MenuButton;
