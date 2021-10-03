import {DetailModel, DetailsModel} from "../../models/details.model";


export interface SearchPropsModel {
    placeholder?: string;
    listVisibility: boolean;
    items: DetailsModel["details"];

    onSearch?: () => InputEvent;
    onFocus?: () => any;
    onBlur?: () => any;
}

export interface SearchInputPropsModel {
    placeholder?: string;
    onSearch?: () => InputEvent;
}


export interface SearchListPropsModel {
    items: DetailsModel["details"];
    visibility: boolean;
    onChoose?: () => number;
}

export interface SearchListItemPropsModel {
    detail: DetailModel;
    onChoose?: () => number;
}
