import './Lego-details.scss'
import {ReactElement} from "react";
import {LegoDetail} from "./lego-detail/Lego-detail";

export function LegoDetails(): ReactElement {
    let details = new Array(10).fill(null);
    return (
        <div className="lego-details">
            {
                details.map((el, i) => <LegoDetail key={i}/>)
            }
        </div>
    );
}