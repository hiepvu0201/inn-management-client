import React from "react";
import {
  Input,
  Form,
  Button,
  message,
  notification,
  Radio,
  Select,
  Checkbox,
} from "antd";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authApi from './../../api/authApi'
import {WarningOutlined,CheckCircleFilled} from "@ant-design/icons";
import { Link, Redirect, useHistory } from "react-router-dom";

function Register() {
   const onFinish = (values) => {
    const register = async () => {
      try {
        console.log("value", values);
        const response = await authApi.signup(values);
        console.log("Fetch register user successfully: ", response);

        notification.success({
          message: "Đăng ký thành công",
          icon: <CheckCircleFilled style={{ color: "#20da9b" }} />,
          description: `${response.data}`,
          placement: "topRight",
        });
      } catch (error) {
        console.log("failed to register ưser: ", error.response);
        console.log(JSON.parse(error.response.config.data).userName);
        if (error.response.data === "Lỗi: Người dùng đã tồn tại!") {
          notification.error({
            message: `Đăng ký thất bại`,
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Tài khoản ${
              JSON.parse(error.response.config.data).userName
            } đã tồn tại`,
            placement: "topRight",
          });
        } else if (error.response.data === "Lỗi: Email đã tồn tại!") {
          notification.error({
            message: `Đăng ký thất bại`,
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Email ${
              JSON.parse(error.response.config.data).email
            } đã tồn tại`,
            placement: "topRight",
          });
        }
      }
    };
    register();
  };
  return (
    <div>
      <div className="form-register">
        <div className="form-boxres">
          <div style={{ width: "100%", height: "auto", display: "block" }}>
            <div className="sign-up">ĐĂNG KÝ</div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="username">Username</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="userName">
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>
              </div>
              <div className="username">Email</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="email">
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </div>
              <div className="username">Mật khẩu</div>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "20px",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                }}
              >
                <Form.Item name="password">
                  <Input.Password placeholder="Nhập password" />
                </Form.Item>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  paddingRight: "15px",
                  paddingBottom: "20px",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "90%",
                    height: "auto",
                    fontSize: "15px",
                    backgroundColor: "#0c61f2",
                    color: "white",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  ĐĂNG KÝ
                </Button>
              </div>
            </Form>
            <div
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#007c7e",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Open Sans', sans-serif",
                  display: "flex",
                  paddingTop:"10px",
                  paddingBottom:"10px"
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} color="white" /> Bạn đã có
                tài khoản rồi hãy,
                <Link to="/login">
                  <div style={{ color: "white",textDecorationLine:"underline",textDecorationThickness:"2px",textDecorationStyle:"solid" }}> đăng nhập ngay</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
