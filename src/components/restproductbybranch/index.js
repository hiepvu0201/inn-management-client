import React, { useState } from "react";
import { Row, Col, Spin } from "antd";
import { Images } from "./../../config/image";
import "./style.css";
import { Link } from "react-router-dom";
function Rest(props) {
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);

  return (
    <div>
      <Row>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "86%",
              height: "auto",
            }}
          >
            <Col lg={22} md={24}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 1px 10px 0 rgb(0 0 0 / 12%)",
                }}
              >
                {/* Ảnh  */}
                <div>
                  <img
                    src={`${props.images}`}
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "8px",
                     display: "inline-block", overflow: "hidden"
                    }}
                  />
                </div>
                {/* Branch  */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Chi nhánh:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {/* TP.HCM */}
                    {props.branches}
                  </div>
                </div>
                {/* Facility */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Thiết bị:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {/* TP.HCM */}
                    {props.facilities}
                  </div>
                </div>
                {/* Room no */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Phòng:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {/* 001 */}
                    {props.roomNo}
                  </div>
                </div>
                {/* Vị tri */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Vị trí:
                    {/* {props.position} */}
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {/* 001 */}
                    {props.position}
                  </div>
                </div>
                {/* Loại phòng */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Loại:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {/* 001 */}
                    {props.roomType}
                  </div>
                </div>
                {/* Gía phòng theo giờ đầu */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                    fontFamily: "PT Sans, sans-serif",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Giá theo giờ đầu:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {props.price1}đ
                  </div>
                </div>
                {/* Gía phòng theo giờ sau */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Giá theo giờ sau:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      fontFamily: "PT Sans, sans-serif",
                      textAlign: "left",
                    }}
                  >
                    {props.price2}đ
                  </div>
                </div>
                {/* Gía phòng theo ngày */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Giá theo ngày:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {props.price3}đ
                  </div>
                </div>
                {/* Gía phòng theo tuần */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Giá theo tuần:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {props.price4}đ
                  </div>
                </div>
                {/* Gía phòng theo tháng */}
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    width: "100%",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    Giá theo tháng:
                  </div>
                  <div
                    style={{
                      width: "55%",
                      fontSize: "14px",
                      textAlign: "left",
                      fontFamily: "PT Sans, sans-serif",
                    }}
                  >
                    {props.price5}đ
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  {/* <Spin spinning={isloadingUpdate} size="large"> */}
                    <Link
                      to={{
                        pathname: `${props.id}`,
                        state: {
                          id: props.id,
                          roomNo: props.roomNo,
                          position: props.position,
                          facilities: props.facilities,
                          branches: props.branches,
                          images: props.images,
                          roomType: props.roomType,
                          price1: props.price1,
                          price2: props.price2,
                          price3: props.price3,
                          price4: props.price4,
                          price5: props.price5,
                        },
                      }}
                    >
                      <button className="btn-res">
                        {" "}
                        Xem chi tiết
                      </button>
                    </Link>
                  {/* </Spin> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Rest;
