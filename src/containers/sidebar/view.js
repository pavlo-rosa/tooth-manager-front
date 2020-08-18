import React, { useState, useEffect } from "react";

import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles.scss";
import Routes from "../../routes";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function View() {
  const initialNavbarCollapsed = () => localStorage.getItem("navCollapsed") === "true";
  const [collapsed, setCollapsed] = useState(initialNavbarCollapsed);

  const onCollapse = (col) => {
    setCollapsed(col);
  };

  useEffect(() => {
    window.localStorage.setItem("navCollapsed", collapsed);
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <div className="site-layout-background" style={{ padding: 16, minHeight: 360 }}>
            <Routes />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default View;
