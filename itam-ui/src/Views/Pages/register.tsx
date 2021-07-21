import React from 'react'
import { Form, Input, Button, Checkbox, Card, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import Logo from "../../assets/antd.png"
export default function register() {
    return (
        <Card id="auth-card">
            <Image
                className="mb3 mt2"
                width={100}
                src={Logo}
                preview={false}
            />
            <Form
                name="normal_login"
                className="auth-form"
                initialValues={{ remember: true }}
                onFinish={(values) => console.log(values)}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="First name"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                </Form.Item>
                 <Form.Item
                    name="Last name"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                </Form.Item>

                <Form.Item
                    name="Organisation"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Organisation" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="rpassword"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Re-enter password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}