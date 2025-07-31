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
import { albumList } from './data/albumList';
import { Album } from './deezer/types/Album';

export interface IAlbum {
    artist: string;
    title: string;
    id: string;
    year: number;
    image: string;
    trackId: string;
}

const App = () => {
    const [albums, setAlbums] = useState<Album[] | undefined>(undefined);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | undefined>(
        undefined
    );

    useEffect(() => {
        refreshAccessToken();
        getAlbum();
    }, []);

    const getAlbum = async () => {
        let albumResp = [];
        for (const albumId of albumList) {
            try {
                const res = await fetch(
                    `http://localhost:3001/getAlbum?id=${albumId}`
                );
                const data = await res.json();
                albumResp.push(data);
            } catch (err) {
                console.error(`Erreur pour l'album ${albumId}:`, err);
            }
        }
        setAlbums(albumResp);
    };

    const openAlbumModal = (selectedAlbum: Album) => {
        setSelectedAlbum(selectedAlbum);
    };

    const closeAlbumModal = () => {
        setSelectedAlbum(undefined);
    };

    const handleSearchResult = (result: Album[]) => {
        if (result.length > 0) {
            setAlbums(result);
            console.log('ok');
        } else {
            getAlbum();
        }
    };

    return (
        <div className="app">
            <div className="app-content">
                <div className="title">
                    <img src={logo} className="logo" alt="Logo" />
                    <p className="slogan">
                        Explore your passion for music with music library
                    </p>
                </div>
                {/* <SeachBar
                    placeholder={'Search album'}
                    searchResult={handleSearchResult}
                /> */}

                {albums ? (
                    <CardList
                        albumList={albums}
                        listType="album"
                        selectAlbum={openAlbumModal}
                    />
                ) : (
                    'waiting'
                )}
            </div>

            {selectedAlbum ? (
                <AlbumModal
                    album={selectedAlbum}
                    closeAlbumModal={closeAlbumModal}
                />
            ) : null}
        </div>
    );
};

export default App;
