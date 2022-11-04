import {useSelector} from "react-redux";
import React from "react";
import TuitsList from "./tuis-list";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    const tuitsArray = useSelector(state => state.tuits);
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening />
            <TuitsList />
        </>

    );
}

export default HomeComponent;

