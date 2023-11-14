import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import logo from "assets/users/img/logo.png";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategory, setShowCategory] = useState();
  const [menus] = useState([
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
          path: ROUTERS.USER.FOOD,
        },
        {
          name: "Phụ kiện",
          path: ROUTERS.USER.ACCESSORY,
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
                {menus.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu.path}>{menu.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
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
      <div className="container">
        <div className="row hero__category_container">
          <div className="col-lg-3 hero__category">
            <div
              className="hero__category__all"
              onClick={() => setShowCategory(!isShowCategory)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            <ul className={isShowCategory ? "" : "hidden"}>
              <li>
                <Link to={"#"}>Thức ăn cho Chó</Link>
              </li>
              <li>
                <Link to={"#"}>Thức ăn cho Mèo</Link>
              </li>
              <li>
                <Link to={"#"}>Phụ kiện</Link>
              </li>
              <li>
                <Link to={"#"}>Dụng cụ ăn uống</Link>
              </li>
              <li>
                <Link to={"#"}>Dụng cụ Spa</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">Phai</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
