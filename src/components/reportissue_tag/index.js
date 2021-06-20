import React from 'react'
import './style.css'
function Reportissues_tag(props) {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            backgroundColor: "white",
            boxShadow: "2px 5px gray",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
          }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div
              className="title2"
            >
              Tiêu đề:
            </div>
            <div
              className="prop-title"
            >
              {/* Phòng trừ Covid */}
              {props.title}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              className="description"
            >
              Mô tả:
            </div>
            <div
              className="prop-description"
            >
              {props.description}
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              className="status"
            >
              Tình trạng:
            </div>
            <div
             className="prop-status"
            >
              {props.status}
            </div>
          </div>
         
          <div style={{ width: "100%", display: "flex" }}>
            <div
              className="admin"
            >
              Tên người tạo báo cáo:
            </div>
            <div
             
             className="prop-admin"
            >
              {props.reporter}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Reportissues_tag;
