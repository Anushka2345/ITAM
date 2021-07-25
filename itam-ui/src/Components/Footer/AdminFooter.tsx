import React from 'react'
import {
    Layout,
    Typography,
} from "antd"
const {Footer} = Layout;
const {Link}  = Typography;
export default function AdminFooter() {
    return (
       <Footer style={{ textAlign: 'center',height:'10vh',color:"#303C6C" }}>
           ITAM ©2021 by Hello_World
        </Footer>


    )
}
