import React, {useState} from 'react'
import {
    Card,
    Col,
    Row,
    Typography,
    Tree,
    Divider
} from 'antd';
import { EventDataNode, DataNode } from 'antd/lib/tree';

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
    const [selectedFile, setSelectedFile] = useState<{title: string | React.ReactNode, desc:string}>({
        title: 'File Name',
        desc: 'You can see the file function from selecting the directory tree.'
    })
    const treeData = [
        {
            title: 'assets',

            key: 'assets',
            desc: "For storing all assets such as image or styles",
            children: [
                { title: 'antd.png', key: 'antd.png',  isLeaf: true, desc: "Default logo of Ant Design, of course you can change it." },
                { title: 'index.scss', key: 'index.scss', isLeaf: true,  desc: "All styles are inside this file. You could make your own styles and just place in in index.tsx" },
            ],
        },
        {
            title: 'Components',

            key: 'Components',
            desc: "You can store all component for Views in this directory",
            children: [
                {
                    title: 'Footer', key: 'Footer', isLeaf: false,  desc: "Folder where you store components for footer",
                    children: [
                        { title: 'AdminFooter.tsx', key: 'AdminFooter.tsx', isLeaf: true, desc: "Footer for Admin Layout."}
                    ]
                },
                {
                    title: 'Header', key: 'Header',  isLeaf: false, desc: "Folder where you store components for header",
                    children: [
                        { title: 'AdminHeader.tsx', key: 'AdminHeader.tsx', isLeaf: true, desc: "Header for Admin Layout." }
                    ]
                },
                {
                    title: 'Shared', key: 'Shared',  isLeaf: false, desc: "Some components are used widely, you can store them inside this directory."
                },
                {
                    title: 'Sidebar', key: 'Sidebar',  isLeaf: false, desc: "Directory for storing Sidebar components",
                    children: [
                        { title: 'Sidebar.tsx', key: 'Sidebar.tsx', isLeaf: true, desc: "Sidebar for the Admin layout. Routes that showed in this sidebar are from Routes.ts" }
                    ]
                },
            ],
        },
        {
            title: 'Layouts',

            key: 'Layouts',
            desc: "This admin dashboard has two layouts, first is for authentication such as login and the second one is for the admin itself. You can check it in index.tsx",
            children: [
                { title: 'Admin.tsx', key: 'Admin.tsx',  isLeaf: true, desc: "Main layout for Admin. Everything with /admin route belongs to this layout." },
                { title: 'Auth.tsx', key: 'Auth.tsx', isLeaf: true,  desc: "Main layout for authentication. Everything with /auth route belongs to this layout." },
            ],
        },
        {
            title: 'index.tsx',

            key: 'index.tsx',
            desc: "Main file of React",
            isLeaf: true
        },
        {
            title: 'Models.tsx',

            key: 'Models.tsx',
            desc: "This file is used for storing Interfaces or Types of components such as component's props or state.",
            isLeaf: true
        },
        {
            title: 'react-app-env.d.ts',

            key: 'react-app-env.d.ts',
            desc: "Default react typescript env file. You can delete it if you want to.",
            isLeaf: true
        },
        {
            title: 'Routes.ts',

            key: 'Routes.ts',
            desc: "All available route must be declare inside this file and inside variable routes.",
            isLeaf: true
        },
    ];
    const onSelect = (keys: React.Key[], event: OnSelectEvent) => setSelectedFile({
        title: event.node.title,
        desc: event.node.desc || ""
    });

    const onExpand = () => {
        console.log('Trigger Expand');
    };
    return (
             <Col span={24}>
        <Row gutter={[16, 16]}>
            <Col span={24}>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card style={{minHeight:"300px",backgroundColor:'WHITE'}} bordered>

                </Card>
                </Col>
                </Row>
                </Col>
    )
}