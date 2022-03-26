import React, { useEffect, useRef, useState } from "react";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutMainPageStyle } from "../antd-custom-components/Layout";
const { Header, Content, Footer } = Layout;

export default function LayoutMainPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleRoute = (e) => {
    navigate(e.key);
  };

  return (
    <LayoutMainPageStyle>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          onClick={handleRoute}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/list-repository">List Repository</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Zens07 ©2018 Created by Muhammad Nur Zaeni
      </Footer>
    </LayoutMainPageStyle>
  );
}
