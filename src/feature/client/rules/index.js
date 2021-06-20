import React, { useEffect, useState } from "react";
import Menu_client from "./../../../components/menu_client";
import Footer from "./../../../components/footer";
import Rules_tag from "./../../../components/rules_tag";
import { Row, Col } from "antd";
import rulesApi from "./../../../api/rulesApi";
import './style.css'
function Rules_client() {
  const [rulesList, setrulesList] = useState([]);
  useEffect(() => {
    const fetchRulesList = async () => {
      try {
        const response = await rulesApi.getAll();
        console.log("Fetch rules successfully: ", response.data);
        setrulesList(response.data);
      } catch (error) {
        console.log("Failed to fetch rules list: ", error);
      }
    };
    fetchRulesList();
  }, []);
  return (
    <div>
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#f2f6fa" }}
      >
        <div style={{ height: "100px" }}>
          <Menu_client />
        </div>
        <div>
          <div 
          className="col-11"
          // style={{ fontFamily: "PT Sans, sans-serif", fontSize: "30px",fontWeight:"bold" ,textAlign:"left",width:"70%",paddingLeft:"250px"}}
          >
            NỘI QUY NHÀ TRỌ
          </div>
          <Row>
            {rulesList.map((rulesid) => (
              <Col
                lg={20}
                md={24}
                className="col-13"
                key={rulesid.id}
              >
                <Rules_tag
                  name={rulesid.name}
                  description={rulesid.description}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ paddingTop: "25vw" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Rules_client;
