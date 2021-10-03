import './Search.scss';
import {SearchListItemPropsModel} from "./Search.model";

export function SearchListItem(props: SearchListItemPropsModel) {
    return (
        <div className="search__list-item">
            {props.detail.name}
        </div>
    )
}