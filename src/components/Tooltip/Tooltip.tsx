import './Tooltip.scss';

interface IProps {
    content: string;
}

const Tooltip = (props: IProps) => {
    return <div className="tooltip-text">{props.content}</div>;
};

export default Tooltip;
