import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineContacts,
  AiOutlineLinkedin,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import logo from "assets/users/img/logo.png";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menu, setMenu] = useState([
    {
      name: "Trang Chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản Phẩm",
      path: ROUTERS.USER.PRODUCTS,
      isShowSubmenu: false,
      child: [
        {
          name: "Thức ăn",
          path: "",
        },
        {
          name: "Phụ kiện",
          path: "",
        },
      ],
    },
    {
      name: "Bài Viết",
      path: ROUTERS.USER.BLOG,
    },
    {
      name: "Liên Hệ",
      path: ROUTERS.USER.CONTACT,
    },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail /> PetShop@gmail.com
                </li>
                <li>Miễn phí giao hàng từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineContacts />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                </li>
                <span>Đăng nhập</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                <li>Trang chủ</li>
                <li>
                  <Link to={""}>Sản phẩm</Link>
                  <ul>
                    <li>Thức ăn</li>
                    <li>Phụ kiện</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__price">
                <span>Total: {formatter(1200000)}</span>
              </div>
              <li>
                <Link to={""}>
                  <AiOutlineShoppingCart /> <span>5</span>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
