import  React from 'react';
import logo from './logo.svg';
import './App.css';
import { getDocs, collection } from "firebase/firestore"; 
import {db} from './firebase_setup/firebase'

interface IProps {
}

interface IState {
    albums: IAlbum[];
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
        }
    }

    componentDidMount(): void {
        this.getAlbums();
    }
    submithandler(e: any) {
      e.preventDefault()
    }

    getAlbums = async () => {
        const doc_refs = await getDocs(collection(db, 'albums')).then((result)=>{               
            const albums = result.docs.map((doc) => ({...doc.data(), id:doc.id })) as IAlbum[];              
    
            this.setState({
                albums: albums
            });
        })
    }
    

    render () {  
        return (
            <div className="App">
                {this.state.albums.map((album, index) => {
                    return (
                        <h1 key={index}>{album.title}</h1>
                    );
                })}
            </div>
        )
    }
}

export default App;
