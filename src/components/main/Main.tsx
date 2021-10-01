import {Scene} from "./scene/Scene";
import {Sidebar} from "./sidebar/Sidebar";
import "./Main.scss";

export function Main() {
    return (
        <div className="main">
            <Scene />
            <Sidebar />
        </div>
    )
}