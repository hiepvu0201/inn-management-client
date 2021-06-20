import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { Images } from "../../config/image";
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

function Footer() {
  return (
    <div>
      <div className="box-foot">
        <div className="middle-foot">
          <Row style={{ paddingTop: "10px" }}>
            <Col lg={8} md={24} style={{ paddingRight: "40px" }}>
              <div
                style={{ display: "block", textAlign: "left", width: "100%" }}
              >
                <div>
                  <img src={Images.LOGIN} className="img-icon" />
                </div>
                <div className="content-icon-first">
                  KHUTRO – Phần mềm Quản lý Nhà trọ, Căn hộ dịch vụ. Là một
                  trong những đơn vị tiên phong trong lĩnh vực phát triển phần
                  mềm quản lý bất động sản cho thuê số 1 thị trường hiện nay.
                </div>
                <div className="icon-social" >
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                  </div>
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faPinterest} />
                    </div>
                  </div>
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </div>
                  </div>
                  <div className="icon">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </div>
                  <div className="icon">
                    {" "}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} md={24}>
              <div className="display-col-2">
                <div className="topic-title">
                  <div className="char"></div>
                  <div className="content-title">Liên hệ</div>
                </div>
                <div
                  style={{
                    width: "80%",
                    fontSize: "15px",
                    textAlign: "left",
                    paddingTop: "10px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      width: "30%",
                      textAlign: "left",
                    }}
                  >
                    Văn phòng:
                  </strong>
                  Số 12, Ngõ 115 Phố Định Công, P.Định Công, Q.Hoàng Mai, TP Hà
                  Nội
                </div>
                <div
                  style={{
                    width: "80%",
                    fontSize: "15px",
                    textAlign: "left",
                    display: "flex",
                    paddingRight: "120px",
                    paddingTop: "10px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      width: "30%",
                      textAlign: "left",
                    }}
                  >
                    Hotline:
                  </strong>
                  <div className="hotline">0901.632.176</div>
                </div>
                <div
                  style={{
                    width: "80%",
                    fontSize: "15px",
                    textAlign: "left",
                    display: "flex",
                    paddingRight: "120px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      width: "30%",
                      textAlign: "left",
                    }}
                  >
                    Email:
                  </strong>
                  <div className="email">official.khutro@gmail.com</div>
                </div>
                <div
                  style={{
                    width: "80%",
                    fontSize: "15px",
                    textAlign: "left",
                    display: "flex",
                    paddingRight: "100px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      width: "30%",
                      textAlign: "left",
                    }}
                  >
                    Website:
                  </strong>
                  <div className="email">khutro.com</div>
                </div>
                <div
                  style={{
                    width: "80%",
                    fontSize: "15px",
                    textAlign: "left",
                    paddingRight: "100px",
                    width: "100%",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      textAlign: "left",
                    }}
                  >
                    Giờ làm việc:
                  </strong>
                  
                    Từ 8h – 18h từ Thứ 2 đến Thứ 6 và Sáng Thứ 7{" "}
                </div>
              </div>
            </Col>
            <Col lg={8} md={24} className="col">
              <div className="display-col-2">
                <div className="topic-title2">
                  <div className="char"></div>
                  <div className="content-title2">Liên kết</div>
                </div>
                <div className="href-page">Trang Chủ</div>
                <div className="href-page">Hợp Tác</div>
                <div className="href-page">Khuyến Mại</div>
                <div className="href-page">Tin Tức</div>
                <div className="href-page">Liên Hệ</div>
                <div className="href-page">Điều Khoản Sử Dụng</div>
                <div className="href-page">Chính Sách Bảo Mật</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
