import React from 'react'
import moment from "moment";
import Register from "./register";
import { Layout } from 'antd'


import {
    Card,
    Col,
    Row ,
    Typography,
} from 'antd';

const { Title } = Typography;
const { Content } = Layout;

export default function welcome() {

    return (
        <Layout>
            <Content>
                content
            </Content>
            <Col span={24}>
                 <Card style={{minHeight:"550px",backgroundColor:'#EAE7DC', borderColor:'#3303C6C'}} bordered>
                     <Title level={3}></Title>
                     <Row gutter={[16,16]}>
                     <Row gutter={[16,16]}>
                        <Col xs={14} sm={14} md={24} >
                         <Card style={{minHeight:"300px", minWidth:"300px",backgroundColor:'#88BDBC'}} bordered>
                         </Card>
                       </Col>
                       <Col xs={24} sm={24} md={12}>
                           <Card style={{minHeight:"200px", minWidth:"300px", backgroundColor:'#E98074'}} bordered>
                            </Card>
                       </Col>
                       <Col xs={24} sm={24} md={12}>
                           <Card style={{minHeight:"200px",backgroundColor:'#FBE8A6'}} bordered></Card>
                       </Col>
                     </Row>
                     <Col span={9} offset={1}
                     >
                  <Register />
                  </Col>
                  </Row>
                 </Card>
             </Col>
        </Layout>
             



     )
 }
