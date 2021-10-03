import './Search.scss';
import {ReactElement} from "react";
import {SearchPropsModel} from "./Search.model";
import {SearchList} from "./Search-list";
import {SearchInput} from "./Search-input";

export function Search(props: SearchPropsModel): ReactElement {

    return (
        <div className="search" onFocus={props.onFocus} onBlur={props.onBlur}>
            <SearchInput
                placeholder={props.placeholder}
                onSearch={props.onSearch}
            />
            <SearchList
                visibility={props.listVisibility}
                items={props.items}
            />
        </div>
    )
}