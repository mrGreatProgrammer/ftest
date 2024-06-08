import {
  CarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingFilled,
  BellFilled,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logoutAC } from "../../store/usersSlice";
import MainNav from "../navs/MainNav";

interface MainLayoutProps {
  // children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = (): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.usersSlice);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <ul>
          <li className="font-bold text-base">{userInfo?.userName}</li>
          <li className="font-normal text-sm">{userInfo?.phoneNum}</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          style={{ alignItems: "center" }}
          className="flex flex-row bg-primary w-full rounded-md py-1.5 px-2 duration-300 text-white hover:bg-hoverColor"
          onClick={() => dispatch(logoutAC())}
        >
          <LogoutOutlined /> logout
        </Button>
      ),
    },
  ];

  return (
    <Layout>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div>
          <div>
            {/* <LogoIcon /> */}
            <img src="/logo.svg" width={75} alt="" />
          </div>
        </div>
        <MainNav />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="header__inner-container">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Space size={"large"}>
              <Space>
                <NavLink to={"/settings"}>
                  <SettingFilled
                    className="icon"
                    // size={28}
                    width={"36px"}
                    height={"36px"}
                    color="#1f1f1f"
                  />
                </NavLink>
              </Space>
              <Space>
                <Badge count={1}>
                  <NavLink to={"/notifications"}>
                    <BellFilled className="icon" />
                  </NavLink>
                </Badge>
              </Space>
              <Dropdown menu={{ items }} placement="bottom" arrow>
                <Space>
                  <div>
                    <p style={{ marginBottom: "3px" }} className="header-txt">
                      {userInfo?.userName}
                    </p>
                    <p className="header-txt">{userInfo?.role}</p>
                  </div>
                  <Space>
                    <Avatar>{userInfo?.userName[0]}</Avatar>
                  </Space>
                </Space>
              </Dropdown>
            </Space>
          </div>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Elegantos-Admin ©2023-2024
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
