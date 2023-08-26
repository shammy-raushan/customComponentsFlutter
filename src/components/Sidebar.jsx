import React from "react";
import classes from "./Sidebar.module.scss";
import { SidebarData } from "../data/SidebarData";
function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__list}>
                {SidebarData.map((val, key) => {
                    return (
                        <div key={key}
                            className={classes.sidebar__list__item}
                            // id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}>
                            <div id="icon" className={classes.sidebar__icon}>{val.icon}</div>
                            <div id="title" className={classes.sidebar__title}>{val.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Sidebar;



