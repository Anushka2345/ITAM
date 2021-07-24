import React from 'react'
import {AdminHeaderPropsType} from "../../Models"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"
import {
    PageHeader
} from 'antd';
export default function AdminHeader(props: AdminHeaderPropsType) {
    return (
        <PageHeader style={{ textAlign: 'center',backgroundColor:'#88BDBC', zIndex: 1, width: '100%' ,minHeight:'100px' }}
        backIcon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className="site-layout-background"
        onBack={props.toggleCollapsed}
        title={props.currentRouteText}>
        <Menu style={{ textAlign: 'center', zIndex: 1, width: '100%'}} mode="horizontal" defaultSelectedKeys={['1']} theme='dark'>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </PageHeader>

    )
}
