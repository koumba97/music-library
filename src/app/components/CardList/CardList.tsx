import "./CardList.scss";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Album } from "../../../deezer/types/Album";

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
    const handleSlectAlbum = (album: Album) => {
        selectAlbum(album);
    };

    return (
        <div className="card-list">
            {albumList.map((album, index) => {
                if (listType === "album")
                    return (
                        <AlbumCard
                            key={index}
                            album={album}
                            selectAlbum={handleSlectAlbum}
                        ></AlbumCard>
                    );
            })}
        </div>
    );
};

export default CardList;
