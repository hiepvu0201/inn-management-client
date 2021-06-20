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
                style={{ width: "100%", height: "140px", borderRadius: "8px", display: "inline-block", overflow: "hidden" }}
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
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Số phòng:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.roomNo}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Chi nhánh:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.branches}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Vị trí:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                }}
              >
                {props.position}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Thiết bị:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.facilities}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Loại phòng:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.roomType}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Giá theo giờ đầu:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.price1}đ
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Giá theo giờ sau:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.price2}đ
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Giá theo ngày:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.price3}đ
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Giá theo tuần:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.price4}đ
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  color: "#3fcc68",
                  paddingLeft: "10px",
                }}
              >
                Giá theo tháng:
              </div>
              <div
                style={{
                  width: "50%",
                  fontSize: "13px",
                  fontFamily: "PT Sans, sans-serif",
                  paddingRight: "10px",
                }}
              >
                {props.price5}đ
              </div>
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
                    position: props.position,
                    facilities: props.facilities,
                    branches: props.branches,
                    images: props.images,
                    branchId:props.branchId,
                    roomType:props.roomType,
                    price1:props.price1,
                    price2:props.price2,
                    price3:props.price3,
                    price4:props.price4,
                    price5:props.price5,
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
