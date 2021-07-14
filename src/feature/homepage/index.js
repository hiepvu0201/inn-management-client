import React from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
import { Images } from "./../../config/image";
import Menu_client from "../../components/menu_client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./demo-files/demo.css";
import "./ie7/ie7.css";
import Footer from "./../../components/footer";
import "./themify-icons.css";
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
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faMoneyBillAlt,
  faHandshake,
  faHospital,
  faEnvelopeOpen
} from "@fortawesome/free-regular-svg-icons";
import Component1 from "./../../components/component_ngangxanh";
import Component2 from "./../../components/component_docxanh";
import Component3 from "./../../components/component_nganghong";
import Component4 from "./../../components/component_ngang";
import Component5 from "./../../components/component_ngangtranghong";
import Component6 from "./../../components/component_block";
import Component7 from "./../../components/component_rectangle";
import Component8 from "./../../components/component_block_last";
function Home() {
  return (
    <div>
      <div className="height-open">
        <Menu_client />
      </div>
      <div className="partII">
        <Row>
          <Col
            lg={12}
            md={24}
            //  style={{ backgroundColor: "blue" }}
          >
            <div style={{ display: "flex", paddingTop: "150px" }}>
              {/* <div style={{ position: "relative", left: "90px" }} className="element1"> */}
              <div className="element1">
                {/* <img src={Images.DESKTOP} style={{ width: "320px" }} className="element1-img" /> */}
                <img
                  src={Images.DESKTOP}
                  // style={{ width: "320px" }}
                  className="element1-img"
                />
              </div>
              <div
                className="element2"
                // style={{ position: "absolute", bottom: "10px", left: "250px" }}
              >
                {" "}
                <img
                  className="element2-img"
                  src={Images.MONITOR}
                  // style={{ width: "480px", height: "350px" }}
                />
              </div>
              <div
                // style={{ position: "absolute", left: "640px", bottom: "10px" }}
                className="position-element4"
              >
                <img src={Images.TABLET} className="element4" />
              </div>
              <div
                // style={{ position: "absolute", left: "615px", bottom: "15px" }}
                className="position-element5"
              >
                <img
                  src={Images.PHONE}
                  // style={{ width: "75px" }}
                  className="element5"
                />
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div
              // style={{ display: "block", paddingTop: "10px" }}
              className="element3-outer"
            >
              <div className="element3">KHUNHATRO - CHUOICANHO</div>
              <div
                // style={{
                //   fontSize: "30px",
                //   color: "#007c7e",
                //   fontFamily: "'Open Sans', sans-serif",
                //   fontWeight: "bold",
                // }}
                className="element3-2"
              >
                PHẦN MỀM QUẢN LÝ
              </div>
              <div
                className="element3-1"
                // style={{
                //   fontSize: "30px",
                //   color: "#007c7e",
                //   fontFamily: "'Open Sans', sans-serif",
                //   fontWeight: "bold",
                // }}
              >
                NHÀ TRỌ CĂN HỘ DỊCH VỤ
              </div>
              {/* <div style={{ paddingTop: "10px" }}>
              <img src={Images.NO1} className="img-ele3" />
            </div> */}
              <div
                // style={{
                //   fontFamily: "'Open Sans', sans-serif",
                //   color: "#007c7e",
                //   fontSize: "16px",
                //   fontWeight: "bold",
                // }}
                className="element4"
              >
                Thiết kế đơn giản, dễ dàng sử dụng và tiết kiệm tối đa chi phí
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <img src={Images.ICON} className="img-ele3" />
              </div>
              <div className="btnfree">
                <button className="button-free">
                  DÙNG THỬ MIỄN PHÍ <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="partIII"
        // style={{
        //   width: "100%",
        //   height: "620px",
        //   display: "flex",
        //   justifyContent: "center",
        // }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="part2">
            <div
              className="container-part2"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              // }}
            >
              <div className="topic">
                <div className="circle-topic"></div>
                <div style={{ position: "relative" }}>
                  Bạn đang kinh doanh Nhà trọ, Căn hộ dịch vụ?
                </div>
              </div>
            </div>
            <div
              className="container-part3"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              // }}
            >
              <div
                className="content-part3"
                // style={{ fontFamily: " PT Sans, sans-serif", fontSize: "15px" }}
              >
                Cho thuê nhà trọ, căn hộ là loại hình kinh doanh khá hấp dẫn vì
                có tiềm năng lớn, nhu cầu cao, doanh thu ổn định và an toàn. Tuy
                nhiên, lĩnh vực kinh doanh này cũng có khá nhiều khó khăn khiến
                không ít chủ trọ, chủ căn hộ phải đối mặt với nhiều rủi ro về
                tài chính cũng như hiệu quả quản lý.
              </div>
            </div>
            <div>
              <Row
                // style={{ paddingTop: "15px", paddingLeft: "40px" }}
                className="row-part3"
              >
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHourglassEnd}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Thời gian"
                    content="Bạn tốn nhiều thời gian cho việc giám sát, quản lý cơ sở, khách thuê, chi phí."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faMoneyBillAlt}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Chi phí"
                    content="Bạn đau đầu vì có quá nhiều chi phí phát sinh trong quá trình kinh doanh."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Công tác quản lý"
                    content="Bạn đau đầu khi suốt ngày phải đi xử lý sự cố, hợp đồng, các thủ tục pháp lý, hóa đơn."
                  />
                </Col>
              </Row>
              <Row
                // style={{ paddingTop: "15px", paddingLeft: "40px" }}
                className="row2-part3"
              >
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faHandshake}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Rủi ro Quản lý"
                    content="Tình trạng khó khăn trong việc quản lý các khoản hóa đơn, có thể thất thoát tiền bạc trong việc tính toán."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Khách thuê"
                    content="Bạn cần có một quy trình quản lý khách thuê chuyên nghiệp, hiệu quả để tạo mối quan hệ lâu dài với họ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component1
                    icon={
                      <FontAwesomeIcon
                        icon={faUserTimes}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Hiệu quả kinh doanh"
                    content="Công việc quản lý đảm bảo tính chính xác, hiệu quả để đảm bảo quyền lợi cả hai bên và tối ưu hóa được doanh thu."
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="partIV">
        <div className="box-iv-all">
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              <div className="topic">
                <div className="circle-topic"></div>
                <div className="host" style={{ position: "relative" }}>
                  88% chủ trọ, căn hộ rơi vào tình trạng
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: " PT Sans, sans-serif",
                fontSize: "15px",
              }}
            >
              Công việc quản lý nhà trọ, căn hộ chiếm tỷ lệ không hề nhỏ trong
              hiệu quả của các chuỗi nhà trọ, căn hộ. Nhưng để quản lý hiệu quả
              không phải chuyện đơn giản.
            </div>
            <Row className="paddingrow">
              <div className="positionrow-partIV">
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHospital}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Cơ sở vật chất"
                    content="Với quy mô các tòa nhà, số phòng lớn bạn cần quá nhiều thời gian công sức để quản lý lưu trữ cũng như tìm kiếm thông tin dữ liệu."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faHandshake}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Hợp đồng"
                    content="Quy trình làm việc rời rạc với từng khách thuê, đặc biệt khi có thay đổi về thông tin khá phức tạp và mất thời gian trong việc quản lý."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faMoneyBillAlt}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Hóa đơn"
                    content="Việc triển khai in, xuất và gửi thanh toán hóa đơn thanh toán mất nhiều quỹ thời gian tính toán, xử lý và truy thu, sai sót và thất thoát."
                  />
                </Col>
                <Col lg={6} md={24}>
                  <Component2
                    icon={
                      <FontAwesomeIcon
                        icon={faChartLine}
                        size="2x"
                        color="#007c7e"
                      />
                    }
                    topic="Theo dõi báo cáo"
                    content="Chưa theo dõi một cách tổng quan về tình hình kinh doanh, thống kê thu chi và lịch sử khách thuê, hợp đồng, hóa đơn."
                  />
                </Col>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div
        className="partV"
        // style={{
        //   width: "100%",
        //   height: "380px",
        //   display: "flex",
        //   justifyContent: "center",
        //   paddingTop: "20px",
        // }}
      >
        <div
          style={{
            width: "80%",
            height: "auto",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="topic">
                <div className="circle-topic"></div>
                <div
                  // style={{ position: "relative", bottom: "10px" }}
                  className="content-partV"
                >
                  Phần mềm Quản lý Nhà Trọ - TỐT NHẤT HIỆN NAY
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                // style={{
                //   fontFamily: " PT Sans, sans-serif",
                //   fontSize: "15px",
                //   width: "80%",
                // }}
                className="content-title-partV"
              >
                Giải quyết 90% lo lắng của chủ trọ trong việc quản lý và vận
                hành nhà trọ với chi phí tiết kiệm tối đa. Cắt giảm 50% thời
                gian tính toán thu chi với giao diện đơn giản nhất. Đội ngũ tư
                vấn khách hàng luôn sẵn sàng để hỗ trợ tận tình 24/7, đồng hành
                cùng việc quản lý nhà trọ của bạn.
              </div>
            </div>
            <Row className="row-com-3">
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
            <div
              // style={{
              //   textAlign: "center",
              //   display: "flex",
              //   justifyContent: "center",
              //   paddingTop: "30px",
              // }}
              className="conclusion-partV"
            >
              <strong
                // style={{ fontSize: "25px" }}
                className="content-rowFirst"
              >
                KHUTRO
              </strong>
              <div
                className="content-rowSecond"
                // style={{ paddingLeft: "5px", fontSize: "25px" }}
              >
                giải pháp
              </div>
              <strong
                className="content-rowThird"
                //  style={{ paddingLeft: "5px", fontSize: "25px" }}
              >
                Phần Mềm Quản Lý Nhà Trọ
              </strong>
              <div
                className="content-rowFourth"
                // style={{ fontSize: "25px" }}
              >
                , đăng ký dùng thử ngay …
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button className="btn-signup-2">DÙNG THỬ MIỄN PHÍ</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="partVI">
          <div
            style={{
              width: "80%",
              height: "auto",
            }}
          >
            <div style={{ display: "block" }}>
              <div className="civ-civ">
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div className="why-room">Các lợi ích khi lựa chọn nhà trọ này</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="content-partVI"
                  // style={{
                  //   fontFamily: " PT Sans, sans-serif",
                  //   fontSize: "15px",
                  //   width: "80%",
                  // }}
                >
                  Giao diện đơn giản, thông minh, giúp quản lý nhà trọ mọi lúc
                  mọi nơi với dữ liệu được bảo mật an toàn tuyệt đối, kiểm soát
                  doanh số theo thời gian thực và tiết kiệm tối đa chi phí vận
                  hành.
                </div>
              </div>
              <Row
                className="row-partVI"
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="partVII">
          <div
            style={{
              width: "80%",
              height: "auto",
            }}
          >
            <div style={{ display: "block" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div style={{ position: "relative", bottom: "10px" }}>
                   Việc thiết kế{" "}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  // style={{
                  //   fontFamily: " PT Sans, sans-serif",
                  //   fontSize: "15px",
                  //   width: "80%",
                  // }}
                  className="content-partVII"
                >
                  Cùng với các chuyên gia IT dày kinh nghiệm, chúng tôi nghiên
                  cứu thiết kế phần mềm quản lý nhà trọ tối ưu phù hợp với nhiều
                  mô hình quản lý khác nhau, với nhiều tính năng nổi bật.
                </div>
              </div>
              <Row className="detailedrow-partVI">
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUsers}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý khách thuê"
                    content1="Chức năng quản lý thông tin khách thuê, gồm các thông tin cá nhân,thông tin liên hệ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faHandshake}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý hợp đồng"
                    content1="Chức năng quản lý thông tin hợp đồng thuê nhà, gồm phòng, khách thuê, dịch vụ, tiền đặt cọc."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon icon={faRss} size="2x" color="#eb2f5b" />
                    }
                    topic1="Quản lý dịch vụ"
                    content1="Chức năng quản lý thông tin hợp đồng thuê nhà, gồm phòng, khách thuê, dịch vụ, tiền đặt cọc …"
                  />
                </Col>
              </Row>
              <Row
                className="detailedrow-partVI"

                // style={{ paddingTop: "10px" }}
              >
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faMoneyBillAlt}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý hóa đơn"
                    content1="Chức năng quản lý hóa đơn thu tiền hằng tháng, gồm các chi phí như điện, nước, dịch vụ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faPrint}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Xuất, in H.đồng, hóa đơn"
                    content1="Tự động biên soạn in xuất hợp đồng, hóa đơn hàng tháng một cách nhanh chóng và tiện lợi."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faPlug}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý số điện/nước"
                    content1="Chức năng quản lý số điện nước của từng phòng theo từng tháng, tự động tính toán tiền phải trả."
                  />
                </Col>
              </Row>
              <Row className="detailedrow-partVI">
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faTicketAlt}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý phiếu chi"
                    content1="Chức năng quản lý các khoản chi của phần mềm quản lý nhà trọ tổng hợp báo cáo thu chi của toàn bộ khu trọ, nhà trọ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faBuilding}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý phòng, thiết bị"
                    content1="Chức năng quản lý thông tin phòng theo từng khu, tiền phòng, thiết bị trong phòng của phần mềm quản lý nhà trọ."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faChartLine}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Quản lý cấu hình, báo cáo"
                    content1="Chức năng cấu hình các thông tin liên quan tới nhà trọ, căn hộ, tổng hợp các báo cáo theo các tiêu chí khác nhau."
                  />
                </Col>
              </Row>
            </div>
            <div className="option-other">Và nhiều tính năng khác</div>
            <div className="option-2">
              Được dùng thử miễn phí, hướng dẫn như thật, tại sao không?
            </div>
            <div className="abcd">
              <button className="btn-option-2"> DÙNG THỬ MIỄN PHÍ</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          // style={{
          //   width: "100%",
          //   height: "450px",
          //   backgroundColor: "#efefef",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
          className="partVIII"
        >
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
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div
                    className="content-partVIII"

                    //  style={{ position: "relative", bottom: "10px" }}
                  >
                    Các tính năng tối ưu{" "}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="content2-partVIII">
                  Cùng với các chuyên gia IT dày kinh nghiệm, chúng tôi nghiên
                  cứu thiết kế phần mềm quản lý nhà trọ tối ưu phù hợp với nhiều
                  mô hình quản lý khác nhau, với nhiều tính năng nổi bật.
                </div>
              </div>
              <Row className="row-partVIII">
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faRecycle}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Dùng thử miễn phí"
                    content1="Dùng thử miễn phí, hướng dẫn như thật cùng chuyên viên tận tâm. Bảo hành trọn đời, hỗ trợ liên tục 24/7."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Xuất, in H.đồng, hóa đơn"
                    content1="Tự động biên soạn in xuất hợp đồng, hóa đơn hàng tháng gửi cho khách thuê một cách nhanh chóng và tiện lợi."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        size="2x"
                        color="#eb2f5b"
                      />
                    }
                    topic1="Hỗ trợ đa nền tảng"
                    content1="Hỗ trợ ĐA NỀN TẢNG: Máy tính bàn, máy tính bảng, và thiết bị di động. Với sự linh hoạt trên từng nền tảng."
                  />
                </Col>
              </Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="content-contact">
                  Hãy để chúng tôi đồng hành cùng bạn
                </div>
              </div>
              <div className="content-atlast">
                <div
                  className="content-partVI-atlast"
                  // style={{ fontSize: "15px", paddingRight: "10px" }}
                >
                  Tại KHUTRO , chúng tôi luôn cố gắng tạo ra môi trường làm việc
                  chuyên nghiệp, sáng tạo và kỷ luật cao. Cùng với đội ngũ kỹ sư
                  trẻ giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn
                  sẵn sàng hỗ trợ bạn 24/7.
                </div>
                {/* <strong style={{ fontSize: "15px" }}>KHUTRO</strong> */}
                {/* <div style={{ paddingLeft: "10px", fontSize: "15px" }}> */}
                {/* , chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Cùng với đội ngũ kỹ sư trẻ
                  giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn
                  sàng hỗ trợ bạn 24/7. */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="partIX">
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
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div
                    className="content-partIX"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Quy trình mua Phần mềm 
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="content2-partIX"
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
      </div>
      <div>
        <div>
          <div
            className="partX"
            // style={{
            //   width: "100%",
            //   height: "560px",
            //   display: "flex",
            //   justifyContent: "center",
            //   backgroundColor: "#efefef",
            // }}
          >
            <div
              style={{
                width: "90%",
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
                  <div className="topic">
                    <div className="circle-topic"></div>
                    <div style={{ position: "relative", bottom: "10px" }}>
                      Nét đặc trưng
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <div style={{ fontSize: "15px" }}>
                    Kinh doanh hiệu quả phải quản lý tốt nhưng không phải chủ
                    trọ, căn hộ nào cũng biết cách làm, cũng như có đủ thời gian
                    Phần mềm Quản lý Nhà trọ, Căn hộ để làm. Với KHUTRO, bạn có
                    thể
                  </div>
                </div>
                <Component7 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="partXI"
          // style={{
          //   width: "100%",
          //   height: "380px",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
        >
          <div
            style={{
              width: "90%",
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
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div style={{ position: "relative", bottom: "10px" }}>
                    Những điều khác biệt
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div
                  className="content-partXUI"
                  // style={{
                  //   fontSize: "15px",
                  //   width: "80%",
                  //   height: "auto",
                  //   fontFamily: "PT Sans, sans-serif",
                  //   paddingTop: "5px",
                  // }}
                >
                  KHUTRO luôn tâm niệm khác biệt tạo nên thành công. Chính vì
                  thế, chúng tôi luôn nỗ lực để tạo nên những giá trị khác biệt
                  giúp khách hàng đi đến thành công. Tuy còn ít kinh nghiệm
                  nhưng KHUTRO đã dần chứng minh được vị thế của mình trong lòng
                  khách hàng.
                </div>
              </div>
              <Row style={{ paddingLeft: "80px", paddingTop: "50px" }}>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">01</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Thành công của khách hàng là thước đo
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO coi trọng khách hàng và luôn lấy khách hàng
                            làm trung tâm, đặt lợi ích và mong muốn của khách
                            hàng lên hàng đầu.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">02</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Làm tốt ngay từ đầu và luôn tập trung
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO luôn coi quy trình là tài sản. Với tư duy
                            “Làm tốt ngay từ đầu” kèm với bộ quy trình khoa học
                            và đầy đủ chúng tôi tự tin khách hàng sẽ vô cùng hài
                            lòng về sản phẩm dịch vụ.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="num-topic">03</div>
                      <div
                        style={{
                          display: "block",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="topic-black">
                            Đội ngũ tận tâm, đầy nhiệt huyết
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="content-gray">
                            KHUTRO có sự khác biệt lớn đó là đội ngũ. Với đội
                            ngũ giàu kinh nghiệm, tận tâm và đầy nhiệt huyết,
                            khách hàng sẽ luôn cảm thấy thực sự thoải mái khi
                            làm việc cùng KHUTRO.
                          </div>
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
      <div>
        <div
          // style={{
          //   width: "100%",
          //   height: "550px",
          //   display: "flex",
          //   justifyContent: "center",
          //   backgroundColor: "#efefef",
          // }}
          className="partXII"
        >
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
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div
                    className="content-circle"
                    //  style={{ position: "relative", bottom: "10px" }}
                  >
                    Nhận xét của khách hàng
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
                  trong tương lai. Bởi thế, chúng tôi vô cùng coi trọng những
                  phản hồi từ phía khách hàng và nỗ lực làm tốt nhất từ những
                  phản hồi đó.
                </div>
              </div>
              <Row
                // style={{ paddingLeft: "50px" }}
                className="row-row"
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
                    img={Images.FACE_1}
                    content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                    name="Bác Phạm Thị Cúc"
                    func="Chủ trọ"
                  />
                </Col>
                <Col lg={8} md={24} className="col-row">
                  <Component8
                    img={Images.FACE_1}
                    content="Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu ích, phù hợp với mọi chủ trọ."
                    name="Bác Phạm Thị Cúc"
                    func="Chủ trọ"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="partXIII"
          // style={{
          //   width: "100%",
          //   height: "400px",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
        >
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
                <div className="topic">
                  <div className="circle-topic"></div>
                  <div
                    className="content-circle-XIII"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div
                  className="content2-circle-XIII"
                  // style={{
                  //   fontSize: "15px",
                  //   width: "80%",
                  //   height: "auto",
                  //   fontFamily: "PT Sans, sans-serif",
                  //   paddingTop: "5px",
                  // }}
                >
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row style={{ paddingTop: "20px" }}>
                <Col lg={8} md={24}>
                  <div className="box-last">
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
                  <div className="box-last">
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
                  <div className="box-last">
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
