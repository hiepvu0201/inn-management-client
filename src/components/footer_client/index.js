import React from "react";
import { Row, Col } from "antd";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faGooglePlusG,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Images} from './../../config/image'
function index() {
  return (
    <div
      
    >
      <div style={{ width: "100%", height: "auto", backgroundColor: "white" }}>
        <Row style={{paddingTop:"15px"}}>
          <Col lg={8} md={24} style={{ paddingLeft: "30px" }}>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                HỖ TRỢ KHÁCH HÀNG
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                Trung tâm trợ giúp{" "}
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                An toàn mua bán{" "}
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                Quy định cần biết{" "}
              </div>
            </div>
          </Col>
          <Col lg={8} md={24} style={{ paddingLeft: "150px" }}>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                VỀ KHU TRỌ{" "}
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                Giới thiệu{" "}
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                Tuyển dụng{" "}
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                }}
              >
                Truyền thông{" "}
              </div>
            </div>
          </Col>{" "}
          <Col lg={8} md={24} style={{paddingLeft:"80px"}}>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                LIÊN KẾT{" "}
              </div>
              <div style={{ width: "80%", height: "auto", display: "flex",paddingBottom:"10px",paddingTop:"10px" }}>
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="#3b5998"
                    size="1x"
                  />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <FontAwesomeIcon icon={faYoutube} color="#ff0a28" size="1x" />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    color="#dd4b39"
                    size="1x"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                CHỨNG NHẬN{" "}
              </div>
              <div style={{ width: "80%", height: "auto", display: "flex",paddingBottom:"10px",paddingTop:"10px" }}>
                  <img src={Images.LOGO_FOOTER} style={{width:"30%",height:"auto"}}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default index;
