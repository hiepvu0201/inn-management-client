import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import roomApi from "../../../api/roomApi";
import branchesApi from "../../../api/branchesApi";
import floorApi from "./../../../api/floorApi";
import { UploadOutlined, WarningOutlined } from "@ant-design/icons";
import {
  Table,
  Popconfirm,
  message,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Spin,
  InputNumber,
  Upload,
  notification,
} from "antd";
import facilitiesApi from "../../../api/facilitiesApi";
import roomsApi from "../../../api/roomApi";
import Footer from "./../../../components/footer"
import {Link} from 'react-router-dom'
const { Option } = Select;
const { Search } = Input;
function Rooms(props) {
  const [roomList, setRoomList] = useState([]);
  const [branchesList, setBranchesList] = useState([]);
  const [facilitiesList, setFacilitiesList] = useState([]);
    const [branchList, setBranchList] = useState([]);
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});
  const [fileList, setfileList] = useState([]);
  const [imgfile, setimgfile] = useState(null);
  const [firstroom, setFirstroom] = useState(true);
  const [secondroom, setSecondroom] = useState(true);
  const [thirdroom, setThirdroom] = useState(true);
  const [fourthroom, setFourthroom] = useState(true);
  const [stateInput, setIsstateInput] = useState([]);
  const propsselect = [];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [state, setstate] = useState([]);
  const [floorList, setfloorList] = useState([])
  const uploadimg = (info) => {
    console.log(">>>>info: ", info);
    console.log(fileList);
  };
  const propsimg = {
    onChange: uploadimg,
  };
  const [stateimg, setstateimg] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
  });
  const handleChangeimg = (fileList) => {
    setstateimg(fileList);
    setimgfile(fileList.file.originFileObj);
    console.log(">>state", stateimg);
    console.log(">>fileList", fileList);
    console.log(">>originFileObj", imgfile);
  };
  
  const handlePreview = (file) => {
    setstateimg({
      ...stateimg,
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch rooms successfully: ", response.data);
      setRoomList(response.data);
      setIsstateInput(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch rooms list: ", error);
    }
  };
  const fetchFloorList = async()=>{
     try {
      const response = await floorApi.getAll();
      console.log("Fetch floor successfully: ", response.data);
      setfloorList(response.data);
    } catch (error) {
      console.log("Failed to fetch floor list: ", error);
    }
  }
  const fetchBranchesList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branches successfully: ", response.data);
      setBranchesList(response.data);
    } catch (error) {
      console.log("Failed to fetch branches list: ", error);
    }
  };
  const fetchBranchList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branch successfully: ", response.data);
      setBranchList(response.data);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch branch list: ", error);
    }
  };
  const fetchFacilitiesList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch facilities successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch facilities list: ", error);
    }
  };

  useEffect(() => {
    fetchFacilitiesList();
    fetchBranchList();
    fetchBranchesList();
    fetchRoomList();
    fetchFloorList();
  }, []);
  {
    facilitiesList.map((facilitiesid) =>
      propsselect.push(
        <Option key={facilitiesid.id} value={facilitiesid.id}>
          {facilitiesid.name}
        </Option>
      )
    );
  }
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
    };
    console.log("dataCreate", dataCreate);
    var myJSON = JSON.stringify(dataCreate);
    console.log("<<<Stringify", myJSON);
    const responsedata = {
      room: myJSON,
      images: imgfile,
    };
    console.log("dataCreate", responsedata);
    var form_data = new FormData();
    for (var key in responsedata) {
      form_data.append(key, responsedata[key]);
    }
    const fetchCreateRooms = async () => {
      try {
        const response = await roomsApi.createrooms(form_data);
        console.log("Fetch create rooms succesfully: ", response);
        setRoomList([...roomList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create rooms list: ", error);
      }
    };
    fetchCreateRooms();
  };
  const fetchUpdateRooms = async (edittv) => {
    setIsloadingUpdate(true);
    try {
      const response = await roomApi.updaterooms(edittv);
      console.log("Fetch update rooms successfully", response);
      console.log("edit data", edittv);
      fetchRoomList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update rooms", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
    };
    console.log("dataupdate", dataUpdate);
    var myJSONupdate = JSON.stringify(dataUpdate);
    console.log("<<<Stringify", myJSONupdate);
    const responsedata = {
      roomDetail: myJSONupdate,
      images: imgfile,
    };
    console.log("dataUpdate", responsedata);
    var form_data = new FormData();
    for (var key in responsedata) {
      form_data.append(key, responsedata[key]);
    }
    const data_update = { id: rowEdit.id, data: form_data };
    fetchUpdateRooms(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDeleteRooms = async (record) => {
    try {
      const response = await roomApi.deleterooms(record.id);
      console.log("Delete rooms successfully", response);
      setRoomList(roomList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete facilities list", error);
    }
  };

  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
  }
  const [selected_1, setIdselected_1] = useState([]);
  function handleChange_1(value) {
    console.log(`selected facilities id ${value}`);
  }
  function handleChange_2(value){
    console.log(`Select number of floor id ${value}`)
  }
  const check_price = (e) => {
    console.log("<<<", e.target.value);
    e.target.value >= 1000 ? (
      <></>
    ) : (
      notification.warning({
        message: `Xin vui lòng nhập lại`,
        icon: <WarningOutlined style={{ color: "#FF0000" }} />,
        placement: "topLeft",
      })
    );
  };

  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
  }

  const columns = [
    {
      title: "Hình",
      dataIndex: "images",
      key: "images",
      width: 200,
      render: (images) => <img style={{ width: "100%" }} src={`${images}`} />,
    },
    {
      title: "Số phòng",
      dataIndex: "roomNo",
      key: "roomNo",
    },
    // {
    //   title: "Vị trí",
    //   dataIndex: "position",
    //   key: "position",
    // },
    {
      title:"Lầu",
      dataIndex:"floor",
      key:"floor",
      render:(floor)=><Tag color="#ecb38c">{floor.numberOfFloors}</Tag>
    },
    {
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.location}</div>,
    },
    {
      title: "Thiết bị",
      dataIndex: "facilities",
      key: "facilities",
      render: (facilities) => (
        <div>{facilities.map((us) => us.name) + " "}</div>
      ),
    },
    {
      title: "Loại phòng",
      dataIndex: "roomType",
      key: "roomType",
      render: (roomType) =>
        roomType === null ? (
          <Tag color="magenta" className="tagcolor">{roomType}</Tag>
        ) : (
          <Tag color="geekblue">{roomType}</Tag>
        ),
    },
    // {
    //   title: "Giá phòng theo giờ đầu",
    //   dataIndex: "priceByFirstHour",
    //   key: "priceByFirstHour",
    //   render: (priceByFirstHour) =>
    //     priceByFirstHour === 0 ? (
    //       <Tag color="magenta">{priceByFirstHour}</Tag>
    //     ) : (
    //       <Tag color="geekblue">{priceByFirstHour}</Tag>
    //     ),
    // },
    // {
    //   title: "Giá phòng theo giờ sau",
    //   dataIndex: "priceByNextHour",
    //   key: "priceByNextHour",
    //   render: (priceByNextHour) =>
    //     priceByNextHour === 0 ? (
    //       <Tag color="magenta">{priceByNextHour}</Tag>
    //     ) : (
    //       <Tag color="geekblue">{priceByNextHour}</Tag>
    //     ),
    // },
    // {
    //   title: "Giá phòng theo ngày",
    //   dataIndex: "priceByDay",
    //   key: "priceByDay",
    //   render: (priceByDay) =>
    //     priceByDay === 0 ? (
    //       <Tag color="magenta">{priceByDay}</Tag>
    //     ) : (
    //       <Tag color="geekblue">{priceByDay}</Tag>
    //     ),
    // },
    // {
    //   title: "Giá phòng theo tuần",
    //   dataIndex: "priceByWeek",
    //   key: "priceByWeek",
    //   render: (priceByWeek) =>
    //     priceByWeek === 0 ? (
    //       <Tag color="magenta">{priceByWeek}</Tag>
    //     ) : (
    //       <Tag color="geekblue">{priceByWeek}</Tag>
    //     ),
    // },
    // {
    //   title: "Giá phòng theo tháng",
    //   dataIndex: "priceByMonth",
    //   key: "priceByMonth",
    //   render: (priceByMonth) =>
    //     priceByMonth === 0 ? (
    //       <Tag color="magenta">{priceByMonth}</Tag>
    //     ) : (
    //       <Tag color="geekblue">{priceByMonth}</Tag>
    //     ),
    // },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteRooms(record)}
            onCancel={cancel}
            okText="Có"
            cancelText="Không"
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

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      setRoomList(state);
    } else {
      const SearchRoombyBranch = async () => {
        try {
          const response = await roomApi.searchRoombyBranch(value);
          console.log("Fetch room by branch successfully: ", response.data);
          // setIsstateInput(response.data);
          setRoomList(response.data);
        } catch (error) {
          console.log("Failed to fetch room by ranch: ", error);
        }
      };
      SearchRoombyBranch();
    }
  };
  const toggleInputbySelect = (value) => {
    switch (value) {
      case "0":
        setFirstroom(false);
        setSecondroom(true);
        setThirdroom(true);
        setFourthroom(true);
        break;
      case "1":
        setFirstroom(true);
        setSecondroom(false);
        setThirdroom(true);
        setFourthroom(true);
        break;
      case "2":
        setFirstroom(true);
        setSecondroom(true);
        setThirdroom(false);
        setFourthroom(true);
        break;
      case "3":
        setFirstroom(true);
        setSecondroom(true);
        setThirdroom(true);
        setFourthroom(false);
        break;
    }
  };
  const handleChange_roomType = (value) => {
    console.log(`selected ${value}`);
    toggleInputbySelect(value);
  };
 const handleChange_roomType1 = (value) => {
    console.log(`selected ${value}`);
    toggleInputbySelect(value);
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
              Chỉnh sửa
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalVisible_1}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form initialValues={{ remember: true }} onFinish={onFinish_edit}>
            <Form.Item label="Số phòng" name="roomNo" className="form-roomNo">
              <Input className="input-roomNo" placeholder={rowEdit.roomNo} />
            </Form.Item>
            {/* <Form.Item label="Vị trí" name="position" className="form-postion">
              <Input
                className="input-position"
                placeholder={rowEdit.position}
              />
            </Form.Item> */}
            <Form.Item label="Số lầu" name="floorId" className="form-floor">
              <Select
                onChange={handleChange}
                style={{ width: 300 }}
                className="select-floor"
              >
                {floorList.map((fi) => (
                  <Option key={fi.id} value={fi.id}>
                    {fi.numberOfFloors}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Loại phòng"
              name="roomType"
              className="form-roomType"
            >
              <Select
                style={{ width: 300 }}
                placeholder={rowEdit.month}
                onSelect={(value) => handleChange_roomType(value)}
                className="select-roomType"
              >
                <Option value="0">Phòng theo giờ</Option>
                <Option value="1">Phòng theo ngày</Option>
                <Option value="2">Phòng theo tuần</Option>
                <Option value="3">Phòng theo tháng</Option>
              </Select>
            </Form.Item>
            {firstroom || (
              <>
                <Form.Item
                  label="Giá phòng theo giờ 1"
                  name="priceByFirstHour"
                  className="form-pricebyfristhour"
                >
                  <Input className="input-priceByFirstHour" />
                </Form.Item>
                <Form.Item
                  label="Giá phòng theo giờ 2"
                  name="priceByNextHour"
                  className="form-pricebynexthour"
                >
                  <Input className="input-priceByNextHour" />
                </Form.Item>
              </>
            )}
            {secondroom || (
              <Form.Item
                label="Giá phòng theo ngày"
                name="priceByDay"
                className="priceByDay"
              >
                <Input className="input-priceByDay" disabled={secondroom} />
              </Form.Item>
            )}
            {thirdroom || (
              <Form.Item
                label="Giá phòng theo tuần"
                name="priceByWeek"
                className="pricebyweek"
              >
                <Input className="input-pricebyWeek" disabled={thirdroom} />
              </Form.Item>
            )}
            {fourthroom || (
              <Form.Item
                label="Giá phòng theo tháng"
                name="priceByMonth"
                className="pricebymonth"
              >
                <Input className="input-priceByMonth" disabled={fourthroom} />
              </Form.Item>
            )}
            <Form.Item
              label="Chi nhánh"
              name="branchId"
              className="form-branches"
            >
              <Select
                onChange={handleChange}
                className="select-branches-edit"
                style={{ width: 300 }}
              >
                {branchesList.map((branchesid) => (
                  <Select.Option key={branchesid.id} value={branchesid.id}>
                    {branchesid.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Thiết bị"
              name="facilityIds"
              className="form-facilityids-edit"
            >
              <Select
                onChange={handleChange}
                allowClear
                className="select-facility-edit"
                mode="multiple"
                style={{ width: 300 }}
              >
                {propsselect}
              </Select>
            </Form.Item>
            <Form.Item label="Hình" className="form-imageroom-edit">
              <Upload
                {...propsimg}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
                onPreview={handlePreview}
                onChange={handleChangeimg}
                fileList={stateimg.fileList}
              >
                {stateimg?.fileList.length < 1 && (
                  <Button
                    onClick={uploadimg}
                    icon={<UploadOutlined />}
                    className="btn-upload"
                  >
                    Upload
                  </Button>
                )}
              </Upload>
            </Form.Item>
            <div className="btnbtncrateroom">
              <Button
                style={{ borderRadius: "8px" }}
                type="primary"
                htmlType="submit"
              >
                CHỈNH SỬA
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button
                  style={{ borderRadius: "8px" }}
                  type="default"
                  onClick={handleCancel_1}
                >
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
      <div className="boxroom">
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectangleroom">
          <div style={{ display: "block", width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "auto",
                paddingTop: "10px",
              }}
            >
              <div className="topic-left-room">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentroom">QUẢN LÝ PHÒNG TRỌ</div>
              </div>
              <div className="btn-right-rooms">
                <div style={{ paddingRight: "10px", width: "60%" }}>
                  <Select
                    allowClear
                    style={{ width: 200, marginRight: "10px" }}
                    onChange={onSearch_1}
                  >
                    {branchList.map((branchid) => (
                      <Select.Option
                        key={branchid.location}
                        value={branchid.location}
                      >
                        {branchid.description}
                      </Select.Option>
                    ))}
                  </Select>
                </div>

                <button className="detailed-btnroom" onClick={showModal}>
                  THÊM MỚI
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
                        Thêm mới
                      </div>
                    </div>
                  }
                  onOk={handleOk}
                  onCancel={handleCancel}
                  visible={isModalVisible}
                  okText="THÊM MỚI"
                  cancelText="HỦY BỎ"
                  footer={null}
                >
                  <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="Số phòng"
                      name="roomNo"
                      className="form-roomNo"
                    >
                      <Input className="input-roomNo" />
                    </Form.Item>
                    <Form.Item
                      label="Số lầu"
                      name="floorId"
                      className="form-floor"
                    >
                      <Select
                        onChange={handleChange}
                        style={{ width: 300, borderRadius: 8 }}
                        className="select-floor"
                      >
                        {floorList.map((fi) => (
                          <Option key={fi.id} value={fi.id}>
                            {fi.numberOfFloors}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Loại phòng"
                      name="roomType"
                      className="form-roomType"
                    >
                      <Select
                        style={{ width: 300 }}
                        placeholder={rowEdit.month}
                        onSelect={(value) => handleChange_roomType(value)}
                        className="select-roomType"
                      >
                        <Option value="0">Phòng theo giờ</Option>
                        <Option value="1">Phòng theo ngày</Option>
                        <Option value="2">Phòng theo tuần</Option>
                        <Option value="3">Phòng theo tháng</Option>
                      </Select>
                    </Form.Item>
                    {firstroom || (
                      <>
                        <Form.Item
                          label="Giá phòng theo giờ 1"
                          name="priceByFirstHour"
                          className="form-pricebyfristhour"
                        >
                          <Input className="input-priceByFirstHour" />
                        </Form.Item>
                        <Form.Item
                          label="Giá phòng theo giờ 2"
                          name="priceByNextHour"
                          className="form-pricebynexthour"
                        >
                          <Input className="input-priceByNextHour" />
                        </Form.Item>
                      </>
                    )}
                    {secondroom || (
                      <Form.Item
                        label="Giá phòng theo ngày"
                        name="priceByDay"
                        className="priceByDay"
                      >
                        <Input
                          className="input-priceByDay"
                          disabled={secondroom}
                        />
                      </Form.Item>
                    )}
                    {thirdroom || (
                      <Form.Item
                        label="Giá phòng theo tuần"
                        name="priceByWeek"
                        className="pricebyweek"
                      >
                        <Input
                          className="input-pricebyWeek"
                          disabled={thirdroom}
                        />
                      </Form.Item>
                    )}
                    {fourthroom || (
                      <Form.Item
                        label="Giá phòng theo tháng"
                        name="priceByMonth"
                        className="pricebymonth"
                      >
                        <Input
                          className="input-priceByMonth"
                          disabled={fourthroom}
                        />
                      </Form.Item>
                    )}
                    <Form.Item
                      label="Chi nhánh"
                      name="branchId"
                      className="form-branches"
                    >
                      <Select
                        onChange={handleChange}
                        className="select-branches"
                        style={{ width: 300 }}
                      >
                        {branchesList.map((branchesid) => (
                          <Select.Option
                            key={branchesid.id}
                            value={branchesid.id}
                          >
                            {branchesid.description}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Thiết bị"
                      name="facilityIds"
                      className="form-facilityids"
                    >
                      <Select
                        onChange={handleChange}
                        allowClear
                        className="select-facility"
                        mode="multiple"
                        style={{ width: 300, borderRadius: "8px" }}
                      >
                        {propsselect}
                      </Select>
                    </Form.Item>
                    <Form.Item label="Hình" className="form-imageroom">
                      <Upload
                        {...propsimg}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        defaultFileList={[...fileList]}
                        onPreview={handlePreview}
                        onChange={handleChangeimg}
                        fileList={stateimg.fileList}
                      >
                        {stateimg?.fileList.length < 1 && (
                          <Button
                            onClick={uploadimg}
                            icon={<UploadOutlined />}
                            className="btn-upload"
                          >
                            Upload
                          </Button>
                        )}
                      </Upload>
                    </Form.Item>
                    <div className="btnbtncrateroom">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ borderRadius: "8px" }}
                      >
                        THÊM MỚI
                      </Button>
                      <div style={{ paddingLeft: "10px" }}>
                        <Button
                          style={{ borderRadius: "8px" }}
                          type="default"
                          onClick={handleCancel}
                        >
                          HỦY BỎ
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Modal>
              </div>
            </div>
            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "15px",
              }}
            >
              <Table
                columns={columns}
                bordered
                dataSource={roomList}
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
            marginTop: "40px",
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
export default Rooms;
