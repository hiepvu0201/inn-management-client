import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../config/image";
import { Input, Button, Form, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authApi from "./../../api/authApi";
import Cookies from "js-cookie";
import { fakeAuth } from "../../fakeAuth";
import { Link, Redirect, useHistory } from "react-router-dom";
import { WarningOutlined, CheckCircleFilled } from "@ant-design/icons";
function Login(props) {
  const [loginstate, setloginstate] = useState([]);
  const [Directstate, setDirectstate] = useState({
    redirectToReferrer: false,
  });
  const onFinish = (values) => {
    const login = async () => {
      try {
        console.log("value", values);
        const response = await authApi.signin(values);
        console.log("Fetch login user successfully: ", response);
        fakeAuth.authenticate(() => {
          setDirectstate(() => ({
            redirectToReferrer: true,
          }));
        });
        notification.success({
          message: "Đăng nhập thành công",
          icon: <CheckCircleFilled style={{ color: "#20da9b" }} />,
          description: `Tài khoản ${response.data.username} đăng nhập thành công`,
          placement: "topRight",
        });
        console.log("<<", response.data.accessToken);
        Cookies.set("Bearer", response.data.accessToken);
        Cookies.set("id", response.data.id);
        Cookies.set("userName", response.data.username);
        Cookies.set("roles", response.data.roles[0]);
      } catch (error) {
        console.log("failed to login ưser: ", error.response);
        if ((error.response.status = 401)) {
          notification.error({
            message: `Đăng nhập thất bại`,
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            placement: "topRight",
          });
        }
      }
    };

    login();
  };
  const { from } = props.location.state || { from: { pathname: "/home" } };
  const { redirectToReferrer } = Directstate;
  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <div style={{ display: "block", backgroundColor: "#fafafa" }}>
        <div className="form-login">
          <div className="form-box">
            <div style={{ width: "100%", display: "block" }}>
              <div className="sign-in">ĐĂNG NHẬP</div>
              <Form
                onFinish={onFinish}
                name="basic"
                initialValues={{ remember: true }}
              >
                <div className="username">Tên đăng nhập</div>
                <Form.Item
                  name="userName"
                  rules={[
                    { required: true, message: "Xin vui lòng nhập userName!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập username"
                    className="input-username-login"
                  />
                </Form.Item>
                <div className="username">Mật khẩu</div>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Xin vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password
                    className="input-password-login"
                    placeholder="Nhập mật khẩu"
                  />
                </Form.Item>
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
                      borderRadius: "8px",
                    }}
                  >
                    ĐĂNG NHẬP
                  </Button>
                </div>
                {/* <div className="forgetPW">Quên mật khẩu</div> */}
                {/* <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  paddingRight: "10px",
                  paddingBottom: "20px",
                }}
              >
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-login"
                  >
                    <div style={{ marginRight: "10px" }}>
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        size="1x"
                        color="white"
                      />
                    </div>
                    ĐĂNG NHẬP
                  </Button>
                </Form.Item>
              </div> */}
              </Form>

              <div className="label-last">
                <div
                  style={{
                    fontSize: "15px",
                    color: "white",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    display: "flex",
                  }}
                >
                  <div style={{ paddingTop: "0px" }}>
                    <FontAwesomeIcon icon={faUserPlus} color="white" />
                  </div>
                  Bạn chưa có tài khoản?
                  <Link to="/register">
                    <div className="register">ĐĂNG KÝ NGAY</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <div
           className="btn-move"
          >
            Trở về trang tìm kiếm
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
