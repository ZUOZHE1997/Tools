import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from "../views/layout/index"
import {FormatJson} from "../views/format/json";

const routes = [
    {
        path: '/',
        title: '首页',
        component: Home,
    },
    {
        path: '/format/json',
        title: 'JSON格式化',
        component: FormatJson
    }
]

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {routes.map(p => {
                return <Route path={p.path} component={p.component} exact key={p.path}/>
            })}
            {/*<Route exact path="/" component={Home}/>*/}
            {/*<Route exact path="/format/json" component={FormatJson} />*/}
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
        </Switch>
    </HashRouter>
);

export default BasicRoute;
