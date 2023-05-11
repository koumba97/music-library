import React from "react";
import './Tooltip.scss';

interface IProps {
    content: string;
}

export default class Tooltip extends React.Component<IProps>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { props } = this;

        return(
            <div className="tooltip-text">{props.content}</div>
        )
    }
}