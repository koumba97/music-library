import React from "react";

interface IProps {
    placeholder: string,
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

export default class SeachBar extends React.Component<IProps> {
    render () {
        const { placeholder, onChangeHandler } = this.props;
        return (
            <input 
                className='search-box' 
                type='search' 
                placeholder={ placeholder } 
                onChange={ onChangeHandler }
            />
        )
    }
}