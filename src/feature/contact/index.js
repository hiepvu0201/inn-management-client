import React from "react";
import MenuFirst from "./../../components/menuFirst";
import Footer from "./../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faHandshake,
  faHospital,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faHourglassEnd,
  faPuzzlePiece,
  faUserAlt,
  faUserTimes,
  faUsers,
  faRecycle,
  faUser,
  faChartLine,
  faRss,
  faPrint,
  faPlug,
  faTicketAlt,
  faBuilding,
  faMobileAlt,
  faUserPlus,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { Row, Col } from "antd";
function Contact() {
  return (
    <div>
      <div className="height-contract">
        <MenuFirst />
      </div>
      <div>
        <div className="partXIII">
          <div
            style={{
              width: "80%",
              height: "auto",
            }}
          >
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topicxx">
                  <div className="circle-coop-3"></div>
                  <div style={{ position: "relative",fontSize:"21px" }}>
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-XIII">
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row className="row-contact" style={{ paddingTop: "20px" }}>
                <Col lg={8} md={24}>
                  <div className="box-last23">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <div
                          className="ti-comments"
                          style={{ Color: "#009c7e" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last23">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          size="2x"
                          color="#009c7e"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">Hotline: 0901.632.176</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Tổng đài tư vấn miễn phí dành cho khách hàng. Hãy gọi
                        cho chúng tôi ngay khi lúc nào bạn cần.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last23">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          size="2x"
                          color="#009c7e"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4">
                        Email: nduy9744@gmail.com
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        Mọi yêu cầu của khách hàng gửi về email, đều được giải
                        quyết và trả lời một cách nhanh nhất.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div>
          <div className="container-two">
            <div className="incontainer">
              <div style={{ display: "block" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <div className="topicxx">
                    <div className="circle-coop-3"></div>
                    <div style={{ position: "relative" }}>
                      Phần mềm quản lý nhà trọ - căn hộ
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <div className="content2-circle-XIII">
                    Cùng với các chuyên gia IT dày kinh nghiệm, đội ngũ tư vấn
                    chuyên nghiệp, chúng tôi luôn mang đến giải pháp tốt nhất
                    cho khách hàng
                  </div>
                </div>
                <Row style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                  <Col lg={8} md={24}>
                    <div style={{ display: "block" }}>
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
                            width: "80%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ display: "block", width: "60%" }}>
                            <div className="icon-hover-333">
                              <FontAwesomeIcon
                                icon={faPhoneAlt}
                                size="2x"
                                color="white"
                              />
                            </div>
                            <div className="content-first-XIII">Điện thoại</div>
                            <div className="detailed-content-first-XIII">
                              0901.632.176
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </Col>
                  <Col lg={8} md={24}>
                    <div style={{ display: "block" }}>
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
                            width: "80%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ display: "block", width: "100%" }}>
                            <div className="icon-hover-4">
                              <div
                                className="ti-comments"
                                style={{ color: "white" }}
                              ></div>
                            </div>
                            <div className="content-first-XIII">Địa chỉ</div>
                            <div className="detailed-content-first-XIIII">
                              1 Võ Văn Ngân  Thành phố Thủ Đức
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </Col>
                  <Col lg={8} md={24}>
                    <div style={{ display: "block" }}>
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
                            width: "80%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ display: "block", width: "100%" }}>
                            <div className="icon-hover-4">
                              <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                size="2x"
                                color="white"
                              />
                            </div>
                            <div className="content-first-XIII">Email</div>
                            <div className="detailed-content-first-XIII">
                              nduy9744@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
