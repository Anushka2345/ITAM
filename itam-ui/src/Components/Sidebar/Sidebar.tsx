import React from 'react'
import {SidebarPropsType} from "../../Models"
import {
    Layout,
    Image,
    Menu,
} from "antd"
import {Link} from "react-router-dom";

import Logo from "../../assets/logo.png";
import { Grid } from '../Grid/Grid';
const {Sider} = Layout;
const { SubMenu } = Menu;


export default function Sidebar(props: SidebarPropsType) {
    const createLinks = () => {
        return props.routes.map((prop, key) => {
            if (prop.isSidemenu) {
                return (
                    <Menu.Item key={key} icon={<prop.icon />}>
                        <Link to={prop.layout + prop.path}>
                            {prop.name}
                        </Link>
                        
                    </Menu.Item>
                )
            }
            return null;
        });
    }
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '200vh',
                position: 'fixed',
                left: 0,

            }}
            breakpoint="sm"
            collapsedWidth="0"
            collapsible
            collapsed={props.collapsed}
            trigger={null}
            theme='dark'
        >
            <Image
                className={props.collapsed ? "ml2 my2" : "ml3 pl2 my2"}
                width={props.collapsed ? 50 : 100}
                src={Logo}
            />
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme = 'dark'
            >
                {createLinks()}
            </Menu>
        </Sider>
    )
}
