import { FunctionComponent } from "react";

type SearchBarProps = {
    onSearch: (text: string) => void;
    search: string
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ search, onSearch }) => {
    return <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" className="form-control"
            value={search} required onChange={(e) => {
                debugger
                onSearch(e.target.value)
            }} />
        <div className="invalid-feedback">
            Search for contact by last name...
        </div>
    </div>
}

export default SearchBar