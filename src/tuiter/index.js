import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import './index.css';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {useLocation, useParams} from "react-router";
import Home from "./home";

const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
    }
});

function Tuiter() {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    let activeComponent = <ExploreComponent/>

    if (active === 'home') {
        activeComponent = <Home/>
    }
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={active}/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    {activeComponent}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter