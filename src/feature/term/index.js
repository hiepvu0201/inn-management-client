import React from "react";
import "./style.css";
import MenuFirst from "./../../components/menuFirst";
import Footer from "./../../components/footer";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Term() {
  return (
    <div>
      <div className="height-term">
        <MenuFirst />
      </div>
      <div>
        <div className="container-term">
          <div className="min-width-term">
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <div className="topic-term">
                  <div className="circle-topic-privacy"></div>
                  <div className="content-doubleterm">Điều khoản sử dụng</div>
                </div>
              </div>
              <div className="title-term">I. ĐỊNH NGHĨA</div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <div className="left-content-term">“Dịch vụ”</div>
                <div className="right-content-term">
                  – Phần mềm quản lý và phần mềm cho người dụng 
                </div>
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
                <div className="left-content-term1" >
                  “Phần mềm quản lý KHUTRO”
                </div>
                <div className="right-content-term">
                  – Ứng dụng phần mềm quản lý nhà trọ trực tuyến
                </div>
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
                <div className="left-content-term">“Website”</div>
                <div className="right-content-term">
                  – Trang thông tin điện tử khi truy cập địa chỉ
                </div>
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
                <div className="left-content-term2" >
                  “Chủ tài khoản”{" "}
                </div>
                <div className="right-content-term">
                  – Người đăng ký ban đầu;hoặc người truy cập tài khoản khu trọ 
                </div>
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
                <div className="left-content-term3" >
                  “Tài khoản quản trị”
                </div>
                <div className="right-content-term">
                  – Tài khoản được tạo ra đầu tiên khi  đăng ký sử
                  dụng phần mềm quản lý
                </div>
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
                <div className="left-content-term">“Bạn” </div>
                <div className="right-content-term">
                  – Chủ tài khoản hoặc các nhân viên được chủ tài khoản cấp tài
                  khoản truy cập; những Bạn ghé thăm
                </div>
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
                <div className="left-content-term4" >
                  “Bên thứ ba”
                </div>
                <div className="right-content-term">
                  – Khách hàng, đối tác, nhà cung cấp của cửa hàng
                </div>
              </div>
              <div className="title-term">II. PHẠM VI ÁP DỤNG</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Điều khoản sử dụng này áp dụng cho Dịch vụ phần mềm quản lý nhà
                trọ. Duy trì trang thông tin điện tử như một dịch vụ cung cấp
                cho khách hàng nhưng không giới hạn là các cá nhân, tổ chức sử
                dụng. Khi sử dụng Website này và bất kỳ dịch vụ nào tại đây có
                nghĩa là Bạn đã chấp nhận và đồng ý tuân theo bản Điều khoản sử
                dụng này. Ngoài ra khi sử dụng các Dịch vụ cụ thể, Bạn phải tuân
                theo các điều khoản và điều kiện riêng áp dụng cho Dịch vụ đó
                theo từng thời điểm. Chúng ta thể thay đổi, điều chỉnh Điều
                khoản sử dụng này, Bạn có thể xem những thông tin mới cập nhật
                vào bất cứ lúc nào . Nếu Bạn tiếp tục sử dụng Dịch vụ có nghĩa
                là Bạn chấp nhận và đồng ý tuân theo Điều khoản sử dụng mới được
                cập nhật. Bất cứ sự vi phạm nào của Bạn đối với các điều khoản
                và điều kiện này đều có thể dẫn đến việc đình chỉ hoặc kết thúc
                tài khoản, Dịch vụ hoặc những hoạt động được phép khác theo Thỏa
                thuận sử dụng Dịch vụ.
              </div>
              <div className="title-term">III. SỬ DỤNG HỢP PHÁP</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn phải nhận thức và chấp nhận rằng Bạn có trách nhiệm sử dụng
                Dịch vụ vào công việc kinh doanh dịch vụ phù hợp với pháp luật
                hiện hành và thuần phong mỹ tục Việt Nam. Bạn không được sử dụng
                dịch vụ để tuyên truyền nội dung đồi trụy, chống phá nhà nước,
                phát tán thư rác và / hoặc các thông tin không mong muốn đến
                những tổ chức và cá nhân khác trong hệ thống dưới mọi hình thức
              </div>
              <div className="title-term">IV. BẢO MẬT THÔNG TIN</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn phải có trách nhiệm lưu giữ thông tin truy cập vào trang web
                để tránh trường hợp tài khoản bị đánh cắp và/ hoặc bị lạm dụng
                với mục đích không an toàn cho cả Bạn. Chúng tôi sẽ không chịu
                trách nhiệm đối với sự xâm nhập trái phép của bên thứ ba vào
                trang web của Bạn do sự bất cẩn của Bạn. Chúng tôi khuyến cáo
                Bạn đổi mật khẩu sau khi cung cấp mật khẩu cho các bên liên quan
                nhằm mục đích hỗ trợ sử dụng. Ngoài ra, chúng tôi cam kết giữ
                kín mọi thông tin của Bạn khi sử dụng các Dịch vụ trên Website
                của chúng tôi và không tiết lộ cho bên thứ ba. Chúng tôi chỉ
                thay đổi thông tin của Bạn trên Website khi có sự đồng ý hoặc
                yêu cầu của Bạn.
              </div>
              <div className="title-term">V. XỬ LÝ SỰ CỐ</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn có trách nhiệm thông báo ngay cho chúng tôi khi phát hiện sự
                cố, tích cực phối hợp với chúng tôi để khắc phục sớm nhất cho
                Bạn. Trong trường hợp sự cố liên quan đến Bên thứ ba, Bạn có
                trách nhiệm phối hợp với các bên liên quan để giải quyết. Bạn
                hiểu và chấp nhận rằng, trong mọi trường hợp, chúng tôi luôn cố
                gắng hỗ trợ và khắc phục, tuy nhiên chúng tôi sẽ không chịu
                trách nhiệm trước những thiệt hại phát sinh do sự chậm trễ không
                thông báo hoặc che giấu của Bạn.
              </div>
              <div className="title-term">VI. GIỚI HẠN TRÁCH NHIỆM</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Chúng tôi sẽ không chịu bất kỳ trách nhiệm nào hoặc trách nhiệm
                liên đới đối với những hậu quả của việc truy cập trái phép đến
                máy chủ, Website,trang thiết bị và dữ liệu của Bạn hoặc dữ liệu
                khách hàng của Bạn vì tai nạn, phương tiện bất hợp pháp, thiết
                bị của Bên thứ ba và các nguyên nhân khác nằm ngoài sự kiểm soát
                của Chúng tôi. Như một điều kiện khi sử dụng Website này và Dịch
                vụ, Bạn đồng ý rằng Chúng tôi, nhân viên, các tổ chức thành
                viên, cổ đông, đại lý, nhà cung cấp của Chúng tôi sẽ không chịu
                trách nhiệm với Bên thứ ba về các thiệt hại về lợi nhuận, cơ hội
                kinh doanh; thiệt hại, chi phí phát sinh trực tiếp hay gián tiếp
                vì kết nối với Website này hay sử dụng các Dịch vụ của chúng tôi
                Chúng tôi sẽ không chịu bất kỳ trách nhiệm nào hoặc trách nhiệm
                liên đới đối với chất lượng sản phẩm, dịch vụ, thông tin của các
                website của Bên thứ ba có liên kết với website của chúng tôi.
                Ngoài ra, Bạn cũng hiểu rằng, Chúng tôi không có trách nhiệm và
                thẩm quyền xác nhận, chứng nhận thông tin và chất lượng dịch vụ,
                sản phẩm hay bồi thường các thiệt hại liên quan đến việc Bạn sử
                dụng dịch vụ, sản phẩm được quảng cáo trên website đó. Chúng tôi
                khuyến nghị Bạn tìm hiểu đối tác kỹ càng trước khi xúc tiến hợp
                tác để tránh các thiệt hại không mong muốn. KHUTRO không bảo đảm
                cũng như không chịu trách nhiệm về kết quả kinh doanh của Bạn
                sau khi sử dụng dịch vụ.
              </div>
              <div className="title-term">VII. ĐẢM BẢO CUNG CẤP DỊCH VỤ</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Website và các Dịch vụ, Tính năng được cung cấp trên cơ sở “có
                thể thực hiện được”. Chúng tôi không bảo đảm rằng Website hoặc
                Dịch vụ sẽ luôn sẵn sàng, có thể sử dụng, không bị gián đoạn,
                đúng thời gian, không có lỗi. Tuy nhiên chúng tôi cam kết cố
                gắng trong mọi điều kiện và khả năng có thể để đảm bảo Website
                và Dịch vụ luôn được sẵn sàng. Bạn cần lưu ý rằng Website này và
                Dịch vụ là dựa trên những dịch vụ đường truyền Internet và có
                thể bị mất điện hoặc gián đoạn, bị bên ngoài tấn công và xảy ra
                chậm trễ. Trong những trường hợp như vậy, đối với những điều
                khoản này, chúng tôi cam kết nỗ lực khắc phục sự gián đoạn và
                đưa ra sự điều chỉnh, sửa chữa và thay thế trong khả năng có thể
                để phục hồi hệ thống.
              </div>
              <div className="title-term">VIII. SỬ DỤNG KHU VỰC CHUNG</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn hiểu và chấp nhận rằng chúng tôi có quyền quản lý, khai thác
                và sử dụng Khu vực chung trên Website theo quyết định và xem xét
                duy nhất của chúng tôi, mọi yêu cầu của Bạn về sử dụng Khu vực
                chung trên Website cho mục đích riêng của Bạn có thể được tính
                phí ngoài phí dịch vụ qui định trong Hợp đồng.
              </div>
              <div className="title-term">IX. SỬ DỤNG KHU VỰC RIÊNG</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn có toàn quyền sử dụng Khu vực riêng được bảo vệ bằng mật
                khẩu cho các hoạt động của mình. Chúng tôi không can thiệp và
                không chịu trách nhiệm về các thao tác của Bạn tác động lên dữ
                liệu và thông tin trên Khu vực riêng. Mọi yêu cầu phát sinh
                trong việc sử dụng Khu vực riêng không nằm trong cam kết ban đầu
                có thể được tính phí ngoài phí dịch vụ qui định trong Hợp đồng.
              </div>
              <div className="title-term">X. THÔNG TIN LIÊN LẠC</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Chúng tôi khuyến khích Bạn liên hệ với Trung tâm Hỗ trợ khách
                hàng qua hotline 0901.7632.176 từ 8 giờ 30 sáng đến 21 giờ 00
                mỗi ngày khi có nhu cầu hỗ trợ. Bạn có thể dùng công cụ ở mục
                Liên hệ để gửi các yêu cầu cụ thể trong trường hợp các kênh liên
                hệ qua hotline hoặc điện thoại không khả dụng. Thông tin Tài
                khoản quản trị sau khi đăng ký thành công khutro, các thông báo
                tự động từ hệ thống, xác nhận đổi mật khẩu, quên mật khẩu được
                gửi đến Bạn từ email nduy9744@gmail.com. Mọi thông báo tự động
                từ các nguồn khác đều không đáng tin cậy, trong trường hợp Bạn
                nhận được email không đến từ nguồn trên, chúng tôi khuyến nghị
                Bạn liên hệ ngay với Trung tâm hỗ trợ khách hàng để được hỗ trợ
                bởi chúng tôi khuyến cáo Bạn chỉ gửi thông tin Dữ liệu chúng tôi
                nhằm mục đích hỗ trợ, triển khai vào email nduy9744@gmail.com.
                Chúng tôi không đảm bảo Dữ liệu khu trọ của Bạn được bảo mật nếu
                Bạn gửi vào email khác email nêu trong Điều khoản sử dụng này
                hoặc email cá nhân của Nhân viên của chúng tôi.
              </div>
              <div className="title-term">XI. ĐIỀU KHOẢN CHUNG</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Trường hợp có bất kỳ điều khoản nào của Điều khoản sử dụng này
                hết hiệu lực hoặc không thể thi hành vì bất cứ lý do gì sẽ chỉ
                ảnh hưởng đến điều, khoản đã xác định hết hiệu lực đó và không
                ảnh hưởng đến hiệu lực của các điều khoản còn lại. Nếu có sự
                khác biệt giữa Điều khoản sử dụng này và các Thỏa thuận sử dụng
                Dịch vụ thì quy định nào mới nhất sẽ có hiệu lực.
              </div>
              <div className="title-term">XII. DỊCH VỤ BÊN THỨ BA</div>
              <div
                className="content-term"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Bạn hiểu và chấp nhận rằng việc bạn sử dụng dịch vụ gia tăng của
                Bên thứ ba nằm ngoài những thỏa thuận giữa Bạn và chúng tôi được
                qui định trong Hợp đồng dịch vụ; và Bạn sẽ tự chịu mọi trách
                nhiệm liên quan đến việc sử dụng dịch vụ gia tăng do các Bên thứ
                ba cung cấp.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25vh",
                }}
              >
                <div className="topic-term-2">
                  <div className="circle-term-2"></div>
                  <div
                    className="content-circle-XIII-term2"
                    // style={{ position: "relative", bottom: "10px" }}
                  >
                    Đồng hành 24/7 cùng công việc quản lý nhà trọ, căn hộ của
                    bạn
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="content2-circle-XIII-term3">
                  Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên
                  nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt
                  huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ
                  bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển
                  hàng ngày.
                </div>
              </div>
              <Row className="row-term" style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                <Col lg={8} md={24}>
                  <div className="box-last-term">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-term">
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
                      <div className="topic-com-4-term">Hỗ trợ</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-term">
                        Đội ngũ hỗ trợ chuyên nghiệp, nhiệt tình, sáng tạo luôn
                        sẵn sàng phục vụ khách hàng 24/7.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-term">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-term">
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
                      <div className="topic-com-4-term">
                        Hotline: 0901.632.176
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <div className="content-com-4-term">
                        Tổng đài tư vấn miễn phí dành cho khách hàng. Hãy gọi
                        cho chúng tôi ngay khi lúc nào bạn cần.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={24}>
                  <div className="box-last-term">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="icon-hover-term">
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
                      <div className="topic-com-4-term">
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
                      <div className="content-com-4-term">
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

export default Term;
