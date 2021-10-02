import {Scene} from "./scene/Scene";
import {Sidebar} from "./sidebar/Sidebar";
import "./Main.scss";

export function Main() {
    return (
        <div className="main">
            <div>Anton, this is commit I dedicate to you</div>
            <Scene />
            <Sidebar />
        </div>
    )
}