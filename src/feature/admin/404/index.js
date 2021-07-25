import React from "react";
import "./style.css";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import Footer from "./../../../components/footer";
import { Images } from "./../../../config/image";
import {Link} from "react-router-dom"
function Error() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div style={{ width: "100%", height: "auto" }}>
          <img src={Images.COTON} style={{ width: "100%", height: "auto" }} />
          <div
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "45px",
              position: "relative",
              backgroundColor: "white",
                top: "-150vh",
            }}
          >
            Xin vui lòng lấy làm tiếc
          </div>
          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "40px",
              position: "relative",
              backgroundColor: "white",
                top: "-145vh",
            }}
          >
            Trang bạn tìm kiếm không có
          </div>
          <Link to="/home" style={{ color: "white" }}>
            <div style={{backgroundColor:"white"}}>
              <button
                style={{
                  position: "relative",
                  top: "-140vh",
                  backgroundColor: "#39ac30",
                  borderRadius: "8px",
                  fontFamily: "'Yomogi', cursive",
                  fontSize: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  cursor: "pointer"
                }}
              >
                Trở về Trang Chủ
              </button>
            </div>
          </Link>
        </div>

        <div
          style={{
            color: "#33404c",
            width: "100%",
            height: "auto",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "12px",
            textAlign: "left",
            backgroundColor: "#F8F8FF",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Error;
