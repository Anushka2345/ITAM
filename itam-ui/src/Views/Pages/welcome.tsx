import React from 'react'
import moment from "moment";
import Register from "./register";


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

export default function welcome() {

    return (
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
                           <Card style={{minHeight:"200px",backgroundColor:'#FBE8A6'}} bordered>

                            </Card>
                       </Col>
                     </Row>
                     <Col span={9} offset={1}
                     >
                  <Register />
                  </Col>
                  </Row>
                 </Card>
             </Col>



     )
 }
