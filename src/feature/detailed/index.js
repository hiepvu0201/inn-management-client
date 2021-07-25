import React, { useState, useEffect } from "react";
import { Row, Col, Input, Form, Carousel } from "antd";
import Menu_First from "../../components/menuFirst";
import Footer from "../../components/footer";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Room_tag from "../../components/room_tag";
import roomApi from "../../api/roomApi";
import branchesApi from "../../api/branchesApi";
import Selectbranch from "../../components/selectbranch";
import usersApi from "../../api/usersApi";
import './style.css'
function Room_inner() {
  //   let location = useLocation();
  let location = useLocation();
  const [roomList, setIsRoomList] = useState([]);
  const [branchesList, setIsBranchesList] = useState([]);
  let arrpush = {};

  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch room successfully: ", response.data);
      setIsRoomList(response.data);
      getAllRoomsByBranches(response.data);
    } catch (error) {
      console.log("Failed to fetch ROOM list: ", error);
    }
  };

  const [statedetailed, setstatedetailed] = useState([]);
  const getAllRoomsByBranches = (room) => {
    console.log("branchid", location.state.branchId);

    const newarr = room.filter(
      (rs) =>
        rs.branchId === location.state.branchId &&
        rs.roomNo !== location.state.roomNo
    );
    let arr = [];

    setstatedetailed(newarr);
    console.log("abcd", newarr);
  };

  useEffect(() => {
    fetchRoomList();
    fetchBranchById();
  }, []);
  const [state, setstate] = useState([]);
  const [state_us, setstate_us] = useState([]);
  const fetchBranchById = async () => {
    try {
      console.log("abcdd", location.state.branchId);
      const response = await branchesApi.getbyid(location.state.branchId);
      console.log("Fetch branch by id successfully: ", response.data);
      setstate(response.data);
      setstate_us(response.data);
      getalluserbyusername(response.data.userName);
      // setstate(response.data.userName)
      // setstate(response.data)
    } catch (error) {
      console.log("Failed to fetch branch id list: ", error);
    }
  };
  const getalluserbyusername = async (us) => {
    try {
      console.log("abcddD", state_us.userName);
      const response = await usersApi.getalluserbyusername(us);
      console.log("Fetch user by username successfully: ", response.data);
      setstate_us(response.data);
    } catch (error) {
      console.log("Failed to fetch user by username list: ", error);
    }
  };
  return (
    <div style={{ width: "100%", height: "auto", backgroundColor: "#f2f6fa" }}>
      <div style={{ height: "100px" }}>
        <Menu_First />
      </div>
      <div>
        <div className="detailed-title">
          Chi tiết phòng {location.state.roomNo}
        </div>
        <Row style={{ height: "auto" }}>
          <Col lg={18} md={24} className="col-detailed-title">
            <div className="css-detailed">
              <Row>
                <Col lg={12} md={24} className="col-detailed-img">
                  <img
                    src={location.state.images}
                    // style={{ height: "auto", width: "100%" }}?
                    className="img-detailed-ro"
                  />
                </Col>
                <Col
                  lg={12}
                  md={24}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "auto",
                      display: "block",
                    }}
                  >
                    <div className="title-info-room">Đặc điểm nổi bật</div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">Chi nhánh:</div>
                      <div className="input-detailed-room">
                        {location.state.branches}
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">Số phòng:</div>
                      <div className="input-detailed-room">
                        {location.state.roomNo}
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">Số lầu:</div>
                      <div className="input-detailed-room">
                        {location.state.floors}
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">Thiết bị:</div>
                      <div className="input-detailed-room">
                        {location.state.facilities}
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">Loại phòng:</div>
                      <div className="input-detailed-room">
                        {location.state.roomType}
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">
                        Giá phòng theo giờ đầu:
                      </div>
                      <div className="input-detailed-room">
                        {location.state.price1}đ
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">
                        Giá phòng theo giờ thứ hai:
                      </div>
                      <div className="input-detailed-room">
                        {location.state.price2}đ
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">
                        Giá phòng theo ngày:
                      </div>
                      <div className="input-detailed-room">
                        {location.state.price3}đ
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">
                        Giá phòng theo tuần:
                      </div>
                      <div className="input-detailed-room">
                        {location.state.price4}đ
                      </div>
                    </div>
                    <div className="padding-rol">
                      <div className="icon-ticker-green">
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#63d417"
                          size="1x"
                        />
                      </div>
                      <div className="title-detailed-room">
                        Giá phòng theo tháng:
                      </div>
                      <div className="input-detailed-room">
                        {location.state.price5}đ
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "auto" }}>
          <Col lg={18} md={24} className="onleft-col">
            <div className="css-detailed-row-second">
              <div
                style={{
                  width: "100%",
                  fontFamily: "PT Sans, sans-serif",
                  fontSize: "20px",
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                  marginBottom: "20px",
                  paddingTop: "10px",
                }}
              >
                LIÊN LẠC VỚI CHỦ TRỌ
              </div>
              <div>
                <div
                  style={{ width: "100%", display: "block", height: "auto" }}
                >
                  <div
                    style={{ width: "100%", height: "auto", display: "flex" }}
                  >
                    <div className="title-admin">Họ và tên:</div>
                    <div className="content-admin">{state_us.fullName}</div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      paddingTop: "15px",
                    }}
                  >
                    <div className="title-admin">Email:</div>
                    <div className="content-admin">{state_us.email}</div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      paddingTop: "15px",
                    }}
                  >
                    <div className="title-admin">Số điện thoại:</div>
                    <div className="content-admin">{state_us.phoneNo}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div
          style={{
            width: "100%",
            height: "auto",
            fontSize: "30px",
            textAlign: "left",
            paddingLeft: "5vw",
            paddingTop: "20px",
          }}
        >
          Tin đăng tương tự
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "95%", height: "auto" }}>
            <Row
              // style={{
              //   paddingLeft: "10px",
              //   display: "flex",
              //   width: "100%",
              //   paddingTop: "10px",
              // }}
              className="row-detailed-third"
            >
              {statedetailed.map((detailid) => (
                <Col
                  lg={8}
                  md={24}
                  key={detailid.id}
                  span={6}
                  style={{ paddingTop: "55px" }}
                >
                  {" "}
                  <Selectbranch
                    id={detailid.id}
                    branches={detailid.branch.location}
                    facilities={detailid.facilities.map((us) => us.name) + " "}
                    roomNo={detailid.roomNo}
                    floors={detailid.floor.numberOfFloors}
                    roomType={detailid.roomType}
                    images={detailid.images}
                    price1={detailid.priceByFirstHour}
                    price2={detailid.priceByNextHour}
                    price3={detailid.priceByDay}
                    price4={detailid.priceByWeek}
                    price5={detailid.priceByMonth}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default Room_inner;
