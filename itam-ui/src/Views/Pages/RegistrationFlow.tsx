import React from 'react'
import { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Image} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

import MuiAlert from '@material-ui/lab/Alert';
import HorizontalNonLinearAlternativeLabelStepper from "../../Components/Stepper/Stepper";

export default function Login(props: any) {

    const [error, setError] = useState(0)

    function Alert(props: any) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    async function onFinish(values: any)  {
        const response = await axios.post("http://127.0.0.1:5000/login", values).then(
            res => {setError(2)}).catch(e => setError(1))
    }

    return (

        <Card id="auth-card"
              style={{backgroundColor:'#EAE7DC',borderColor:'#24305E'}}>
            <HorizontalNonLinearAlternativeLabelStepper/>
        </Card>

    )
}
