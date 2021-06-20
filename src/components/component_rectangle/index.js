import React from "react";
import "./style.css";
import "./../../components/component_block/demo-files/demo.css";
import "./../../components/component_block/ie7/ie7.css";
import "./../../components/component_block/themify-icons.css";
import { Row, Col } from "antd";
function Component_Rectangle() {
  return (
    <div>
      <Row className="row-rectangle">
        <Col lg={6} md={24} style={{paddingLeft:"70px",paddingTop:"20px"}}>
          <div className="rectangle-box">
            <div className="form-icon">
              <div className="ti-medall"></div>
            </div>
            <div className="form-topic">Tối ưu chi phí</div>
            <div className="form-content">Chỉ từ 7.000 đồng mỗi ngày, bạn đã sở hữu phần mềm quản lý hiệu quả.</div>
          </div>
        </Col>
        <Col lg={6} md={24} style={{paddingLeft:"60px",paddingTop:"80px"}}>
          <div className="rectangle-box">
            <div className="form-icon">
              <div className="ti-medall"></div>
            </div>
            <div className="form-topic">Tối ưu chi phí</div>
            <div className="form-content">Chỉ từ 7.000 đồng mỗi ngày, bạn đã sở hữu phần mềm quản lý hiệu quả.</div>
          </div>
        </Col>
        <Col lg={6} md={24} style={{paddingLeft:"50px",paddingTop:"20px"}}>
          <div className="rectangle-box">
            <div className="form-icon">
              <div className="ti-medall"></div>
            </div>
            <div className="form-topic">Tối ưu chi phí</div>
            <div className="form-content">Chỉ từ 7.000 đồng mỗi ngày, bạn đã sở hữu phần mềm quản lý hiệu quả.</div>
          </div>
        </Col>
        <Col lg={6} md={24} style={{paddingLeft:"40px",paddingTop:"80px"}}>
          <div className="rectangle-box">
            <div className="form-icon">
              <div className="ti-medall"></div>
            </div>
            <div className="form-topic">Tối ưu chi phí</div>
            <div className="form-content">Chỉ từ 7.000 đồng mỗi ngày, bạn đã sở hữu phần mềm quản lý hiệu quả.</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Component_Rectangle;
