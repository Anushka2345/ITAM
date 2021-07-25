import React from 'react'
import {Card, Col, Row} from 'antd';
import { Grid } from '../Components/Grid/Grid';
import { LineChart } from '../Components/Charts/LineChart';


export default function Stats() {
    return (
        <Col span={24}>
        <Row gutter={[16, 16]}>
            <Col span={24}>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                    <Grid name="PORT_USED"/>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>
                <LineChart name="PORT_USED" title="Devices"/>
                </Card>
            </Col>
        </Row>
        </Col>
    )
}

