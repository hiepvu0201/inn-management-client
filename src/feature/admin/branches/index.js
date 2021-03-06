import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Menu_AdminPage from "./../../../components/menu_adminpage";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Spin,
  InputNumber,
} from "antd";
import branchesApi from "./../../../api/branchesApi";
import facilitiesApi from "./../../../api/facilitiesApi";
import usersApi from "../../../api/usersApi";
import Cookies from "js-cookie";
import Footer from "./../../../components/footer"
import { Link } from "react-router-dom";
const { Option } = Select;

function Branches(props) {
  const [rowEdit, setRowEdit] = useState({facilities:[{name:""}]});
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [nullstate, setNullstate] = useState([]);
  //getAll
  const [branchList, setBranchList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const propsselect = [];
  const [idselected, setidSelected] = useState([]);
  const fetchUserList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error);
    }
  };
  const fetchBranchList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branch successfully: ", response.data);
      setBranchList(response.data);
      setfaketable(response.data);
      setNullstate(response.data);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch branch list: ", error);
    }
  };
  const fetchFacilityList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch Facility successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch Facility list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchFacilityList();
    fetchBranchList();
  }, []);
  //form
  {
    facilitiesList.map((facilitiesid) =>
      propsselect.push(
        <Option key={facilitiesid.id} value={facilitiesid.id}>
          {facilitiesid.name}
        </Option>
      )
    );
  }
  const onFinish = (values) => {
    const fetchCreateBranch = async () => {
      const dataCreate = {
        ...values,
        userName: Cookies.get("userName"),
        facilityIds: idselected,
      };
      console.log("dataCreate", dataCreate);
      try {
        const response = await branchesApi.createbranch(dataCreate);
        console.log("Fetch branch succesfully: ", response);
        setBranchList([...branchList, response.data]);
        console.log("tabledata: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to fetch branch list: ", error);
      }
    };
    fetchCreateBranch();
  };
  const fetchDeleteBranches = async (record) => {
    try {
      const response = await branchesApi.deletebranch(record.id);
      console.log("Delete branches successfully", response);
      setBranchList(branchList.filter((item) => item.id !== record.id));
      fetchBranchList();
    } catch (error) {
      console.log("Failed to delete branches list", error);
    }
  };
  const fetchUpdateBranches = async (values) => {
    // setIsloadingUpdate(true);
    try {
      const response = await branchesApi.updatebranch(values);
      console.log("Fetch update branches successfully", response);
      console.log("edit data", values);
      fetchBranchList();
    } catch (error) {
      console.log("Failed to update branches", error);
      // setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
      userName: rowEdit.userName,
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateBranches(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //select
  function handleChange(value) {
    console.log(`selected facilitiesid ${value}`);
    setidSelected(value);
  }
  function handleChange_user(value) {
    console.log(`selected username ${value}`);
  }

  function cancel(e) {
    console.log(e);
    message.error("Kh??ng x??a");
  }
  const columns = [
    {
      title: "V??? tr??",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "T??n chi nh??nh",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "S??? l???u",
      dataIndex: "numberOfStages",
      key: "numberOfStages",
    },
    {
      title: "S??? ph??ng",
      dataIndex: "numberOfRooms",
      key: "numberOfRooms",
    },
    {
      title: "Thi???t b???",
      dataIndex: "facilities",
      key: "facilities",
      render: (facilities) => (
        <div>{facilities.map((us) => us.name) + " "}</div>
      ),
    },
    {
      title: "Qu???n tr??? vi??n",
      dataIndex: "userName",
      // render:(userName) => <div>{userName}</div>
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="B???N C?? CH???C MU???N X??A D??? LI???U KH??NG?"
            onConfirm={() => fetchDeleteBranches(record)}
            onCancel={cancel}
            okText="C??"
            cancelText="Kh??ng"
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Popconfirm>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={() => {
              showModal_1(record);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </div>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);

  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === undefined) {
      setBranchList(nullstate);
    } else {
      const fetchGetallbranchesbyUsername = async () => {
        try {
          const response = await branchesApi.getallbranchesbyusername(value);
          console.log("<<<", response);
          console.log(
            "Fetch all branches name by username successfully: ",
            response.data
          );
          setBranchList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      fetchGetallbranchesbyUsername();
    }
  };
  const [faketable, setfaketable] = useState([]);
  const onSearch_2 = (value) => {
    console.log("<<VALUE", value);
    if (value === undefined) {
      setBranchList(nullstate);
    } else {
      // const newarr = faketable.filter((rs) => rs.location === value);
      // setBranchList(newarr);
      // console.log("<<a", newarr);
      const fetchGetallbranchesbyBranchLocation = async () => {
      try {
        const response = await branchesApi.getallbranchesbyBranchLocation(value);
        console.log(
          "Fetch all branches name by branchlocation successfully: ",
          response.data
        );
        setBranchList(response.data)
      } catch (error) {
        console.log("Failed to fetch by branchlocation list: ", error);
      }
      };
      fetchGetallbranchesbyBranchLocation();
    }
  };
  return (
    <div>
      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faEdit} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Ch???nh s???a
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalVisible_1}
        okText="L??U L???I"
        cancelText="H???Y B???"
        footer={null}
      >
        {/* <Spin spinning={isloadingUpdate} size="large"> */}
        <Form initialValues={{ remember: true }} onFinish={onFinish_edit}>
          <Form.Item label="V??? tr??" name="location" className="form-location">
            <Input
              className="input-location-branches"
              style={{ borderRadius: "8px" }}
              placeholder={rowEdit.location}
            />
          </Form.Item>
          <Form.Item
            label="T??n chi nh??nh"
            name="description"
            className="form-description"
          >
            <Input
              className="input-description"
              placeholder={rowEdit.description}
              style={{ borderRadius: "8px" }}
            />
          </Form.Item>
          <Form.Item
            label="S??? l???u"
            name="numberOfStages"
            className="form-stages"
          >
            <Input
              className="input-floor"
              placeholder={rowEdit.numberOfStages}
              style={{ borderRadius: "8px" }}
            />
          </Form.Item>
          <Form.Item
            label="S??? ph??ng"
            name="numberOfRooms"
            className="form-rooms"
          >
            <Input
              className="input-room"
              style={{ borderRadius: "8px" }}
              placeholder={rowEdit.numberOfRooms}
            />
          </Form.Item>
          <Form.Item
            label="Thi???t b???"
            name="facilityIds"
            className="form-id-facility"
          >
            <Select
              onChange={handleChange}
              allowClear
              mode="multiple"
              className="input-facility2"
              style={{ width: 320 }}
              placeholder={rowEdit.facilities[0].name}
            >
              {propsselect}
            </Select>
          </Form.Item>
          <div className="btncreatebranches">
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: "8px" }}
            >
              CH???NH S???A
            </Button>
            <div style={{ paddingLeft: "10px" }}>
              <Button
                type="default"
                onClick={handleCancel_1}
                style={{ borderRadius: "8px" }}
              >
                H???Y B???
              </Button>
            </div>
          </div>
        </Form>
        {/* </Spin> */}
      </Modal>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#F8F8FF",
        }}
      >
        <div style={{ height: "120px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectanglebranches">
          <div style={{ display: "block", width: "100%" }}>
            <div className="cover-col">
              <div className="topic-left-branches">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentbranches">QU???N L?? CHI NH??NH NH?? TR???</div>
              </div>
              <div className="topic-right-branches">
                <div className="element-select1">
                  <Select
                    allowClear
                    size="middle"
                    style={{ width: "200px" }}
                    onChange={onSearch_1}
                  >
                    {usersList.map((branchid) =>
                      branchid.roles[0].name === "ROLE_ADMIN" ? (
                        <Select.Option
                          key={branchid.userName}
                          value={branchid.userName}
                        >
                          {branchid.userName}
                        </Select.Option>
                      ) : (
                        <>Null</>
                      )
                    )}
                  </Select>
                </div>
                <div className="btn-right-branches">
                  <button className="detailed-btn-branches" onClick={showModal}>
                    TH??M M???I
                  </button>
                  <Modal
                    title={
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="1x"
                          color="#007c7e"
                        />{" "}
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
                    onOk={handleOk}
                    onCancel={handleCancel}
                    visible={isModalVisible}
                    okText="TH??M M???I"
                    cancelText="H???Y B???"
                    footer={null}
                  >
                    <Form
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="V??? tr??"
                        name="location"
                        className="form-location"
                      >
                        <Input
                          className="input-location-branches"
                          style={{ borderRadius: "8px" }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="T??n chi nh??nh"
                        name="description"
                        className="form-description"
                      >
                        <Input
                          className="input-description"
                          style={{ borderRadius: "8px" }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="S??? l???u"
                        name="numberOfStages"
                        className="form-stages"
                      >
                        <Input
                          className="input-floor"
                          style={{ borderRadius: "8px" }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="S??? ph??ng"
                        name="numberOfRooms"
                        className="form-rooms"
                      >
                        <Input
                          className="input-room"
                          style={{ borderRadius: "8px" }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Thi???t b???"
                        // name="facilityIds"
                        className="form-id-facility"
                      >
                        <Select
                          onChange={handleChange}
                          allowClear
                          mode="multiple"
                          className="input-facility2"
                          style={{ width: 320 }}
                        >
                          {/* {propsselect} */}
                          {facilitiesList.map((br) => (
                            <Option key={br.id} value={br.id}>
                              {br.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {/* <Form.Item></Form.Item> */}
                      <div className="btncreatebranches">
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
                </div>
              </div>
            </div>

            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "15px",
              }}
            >
              <Table
                columns={columns}
                bordered
                dataSource={branchList}
                rowKey="id"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            color: "#33404c",
            width: "100%",
            height: "auto",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "12px",
            marginTop: "60px",
            textAlign: "left",
            paddingTop: "15vh",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Branches;
