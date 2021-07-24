import React from 'react'
import moment from "moment";
import Register from "./Pages/register"
import { 
    Card, 
    Col, 
    Row ,
    Statistic,
    Typography,
    Tabs,
    Comment,
    Avatar,
    List
} from 'antd';
import {
    FolderTwoTone,
    SmileTwoTone,
    CalendarTwoTone,
    BugTwoTone,
} from "@ant-design/icons"

const { TabPane } = Tabs;
const { Title, Text, Link } = Typography;


export default function Dashboard() {

    return (

     <Col span={24}>
        <Row gutter={[16, 16]}>
            <Col span={24}>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
            </Col>
        </Row>

        </Col>



    )
}