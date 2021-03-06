import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import Footer from "./../../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { faPrint, faPlus, faEquals } from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Table,
  Drawer,
  Form,
  Select,
  DatePicker,
  Button,
  Modal,
  Tag,
  Popconfirm,
  message,
  notification
} from "antd";
import { WarningOutlined, CheckOutlined } from "@ant-design/icons";
import invoicesApi from "./../../../api/invoicesApi";
import usersApi from "./../../../api/usersApi";
import Cookies from "js-cookie";
import { LocalDateTime } from "@js-joda/core";
import "./style.css";
function Invoiceone() {
  const [state, setstate] = useState(false);
  const [stateinvoice, setstateinvoice] = useState([]);
  const [userList, setuserList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const fetchhgetUsers = async () => {
    try {
      const id_user = Cookies.get("id");
      const response = await usersApi.getuserid(id_user);
      console.log("Fetch get users id successfully: ", response.data);
      setuserList(response.data);
    } catch (error) {
      console.log("Failed to create invoices list: ", error);
    }
  };
  const fetchgetInvoicebyid = async (value) => {
    try {
      //    const id_user = Cookies.get("id");
      const response = await invoicesApi.getid(value);
      console.log("Fetch get users id successfully: ", response.data);
      setstateinvoice(response.data);
      setstate(true);
      //   setfakestate(response.data)
    } catch (error) {
      console.log("Failed to get invoices list: ", error);
    }
  };
  useEffect(() => {
    fetchhgetUsers();
    // fetchgetInvoicebyid();
  }, []);
  function sum(a, b, c, d, e) {
    const rs = a + b + c + d + e;
    return rs;
  }
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const [fakestate, setfakestate] = useState([]);

  const fetchhgetInvoicebyUsername = async (values) => {
    try {
      const response = await invoicesApi.create(values);
      console.log("Fetch invoices successfully: ", response);
      setfakestate(response.data);
      fetchgetInvoicebyid(response.data.id);
      setIsModalVisible(false);
      console.log("<<", stateinvoice);
       if (response.status ===200) {
         notification.success({
           icon: <CheckOutlined style={{ color: "#20da9b" }} />,
           message: `T???o h??a ????n th??nh c??ng`,
           placement: "topRight",
         });
       }
    } catch (error) {
      console.log("Failed to create invoices list: ", error.response);
      if (error.response.data.status === 500) {
        notification.success({
          icon: <WarningOutlined style={{ color: "#f26051" }} />,
          message: `T???o h??a ????n th???t b???i`,
          description: `Vui l??ng li??n l???c v???i ch??? tr??? t???o h???p ?????ng tr?????c`,
          placement: "topRight",
        });
      }
    }
  };
  const onFinish = (values) => {
    const dt = new Date();

    const datacreate = {
      // ...values,
      userName: userList.userName,
      paymentDate: LocalDateTime.now(),
    };
    console.log("<<<data", datacreate);

    fetchhgetInvoicebyUsername(datacreate);
  };

  const downloadSingleFiles = async (value) => {
    try {
      const data = {
        id: fakestate.id,
      };
      console.log("<<<id", data);
      const urldown = `https://inn-server.herokuapp.com/api/v1/invoices/${data.id}/download/`;
      window.open(urldown, "_blank");
      // setdownsingle(response.data);
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };

  return (
    <div>
      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faPlus} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Th??m m???i
            </div>
          </div>
        }
        onOk={onFinish}
        // onCancel={handleCancel}
        visible={isModalVisible}
        okText="TH??M M???I"
        cancelText="H???Y B???"
        footer={null}
      >
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <div style={{ display: "flex" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: "8px" }}
            >
              TH??M M???I
            </Button>
            <div style={{ paddingLeft: "10px" }}>
              <Button
                type="default"
                onClick={handleCancel}
                style={{ borderRadius: "8px" }}
              >
                H???Y B???
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f2f6fa",
          paddingBottom: "15px",
        }}
      >
        <div style={{ height: "120px" }}>
          <Menu_client />
        </div>

        <div className="detailed-invoice"> H??A ????N CHI TI???T </div>

        {state === false ? (
          <div>
            <div style={{ paddingBottom: "17vh" }}>
              <div style={{ width: "100%", height: "auto", display: "block" }}>
                <div
                  style={{
                    width: "100%",
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                    paddingTop: "30px",
                  }}
                >
                  Vui l??ng nh???n v??o n??t Th??m m???i h??a ????n
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="inner-start">
                  <Button type="primary" className="btnbtn" onClick={showModal}>
                    Th??m m???i h??a ????n
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "auto",
                  backgroundColor: "white",
                  display: "block",
                  borderRadius: "8px",
                }}
              >
                <div className="col-one">
                  <div className="col-one-title">
                    <div className="col-one-title-box">
                      <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                      <div className="content-1">
                        H??A ????N C???A {fakestate.user.userName}
                      </div>
                    </div>
                  </div>

                  <div className="col-two-title">
                    <div className="col-two-title-left">
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <div className="col-two-title-left-icon">
                          <Popconfirm
                            title="B???N C?? CH???C MU???N T???I H??A ????N N??Y V??? M??Y KH??NG?"
                            onConfirm={downloadSingleFiles}
                            onCancel={cancel}
                            okText="C??"
                            cancelText="Kh??ng"
                          >
                            <FontAwesomeIcon icon={faPrint} size="2x" />
                          </Popconfirm>
                        </div>
                        <div className="col-two-title-left-content">
                          H??a ????n s??? {fakestate.id}{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-two-title-right">
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <div style={{ width: "2%" }}>
                          <FontAwesomeIcon icon={faCalendarPlus} size="1x" />
                        </div>
                        <div className="col-two-title-right-content">
                          {fakestate.createdDate}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                >
                  <Row style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <Col
                      lg={12}
                      md={24}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className="col-third-left">
                        <div
                          style={{
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontWeight: "bold",
                            backgroundColor: "#5bc0de",
                            borderRadius: "8px",
                            color: "white",
                          }}
                        >
                          TH??NG TIN KH??CH H??NG
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Username:
                          </div>
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.user.userName}
                          </div>
                        </div>
                        {/* Ng??y checkin */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ng??y checkin:
                          </div>
                          <div
                            style={{
                              width: "70%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.user.checkinDate}
                          </div>
                        </div>
                        {/* Email */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Email:
                          </div>
                          <div
                            style={{
                              width: "70%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.user.email}
                          </div>
                        </div>

                        {/* Room_no */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            S??? ph??ng:
                          </div>
                          <div
                            style={{
                              width: "70%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.user.room.roomNo}
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={24}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <div className="col-third-right">
                        <div
                          style={{
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontWeight: "bold",
                            backgroundColor: "#48dc74",
                            color: "white",
                            borderRadius: "8px",
                          }}
                        >
                          TH??NG TIN H??A ????N
                        </div>
                        {/* Email */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            H???p ?????ng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.details}
                          </div>
                        </div>

                        {/* T??n ch??? tr??? */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ch??? tr???:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.owner.userName}
                          </div>
                        </div>

                        {/* Signdate */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ng??y k?? H??:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.signDate}
                          </div>
                        </div>

                        {/* totalelec */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            T???ng ti???n ??i???n:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.totalElectricity}??
                          </div>
                        </div>

                        {/* totalwater */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            T???ng ti???n n?????c:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.totalWater}??
                          </div>
                        </div>

                        {/* waterUnitPrice */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            ????n v??? gi?? n?????c:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.waterUnitPrice}??
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Lo???i ph??ng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.roomType}
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Gi?? ph??ng theo gi??? ?????u:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByFirstHour}??
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Gi?? ph??ng theo gi??? sau:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByNextHour}??
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Gi?? ph??ng theo ng??y:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByDay}??
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Gi?? ph??ng theo tu???n:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByWeek}??
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Gi?? ph??ng theo th??ng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByMonth}??
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            V??? tr?? chi nh??nh:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.branch.location}
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ng??y thanh to??n:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            <Tag color="#f50">{fakestate.paymentDate}</Tag>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    height: "auto",
                    paddingBottom: "15px",
                    paddingTop: "15px",
                  }}
                >
                  <div className="col-last">
                    <div className="col-last-left">
                      <div className="col-last-left-content">
                        <div className="col-last-left-content-2">
                          T???ng ti???n ??i???n
                        </div>
                        <div className="col-last-left-content-3">
                          {fakestate.electricityWater.totalElectricity}??
                        </div>
                      </div>
                      <div className="col-last-left-icon">
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                      </div>
                      {/* T???ng th??? hai */}
                      <div className="col-last-left-content">
                        <div className="col-last-left-content-2">
                          T???ng ti???n n?????c
                        </div>
                        <div className="col-last-left-content-3">
                          {fakestate.electricityWater.totalWater}??
                        </div>
                      </div>
                      <div className="col-last-left-icon">
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                      </div>
                      {/* T???ng th??? ba */}
                      <div className="col-last-left-content">
                        <div className="col-last-left-content-2">
                          T???ng ti???n ph??ng
                        </div>
                        <div className="col-last-left-content-3">
                          {sum(
                            fakestate.user.room.priceByFirstHour,
                            fakestate.user.room.priceByNextHour,
                            fakestate.user.room.priceByDay,
                            fakestate.user.room.priceByWeek,
                            fakestate.user.room.priceByMonth
                          )}
                          ??
                        </div>
                      </div>
                      <div className="col-last-left-icon">
                        <FontAwesomeIcon icon={faEquals} size="2x" />
                      </div>
                    </div>
                    <div className="col-second-last">
                      {" "}
                      {/* T???ng th??? ba */}
                      <div className="col-second-last-inner">
                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                            color: "#efefef",
                            paddingTop: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          T???ng ti???n
                        </div>
                        <div
                          style={{
                            width: "40%",
                            height: "auto",
                            fontSize: "25px",
                            fontFamily: "PT Sans, sans-serif",
                            paddingTop: "10px",
                            float: "right",
                            color: "white",
                            paddingBottom: "5%",
                          }}
                        >
                          {fakestate.total}??
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div style={{ paddingTop: "15vh", backgroundColor: "#f2f6fa" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Invoiceone;
