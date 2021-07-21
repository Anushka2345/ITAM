import React from 'react'
import {
    Layout,
    Typography,
} from "antd"
const {Footer} = Layout;
const {Link}  = Typography;

export default function AdminFooter() {

    return (
        <Footer style={{ textAlign: 'center' }}>
           ITAM ©2021 Created with 💙 by <Link href="https://github.com/Anushka2345/p2p" target="_blank"> P2P</Link>
        </Footer>
    )
}
