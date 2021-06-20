import React from "react";
import './style.css'
function Rules_tag(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          backgroundColor: "white",
          // boxShadow: "2px 5px gray",
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <div className="col-1-1">Tên nội quy:</div>
          <div
            className="col-1-2"
          >
            {props.name}
          </div>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="col-2-1"
          >
            Mô tả chi tiết:
          </div>
          <div
           className="col-2-2"
          >
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules_tag;
