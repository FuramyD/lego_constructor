import '../Lego-details.scss'
import {ReactElement} from "react";

export function LegoDetail(props: { lo?: any; }): ReactElement {
    return (
        <div className={`lego-details__item-wrapper ${props.lo ? '_last-odd' : ''}`}>
            <div className="lego-details__item-image-box">
                <div className="lego-details__item-image">
                    <img src="logo192.png" alt="img"/>
                </div>
            </div>
            <div className="lego-details__item-description">
                description
            </div>
        </div>
    )
}