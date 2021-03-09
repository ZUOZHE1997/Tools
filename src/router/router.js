import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from "../views/layout/index"
import {routes} from "./tools";


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact/>
            {routes.map(p => {
                return <Route path={`${p.path}/:title`} component={p.component} exact key={p.path}/>
            })}
            {/*<Route exact path="/" component={Home}/>*/}
            {/*<Route exact path="/format/json" component={FormatJson} />*/}
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
        </Switch>
    </HashRouter>
);

export default BasicRoute;
