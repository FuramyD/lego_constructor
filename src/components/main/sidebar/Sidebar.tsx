import './Sidebar.scss';
import '../../../index.scss';
import {SidebarHeaderItem} from "./sidebar-header/sidebar-header-item/Sidebar-header-item";
import React, {MouseEventHandler} from "react";
import {LegoDetails} from "../../lego-details/Lego-details";
import {TabModel} from "../../../models/ui.model";
import {Search} from "../../search/Search";

export function Sidebar() {
    const [tabs, setTabs] = React.useState([
        {id: 1, title: 'Details', isActive: true},
        {id: 2, title: 'Import', isActive: false},
    ]);

    const [details, setDetails] = React.useState([
        {id: 1, name: 'Detail_1', description: 'Description_1'},
        {id: 2, name: 'Detail_2', description: 'Description_2'},
        {id: 3, name: 'Detail_3', description: 'Description_3'},
        {id: 4, name: 'Detail_4', description: 'Description_4'},
        {id: 5, name: 'Detail_5', description: 'Description_5'},
        {id: 6, name: 'Detail_6', description: 'Description_6'},
    ]);

    const [listVisibility, setListVisibility] = React.useState(false);

    return (
        <div className="sidebar">
            <div className="sidebar__tabs">
                {tabs.map(tab => {
                   return <SidebarHeaderItem tab={tab} activateTab={activateTab.bind(null, tab.id) as MouseEventHandler<HTMLDivElement>} key={tab.id} />
                })}

            </div>
            <div className="sidebar__search">
                <Search items={details} placeholder={"Enter detail name"}
                        listVisibility={listVisibility}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        key={details.length}
                />
            </div>
            <div className="sidebar__content">
                <LegoDetails />
            </div>
            <div className="sidebar__controls">
                <button className="btn btn-default">Use selected frame</button>
                <button className="btn btn-primary">Save view as image</button>
            </div>
        </div>
    );

    function activateTab(id: number): void {
        setTabs(tabs => tabs.map((tab: TabModel) => ({...tab, isActive: tab.id === id})));
    }

    function onSearch() {

    }

    function onFocus(): void {
        setListVisibility(true);
    }

    function onBlur(): void {
        setListVisibility(false);
    }
}
