import  React from 'react';
import './App.css';
import { getDocs, collection } from "firebase/firestore"; 
import {db} from './firebase_setup/firebase';

interface IProps {
}

interface IState {
    albums: IAlbum[];
    filteredAlbums: IAlbum[];
}

interface IAlbum {
    artist: string;
    title: string;
    id: string;
    year: number;
    image: string;
}

class App extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
        
        this.state = {
            albums: [],
            filteredAlbums: [],
        }
        
    }

    componentDidMount(): void {
        this.getAlbums();
    }
    submithandler(e: any) {
      e.preventDefault()
    }

    getAlbums = async () => {
        getDocs(collection(db, 'albums'))
        .then((result)=> {       
            const albums = result.docs.map((doc) => ({...doc.data(), id:doc.id })) as IAlbum[];              
            this.setState({
                albums: albums,
                filteredAlbums: albums,
            });
        })
    }
    
    searchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;

        if(searchValue !== '') {
            const result = this.state.albums.filter((album) => {
                if(album.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) || album.artist.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return true;
                }
                else {
                    return false;
                }
            });

            this.setState({
                filteredAlbums: result
            });
        }
        else {
            this.setState({
                filteredAlbums: this.state.albums
            });
        }
    }

    render () {  
        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='Search albums' onChange={(event) => this.searchInputOnChange(event)}/>
                {this.state.filteredAlbums.map((album, index) => {
                    return (
                        <h1 key={index}>{album.title}</h1>
                    );
                })}
            </div>
        )
    }
}

export default App;
