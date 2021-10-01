import './Sidebar.scss';
import '../../../index.scss';

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__tabs"></div>
            <div className="sidebar__content"></div>
            <div className="sidebar__controls">
                <button className="btn btn-default">Use selected frame</button>
                <button className="btn btn-primary">Save view as image</button>
            </div>
        </div>
    )
}
