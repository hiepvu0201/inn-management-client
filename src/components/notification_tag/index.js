import React from 'react'
import './style.css'
function Notification_tag(props) {
    return (
      <div>
      
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "white",
            display: "block",
            textAlign: "left",
            paddingLeft: "10px",
            boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
            borderRadius: "8px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingRight:"15px"
          }}
        >
         
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div
             className="part-title"
            >
              Tiêu đề:
            </div>
            <div
             className="part-description"
            >
              {props.name}
            </div>
          </div>
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div
              className="part-title"
            >
              Mô tả:
            </div>
            <div
             className="part-description"
            >
              {props.description}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Notification_tag