import React, { useState, useEffect } from "react";
import Menu_client from "./../../components/menu_client";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapApi from "./../../api/mapApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faMapMarkerAlt,
  faLandmark,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./../../components/footer";
import { Select, Row, Col, Modal } from "antd";
import roomApi from "./../../api/roomApi";
import branchesApi from "./../../api/branchesApi";
import "./style.css";
const { Option } = Select;
function Map() {
  const [state, setstate] = useState([]);
  const [branchesList, setbranchesList] = useState([]);
  const [state1, setstate1] = useState([]);
  const [viewport, setViewport] = useState({
    width: 870,
    height: 500,
    longitude: 106.68044,
    latitude: 10.76743,
    zoom: 13,
  });
  const [arr_maker, setarr_maker] = useState([]);
  const [roomList, setIsRoomList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [propRoom, setpropRoom] = useState([]);
  // };
  const [arrloca, setarrloca] = useState([{ latitude: 0, longitude: 0 }]);
  const [newState, setnewState] = useState([{ latitude: 0, longitude: 0 }]);
  const fetchRoomList = async () => {
    try {
      var arr = [];
      var arr_new_location = [];
      const response = await roomApi.getAll();
      console.log("Fetch room successfully: ", response.data);
      setIsRoomList(response.data);
      console.log("<<<", response.data.position);
      response.data.map((ro) => arr.push(ro.position.replace(/\s/g, "%20")));
      // arr = roomList.map((us) => us.position.replace(/\s/g, "%20"));

      // console.log("<<<mangdiachi",arr);
      console.log("<<<<arr replace", arr);
      fetchGetMap(arr);
      setnewState(arr);
      setstate1(response.data);
    } catch (error) {
      console.log("Failed to fetch ROOM list: ", error);
    }
  };
  const fetchBranchesList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branches successfully: ", response.data);
      setbranchesList(response.data);
    } catch (error) {
      console.log("Failed to fetch branches list: ", error);
    }
  };
  useEffect(() => {
    fetchRoomList();
    fetchBranchesList();
  }, []);
  const fetchGetMap = async (arr) => {
    try {
      var arr_new = [];
      var object = {};
      var arr_compar = [];
      arr.map(async (locatr) => {
        const response = await mapApi.get(locatr);
        console.log("Get map successfully: ", response.data);
        const posiroom = {
          longitude: response.data.features[0].center[0],
          latitude: response.data.features[0].center[1],
        };
        console.log(">>posiroom", posiroom);

        arr_new.push(posiroom);
        object = {
          longitude: posiroom.longitude,
          latitude: posiroom.latitude,
          position: decodeURI(locatr),
        };
        arr_compar.push(object);
        console.log("arr after convert", arr_compar);
        setarr_maker([...arr_compar]);
        setarrloca([...arr_new]);
      });
    } catch (error) {
      console.log("Failed to map list: ", error);
    }
  };

  const showModal = (values) => {
    setIsModalVisible(true);
    console.log("<<value click", values);
    // console.log("<<<",newState)
    var arr = [];
    var arr1 = [];
    arr = arr_maker.filter((us) => us.longitude === values.longitude);
    console.log("<<arr_modal", arr[0].position);
    arr1 = roomList.filter((us1) => us1.position === arr[0].position);
    console.log("<<arr position related", arr1);
    setpropRoom(arr1);
    console.log("<<<state_proprooom", propRoom);
    // setnewState([...arrloca]);
    // console.log("<<<",newState)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onSelect = (value) => {
    console.log(`selected ${value}`);
    const arr_quan = [
      {
        address: "Quận 1",
        latitude: 10.762823813610641,
        longitude: 106.68514444282711,
      },
      {
        address: "Quận 2",
        latitude: 10.768717798652936,
        longitude: 106.80020290640755,
      },
      {
        address: "Quận 3",
        latitude: 10.781439722451006,
        longitude: 106.67717565519177,
      },
      {
        address: "Quận 4",
        latitude: 10.760548085818716,
        longitude: 106.7123582088122,
      },
      {
        address: "Quận 5",
        latitude: 10.755923832764305,
        longitude: 106.6554026802511,
      },
    ];

    console.log("<<<Searchquan", arr_quan);
    //  setValue(e.target.value);
    if (value === "Tất cả") {
      setIsRoomList(state1);
    } else {
      const arrfilter = arr_quan.filter((aq) => aq.address === value);
      console.log(">>Duy Mbapbe", arrfilter);
      if (arrfilter.length > 0) {
        setViewport({
          width: 870,
          height: 500,
          longitude: arrfilter[0].longitude,
          latitude: arrfilter[0].latitude,
          zoom: 12,
        });
      }
      const SearchRoombyBranch_ = async () => {
        try {
          const response = await roomApi.searchRoombyBranch(value);
          console.log("Fetch room by branch successfully: ", response.data);
          setIsRoomList(response.data);
        } catch (error) {
          console.log("Failed to fetch room by ranch: ", error);
        }
      };
      SearchRoombyBranch_();
    }
  };
  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {propRoom.map((us) => (
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          >
            <div className="title-modal1">Hình ảnh:</div>
            <div className="title-modal">
              <img className="image-ro2" src={`${us.images}`} />
            </div>
            <div className="title-modal1">Số phòng:</div>
            <div className="title-modal">{us.roomNo}</div>
            <div className="title-modal1">Chi nhánh:</div>
            <div className="title-modal">{us.branch.location}</div>
            <div className="title-modal1">Thiết bị:</div>
            <div className="title-modal">{us.facilities[0].name}</div>
            <div className="title-modal1">Vị trí:</div>
            <div className="title-modal">{us.position}</div>
            <div className="title-modal1">Loại phòng:</div>
            <div className="title-modal">{us.roomType}</div>
          </div>
        ))}
      </Modal>
      {/* <div>{arrloca[0].latitude}</div> */}
      <div>
        <Menu_client />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f2f6fa",
          paddingBottom: "30px",
        }}
      >
        <div className="sum-inner">
          <div className="title-map">
            HỆ THỐNG CÁC CHI NHÁNH CHÍNH THỨC CỦA KHU TRỌ
          </div>
          <div className="inner-black-box">
            <div className="first-black-box">
              <div className="content-col-black">
                TÌM KIẾM PHÒNG THEO CHI NHÁNH
              </div>
              <div
                style={{
                  width: "50%",
                  height: "auto",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Select allowClear onSelect={onSelect} className="select-only">
                  {branchesList.map((us) => (
                    <Option key={us.location} value={us.location}>
                      {us.location}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="second-block-black">KHU PHÒNG TRỌ</div>
          </div>
          <div className="inner-black-box">
            <div className="overflow-product">
              <div className="title-room">
                CÁC PHÒNG TRỌ
                <div style={{ paddingLeft: "10px" }}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              </div>
              <Row className="row-room12">
                {branchesList.map((room) => (
                  <Col lg={24} className="col-product">
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Tên chi nhánh:
                    </div>
                    <div className="content-detailed-room">
                      {room.description}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Vị trí chi nhánh:
                    </div>
                    <div className="content-detailed-room">{room.location}</div>
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Chủ trọ:
                    </div>
                    <div className="content-detailed-room">{room.userName}</div>
                    {/* <div className="content-detailed-room">
                        {room.facilities.map}
                      </div>
                      <div className="content-detailed-room">
                        {room.roomType}
                      </div> */}
                  </Col>
                ))}
              </Row>
            </div>
            <div style={{ width: "74%", height: "auto" }}>
              <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ"
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
              >
                {arrloca.map((arl) => (
                  <Marker
                    latitude={arl.latitude}
                    longitude={arl.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      color="#ff9326"
                      size="3x"
                      onClick={() => showModal(arl)}
                    />
                  </Marker>
                ))}
              </ReactMapGL>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "40vh" }}>
        <Footer />
      </div>
    </div>
  );
}
export default Map;
