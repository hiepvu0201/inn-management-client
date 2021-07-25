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
import {Link} from "react-router-dom"
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
                  Phần mềm quản lý phòng trọ phục vụ cho mục đích luận văn tốt
                  nghiệp
                </div>
                <div className="icon-social">
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
                  <div>1 Võ Văn Ngân Phường Linh Chiểu Thành phố Thủ Đức</div>
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
                  <div className="email">nduy9744@gmail.com</div>
                </div>
                <div
                  style={{
                    width: "100%",
                    fontSize: "15px",
                    textAlign: "left",
                    display: "block",
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
                  <div className="email">
                    https://inn-app.herokuapp.com/login
                  </div>
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
                <Link to="/client">
                  <div className="href-page">Trang Chủ</div>
                </Link>
                <Link to="/roomclient">
                  <div className="href-page">Phòng trọ</div>
                </Link>
                <Link to="/mapclient">
                  <div className="href-page">Vị trí chi nhánh trọ</div>
                </Link>
                <Link to="/price">
                  <div className="href-page">Bảng giá</div>
                </Link>
                <Link to="/cooperation">
                  <div className="href-page">Hợp tác</div>
                </Link>
                <Link to="/contact">
                  <div className="href-page">Liên Hệ</div>
                </Link>
                <Link to="/term">
                  <div className="href-page">Điều Khoản Sử Dụng</div>
                </Link>
                <Link to="/privacy">
                  <div className="href-page">Chính Sách Bảo Mật</div>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
