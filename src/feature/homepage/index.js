import React from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
import { Images } from "./../../config/image";
import MenuFirst from "./../../components/menuFirst";
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
import {Link} from "react-router-dom";
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
        <MenuFirst />
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
                PH???N M???M QU???N L??
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
                NH?? TR??? C??N H??? D???CH V???
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
                Thi???t k??? ????n gi???n, d??? d??ng s??? d???ng v?? ti???t ki???m t???i ??a chi ph??
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <img src={Images.ICON} className="img-ele3" />
              </div>
              <div className="btnfree">
                <Link to="/login">
                  <button className="button-free">
                    D??NG TH??? MI???N PH?? <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </Link>
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
                  B???n ??ang kinh doanh Nh?? tr???, C??n h??? d???ch v????
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
                Cho thu?? nh?? tr???, c??n h??? l?? lo???i h??nh kinh doanh kh?? h???p d???n v??
                c?? ti???m n??ng l???n, nhu c???u cao, doanh thu ???n ?????nh v?? an to??n. Tuy
                nhi??n, l??nh v???c kinh doanh n??y c??ng c?? kh?? nhi???u kh?? kh??n khi???n
                kh??ng ??t ch??? tr???, ch??? c??n h??? pha??i ??????i m????t v????i nhi???u ru??i ro v???
                t??i ch??nh c??ng nh?? hi???u qu??? qu???n l??.
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
                    topic="Th???i gian"
                    content="Ba??n t????n nhi????u th????i gian cho vi????c gia??m sa??t, qua??n ly?? c?? s????, kha??ch thu??, chi phi??."
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
                    topic="Chi ph??"
                    content="B???n ??au ?????u v?? c?? qu?? nhi???u chi ph?? ph??t sinh trong qu?? tr??nh kinh doanh."
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
                    topic="C??ng t??c qu???n l??"
                    content="Ba??n ??au ?????u khi su???t ng??y ph???i ??i x??? l?? s??? c???, h???p ?????ng, c??c th??? t???c ph??p l??, h??a ????n."
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
                    topic="Ru??i ro Qua??n ly??"
                    content="Ti??nh tra??ng kho?? kh??n trong vi????c qua??n ly?? ca??c khoa??n ho??a ????n, co?? th???? th???t tho??t ti???n b???c trong vi???c t??nh to??n."
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
                    topic="Kh??ch thu??"
                    content="Ba??n c????n co?? m????t quy tri??nh qua??n ly?? kha??ch thu?? chuy??n nghi????p, hi????u qua?? ?????? ta??o m????i quan h???? l??u da??i v????i ho??."
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
                    topic="Hi???u qu??? kinh doanh"
                    content="C??ng vi????c qua??n ly?? ??a??m ba??o ti??nh chi??nh xa??c, hi????u qua?? ?????? ??a??m ba??o quy????n l????i ca?? hai b??n va?? t????i ??u ho??a ????????c doanh thu."
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
                  88% ch??? tr???, c??n h??? r??i v??o t??nh tr???ng
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: " PT Sans, sans-serif",
                fontSize: "15px",
              }}
            >
              C??ng vi???c qu???n l?? nh?? tr???, c??n h??? chi???m t??? l??? kh??ng h??? nh??? trong
              hi???u qu??? c???a c??c chu???i nh?? tr???, c??n h???. Nh??ng ????? qu???n l?? hi???u qu???
              kh??ng ph???i chuy???n ????n gi???n.
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
                    topic="C?? s??? v???t ch???t"
                    content="V????i quy m?? ca??c to??a nha??, s???? pho??ng l????n ba??n c????n qua?? nhi????u th????i gian c??ng s????c ?????? qua??n ly?? l??u tr???? cu??ng nh?? ti??m ki????m th??ng tin d???? li????u."
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
                    topic="H???p ?????ng"
                    content="Quy tri??nh la??m vi????c r????i ra??c v????i t????ng kha??ch thu??, ??????c bi????t khi co?? thay ??????i v???? th??ng tin kha?? ph????c ta??p va?? m????t th????i gian trong vi???c qu???n l??."
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
                    topic="H??a ????n"
                    content="Vi????c tri????n khai in, xu????t va?? g????i thanh toa??n ho??a ????n thanh toa??n m????t nhi????u quy?? th????i gian ti??nh toa??n, x???? ly?? va?? truy thu, sai s??t v?? th???t tho??t."
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
                    topic="Theo d??i b??o c??o"
                    content="Ch??a theo do??i m????t ca??ch t????ng quan v???? ti??nh hi??nh kinh doanh, th????ng k?? thu chi va?? li??ch s???? kha??ch thu??, h????p ??????ng, ho??a ????n."
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
                  Ph???n m???m Qu???n l?? Nh?? Tr??? - T???T NH???T HI???N NAY
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
                Gi???i quy???t 90% lo l???ng c???a ch??? tr??? trong vi???c qu???n l?? v?? v???n
                h??nh nh?? tr??? v???i chi ph?? ti???t ki???m t???i ??a. C???t gi???m 50% th???i
                gian t??nh to??n thu chi v???i giao di???n ????n gi???n nh???t. ?????i ng?? t??
                v???n kh??ch h??ng lu??n s???n s??ng ????? h??? tr??? t???n t??nh 24/7, ?????ng h??nh
                c??ng vi???c qu???n l?? nh?? tr??? c???a b???n.
              </div>
            </div>
            <Row className="row-com-3">
              <Col lg={6} md={24}>
                <Component3
                  images={Images.USERS}
                  number="4356 +"
                  content="Ch??? tr??? s??? d???ng"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.REVIEW}
                  number="90% +"
                  content="Ch??? tr??? h??i l??ng"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.ADS}
                  number="15 +"
                  content="????ng k?? m???i m???i ng??y"
                />
              </Col>
              <Col lg={6} md={24}>
                <Component3
                  images={Images.OFFICE}
                  number="56 +"
                  content="T???nh th??nh c?? m???t"
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
                gi???i ph??p
              </div>
              <strong
                className="content-rowThird"
                //  style={{ paddingLeft: "5px", fontSize: "25px" }}
              >
                Ph???n M???m Qu???n L?? Nh?? Tr???
              </strong>
              <div
                className="content-rowFourth"
                // style={{ fontSize: "25px" }}
              >
                , ????ng k?? d??ng th??? ngay ???
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button className="btn-signup-2">D??NG TH??? MI???N PH??</button>
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
                  <div className="why-room">
                    C??c l???i ??ch khi l???a ch???n nh?? tr??? n??y
                  </div>
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
                  Giao di???n ????n gi???n, th??ng minh, gi??p qu???n l?? nh?? tr??? m???i l??c
                  m???i n??i v???i d??? li???u ???????c b???o m???t an to??n tuy???t ?????i, ki????m soa??t
                  doanh s???? theo th????i gian th????c va?? ti???t ki???m t???i ??a chi ph?? v???n
                  h??nh.
                </div>
              </div>
              <Row
                className="row-partVI"
                // style={{ paddingLeft: "30px", paddingTop: "20px" }}
              >
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BAR_CHART}
                    topic="Qu???n l?? m???i l??c, m???i n??i"
                    content="Ch??? tr??? c?? th??? qu???n l?? nh?? tr??? m???i l??c m???i n??i, d??? li???u ???????c qu???n l?? t???p trung, b???o m???t, v?? an to??n tuy???t ?????i."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.ANALYSIS}
                    topic="????n gi???n & D??? d??ng"
                    content="Giao di???n ????n gi???n, th??n thi???n, th??ng minh gi??p ch??? tr??? tri???n khai qu???n l?? nh?? tr??? th???t d??? d??ng v?? nhanh ch??ng."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.BUSINESS_PLAN}
                    topic="Ph?? h???p nhi???u m?? h??nh"
                    content="Ch??ng t??i nghi??n c???u thi???t k??? ph???n m???m ph?? h???p v???i nhi???u m?? h??nh nh?? tr???, chung c?? mini, c??n h??? d???ch v???."
                  />
                </Col>
                <Col lg={6} md={24} style={{ paddingLeft: "10px" }}>
                  <Component4
                    img={Images.PIGGY}
                    topic="Ti???t ki???m chi ph?? t???i ??a"
                    content="Ch??? v???i 4.000 ?????ng/ph??ng, ch??? tr??? ???? c?? th??? ??p d???ng c??ng ngh??? ti??n ti???n v??o qu???n l?? nh?? tr???, c??n h??? c???a m??nh."
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
                    Vi???c thi???t k???{" "}
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
                  C??ng v???i c??c chuy??n gia IT d??y kinh nghi???m, ch??ng t??i nghi??n
                  c???u thi???t k??? ph???n m???m qu???n l?? nh?? tr??? t???i ??u ph?? h???p v???i nhi???u
                  m?? h??nh qu???n l?? kh??c nhau, v???i nhi???u t??nh n??ng n???i b???t.
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
                    topic1="Qu???n l?? kh??ch thu??"
                    content1="Ch???c n??ng qu???n l?? th??ng tin kh??ch thu??, g???m c??c th??ng tin c?? nh??n,th??ng tin li??n h???."
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
                    topic1="Qu???n l?? h???p ?????ng"
                    content1="Ch???c n??ng qu???n l?? th??ng tin h???p ?????ng thu?? nh??, g???m ph??ng, kh??ch thu??, d???ch v???, ti???n ?????t c???c."
                  />
                </Col>
                <Col lg={8} md={24}>
                  <Component5
                    icon={
                      <FontAwesomeIcon icon={faRss} size="2x" color="#eb2f5b" />
                    }
                    topic1="Qu???n l?? d???ch v???"
                    content1="Ch???c n??ng qu???n l?? th??ng tin h???p ?????ng thu?? nh??, g???m ph??ng, kh??ch thu??, d???ch v???, ti???n ?????t c???c ???"
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
                    topic1="Qu???n l?? h??a ????n"
                    content1="Ch???c n??ng qu???n l?? h??a ????n thu ti???n h???ng th??ng, g???m c??c chi ph?? nh?? ??i???n, n?????c, d???ch v???."
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
                    topic1="Xu???t, in H.?????ng, h??a ????n"
                    content1="T???? ??????ng bi??n soa??n in xu???t h????p ??????ng, h??a ????n h??ng th??ng m????t ca??ch nhanh cho??ng va?? ti????n l????i."
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
                    topic1="Qu???n l?? s??? ??i???n/n?????c"
                    content1="Ch???c n??ng qu???n l?? s??? ??i???n n?????c c???a t???ng ph??ng theo t???ng th??ng, t??? ?????ng t??nh to??n ti???n ph???i tr???."
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
                    topic1="Qu???n l?? phi???u chi"
                    content1="Ch???c n??ng qu???n l?? c??c kho???n chi c???a ph???n m???m qu???n l?? nh?? tr??? t???ng h???p b??o c??o thu chi c???a to??n b??? khu tr???, nh?? tr???."
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
                    topic1="Qu???n l?? ph??ng, thi???t b???"
                    content1="Ch???c n??ng qu???n l?? th??ng tin ph??ng theo t???ng khu, ti???n ph??ng, thi???t b??? trong ph??ng c???a ph???n m???m qu???n l?? nh?? tr???."
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
                    topic1="Qu???n l?? c???u h??nh, b??o c??o"
                    content1="Ch???c n??ng c???u h??nh c??c th??ng tin li??n quan t???i nh?? tr???, c??n h???, t???ng h???p c??c b??o c??o theo c??c ti??u ch?? kh??c nhau."
                  />
                </Col>
              </Row>
            </div>
            <div className="option-other">V?? nhi???u t??nh n??ng kh??c</div>
            <div className="option-2">
              ???????c d??ng th??? mi???n ph??, h?????ng d???n nh?? th???t, t???i sao kh??ng?
            </div>
            <div className="abcd">
              <button className="btn-option-2"> D??NG TH??? MI???N PH??</button>
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
                    C??c t??nh n??ng t???i ??u{" "}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="content2-partVIII">
                  C??ng v???i c??c chuy??n gia IT d??y kinh nghi???m, ch??ng t??i nghi??n
                  c???u thi???t k??? ph???n m???m qu???n l?? nh?? tr??? t???i ??u ph?? h???p v???i nhi???u
                  m?? h??nh qu???n l?? kh??c nhau, v???i nhi???u t??nh n??ng n???i b???t.
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
                    topic1="D??ng th??? mi???n ph??"
                    content1="D??ng th??? mi???n ph??, h?????ng d???n nh?? th???t c??ng chuy??n vi??n t???n t??m. B???o h??nh tr???n ?????i, h??? tr??? li??n t???c 24/7."
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
                    topic1="Xu???t, in H.?????ng, h??a ????n"
                    content1="T???? ??????ng bi??n soa??n in xu???t h????p ??????ng, h??a ????n h??ng th??ng g???i cho kh??ch thu?? m????t ca??ch nhanh cho??ng va?? ti????n l????i."
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
                    topic1="H??? tr??? ??a n???n t???ng"
                    content1="H??? tr??? ??A N???N T???NG: M??y t??nh b??n, m??y t??nh b???ng, v?? thi???t b??? di ?????ng. V???i s??? linh ho???t tr??n t???ng n???n t???ng."
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
                  H??y ????? ch??ng t??i ?????ng h??nh c??ng b???n
                </div>
              </div>
              <div className="content-atlast">
                <div
                  className="content-partVI-atlast"
                  // style={{ fontSize: "15px", paddingRight: "10px" }}
                >
                  T???i KHUTRO , ch??ng t??i lu??n c??? g???ng t???o ra m??i tr?????ng l??m vi???c
                  chuy??n nghi???p, s??ng t???o v?? k??? lu???t cao. C??ng v???i ?????i ng?? k??? s??
                  tr??? gi??u nhi???t huy???t v?? c??c nh??n vi??n t?? v???n kh??ch h??ng lu??n
                  s???n s??ng h??? tr??? b???n 24/7.
                </div>
                {/* <strong style={{ fontSize: "15px" }}>KHUTRO</strong> */}
                {/* <div style={{ paddingLeft: "10px", fontSize: "15px" }}> */}
                {/* , ch??ng t??i lu??n c??? g???ng t???o ra m??i tr?????ng l??m vi???c chuy??n
                  nghi???p, s??ng t???o v?? k??? lu???t cao. C??ng v???i ?????i ng?? k??? s?? tr???
                  gi??u nhi???t huy???t v?? c??c nh??n vi??n t?? v???n kh??ch h??ng lu??n s???n
                  s??ng h??? tr??? b???n 24/7. */}
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
                    Quy tr??nh mua Ph???n m???m
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="content2-partIX"
                  // style={{ fontSize: "15px" }}
                >
                  D?????i ????y l?? c??c b?????c ????? ti???n h??nh mua , KHUTRO ??? Ph???n m???m Qu???n
                  l?? Nh?? tr???.
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
                      N??t ?????c tr??ng
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <div style={{ fontSize: "15px" }}>
                    Kinh doanh hi???u qu??? ph???i qu???n l?? t???t nh??ng kh??ng ph???i ch???
                    tr???, c??n h??? n??o c??ng bi???t c??ch l??m, c??ng nh?? c?? ????? th???i gian
                    Ph???n m???m Qu???n l?? Nh?? tr???, C??n h??? ????? l??m. V???i KHUTRO, b???n c??
                    th???
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
                    Nh???ng ??i???u kh??c bi???t
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
                  KHUTRO lu??n t??m ni???m kh??c bi???t t???o n??n th??nh c??ng. Ch??nh v??
                  th???, ch??ng t??i lu??n n??? l???c ????? t???o n??n nh???ng gi?? tr??? kh??c bi???t
                  gi??p kh??ch h??ng ??i ?????n th??nh c??ng. Tuy c??n ??t kinh nghi???m
                  nh??ng KHUTRO ???? d???n ch???ng minh ???????c v??? th??? c???a m??nh trong l??ng
                  kh??ch h??ng.
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
                            Th??nh c??ng c???a kh??ch h??ng l?? th?????c ??o
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
                            KHUTRO coi tr???ng kh??ch h??ng v?? lu??n l???y kh??ch h??ng
                            l??m trung t??m, ?????t l???i ??ch v?? mong mu???n c???a kh??ch
                            h??ng l??n h??ng ?????u.
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
                            L??m t???t ngay t??? ?????u v?? lu??n t???p trung
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
                            KHUTRO lu??n coi quy tr??nh l?? t??i s???n. V???i t?? duy
                            ???L??m t???t ngay t??? ?????u??? k??m v???i b??? quy tr??nh khoa h???c
                            v?? ?????y ????? ch??ng t??i t??? tin kh??ch h??ng s??? v?? c??ng h??i
                            l??ng v??? s???n ph???m d???ch v???.
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
                            ?????i ng?? t???n t??m, ?????y nhi???t huy???t
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
                            KHUTRO c?? s??? kh??c bi???t l???n ???? l?? ?????i ng??. V???i ?????i
                            ng?? gi??u kinh nghi???m, t???n t??m v?? ?????y nhi???t huy???t,
                            kh??ch h??ng s??? lu??n c???m th???y th???c s??? tho???i m??i khi
                            l??m vi???c c??ng KHUTRO.
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
                    Nh???n x??t c???a kh??ch h??ng
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
                  S??? h??i l??ng c???a kh??ch h??ng l?? ?????ng l???c ????? ch??ng t??i ho??n thi???n
                  ph???n m???m, ?????ng th???i m??? ra c?? h???i c?? th??m nhi???u kh??ch h??ng m???i
                  trong t????ng lai. B???i th???, ch??ng t??i v?? c??ng coi tr???ng nh???ng
                  ph???n h???i t??? ph??a kh??ch h??ng v?? n??? l???c l??m t???t nh???t t??? nh???ng
                  ph???n h???i ????.
                </div>
              </div>
              <Row
                // style={{ paddingLeft: "50px" }}
                className="row-row"
              >
                <Col lg={8} md={24} className="col-row">
                  <Component8
                    img={Images.FACE_1}
                    content="Giao di???n th??n thi???n v?? r???t d??? s??? d???ng, nhi???u t??nh n??ng h???u ??ch, ph?? h???p v???i m???i ch??? tr???."
                    name="B??c Ph???m Th??? C??c"
                    func="Ch??? tr???"
                  />
                </Col>
                <Col lg={8} md={24} className="col-row">
                  <Component8
                    img={Images.FACE_1}
                    content="Giao di???n th??n thi???n v?? r???t d??? s??? d???ng, nhi???u t??nh n??ng h???u ??ch, ph?? h???p v???i m???i ch??? tr???."
                    name="B??c Ph???m Th??? C??c"
                    func="Ch??? tr???"
                  />
                </Col>
                <Col lg={8} md={24} className="col-row">
                  <Component8
                    img={Images.FACE_1}
                    content="Giao di???n th??n thi???n v?? r???t d??? s??? d???ng, nhi???u t??nh n??ng h???u ??ch, ph?? h???p v???i m???i ch??? tr???."
                    name="B??c Ph???m Th??? C??c"
                    func="Ch??? tr???"
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
                    ?????ng h??nh 24/7 c??ng c??ng vi???c qu???n l?? nh?? tr???, c??n h??? c???a
                    b???n
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
                  Ch??ng t??i lu??n c??? g???ng t???o ra m??i tr?????ng l??m vi???c chuy??n
                  nghi???p, s??ng t???o v?? k??? lu???t cao. ?????i ng?? k??? s?? tr??? gi??u nhi???t
                  huy???t v?? c??c nh??n vi??n t?? v???n kh??ch h??ng lu??n s???n s??ng h??? tr???
                  b???n su???t 24/7, ph???n m???m qu???n l?? nh?? tr??? lu??n ???????c ph??t tri???n
                  h??ng ng??y.
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
                      <div className="topic-com-4">H??? tr???</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4">
                        ?????i ng?? h??? tr??? chuy??n nghi???p, nhi???t t??nh, s??ng t???o lu??n
                        s???n s??ng ph???c v??? kh??ch h??ng 24/7.
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
                        T???ng ????i t?? v???n mi???n ph?? d??nh cho kh??ch h??ng. H??y g???i
                        cho ch??ng t??i ngay khi l??c n??o b???n c???n.
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
                         nduy9744@gmail.com
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
                        M???i y??u c???u c???a kh??ch h??ng g???i v??? email, ?????u ???????c gi???i
                        quy???t v?? tr??? l???i m???t c??ch nhanh nh???t.
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
