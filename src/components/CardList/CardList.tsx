import './CardList.scss';
import AlbumCard from '../AlbumCard/AlbumCard';
import { IAlbum } from '../../App';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';
import { Album } from '../../deezer/types/Album';
import { albumList } from '../../data/albumList';

type Item = any;

interface IItem extends Item {
    id: string | number;
    title: string;
}

interface IProps {
    albumList: Album[];
    listType: string;
    selectAlbum: Function;
}

const CardList = ({ albumList, listType, selectAlbum }: IProps) => {
    const handleSlectAlbum = (album: AlbumInfo) => {
        selectAlbum(album);
    };

    return (
        <div className="card-list">
            {albumList.map((album) => {
                if (listType === 'album')
                    return (
                        <AlbumCard
                            key={album.id}
                            album={album}
                            selectAlbum={handleSlectAlbum}
                        ></AlbumCard>
                    );
            })}
        </div>
    );
};

export default CardList;
