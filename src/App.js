import './App.css'
import {Layout} from 'antd'
import BasicRoute from "./router/router";
import React from "react";

const {Header, Content} = Layout


function App() {
    return (
        <Layout>
            <Header>
                <p className="app-header">Header</p>
            </Header>
            <Content className="app-content" >
                <BasicRoute/>
            </Content>
        </Layout>
    )
}

export default App
