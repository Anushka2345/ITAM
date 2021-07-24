import React from 'react'
import { Form, Input, Button, Checkbox, Card, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import Logo from "../../assets/antd.png"
import axios from 'axios';

export default function register() {

    async function onFinish(values: any)  {
        const response = await axios.post("http://127.0.0.1:5000/register", values)
        console.log(response)
    }

    return (
        <Card id="auth-card" style={{backgroundColor:'#EAE7DC', borderColor:'#24305E'}}>

            <Form
                name="normal_login"
                className="auth-form"
                initialValues={{ remember: true }}
                onFinish={(values) => onFinish(values)}
                style={{backgroundColor:'#EAE7DC'}}


            >

                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="Firstname"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                </Form.Item>
                 <Form.Item
                    name="Lastname"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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

                <Form.Item className="mt2">
                  <Form.Item noStyle>
                    <Button type="primary" style={{background:'#88BDBC' ,borderColor:'#88BDBC'}} htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                   </Form.Item>

                    <Link className="login-form-forgot" to="/auth/login"
                    style={{textAlign:"left",color:'#24305E' }}>
                      Already have an account?Login.
                    </Link>
                </Form.Item>
            </Form>
        </Card>
    )
}