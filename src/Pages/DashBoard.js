import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import BMICalculator from '../Components/BMI-Calculator';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import Gallery from '../Components/Gallery';
import LandingPages from '../Components/LandingPages/LandingPage/LandingPages';

const { Header, Sider, Content } = Layout;

const DashBoard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '0',
                            label: 'DashBoard',
                        },
                        {
                            key: '1',
                            icon: <Link to='/dashboard/Gallery'><UserOutlined /></Link>,
                            label: 'Gallery',
                        },
                        {
                            key: '2',
                            icon: <Link to='/dashboard/BMI'><UserOutlined /></Link>,
                            label: 'BMI Calculator',
                        },
                        {
                            key: '3',
                            icon: <Link to='/dashboard/VideoPlayer'><UserOutlined /></Link>,
                            label: 'Video Player',
                        },
                        {
                            key: '4',
                            icon: <Link to='/dashboard/LandingPages'><UserOutlined /></Link>,
                            label: 'Landing Pages',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {/* <BMICalculator/> */}
                    <Routes>
                        <Route path='/BMI' element={< BMICalculator />} />
                        <Route path='/Gallery' element={< Gallery />} />
                        <Route path='/VideoPlayer' element={< VideoPlayer />} />
                        <Route path='/LandingPages' element={< LandingPages />} />
                    </Routes>

                </Content>
            </Layout>
        </Layout>
    );
};
export default DashBoard;