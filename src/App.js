import './App.css'
import BasicRoute from "./router/router";
import React from "react";


function App() {
    return (
        <div className="app-content">
            <div style={{width: '1280px'}}>
                <p className="app-header">⚙Tools</p>
                <BasicRoute />
            </div>
        </div>
    )
}

export default App
