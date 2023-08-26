import React from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;