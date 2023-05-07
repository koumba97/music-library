import  React from 'react';
import './App.css';
import { getDocs, collection } from "firebase/firestore"; 
import {db} from './firebase_setup/firebase';
import CardList from './components/CardList/CardList.component';

interface IProps {
}

interface IState {
    albums: IAlbum[];
    searchString: string;
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
            searchString: '',
        }
    }

    componentDidMount(): void {
        this.getAlbums();
    }

    getAlbums = async () => {
        getDocs(collection(db, 'albums'))
        .then((result)=> {       
            const albums = result.docs.map((doc) => ({...doc.data(), id:doc.id })) as IAlbum[];              
            this.setState({
                albums: albums,
            });
        })
    }
    
    searchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchString: event.target.value.toLocaleLowerCase()
        });
    }

    render () {  
        const { albums, searchString } = this.state;
        const { searchInputOnChange } = this;

        const filteredAlbums = albums.filter((album) => {
            return album.title.toLowerCase().includes(searchString) || album.artist.toLocaleLowerCase().includes(searchString);
        });

        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='Search albums' onChange={(event) => searchInputOnChange(event)}/>
                <CardList list={filteredAlbums}/>
            </div>
        )
    }
}

export default App;
