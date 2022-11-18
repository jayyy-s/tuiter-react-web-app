import React from "react";
import TuitsList from "./tuits-list";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening />
            <TuitsList />
        </>

    );
}

export default HomeComponent;

