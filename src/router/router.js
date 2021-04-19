import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {routers} from "./all";

import Home from "../views/home/index"


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact/>
            {routers.map(p => {
                return p.children.map(k => {
                    return <Route path={`${k.path}:title`} component={k.component} exact key={k.path}/>
                })
            })}
            {/*<Route exact path="/" component={Home}/>*/}
            {/*<Route exact path="/format/json" component={FormatJson} />*/}
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
        </Switch>

    </HashRouter>
);

export default BasicRoute;
