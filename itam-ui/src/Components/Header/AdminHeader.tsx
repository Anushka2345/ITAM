import React from 'react'
import {AdminHeaderPropsType} from "../../Models"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"
import {Link} from "react-router-dom";
import {
    PageHeader
} from 'antd';
export default function AdminHeader(props: AdminHeaderPropsType) {
    
    return (
        <PageHeader style={{ textAlign: 'center',backgroundColor:'white', zIndex: 1, width: '100%' ,minHeight:'100px' }}
        backIcon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className="site-layout-background"
        onBack={props.toggleCollapsed}
        title={props.currentRouteText}>
        <Menu style={{ textAlign: 'center', zIndex: 1, width: '100%'}} mode="horizontal" defaultSelectedKeys={['1']} theme='dark'>
        <Menu.Item key="1">
            <Link to="/admin/index">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/admin/devicesDiscovered">Devices Discovered</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/admin/hostDetails">Host Details</Link>
        </Menu.Item>
        <Menu.Item key="4">
            <Link to="/admin/tcp">TCP Details</Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to="/admin/udp">UDP Details</Link>
        </Menu.Item>
            <Menu.Item key="6">
                <a href="https://www.shodan.io/host/157.48.202.2">IP Details</a>
            </Menu.Item>

      </Menu>
      </PageHeader>

    )
}
