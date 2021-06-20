import React from "react";
import "./style.css";
import { Button, Input } from "antd";
function forgotpassword() {
  return (
    <div>
      <div className="form-register">
        <div className="form-box">
          <div 
          className="container-box"
          style={{ width: "100%", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sign-up">
                CHUOICANHO - GIẢI PHÁP QUẢN LÝ NHÀ TRỌ&CĂN HỘ 4.0 - SỐ 1 THỊ
                TRƯỜNG
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="username">
                Phần mềm được thiết kế đơn giản, dễ sử dụng, tiết kiệm tối đa
                chi phí, cho phép Quý khách truy cập từ nhiều nơi, không cần lo
                lắng về hỏng hóc và sự cố xảy ra.
              </div>
            </div>
            <div
            className="outer-btn"
              // style={{
              //   width: "100%",
              //   height: "auto",
              //   display: "flex",
              //   justifyContent: "center",
              //   paddingTop: "10px",
              //   paddingRight: "10px",
              //   paddingBottom: "20px",
              // }}
            >
              <Button
              className="detailed-btn"
                // style={{
                //   width: "335px",
                //   height: "auto",
                //   fontSize: "15px",
                //   backgroundColor: "#286090",
                //   color: "white",
                //   fontFamily: "'Open Sans', sans-serif",
                // }}
              >
                ĐĂNG KÝ DÙNG THỬ
              </Button>
            </div>
            <div className="username">Email</div>
            <div
              style={{
                paddingTop: "10px",
                width: "90%",
                paddingLeft: "20px",

                paddingBottom: "10px",
              }}
            >
              <Input placeholder="Nhập email" />
            </div>
            <div style={{width:"95%", float:"right" }}>
            <div style={{display:"flex",justifyContent:"space-between",width:"90%"}}>
              <div
                style={{  paddingTop: "20px" }}
              >
                <Button style={{ height: "auto", fontSize: "15px" }}>
                  ĐĂNG NHẬP
                </Button>
              </div>
              <div
                style={{   paddingTop: "20px" }}
              >
                <Button style={{ height: "auto", fontSize: "15px" }}>
                  XÁC NHẬN
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default forgotpassword;
