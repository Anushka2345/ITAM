import React from 'react'
import moment from "moment";
import { Card, Col, Row, Statistic, Typography, Tabs, Comment, Avatar, List} from 'antd';
import { Grid } from '../Components/Grid/Grid';
import { LineChart } from '../Components/Charts/LineChart';
import { PieChart } from '../Components/Charts/PieChart';
import {Link} from "react-router-dom";

export default function DYNPage() {
    return (
     <Col span={24}>
        <Row gutter={[16, 16]}>
            <Col span={24}>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <Link to="/admin/devicesDiscovered"><LineChart name="PORT_USED" title="Devices"/></Link>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <Link to="/admin/hostDetails"><PieChart name='DETAILS' title="OS Types"/></Link>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <Link to="/admin/tcp"><PieChart name="TCP" title="TCP Ports"/></Link>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <Link to="/admin/udp"><PieChart name="UDP" title="UDP Ports"/></Link>
                </Card>
            </Col>
        </Row>
     </Col>
    )
}