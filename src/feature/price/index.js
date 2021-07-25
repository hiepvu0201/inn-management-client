import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Component4 from "./../../components/component_ngang";
import {
  faMoneyBillAlt,
  faHandshake,
  faHospital,
  faEnvelopeOpen,
  faUserCircle,
  faIdBadge,
} from "@fortawesome/free-regular-svg-icons";
import Component8 from "./../../components/component_block_last";
import { Images } from "./../../config/image";
import {
  faUsers,
  faClock,
  faThumbsUp,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Component6 from "./../../components/component_block";

import MenuFirst from "./../../components/menuFirst";
import Footer from "./../../components/footer";
function Price() {
  return (
    <div>
      <div className="height-price">
        <MenuFirst />
      </div>
      <div className="container-price">
        <div className="min-width-price">
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              <div className="topic-price">
                <div className="circle-topic-price"></div>
                <div
                  className="content-price"
                  // style={{ position: "relative", bottom: "10px" }}
                >
                  Quy trình mua Phần mềm
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="content2-price"
                // style={{ fontSize: "15px" }}
              >
                Dưới đây là các bước để tiến hành mua , KHUTRO – Phần mềm Quản
                lý Nhà trọ.
              </div>
            </div>
            <Component6 />
          </div>
        </div>
      </div>
      <div className="container-white-price">
        <div className="min-width-price">
          <div style={{ display: "block" }}>
            <div className="civ-price">
              <div className="topic-price">
                <div className="circle-topic-price"></div>
                <div className="why-room-price">
                  Các lợi ích khi lựa chọn nhà trọ này
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="content-partVI-price">
                Giao diện đơn giản, thông minh, giúp quản lý nhà trọ mọi lúc mọi
                nơi với dữ liệu được bảo mật an toàn tuyệt đối, kiểm soát doanh
                số theo thời gian thực và tiết kiệm tối đa chi phí vận hành.
              </div>
            </div>
            <Row
              className="row-partVI-price"
              // style={{ paddingLeft: "30px", paddingTop: "20px" }}
            >
              <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                <Component4
                  img={Images.BAR_CHART}
                  topic="Quản lý mọi lúc, mọi nơi"
                  content="Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối."
                />
              </Col>
              <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                <Component4
                  img={Images.ANALYSIS}
                  topic="Đơn giản & Dễ dùng"
                  content="Giao diện đơn giản, thân thiện, thông minh giúp chủ trọ triển khai quản lý nhà trọ thật dễ dàng và nhanh chóng."
                />
              </Col>
              <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                <Component4
                  img={Images.BUSINESS_PLAN}
                  topic="Phù hợp nhiều mô hình"
                  content="Chúng tôi nghiên cứu thiết kế phần mềm phù hợp với nhiều mô hình nhà trọ, chung cư mini, căn hộ dịch vụ."
                />
              </Col>
              <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                <Component4
                  img={Images.PIGGY}
                  topic="Tiết kiệm chi phí tối đa"
                  content="Chỉ với 4.000 đồng/phòng, chủ trọ đã có thể áp dụng công nghệ tiên tiến vào quản lý nhà trọ, căn hộ của mình."
                />
              </Col>
            </Row>
            <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
              <button className="content-firtst-price">
                DÙNG THỬ MIỄN PHÍ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-price">
        <div className="min-width-price">
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              <div className="topic-price">
                <div className="circle-topic-price"></div>
                <div
                  className="content-price"
                  //  style={{ position: "relative", bottom: "10px" }}
                >
                  Nhận xét của khách hàng
                </div>
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <div
              style={{
                fontSize: "15px",
                width: "80%",
                height: "auto",
                fontFamily: "PT Sans, sans-serif",
                paddingTop: "5px",
              }}
            >
              Sự hài lòng của khách hàng là động lực để chúng tôi hoàn thiện
              phần mềm, đồng thời mở ra cơ hội có thêm nhiều khách hàng mới
              trong tương lai. Bởi thế, chúng tôi vô cùng coi trọng những phản
              hồi từ phía khách hàng và nỗ lực làm tốt nhất từ những phản hồi
              đó.
            </div>
          </div>
          <Row
            // style={{ paddingLeft: "50px" }}
            // style={{ paddingBottom: "280px" }}
            className="row-price23"
          >
            <Col lg={8} md={24} className="col-row">
              <Component8
                img={Images.FACE_1}
                content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                name="Bác Phạm Thị Cúc"
                func="Chủ trọ"
              />
            </Col>
            <Col lg={8} md={24} className="col-row">
              <Component8
                img={Images.FACE_2}
                content="Từ khi sử dụng phần mềm, việc quản lý nhà trọ của tôi trở nên đơn giản hơn rất nhiều."
                name="Anh Nguyễn Văn Thành"
                func="Chủ trọ"
              />
            </Col>
            <Col lg={8} md={24} className="col-row">
              <Component8
                img={Images.FACE_3}
                content="Phần mềm giúp mình quản lý khách thuê, hợp đồng và hóa đơn hàng tháng rất dễ dàng."
                name="Chị Lê Thị Hạnh"
                func="Chủ trọ"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className="container-white-price">
          <div className="min-width-price">
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topic-price-2">
                  <div className="circle-topic-price"></div>
                  <div
                    className="content-circle-XIII-price"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-XIII-price">
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row className="row-price2324">
                <Col lg={8} md={24}>
                  <div className="box-last-price">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2-price2">
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
                      <div className="content-com-4-price2">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-price">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2-price2">
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
                      <div className="topic-com-4-price2">
                        Hotline: 0901.632.176
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-price2">
                        Tổng đài tư vấn miễn phí dành cho khách hàng. Hãy gọi
                        cho chúng tôi ngay khi lúc nào bạn cần.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-price">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-2-price2">
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
                      <div className="topic-com-4-price2">
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
                      <div className="content-com-4-price2">
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Price;
