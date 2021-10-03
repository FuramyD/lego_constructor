import './Sidebar-header-item.scss';
import React, {MouseEventHandler} from "react";
import {TabModel} from "../../../../../models/ui.model";

export function SidebarHeaderItem(props: {
    tab: TabModel;
    activateTab: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div className={`sidebar__tabs-item ${props.tab.isActive && '_active'}`}
             onClick={props.activateTab}
        >{props.tab.title}</div>
    )
}
