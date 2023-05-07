import React from "react";

interface IProps {
    list: any[];
}

interface IState {

}

export default class CardList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        if(this.props.list)
        return (
            <div className="card-list">
                {this.props.list.map(item => {
                    return (
                        <h1 key={item.id}>{item.title}</h1>
                    )
                })}
            </div>
        )
    }
}