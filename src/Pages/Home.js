import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleInputUser = (event) =>{
        setUser(event.target.value)
    } 
    const handleInputPass = (event) =>{
        setPass(event.target.value)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        if (user === 'admin' && pass === 'admin'){
            navigate('/dashboard');
        }
        else{
            alert("Bạn đã nhập sai thông tin đăng nhập!!!");
            return;
        }
    };
    return(
    <div className='home'>
        <p className='home-text'>Welcome to DashBoard</p>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item 
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input  onChange={(event)=>handleInputUser(event)} value={user}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password  onChange={(event)=>handleInputPass(event)} value={pass}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
    );
}
export default Home;