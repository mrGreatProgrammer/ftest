import {
    CarOutlined,
    HomeFilled,
    HomeOutlined,
    PieChartOutlined,
    TeamOutlined,
  } from "@ant-design/icons";
  import { Menu, MenuProps } from "antd";
  import React from "react";
  import { NavLink, useLocation } from "react-router-dom";
  import { RiAdvertisementLine } from "react-icons/ri";
  
  type MenuItem = Required<MenuProps>["items"][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    icon?: React.ReactNode
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem(
      "statistics",
      "statistics",
      [
        getItem(<NavLink to="/">main</NavLink>, "/"),
        getItem(
          <NavLink to="/statistics/users">users' statistics</NavLink>,
          "user-statistics"
        ),
        getItem(
          <NavLink to="/statistics/announcement">
            announcements' statistics
          </NavLink>,
          "statistics-announcement"
        ),
      ],
      <PieChartOutlined />
    ),
    getItem(
      <NavLink to="/users">Пользователи</NavLink>,
      "users",
      [getItem(<NavLink to="/users">Все пользователи</NavLink>, "users")],
      <TeamOutlined />
    ),
    getItem(
      <NavLink to="/services">Услуги</NavLink>,
      "services",
      [
        getItem(<NavLink to="/services/">Все услуги</NavLink>, "services"),
        getItem(
          <NavLink to="/services/attributes">атрибуты</NavLink>,
          "services_attrs",
          [
            getItem(
              <NavLink to="/services/attributes/category">категории</NavLink>,
              "/services/category"
            ),
            // getItem(<NavLink to={'/houses/attributes/type'} >Тип недвижимости</NavLink> , "/houses/type"),
            // getItem(<NavLink to={'/houses/attributes/comforts'} >Удобство</NavLink> , "/houses/type"),
          ]
        ),
      ],
      <HomeOutlined />
    ),
    getItem(
      <NavLink to="/advs">Реклама</NavLink>,
      "advs",
      [
        getItem(<NavLink to="/advs/">advs types</NavLink>, "advs"),
        getItem(<NavLink to="/advs/ordered">all advs ordered</NavLink>, "advs"),
      ],
      <RiAdvertisementLine />
    ),
  ];
  
  const MainNav = () => {
    // const navigation = useNavigation();
    const location = useLocation();
    const [current, setCurrent] = React.useState("graphic");
    const onClick: MenuProps["onClick"] = (e) => {
      console.log("click ", e);
      setCurrent(e.key);
    };
  
    return (
      <Menu
        style={{ overflow: "auto", height: "90vh", color: "#fff" }}
        theme="dark"
        mode="inline"
        onClick={onClick}
        selectedKeys={[location.pathname]}
        items={items}
      />
    );
  };
  
  export default MainNav;