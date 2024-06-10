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
import { Link, NavLink, Outlet } from "react-router-dom";
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
        <div className="flex flex-row item-center">
          <div>
            <img
              src={userInfo?.avatar}
              alt="user avatar"
              className="w-8 h-8 rounded-full border border-primary"
            />
          </div>
          <div className="text-xs ml-2">{userInfo?.userName}</div>
          {/* <li className="font-normal text-sm">{userInfo?.phoneNum}</li> */}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          style={{ alignItems: "center" }}
          className="flex flex-row w-full rounded-md py-1.5 px-2 duration-300 text-primary hover:bg-hoverColor"
          onClick={() => dispatch(logoutAC())}
        >
          <LogoutOutlined /> logout
        </Button>
      ),
    },
  ];

  return (
    <Layout>
      <Layout.Sider
        style={{ background: "#EEEEFF" }}
        trigger={null}
        collapsible={false}
      >
        <div>
          <div className="pt-5 pl-5 pb-5 mb-3">
            {/* <LogoIcon /> */}
            <img src="/logo.svg" width={148} alt="logo" />
          </div>
        </div>
        <MainNav />
        <div className="p-3">
          <div className="bg-white rounded-lg p-4">
            <h4 className="text-base">Учитесь бесплатно</h4>
            <p className="text-[10px] font-light mt-2 mb-4">
              Приводите друзей с детьми заниматься в Sirius Future и получайте
              подарки!
            </p>
            <Button type="primary">Узнать</Button>
          </div>
        </div>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="header__inner-container">
            <Space className="pl-8">
              <h2 className="text-2xl">
                Добро пожаловать,{" "}
                <span className="text-primary">{userInfo?.userName}</span>!
              </h2>
            </Space>
            <Space size={"large"}>
              <Space>
                <Badge count={2}>
                  <NavLink className={"flex border border-[#7362BC] rounded-full p-[9px]"} to={"/notifications"}>
                    <img src="/icons/Messages-Chat.svg" alt="chat" />
                  </NavLink>
                </Badge>
              </Space>
              <Dropdown menu={{ items }} placement="bottom" arrow>
                <Space>
                  {/* <div>
                    <p style={{ marginBottom: "3px" }} className="header-txt">
                      {userInfo?.userName}
                    </p>
                  </div> */}
                  <Space>
                    <Link to={'/profile'}  >
                    <Avatar className="w-11 h-11 border border-[#7362BC] rounded-full " src={userInfo?.avatar} alt="avatar" ></Avatar>
                      {/* <img className="w-11 h-11 border border-[#7362BC] rounded-full " src={userInfo?.avatar} alt="avatar" /> */}
                    </Link>
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
        {/* <Layout.Footer style={{ textAlign: "center" }}>
           ©2024
        </Layout.Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
