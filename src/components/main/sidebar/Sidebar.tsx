import './Sidebar.scss';
import '../../../index.scss';
import {SidebarHeaderItem} from "./sidebar-header/sidebar-header-item/sidebar-header-item";
import {TabModel} from "../../../models/ui.model";
import {MouseEventHandler} from "react";

export function Sidebar() {
    let tabs = [
        {id: 1, title: 'Details', isActive: true},
        {id: 2, title: 'Import', isActive: false},
    ];

    return (
        <div className="sidebar">
            <div className="sidebar__tabs">
                {tabs.map(tab => {
                   return <SidebarHeaderItem tab={tab} activateTab={activateTab}/>
                })}

            </div>
            <div className="sidebar__content"></div>
            <div className="sidebar__controls">
                <button className="btn btn-default">Use selected frame</button>
                <button className="btn btn-primary">Save view as image</button>
            </div>
        </div>
    );

    function activateTab(id: number): MouseEventHandler<HTMLDivElement> | undefined {
        tabs = tabs.map((tab) => {
            return tab.id === id ? {...tab, isActive: true} : {...tab, isActive: false};
        })
    }
}
