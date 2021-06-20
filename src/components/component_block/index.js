import React from "react";
import "./style.css";
import "./demo-files/demo.css";
import "./ie7/ie7.css";
import "./themify-icons.css";
import { Row, Col } from "antd";
function Component_Block() {
  return (
    <div>
      <Row
        //  style={{paddingTop:"20px",paddingLeft:"30px"}}
        className="row-block"
      >
          <Col lg={6} md={24}>
            {" "}
            <div className="box-block">
              <div className="number-topinleft">01</div>
              <div>
                <div
                  className="ti-comments"
                  style={{
                    paddingTop: "80px",
                    fontSize: "62px",
                    color: "white",
                    fontWeight: "200",
                  }}
                ></div>
                <div className="ti-content-compo">Tìm hiểu</div>
              </div>
            </div>
          </Col>
        <Col lg={6} md={24}>
          {" "}
          <div className="box-block">
            <div className="number-topinleft">02</div>
            <div>
              <div
                className="ti-blackboard"
                style={{
                  paddingTop: "80px",
                  fontSize: "62px",
                  color: "white",
                  fontWeight: "200",
                }}
              ></div>
              <div className="ti-content-compo">Dùng thử</div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={24}>
          {" "}
          <div className="box-block">
            <div className="number-topinleft">03</div>
            <div>
              <div
                className="ti-layers-alt"
                style={{
                  paddingTop: "80px",
                  fontSize: "62px",
                  color: "white",
                  fontWeight: "200",
                }}
              ></div>
              <div className="ti-content-compo">Hợp đồng</div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={24}>
          {" "}
          <div className="box-block">
            <div className="number-topinleft">04</div>
            <div>
              <div
                className="ti-target"
                style={{
                  paddingTop: "80px",
                  fontSize: "62px",
                  color: "white",
                  fontWeight: "200",
                }}
              ></div>
              <div className="ti-content-compo">Gia hạn</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Component_Block;
