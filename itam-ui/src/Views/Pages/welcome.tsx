import React from 'react'
import moment from "moment";
import Register from "./register";
import {
    PageHeader
} from 'antd';

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
import { Layout } from 'antd';
const { Content } = Layout;
const { TabPane } = Tabs;
const { Title, Text, Link } = Typography;

export default function welcome() {

    return ( <React.Fragment>
                <Layout style={{height:'100vh'}}>
                 <PageHeader style={{ textAlign: 'center',backgroundColor:'#88BDBC', zIndex: 1, width: '100%' ,minHeight:'5%' }}>
                 P2P SIGN UP
      </PageHeader>
      <Content style={{ margin: '0 0 0', overflow: 'initial',backgroundColor:'#EAE7DC',height:'100vh'}}>

                            <Card style={{ backgroundColor:'#EAE7DC',borderColor:'#EAE7DC', minHeight: '100%',minWidth: '60%' }}>
                             <Register
                              />
                            </Card>

                        </Content>

                    </Layout>

            </React.Fragment>
        )
 }
