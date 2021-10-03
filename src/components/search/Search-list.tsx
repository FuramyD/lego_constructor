import './Search.scss';
import {ReactElement} from "react";
import {SearchListPropsModel} from "./Search.model";
import {DetailModel} from "../../models/details.model";
import {SearchListItem} from "./Search-list-item";


export function SearchList(props: SearchListPropsModel): ReactElement {
    return (
        <div className={`search__list ${props.visibility ? '' : '_hidden-v'}`}>
            {props.items.map((item: DetailModel) => <SearchListItem detail={item} key={item.id}/>)}
        </div>
    )
}