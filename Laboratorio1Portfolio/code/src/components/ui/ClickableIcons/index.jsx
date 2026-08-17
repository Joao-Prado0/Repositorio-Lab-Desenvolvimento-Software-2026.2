import './ClickableIcons.css';

const ClickableIcon = ({ Icon, onClick, size = 20 }) => {
    return (
        <div className="clickable-icon" onClick={onClick}>
            <Icon size={size} />
        </div>
    );
};

export default ClickableIcon;