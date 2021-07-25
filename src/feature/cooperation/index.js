import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faHandshake,
  faHospital,
  faEnvelopeOpen,
  faUserCircle,
  faIdBadge,
} from "@fortawesome/free-regular-svg-icons";
import Component3 from "./../../components/component_nganghong";
import { Images } from "./../../config/image";
import {
  faUsers,
  faClock,
  faThumbsUp,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import MenuFirst from "./../../components/menuFirst";
import Footer from "./../../components/footer";
function Cooperation() {
  return (
    <div>
      <div className="height-cooperation">
        <MenuFirst />
      </div>
      <div>
        <div className="coopXIII">
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
                <div className="topiccoop">
                  <div className="circle-coop"></div>
                  <div style={{ position: "relative" }}>
                    Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ?
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-coop">
                  Bạn chỉ cần giới thiệu chủ trọ mua phần mềm quản nhà trọ và
                  nhận về nguồn thu nhập khủng.
                </div>
              </div>
              <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Col lg={6} md={24}>
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
                        backgroundColor: "#007c7e",
                        display: "block",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <div className="icon-hover-coop">
                          <FontAwesomeIcon
                            icon={faMoneyBillAlt}
                            size="2x"
                            color="#009c7e"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="title-coop">
                          Giúp gia tăng thu nhập một cách dễ dàng
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="detailed-title-coop">
                          Bạn muốn có thêm thu nhập để trang trải cuộc sống hay
                          đơn giản bạn chỉ muốn kiếm thêm thu nhập, bạn đang tìm
                          kiếm một công việc làm thêm?
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={24}>
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
                        backgroundColor: "#007c7e",
                        display: "block",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <div className="icon-hover-coop">
                          <FontAwesomeIcon
                            icon={faClock}
                            size="2x"
                            color="#009c7e"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="title-coop">
                          Không bị quản lý thời gian
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="detailed-title-coop">
                          Bạn muốn một công việc linh hoạt theo ý muốn, bạn muốn
                          chủ động được thời gian của mình, công việc không bị
                          gò bó mà kiếm được thu nhập cao?
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={24}>
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
                        backgroundColor: "#007c7e",
                        display: "block",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <div className="icon-hover-coop">
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            size="2x"
                            color="#009c7e"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="title-coop">
                          Không cần phải đầu tư quá nhiều công sức
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="detailed-title-coop">
                          Bạn muốn một công việc nhẹ nhàng, hình thức linh hoạt,
                          có thể bắt đầu ngay, nhưng với thu nhập khủng, không
                          phải đầu tư vốn?
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={24}>
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
                        backgroundColor: "#007c7e",
                        display: "block",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                      >
                        <div className="icon-hover-coop">
                          <FontAwesomeIcon
                            icon={faHandshake}
                            size="2x"
                            color="#009c7e"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="title-coop">
                          Chúng tôi mang đến 1 cơ hội
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          height: "auto",
                        }}
                      >
                        <div className="detailed-title-coop">
                          Kiếm tiền đơn giản chưa từng có, chỉ cần giới thiệu
                          chủ trọ và nhận về nguồn thu nhập khủng. Rất đơn giản,
                          nhanh chóng và cực kỳ dễ dàng.
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="boss-two-coop">
        <div className="max-width-coop">
          <div className="min-width-coop">
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topiccoop-2">
                  <div className="circle-coop-2"></div>
                  <div style={{ position: "relative" }}>
                    Ai có thể tham gia làm cộng tác viên
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-coop-2">
                  Rất đơn giản, nhanh chóng và kiếm tiền cực kỳ dễ dàng
                </div>
              </div>
            </div>
            <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Col lg={6} md={24}>
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
                      backgroundColor: "white",
                      display: "block",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <div className="icon-hover-coop-2">
                        <FontAwesomeIcon
                          icon={faHandshake}
                          size="2x"
                          color="white"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="title-coop-2">
                        Yêu thích kinh doanh và đam mê kiếm tiền
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="detailed-title-coop-2">
                        Chỉ cần bạn yêu thích kinh doanh thì bạn có thể tham gia
                        giới thiệu khách hàng cho chúng tôi, việc kiếm tiền sẽ
                        trở nên dễ dàng hơn bao giờ hết.
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={24}>
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
                      backgroundColor: "white",
                      display: "block",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <div className="icon-hover-coop-2">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="2x"
                          color="white"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="title-coop-2">
                        Công dân Việt Nam tuân thủ pháp luật
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="detailed-title-coop-2">
                        Bạn có nhiều mối quan hệ với các nhà trọ, khu trọ, khu
                        chung cư mini,thì đây là cơ hội của bạn để có thu nhập
                        khủng mỗi tháng .
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={24}>
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
                      backgroundColor: "white",
                      display: "block",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <div className="icon-hover-coop-2">
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          size="2x"
                          color="white"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="title-coop-2">
                        Đi làm, sinh viên… muốn tăng thu nhập
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="detailed-title-coop-2">
                        Dù bạn là ai, chỉ cần bạn có thời gian rảnh và muốn gia
                        tăng thu nhập của mình, thì bạn đều có thể tham gia giới
                        thiệu khách hàng cho chúng tôi.
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={24}>
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
                      backgroundColor: "white",
                      display: "block",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <div className="icon-hover-coop-2">
                        <FontAwesomeIcon
                          icon={faIdBadge}
                          size="2x"
                          color="white"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="title-coop-2">
                        Chủ của các nhà trọ, khu trọ, chung cư mini
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        height: "auto",
                      }}
                    >
                      <div className="detailed-title-coop-2">
                        Bạn đang là chủ nhà trọ, căn hộ dịch vụ, bạn muốn các
                        nhà trọ khác cũng dùng phần mềm, bạn chỉ cần giới thiệu
                        sẽ có chính sách tốt cho bạn.
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <div className="boss-three-coop">
          <div className="max-width-coop">
            <div className="min-width-coop">
              <div style={{ display: "block" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <div className="topiccoop-3">
                    <div className="circle-coop-3"></div>
                    <div style={{ position: "relative",fontSize:"25px" }}>
                      Hãy tham gia làm Cộng Tác Viên của chúng tôi
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <div className="content2-circle-coop-3">
                    Chúng tôi sẽ hỗ trợ các bạn trong việc tư vấn bán hàng, hỗ
                    trợ chăm sóc khách hàng, quản lý khách hàng và ký kết hợp
                    đồng. Bạn chỉ cần giới thiệu khách hàng sử dụng phần mềm
                    quản lý nhà trọ, tất cả mọi việc đã được KHUTRO hỗ trợ bạn.
                    Bạn sẽ nhận được hoa hồng ngay sau khi chúng tôi ký kết hợp
                    đồng thành công với chủ trọ.
                  </div>
                </div>
                <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <Col lg={6} md={24}>
                    <Component3
                      images={Images.USERS}
                      number="4356 +"
                      content="Chủ trọ sử dụng"
                    />
                  </Col>
                  <Col lg={6} md={24}>
                    <Component3
                      images={Images.REVIEW}
                      number="90% +"
                      content="Chủ trọ hài lòng"
                    />
                  </Col>
                  <Col lg={6} md={24}>
                    <Component3
                      images={Images.ADS}
                      number="15 +"
                      content="Đăng ký mới mỗi ngày"
                    />
                  </Col>
                  <Col lg={6} md={24}>
                    <Component3
                      images={Images.OFFICE}
                      number="56 +"
                      content="Tỉnh thành có mặt"
                    />
                  </Col>
                </Row>
                <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <div>
                    KHUTRO chiết khấu&nbsp;đối với mỗi hợp đồng Cộng Tác Viên
                    giới thiệu.
                  </div>
                  <div>Hoa hồng nhận được cho hợp đồng khách hàng ký kết.</div>
                </div>
                <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <button className="btn-signup-coop">DÙNG THỬ MIỄN PHÍ</button>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "15px",
                    }}
                  >
                    <div className="topiccoop-3">
                      <div className="circle-coop-3"></div>
                      <div style={{ position: "relative",fontSize:"20px" }}>
                        Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ
                        của bạn
                      </div>
                    </div>
                  </div>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <div className="content2-circle-coop-3">
                      Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                      nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu
                      nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn
                      sàng hỗ trợ bạn suốt 24/7, phần mềm quản lý nhà trọ luôn
                      được phát triển hàng ngày.
                    </div>
                  </div>
                  <Row className="row-coop">
                    <Col lg={8} md={24}>
                      <div className="box-last-coop">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "20px",
                          }}
                        >
                          <div className="icon-hover-coop-last">
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
                          <div className="topic-com-coop">Hỗ trợ</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "10px",
                          }}
                        >
                          <div className="content-com-coop">
                            Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo
                            luôn sẵn sàng phục vụ khách hàng 24/7.
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} md={24}>
                      <div className="box-last-coop">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "20px",
                          }}
                        >
                          <div className="icon-hover-coop-last">
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
                          <div className="topic-com-coop">
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
                          <div className="content-com-coop">
                            Tổng đài tư vấn miễn phí dành cho khách hàng. Hãy
                            gọi cho chúng tôi ngay khi lúc nào bạn cần.
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} md={24}>
                      <div className="box-last-coop">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "20px",
                          }}
                        >
                          <div className="icon-hover-coop-last">
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
                          <div className="topic-com-coop">
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
                          <div className="content-com-coop">
                            Mọi yêu cầu của khách hàng gửi về email, đều được
                            giải quyết và trả lời một cách nhanh nhất.
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
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

export default Cooperation;
