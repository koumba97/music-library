import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    placeholder: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = (props: IProps) => {
    const { placeholder, onChangeHandler } = props;
    return (
        <div className="search-bar">
            <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                size="xl"
            />
            <input
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            <button type="submit">Search</button>
        </div>
    );
};

export default SearchBar;
