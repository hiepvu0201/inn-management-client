import React from "react";
import "./style.css";
import { Images } from "./../../config/image";
function Component_Block_Last(props) {
  return (
    <div>
      <div style={{ paddingTop: "100px" }}>
        <div className="box-down">
          <div className="box-inner">
            <div className="box-all">
              <img
                src={props.img}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  position: "absolute",
                  right: "115px",
                  top: "-30px",
                }}
              />
              <div style={{ display: "block", paddingTop: "80px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="content-host">
                    {/* Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu
                    ích, phù hợp với mọi chủ trọ. */}
                    {props.content}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="name-host">
                  {/* Bác Phạm Thị Cúc */}
                  {props.name}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="function">
                  {/* Chủ trọ */}
                  {props.func}
                  </div>
                </div>
              </div>

              {/* <div style={{ display: "block" }}>
              {" "}
              <div>
                <img
                  src={Images.FACE_1}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    position: "absolute",
                    right: "75px",
                    top: "-30px",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="content-host">
                    Giao diện thân thiện và rất dễ sử dụng, nhiều tính năng hữu
                    ích, phù hợp với mọi chủ trọ.
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="name-host">Bác Phạm Thị Cúc</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="function">Chủ trọ</div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component_Block_Last;
