import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import {
  Input,
  Button,
  Card,
  Popover,
  Form,
  Row,
  Col,
  Radio,
  Select,
  Space,
} from "antd";
import Room_tag from "./../../../components/room_tag";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import roomApi from "./../../../api/roomApi";
import Footer from "./../../../components/footer";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
const { Search } = Input;
function Room_client() {
  const [value, setValue] = React.useState(1);
  const [fakedataa, setfakedata] = useState([])
  const [roomList, setIsRoomList] = useState([]);
  useEffect(() => {
    const fetchRoomList = async () => {
      try {
        const response = await roomApi.getAll();
        console.log("Fetch room successfully: ", response.data);
        setIsRoomList(response.data);
        setstate(response.data);
        setfakedata(response.data);
      } catch (error) {
        console.log("Failed to fetch ROOM list: ", error);
      }
    };
    fetchRoomList();
  }, []);
  const [state, setstate] = useState([]);
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === "") {
      setIsRoomList(state);
    } else {
      const SearchRoombyBranch = async () => {
        try {
          const response = await roomApi.searchRoombyBranch(value);
          console.log("Fetch room by branch successfully: ", response.data);
          setIsRoomList(response.data);
        } catch (error) {
          console.log("Failed to fetch room by ranch: ", error);
        }
      };
      SearchRoombyBranch();
    }
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    if (e.target.value === "Tất cả") {
      setIsRoomList(state);
    } else {
      const SearchRoombyBranch_ = async () => {
        try {
          const response = await roomApi.searchRoombyBranch(e.target.value);
          console.log("Fetch room by branch successfully: ", response.data);
          setIsRoomList(response.data);
        } catch (error) {
          console.log("Failed to fetch room by ranch: ", error);
        }
      };
      SearchRoombyBranch_();
    }
  };
  //  const getAllRoomsByBranches = (room) => {
  //    console.log("branchid", location.state.branches);

  //    const newarr = room.filter(
  //      (rs) =>
  //        rs.roomType === location.state.branches &&
    
  //    );
  //    let arr = [];

  //    setstatedetailed(newarr);
  //    console.log("abcd", newarr);
  //  };

  const onChange_1=(e)=>{
    console.log("radio checked",e.target.value);
     if (e.target.value === "Tất cả 2") {
       setIsRoomList(state);
     }
     else{
        const newarr = fakedataa.filter((rs) => rs.roomType === e.target.value);
        setIsRoomList(newarr);
        console.log("<<a", newarr);

     }
   
  }
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f2f6fa",
        }}
      >
        <div style={{ height: "100px" }}>
          <Menu_client />
        </div>
        <div>
          <Row>
            <Col
              lg={2}
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Col>
            <Col
              lg={20}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Row>
                <Col
                  lg={16}
                  style={{
                    width: "100%",
                    height: "auto",
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
                    <div>
                      <div style={{ paddingBottom: "20px" }}>
                        <Search
                          placeholder="Tìm kiếm phòng theo chi nhánh"
                          allowClear
                          onSearch={onSearch_1}
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "flex",
                          justifyContent: "space-between",
                          borderBottom: "1px solid #59d49a",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            color: "#59d49a",
                            fontFamily: "PT Sans, sans-serif",
                            fontSize: "20px",
                            textAlign: "left",
                            fontWeight: "bold",
                          }}
                        >
                          NHÀ TRỌ
                        </div>
                      </div>
                    </div>
                    <div>
                      <Row style={{ paddingTop: "10px" }}>
                        {roomList.map((roomId) => (
                          <Col
                            lg={8}
                            md={24}
                            style={{
                              width: "100%",
                              height: "auto",
                              paddingLeft: "15px",
                              paddingBottom: "35px",
                            }}
                          >
                            <Room_tag
                              id={roomId.id}
                              roomNo={roomId.roomNo}
                              position={roomId.position}
                              facilities={
                                roomId.facilities.map((us) => us.name) + " "
                              }
                              images={roomId.images}
                              branches={roomId.branch.location}
                              branchId={roomId.branchId}
                              roomType={roomId.roomType}
                              price1={roomId.priceByFirstHour}
                              price2={roomId.priceByNextHour}
                              price3={roomId.priceByDay}
                              price4={roomId.priceByWeek}
                              price5={roomId.priceByMonth}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={8}
                  style={{
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "yellow",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "auto",
                      //   backgroundColor: "purple",
                      display: "block",
                      textAlign: "left",
                      paddingTop: "70px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Tìm kiếm theo chi nhánh
                    </div>
                    <Radio.Group
                      name="abc"
                      onChange={onChange}
                      value={value}
                      style={{
                        display: "block",
                        paddingTop: "10px",
                        fontSize: "50px",
                      }}
                      size="medium"
                    >
                      <Space direction="vertical">
                        <Radio value={"Quận 1"}>Quận 1</Radio>
                        <Radio value={"Quận 2"}>Quận 2</Radio>
                        <Radio value={"Tất cả"}>Tất cả</Radio>
                      </Space>
                    </Radio.Group>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        fontSize: "30px",
                        fontWeight: "bold",
                        paddingTop: "15px",
                      }}
                    >
                      Tìm kiếm theo loại phòng
                    </div>
                    <Radio.Group
                      name="abc2"
                      value={value}
                      style={{
                        display: "block",
                        paddingTop: "10px",
                        fontSize: "50px",
                      }}
                      size="medium"
                      onChange={onChange_1}
                    >
                      <Space direction="vertical">
                        <Radio value={"ROOM_BY_WEEK"}>ROOM_BY_WEEK</Radio>
                        <Radio value={"ROOM_BY_HOUR"}>ROOM_BY_HOUR</Radio>
                         <Radio value={"ROOM_BY_DAY"}>ROOM_BY_DAY</Radio>
                        <Radio value={"ROOM_BY_MONTH"}>ROOM_BY_MONTH</Radio>
                        <Radio value={"Tất cả 2"}>Tất cả</Radio>
                      </Space>
                    </Radio.Group>
                    <div>
                      <img
                        src={Images.IMG_ROOM_1}
                        style={{
                          height: "auto",
                          width: "100%",
                          paddingTop: "20px",
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              lg={2}
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Col>
          </Row>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Room_client;
