import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapApi from "./../../../api/mapApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faMapMarkerAlt,
  faLandmark,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./../../../components/footer";
import { Select, Row, Col, Modal } from "antd";
import roomApi from "./../../../api/roomApi";
import branchesApi from "./../../../api/branchesApi";
import "./style.css";
const { Option } = Select;
function Map() {
  const [state, setstate] = useState([]);
  const [branchesList, setbranchesList] = useState([]);
  const [state1, setstate1] = useState([]);
  const [showPopup, togglePopup] = React.useState(false);
  const [viewport, setViewport] = useState({
    width: 870,
    height: 500,
    longitude: 106.68044,
    latitude: 10.76743,
    zoom: 8,
  });
  const [arr_maker, setarr_maker] = useState([]);
  const [roomList, setIsRoomList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [propRoom, setpropRoom] = useState([]);
  const [click, setClick] = useState([])
  // };
  const [arrloca, setarrloca] = useState([{ latitude: 0, longitude: 0 }]);
  const [newState, setnewState] = useState([{ latitude: 0, longitude: 0 }]);
  const fetchBranchesList = async () => {
    try {
      var arr = [];
      var arr_new_location = [];
      const response = await branchesApi.getAll();
      console.log("Fetch  branches successfully: ", response.data);
      setbranchesList(response.data);
      setIsRoomList(response.data);
      console.log("<<<", response.data.location);
      response.data.map((ro) => arr.push(ro.location.replace(/\s/g, "%20")));
      console.log("<<<<arr replace", arr);
      fetchGetMap(arr, response.data);
      setnewState(arr);
      setstate1(response.data);
    } catch (error) {
      console.log("Failed to fetch ROOM list: ", error);
    }
  };
  
  useEffect(() => {
    fetchBranchesList();
  }, []);
  const [popuploca, setpopuploca] = useState({
    latitude: 10.86195853994233,
    longitude: 106.74362380706191,
    
  });
  const fetchGetMap = async (arr,brList) => {
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
        setarrloca([...arr_compar]);
        var arrlats = [];
        console.log("dnf", brList);
        brList.map((ust) => {
          {
            const result = arr_compar.filter(
              (nc) => nc.position === ust.location
            );
            arrlats.push({ branchesList: ust, location: result });
          }
        });
        console.log("branchesList", arrlats);
        setClick(arrlats);
        // console.log("aaaa",branchesList)
        // var arr=[];
        // arr = arr_maker.filter((us) => us.longitude === popuploca.longitude);
        // console.log("<<<1234",arr)
        // var arr1=[]
        //  arr1 = roomList.filter((us1) => us1.position === arr[0].position);
        //  console.log("<<arr position related", arr1);
      });
    } catch (error) {
      console.log("Failed to map list: ", error);
    }
  };

  const showModal = (values) => {
    console.log("<<value click", values);
    var arr_point=[]
    
    // console.log("<<<",newState)
    var arr = [];
    var arr1 = [];
    arr = arr_maker.filter((us) => us.longitude === values.longitude);
    console.log("<<arr_modal", arr);
    arr1 = roomList.filter((us1) => us1.location === arr[0].position);
    console.log("<<arr position related", arr1);
    setpropRoom(arr1);
  };
  const show =(values)=>{
    console.log("value click",values)
    // console.log("value lat lng compared",arr_compar)
    var arr_last=[]
    arr_last=arr_maker.filter((us)=>us.position===values)
    console.log("<<<Arrr_last",arr_last)
    
  }
  return (
    <div>
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
              TÌM KIẾM CHI NHÁNH CỦA PHÒNG TRỌ
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
                {click.map((room) => (
                  <Col
                    lg={24}
                    className="col-product"
                    onClick={() => {
                      setViewport({
                        width: 870,
                        height: 500,
                        longitude: room.location[0].longitude,
                        latitude: room.location[0].latitude,
                        zoom: 16,
                      });
                      show(room.location);
                    }}
                    style={{cursor:"pointer"}}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Tên chi nhánh:
                    </div>
                    <div className="content-detailed-room">
                      {room.branchesList.description}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Vị trí chi nhánh:
                    </div>
                    <div className="content-detailed-room">
                      {room.branchesList.location}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                      Chủ trọ:
                    </div>
                    <div className="content-detailed-room">
                      {room.branchesList.userName}
                    </div>
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
                      onClick={() => {
                        setpopuploca({
                          latitude: arl.latitude,
                          longitude: arl.longitude,
                        });
                        togglePopup(true);
                        showModal(arl);
                      }}
                    />
                  </Marker>
                ))}
                {showPopup && (
                  <Popup
                    latitude={popuploca.latitude}
                    longitude={popuploca.longitude}
                    closeButton={true}
                    closeOnClick={true}
                    onClose={() => togglePopup(false)}
                    anchor="top-right"
                  >
                    <div>
                      {propRoom.map((us) => (
                        <div
                          style={{
                            paddingTop: "10px",
                            // paddingRight: "40px",
                            display: "block",
                            fontSize: "15px",
                            fontFamily: "NunitoSanRegular",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Tên chi nhánh:
                            </div>
                            <div
                              style={{
                                width: "100%",
                                textAlign: "left",
                                height: "auto",
                              }}
                            >
                              {us.description}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Vị trí:
                            </div>
                            <div style={{ width: "100%", height: "auto" }}>
                              {us.location}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Số lầu:
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                              }}
                            >
                              {us.numberOfStages}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Số phòng:
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                              }}
                            >
                              {us.numberOfRooms}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Thiết bị:
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                              }}
                            >
                              {us.facilities[0].name}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100",
                              height: "auto",
                              display: "block",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Chủ trọ:
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "auto",
                                textAlign: "left",
                              }}
                            >
                              {us.userName}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popup>
                )}
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
