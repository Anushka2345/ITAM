import React from 'react'
import {Card, Col, Row} from 'antd';
import { Grid } from '../Components/Grid/Grid';
import { PieChart } from '../Components/Charts/PieChart';


export default function TCP() {
    return (
        <Col span={24}>
        <Row gutter={[16, 16]}>
            <Col span={24}>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <Grid name="TCP"/>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <PieChart name="TCP" title="TCP Ports"/>
                </Card>
            </Col>
        </Row>
        </Col>
    )
}