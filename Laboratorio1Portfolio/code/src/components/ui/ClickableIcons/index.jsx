import './ClickableIcons.css';

const ClickableIcon = ({ Icon, onClick, size = 20 }) => {
    return (
        <button type="button" className="clickable-icon" onClick={onClick}>
            <Icon size={size} />
        </button>
    );
};

export default ClickableIcon;