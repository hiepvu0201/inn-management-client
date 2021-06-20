import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Component_NgangTrangHong(props) {
  return (
    <div>
      <div className="content11">
        <div className="display-content11">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="icon-hover-11">
              {props.icon}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="topicabc">
            {props.topic1}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="contentnth">
              {props.content1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component_NgangTrangHong;
