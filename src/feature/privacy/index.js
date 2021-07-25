import React from "react";
import "./style.css";
import MenuFirst from "./../../components/menuFirst";
import Footer from "./../../components/footer";
import {
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Privacy() {
  return (
    <div>
      <div className="height-privacy">
        <MenuFirst />
      </div>
      <div>
        <div className="container-privacy">
          <div className="min-width-privacy">
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topic-privacy">
                  <div className="circle-topic-privacy"></div>
                  <div
                    className="content-privacy222"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Chính sách bảo mật
                  </div>
                </div>
              </div>
              <div className="title-privacy">
                I. MỤC ĐÍCH VÀ PHẠM VI THU THẬP
              </div>
              <div className="content-privacy">
                Yêu cầu khách hàng cung cấp các thông tin cơ bản bao gồm: email,
                điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khi khách
                hàng đăng ký sử dụng dịch vụ và một số thông tin không bắt buộc
                khác khi khách hàng muốn tương tác với một số nội dung trên
                website và ứng dụng . Sử dụng các thông tin này nhằm liên hệ xác
                nhận với khách hàng và đảm bảo quyền lợi cho Khách hàng khi cần
                thiết.
              </div>
              <div
                className="content-privacy"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Việc bạn truy cập, đăng ký, sử dụng có nghĩa rằng bạn đồng ý và
                chấp nhận ràng buộc bởi các quy định trong chính sách bảo mật
                của chúng tôi.
              </div>
              <div className="content-privacy">
                Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt
                động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện
                tử và/hoặc số điện thoại của mình. không chịu trách nhiệm về các
                thất thoát dữ liệu, bí mật thông tin của khách hàng do khách
                hàng vô tình hoặc cố ý gây ra. Ngoài ra, Khách hàng có trách
                nhiệm thông báo kịp thời về những hành vi sử dụng trái phép, lạm
                dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên
                thứ ba để có biện pháp giải quyết phù hợp.
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                II. DỊCH VỤ, ỨNG DỤNG LIÊN KẾT
              </div>
              <div className="content-privacy">
                Để đảm bảo quyền lợi và trải nghiệm tốt nhất cho Khách hàng, Áp
                dụng một số điều khoản riêng khi Khách hàng sử dụng các dịch vụ:
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div className="left-content-privacy">A.</div>
                <div className="right-content-privacy">
                  Đối với khách hàng sử dụng Ứng dụng Từ Apple App Store hoặc
                  GooglePlay, bạn hiểu và chấp nhận có quyền:
                </div>
              </div>
              <div className="content-privacy">
                1) Lấy vị trí hiện tại của bạn;
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                2) Ghi dữ liệu của Ứng dụng lên thẻ nhớ;{" "}
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                3) Truy cập vào Internet từ thiết bị của bạn.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                Tất cả các truy cập này chỉ được chúng tôi thực hiện khi có sự
                đồng ý của bạn. Bạn hiểu và chấp nhận rằng, khi bạn đã cấp quyền
                cho chúng tôi, bạn sẽ không có bất kỳ khiếu nại nào đối với việc
                truy cập này.
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div className="left-content-privacy">B.</div>
                <div className="right-content-privacy">
                  Đối với tài khoản Facebook của Khách hàng khi liên kết sẽ yêu
                  cầu quyền truy cập các thông tin sau:
                </div>
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                1) Quyền truy cập vào địa chỉ email của Trang (Fan Page)
                Facebook sử dụng để tích hợp{" "}
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                2) Quyền truy cập vào tập hợp các mục công khai trên Trang
                Facebook đã tích hợp
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                3) Cho phép truy cập vào tập hợp các mục công khai trên Tài
                khoản cá nhân của người dùng có tương tác với Trang Facebook
                tích hợp
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                4) Cho phép truy cập hộp thư trên Trang Facebook tích hợp
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                5) Cho phép gửi và nhận tin nhắn, bình luận trên Trang Facebook
                tích hợp
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div className="left-content-privacy">C.</div>
                <div className="right-content-privacy">
                  Đối với tài khoản Zalo của Khách hàng khi liên kết với ứng
                  dụng sẽ yêu cầu quyền truy cập các thông tin sau:
                </div>
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                1) Quyền truy cập vào ảnh đại diện, tên, ảnh bìa và mô tả của
                tài khoản Zalo Official Account sử dụng để tích hợp;
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                2) Quyền truy cập vào thông tin họ tên, địa chỉ, số điện thoại
                của người dùng theo dõi (follow) tài khoản Zalo Official account
                sử dụng tích hợp ;
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                3) Cho phép gửi và nhận tin nhắn từ tài khoản Zalo Official
                Account tích hợp.
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                III. PHẠM VI SỬ DỤNG THÔNG TIN
              </div>
              <div className="content-privacy">
                Sử dụng thông tin Khách hàng cung cấp để:
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                – Cung cấp các dịch vụ đến Khách hàng.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                – Gửi các thông báo về các hoạt động trao đổi thông tin giữa
                Khách hàng và đơn vị Hỗ trợ kĩ thuật của KHUTRO.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                – Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Khách
                hàng hoặc các hoạt động giả mạo Khách hàng.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                – Liên lạc và giải quyết với khách hàng trong những trường hợp
                đặc biệt.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                –Có trách nhiệm hợp tác cung cấp thông tin cá nhân Khách hàng
                khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                – Chia sẻ thông tin cần thiết cho bên đối tác nếu nhận được sự
                đồng ý của Khách hàng.
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                IV. THỜI GIAN LƯU TRỮ THÔNG TIN
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                Trong mọi trường hợp thông tin cá nhân Khách hàng sẽ được bảo
                mật hoàn toàn trên máy chủ của KHUTRO. Khách hàng có quyền cập
                nhật, sửa đổi và xóa thông tin của các Dữ liệu cá nhân này. Tuy
                nhiên, trong một số trường hợp, KHUTRO vẫn có thể khôi phục
                những thông tin đó từ cơ sở dữ liệu của chúng tôi để giải quyết
                các tranh chấp, thi hành điều khoản sử dụng, hay vì các yêu cầu
                kỹ thuật, pháp lý liên quan đến sự an toàn và những hoạt động
                của KHUTRO.{" "}
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                V. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP, QUẢN LÝ THÔNG TIN VÀ HỖ TRỢ
                KHÁCH HÀNG
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                Địa chỉ chính: 1 Võ Văn Ngân Phường Linh Chiểu Thành phố Thủ Đức
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                Hotline: 0901.632.176
              </div>
              <div className="content-privacy" style={{ paddingTop: "15px" }}>
                Email: nduy9744@gmail.com
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                VI. PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ KHÁCH HÀNG TIẾP CẬN VÀ CHỈNH SỬA
                DỮ LIỆU CỦA MÌNH
              </div>
              <div className="content-privacy">
                Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin
                cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa
                thông tin cá nhân hoặc yêu cầu thực hiện việc này.{" "}
              </div>
              <div
                className="content-privacy"
                style={{ paddingTop: "15px", paddingBottom: "15px" }}
              >
                Khách hàng có quyền gửi khiếu nại về việc lộ thông tin các nhân
                cho bên thứ ba đến Ban quản trị. Khi tiếp nhận những phản hồi
                này, quản trị viên sẽ xác nhận lại thông tin, phải có trách
                nhiệm trả lời lý do và hướng dẫn Khách hàng khôi phục và bảo mật
                lại thông tin.
              </div>
              <div className="title-privacy" style={{ paddingTop: "15px" }}>
                VII. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN KHÁCH HÀNG
              </div>
              <div className="content-privacy">
                Thông tin của Khách hàng được cam kết bảo mật tuyệt đối theo
                chính sách bảo vệ thông tin cá nhân . Việc thu thập và sử dụng
                thông tin của mỗi Khách hàng chỉ được thực hiện khi có sự đồng ý
                của Khách hàng đó, trừ những trường hợp pháp luật có quy định
                khác. Chúng tôi cam kết:
              </div>
              <div
                className="content-privacy"
                style={{ paddingTop: "15px", paddingBottom: "15px" }}
              >
                – Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên
                thứ ba nào về thông tin cá nhân của Khách hàng khi không có sự
                cho phép hoặc đồng ý từ Khách hàng, trừ những trường hợp pháp
                luật có quy định khác.
              </div>
              <div
                className="content-privacy"
                style={{ paddingTop: "15px", paddingBottom: "15px" }}
              >
                – Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Khách
                hàng bao gồm thông tin hóa đơn, chứng từ kế toán số hóa tại khu
                vực dữ liệu trung tâm an toàn.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25vh",
                }}
              >
                <div className="topic-privacy-2">
                  <div className="circle-privacy-2"></div>
                  <div
                    className="content-circle-XIII-privacy2"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-XIII-privacy3">
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row className="row-privacy" style={{ paddingTop: "20px",paddingBottom:"50px" }}>
                <Col lg={8} md={24}>
                  <div className="box-last-privacy">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-privacy">
                        <div
                          className="ti-comments"
                          style={{ Color: "#009c7e" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4-privacy">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-privacy">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-privacy ">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-privacy">
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          size="2x"
                          color="#009c7e"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4-privacy">Hotline: 0901.632.176</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-privacy">
                        Tổng đài tư vấn miễn phí dành cho khách hàng. Hãy gọi
                        cho chúng tôi ngay khi lúc nào bạn cần.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-privacy ">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-privacy">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          size="2x"
                          color="#009c7e"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="topic-com-4-privacy">
                        Email: nduy9744@gmail.com
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-privacy">
                        Mọi yêu cầu của khách hàng gửi về email, đều được giải
                        quyết và trả lời một cách nhanh nhất.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
