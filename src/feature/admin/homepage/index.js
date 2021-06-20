import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
  faBed,
  faTags,
  faPlug,
  faCloud,
  faUsers,
  faUserTag,
  faPencilRuler,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSave,
  faMoneyBillAlt,
  faLightbulb,
  faBuilding,
  faHandshake,
  faBell,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import monthlyincomesApi from "../../../api/monthlyincomeApi";
import roomsApi from "../../../api/roomApi";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Row,
  Col,
} from "antd";
import branchesApi from "./../../../api/branchesApi";
import monthlypaymentsApi from "./../../../api/monthlypaymentApi";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

function Homepage_admin(props) {
  const [branchesList, setIsBranchesList] = useState([]);
  const [incomeChart, setIncomeChart] = useState([]);
  const [paymentChart, setPaymentChart] = useState([]);
  const [totalIncome, setTotalIncome] = useState([]);
  const [totalPayment, setTotalPayment] = useState([]);
  const [totalRoom, setTotalRoom] = useState([]);
  const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];
  const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];

  const fetchBranchList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branches successfully: ", response.data);
      setIsBranchesList(response.data);
    } catch (error) {
      console.log("Failed to fetch branches list: ", error);
    }
  };
  useEffect(() => {
    fetchBranchList();
  }, []);
  const fetchSearchIncomebyBranch = async (ic) => {
    try {
      const response  = await monthlyincomesApi.searchincomebybranch(ic);
      console.log("Fetch income by branch name successfully: ", response.data);
      let totalIncome = 0;
      const incomeArr = [];
      response.data.map((each) => {
        totalIncome += each.earn;
        incomeArr.push(each.earn);
      });
      setTotalIncome(totalIncome);
      setIncomeChart(incomeArr);
    } catch (error) {
      console.log("Failed to fetch list: ", error);
    }
  };
  const fetchSearchRoombyBranch = async (ic) => {
    try {
      const { data } = await roomsApi.searchRoombyBranch(ic);
      console.log("Fetch room by branch name successfully: ", data);
      setTotalRoom(data.length);
    } catch (error) {
      console.log("Failed to fetch list: ", error);
    }
  };
  const fetchSearchPaymentsbyBranch = async (ic) => {
    try {
      const { data } = await monthlypaymentsApi.searchpaymentsbybranch(ic);
      console.log("Fetch payments by branch name successfully: ", data);
      let totalPayment = 0;
      const paymentArr = [];
      data.map((each) => {
        totalPayment += each.cost;
        paymentArr.push(each.cost)
      });
      setTotalPayment(totalPayment);
      setPaymentChart(paymentArr)
    } catch (error) {
      console.log("Failed to fetch list: ", error);
    }
  };
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    fetchSearchIncomebyBranch(value);
    fetchSearchPaymentsbyBranch(value);
    fetchSearchRoombyBranch(value);
  }

  console.log("income", incomeChart);
  console.log("payment", paymentChart);

  return (
    <div>
      <div
        className="container-home"
        // style={{ width: "100%", height: "100vh", backgroundColor: "#efefef" }}
      >
        <div className="box12">
          {/* style={{ height: "120px" }} */}
          <Menu_AdminPage />
        </div>
        <div
          //  style={{ width: "100%", height: "auto", display: "flex" }}
          className="box-lower"
        >
          <div className="title">
            <FontAwesomeIcon icon={faTachometerAlt} color="#007c7e" size="1x" />
            <div className="adminaa">QUẢN TRỊ CHUNG</div>
          </div>
          <div
            style={{
              width: "80%",
              height: "auto",
              display: "flex",
            }}
          >
            <div
              className="box-lower2"
              //  style={{ width: "67%", float: "right",display:"flex",paddingLeft:"20px" }}
            ></div>
            <div
              className="box-select"
              //  style={{ float: "left", width: "30%" }}
            >
              <Select
                placeholder="Chọn chi nhánh"
                className="detailed-select"
                onChange={handleChange}
                allowClear
              >
                {branchesList.map((br) => (
                  <Select.Option key={br.location} value={br.location}>
                    {br.location}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          {/* <div style={{ paddingRight:"0px", width: "20%", float: "right" }}>
            <Select placeholder="Chọn chi nhánh" style={{ width: "300px" }} />
          </div> */}
        </div>
        <div>
          <Row
            className="rowfirst"
            // style={{ paddingTop: "20px" }}
          >
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
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    TỔNG THU
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#32c5d2",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#abe8ec"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {totalIncome}
                      </div>
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
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    TỔNG CHI
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#e7505a",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#f49494"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {totalPayment}
                      </div>
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
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    TỔNG PHÒNG
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#8e44ad",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon icon={faBed} color="white" size="2x" />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        PHÒNG
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {totalRoom}
                      </div>
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
                    backgroundColor: "#e9ecf3",
                    width: "80%",
                    height: "auto",
                    textAlign: "left",
                    display: "block",
                    backgroundColor: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "PT Sans, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    LỢI NHUẬN
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "31px",
                        backgroundColor: "#3598dc",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          color="#7ebbe4"
                          size="2x"
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: "10px", display: "block" }}>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        VND
                      </div>
                      <div
                        style={{
                          fontFamily: "PT Sans, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {totalIncome - totalPayment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col lg={18} md={24}>
              <div
                className="box-tableac"
                // style={{
                //   width: "100%",
                //   height: "auto",
                //   display: "flex",
                //   justifyContent: "center",
                // }}
              >
                <div
                  style={{
                    width: "92%",
                    height: "auto",
                    backgroundColor: "white",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      width: "100%",
                      height: "auto",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      size="2x"
                      color="#007c7e"
                    />
                    <div
                      style={{
                        fontSize: "20px",
                        color: "#007c7e",
                        fontFamily: "PT Sans, sans-serif",
                        paddingLeft: "10px",
                      }}
                    >
                      TRẠNG THÁI PHÒNG
                    </div>
                  </div>
                  <div className="chart-container">
                    <h1>INCOME AND PAYMENT OF CURRENT BRANCH</h1>
                    <Line
                      data={{
                        labels: ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        datasets: [
                          {
                            label: "Income",
                            data: incomeChart,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                          },{
                            label: "Payment",
                            data: paymentChart,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                          }
                        ]}
                      }
                      options={{
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                      }}
                    />{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={24}>
              <div className="box-link">
                <div
                  className="statusroom"
                  // style={{
                  //   width: "80%",
                  //   height: "auto",
                  //   backgroundColor: "white",
                  //   textAlign: "left",
                  //   paddingLeft: "10px",
                  //   paddingTop: "10px",
                  //   paddingBottom: "15px",
                  //   paddingRight: "5px",
                  // }}
                >
                  <div
                    style={{ display: "flex", borderBottom: "solid 1px black" }}
                  >
                    <div style={{ paddingTop: "5px" }}>
                      <FontAwesomeIcon
                        icon={faTags}
                        size="2x"
                        color="#007c7e"
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        fontSize: "20px",
                        color: "#007c7e",
                        fontWeight: "bold",
                        paddingTop: "5px",
                        paddingLeft: "5px",
                      }}
                    >
                      TRUY CẬP NHANH
                    </div>
                  </div>
                  <div>
                    <Row className="rowfast">
                      {/* style={{ paddingTop: "5px" }} */}
                      <Col lg={8} md={24} className="col1-fast">
                        <div
                          // style={{
                          //   width: "100%",
                          //   height: "auto",
                          //   display: "flex",
                          //   justifyContent: "center",
                          // }}
                          className="field-1"
                        >
                          <Link to="/branches" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faBuilding}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                CHI NHÁNH
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/rooms" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faBed}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                PHÒNG
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/contracts" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faHandshake}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                HỢP ĐỒNG
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    {/* //row2 */}
                    <Row className="rowfast">
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/electricity-waters" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faPlug}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                ĐIỆN - NƯỚC
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/facilities" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faCloud}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                THIẾT BỊ
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/users" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faUsers}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                KHÁCH THUÊ
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    {/* ROW 3 */}
                    <Row className="rowfast">
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/monthlyincomes" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faMoneyBillAlt}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                NGUỒN THU
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/monthlypayments" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faMoneyBillAlt}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                NGUỒN CHI
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/roles" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faUserTag}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                PHÂN QUYỀN
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    {/* Row 4 */}
                    <Row className="rowfast">
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/notifications" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faBell}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                THÔNG BÁO{" "}
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/rules" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faPencilRuler}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                NỘI QUY
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/reported-issues" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faFlag}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                BÁO CÁO
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <Row className="rowfast">
                      <Col lg={8} md={24} className="col1-fast">
                        <div className="field-1">
                          <Link to="/invoices" className="box-1">
                            <div
                              style={{
                                width: "90%",
                                height: "auto",
                                backgroundColor: "#007c7e",
                                textAlign: "center",
                                display: "block",
                              }}
                            >
                              <div style={{ paddingTop: "10px" }}>
                                <FontAwesomeIcon
                                  icon={faReceipt}
                                  size="2x"
                                  color="#efefef"
                                />
                              </div>

                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "12px",
                                  width: "100%",
                                  height: "auto",
                                  paddingTop: "5px",
                                  color: "#efefef",
                                }}
                              >
                                HÓA ĐƠN
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{
            color: "#33404c",
            width: "100%",
            height: "auto",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "12px",
            marginTop: "40px",
            textAlign: "left",
            paddingLeft: "50px",
            paddingBottom: "40px",
          }}
        >
          Thesis - Inn Management
          <Link
            to="/"
            style={{
              width: "100%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "12px",
              color: "#33404c",
              paddingLeft: "10px",
            }}
          ></Link>
        </div>
      </div>
    </div>
  );
}
export default Homepage_admin;
