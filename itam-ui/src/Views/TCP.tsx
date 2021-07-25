import React, {useState} from 'react'
import {Card, Col, Row, Typography, Tree, Divider} from 'antd';
import { EventDataNode, DataNode } from 'antd/lib/tree';
import { Grid } from '../Components/Grid/Grid';
import { PieChart } from '../Components/Charts/PieChart';

const { Title, Text, Link, Paragraph } = Typography;
const { DirectoryTree } = Tree;

interface FileEventDataNode extends EventDataNode {
    desc?: string
}
interface OnSelectEvent {
    event: "select";
    selected: boolean;
    node: FileEventDataNode;
    selectedNodes: DataNode[];
    nativeEvent: MouseEvent;
}

export default function About() {
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