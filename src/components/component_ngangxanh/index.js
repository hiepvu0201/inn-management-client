import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faHourglassEnd,
  faUser,
  faHandshake,
  faPuzzlePiece,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
function Component_NgangXanh(props) {
  return (
    <div>
      <div className="box">
        <div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
            <div className="icon-hover">{props.icon}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="topic-com">{props.topic}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
          <div className="content-com">{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_NgangXanh;
