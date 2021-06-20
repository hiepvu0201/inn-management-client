import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
function Component_DocXanh(props) {
  return (
    <div>
      <div className="box-1-docxanh">
        <div className="box-1-block">
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"15px" }}>
            <div className="icon-hover-1">
              {props.icon}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
            <div className="topic-com-1">
            {props.topic}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
            <div  className="content-com-1">
            {props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component_DocXanh;
