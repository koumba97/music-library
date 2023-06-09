import React from 'react';
import './App.scss';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import logo from './assets/images/music-library-logo.png';
import { db } from './firebase/firebase';
import CardList from './components/CardList/CardList';
import SeachBar from './components/SearchBar/SearchBar';
import { refreshAccessToken } from './spotify/token';
import { AlbumInfo } from './spotify/types/AlbumInfo';
import AlbumModal from './components/AlbumModal/AlbumModal';

export interface IAlbum {
    artist: string;
    title: string;
    id: string;
    year: number;
    image: string;
    trackId: string;
}

const App = () => {
    const [searchString, setSearchString] = useState<string>('');
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<AlbumInfo | null>(null);
    
    useEffect(() => {
        refreshAccessToken();
        getAlbums();
    }, []);

    const getAlbums = async () => {
        getDocs(collection(db, 'albums')).then((result) => {
            const albums = result.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as IAlbum[];
            setAlbums(albums);
        });
    };

    const openAlbumModal = (selectedAlbum: AlbumInfo) => {
        setSelectedAlbum(selectedAlbum);
    }

    const closeAlbumModal = () => {
        setSelectedAlbum(null);
    }

    const searchInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchString(event.target.value.toLocaleLowerCase());
    };

    const filteredAlbums = albums.filter((album) => {
        return (
            album.title.toLowerCase().includes(searchString) ||
            album.artist.toLocaleLowerCase().includes(searchString)
        );
    });

    return (
        <div className="app">
            <div className="app-content">
                <div className="title">
                    <img src={logo} className="logo" alt="Logo" />
                    <p className="slogan">
                        Explore your passion for music with music library
                    </p>
                </div>
                <SeachBar
                    placeholder={'Search album'}
                    onChangeHandler={searchInputOnChange}
                />

                <CardList list={filteredAlbums} listType="album" selectAlbum={openAlbumModal} />
            </div>

            <ToggleAlbumModal album={selectedAlbum} closeModal={closeAlbumModal}/>
        </div>
    );
};

const ToggleAlbumModal = (props: {album: AlbumInfo | null, closeModal: Function}) => {
    if (props.album) {
        return (
            <AlbumModal album={props.album} closeAlbumModal={props.closeModal}/>
        );
    }
    return null;
}

export default App;
