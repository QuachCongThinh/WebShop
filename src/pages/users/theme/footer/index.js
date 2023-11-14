import { memo } from "react";
import "./style.scss";
import logo from "assets/users/img/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { ROUTERS } from "utils/router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <div className="footer__about__logo">
                <img src={logo}></img>
              </div>
              <ul>
                <li>Địa chỉ: Hồ Chí Minh</li>
                <li>Phone: 09xxx.xxx.xx</li>
                <li>Email: PetShop@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h4>Cửa hàng</h4>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.CONTACT}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={ROUTERS.USER.PRODUCTS}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin Tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h4>Khuyến mãi & Ưu đãi</h4>
              <p>Đăng ký để nhận thông tin tại đây.</p>
              <form action="#">
                <div>
                  <input type="text" placeholder="Nhập Email..." />
                  <button type="submit" className="button-submit">
                    ĐĂNG KÝ
                  </button>
                </div>
                <div className="footer__widget__social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
