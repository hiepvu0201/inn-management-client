import React from "react";
import { Images } from "./../../config/image";
import "./style.css";
import { Link } from "react-router-dom";

function Room_tag(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "97%",
            height: "auto",
            backgroundColor: " white",
            borderRadius: "8px",
            boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
          }}
        >
          <div style={{ display: "block" }}>
            <div>
              <img
                src={`${props.images}`}
                className="image-tag"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
                paddingTop: "10px",
              }}
            >
              <div className="title-room-tag">Số phòng:</div>
              <div className="content-room-tag">{props.roomNo}</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Chi nhánh:</div>
              <div className="content-room-tag">{props.branches}</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Số lầu:</div>
              <div className="content-room-tag">{props.floors}</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Thiết bị:</div>
              <div className="content-room-tag">{props.facilities}</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Loại phòng:</div>
              <div className="content-room-tag">{props.roomType}</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Giá theo giờ đầu:</div>
              <div className="content-room-tag">{props.price1}đ</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Giá theo giờ sau:</div>
              <div className="content-room-tag">{props.price2}đ</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Giá theo ngày:</div>
              <div className="content-room-tag">{props.price3}đ</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Giá theo tuần:</div>
              <div className="content-room-tag">{props.price4}đ</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="title-room-tag">Giá theo tháng:</div>
              <div className="content-room-tag">{props.price5}đ</div>
            </div>
            <div
              style={{
                textAlign: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Link
                to={{
                  pathname: `detailroom/${props.id}`,
                  state: {
                    id: props.id,
                    roomNo: props.roomNo,
                    floors: props.floors,
                    facilities: props.facilities,
                    branches: props.branches,
                    images: props.images,
                    branchId: props.branchId,
                    roomType: props.roomType,
                    price1: props.price1,
                    price2: props.price2,
                    price3: props.price3,
                    price4: props.price4,
                    price5: props.price5,
                  },
                }}
              >
                <button className="btn"> Xem chi tiết</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room_tag;
