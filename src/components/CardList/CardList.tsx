import './CardList.scss';
import AlbumCard from '../AlbumCard/AlbumCard';
import { IAlbum } from '../../App';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';

type Item = any;

interface IItem extends Item {
    id: string | number;
    title: string;
}

interface IProps {
    list: IItem[];
    listType: string;
    selectAlbum: Function;
}

const test = (ok:any) => {
    console.log(ok);
    
}
const CardList = ({list, listType, selectAlbum}: IProps) => {
    const selectAlbumm = (album: AlbumInfo) => {
        selectAlbum(album);
    }

    return (
        <div className="card-list">
            {list.map((item) => {
                if (listType === 'album')
                    return (
                        <AlbumCard
                            key={item.id}
                            album={item as IAlbum}
                            selectAlbum={selectAlbumm}
                        ></AlbumCard>
                    );
            })}
        </div>
    );
};

export default CardList;
