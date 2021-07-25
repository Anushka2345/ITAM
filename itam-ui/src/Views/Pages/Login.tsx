import React from 'react'
import { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Image} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png"
import { Redirect } from "react-router-dom";
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

export default function Login(props: any) {
    const [error, setError] = useState(0)
    function Alert(props: any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }


    async function onFinish(values: any)  {
         await axios.post("http://127.0.0.1:5000/login", values).then(
            res => {setError(2)}).catch(e => setError(1))
    }
    return (
        <Card id="auth-card"
              style={{backgroundColor:'#EAE7DC',borderColor:'#24305E'}}>
            <Image
                className="mb3 mt2"
                width={125}
                src={Logo}
                preview={false}
            />
            {error===1?
                <Alert severity="error" >enter valid username and password</Alert>
                :error===2?
                    <Redirect from="/auth/login" to="/admin/index" />:<div> </div>}

            <Form
                name="normal_login"
                className="auth-form"
                initialValues={{ remember: true }}
                onFinish={(values) => onFinish(values)}
                style={{backgroundColor:'#EAE7DC'}}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Enter valid username' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Enter valid password' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="mt2">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot" to="/auth/login"
                          style={{textAlign:"left",color:'BLACK' }}>
                        Forgot password
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary"  htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
