import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Album } from '../../deezer/types/Album';

interface IProps {
    placeholder: string;
    searchResult: Function;
}

const SearchBar = (props: IProps) => {
    const { placeholder } = props;
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Album[]>([]);

    useEffect(() => {
        searchAlbum();
    }, [searchQuery]);

    const searchInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchQuery(event.target.value.toLocaleLowerCase());
    };

    const searchAlbum = async () => {
        try {
            const res = await fetch(
                `http://localhost:3001/searchAlbum?query=${searchQuery}`
            );
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setSearchResult(data);
                props.searchResult(data.data);
            }
        } catch (err) {
            console.error(`Erreur pour la recherche ${searchQuery}:`, err);
        }
    };

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
                onChange={searchInputOnChange}
            />
            <button type="submit">Search</button>
        </div>
    );
};

export default SearchBar;
