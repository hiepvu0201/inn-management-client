import React from "react";
import "./style.css";
import { Images } from "../../config/image";
function Component_NgangHong(props) {
  return (
    <div>
      <div className="box-3">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{height:"60px", width:"auto"}} src={props.images}  />
          <div style={{display:"block",width:"90%",paddingLeft:"10px"}}>
            <div className="topic-com-2" style={{textAlign:"left"}}>
            {/* 4356 +  */}
            {props.number}
            </div>
            <div className="topic-com-2" style={{textAlign:"left"}}>
            {/* Chủ trọ sử dụng */}
            {props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_NgangHong;
