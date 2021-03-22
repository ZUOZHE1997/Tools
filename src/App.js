import './App.css'
import BasicRoute from "./router/router";
import React from "react";
import { Button } from 'antd';

function SwitchButton() {
    return (
        <Button type="link">切换按钮</Button>
    )
}

function App() {
    return (
        <div className="app-content">
            <div style={{width: '960px'}}>
                <p className="app-header">⚙Tools</p>
                {/* <SwitchButton /> */}
                <BasicRoute/>
            </div>
        </div>
    )
}

export default App
