import  React from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps {
}

interface IState {
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
        }
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default App;
