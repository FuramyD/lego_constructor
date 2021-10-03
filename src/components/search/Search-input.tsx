import './Search.scss';
import {ReactElement} from "react";
import {SearchInputPropsModel} from "./Search.model";

export function SearchInput(props: SearchInputPropsModel): ReactElement {
    return (
        <div className="search__input">
            <input type="search" placeholder={props.placeholder} />
        </div>
    )
}