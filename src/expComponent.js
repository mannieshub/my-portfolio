import React from "react";

const ExpComponent = (props) => {
  return (
    <div className="container">
      <div
        className="card rounded-4"
        style={{
          width: "270px",
          height: "340px",
          boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span
          className="text-center mt-3"
          style={{ fontSize: 15, fontWeight: "lighter" }}
        >
          {props.type}
        </span>
        <span
          className="text-center mt-1"
          style={{ fontSize: 23, fontWeight: "bold" }}
        >
          {props.title}
        </span>
        <div className="rounded-12 p-3">
          <img
            src={props.img}
            style={{ width: "100%", height: "65%", borderRadius: 12 }}
            alt=""
          />
          <div className="text-center" style={{fontWeight:"bold",fontSize:"16px"}}>
            <span>{props.name}</span>
          </div>
          <div className="text-center">
            <a href={props.url} style={{ fontSize: 13, color: "#9A9595" }}>
            click for more detail...
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default ExpComponent;
