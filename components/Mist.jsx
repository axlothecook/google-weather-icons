import styles from '../Icons.module.css';

const MistGoogleIcon = ({ isBig }) => {
    return (
        <svg
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="mist"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DADCE0"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path stroke="#CDD0D5" strokeLinecap="round" d="M1 24h20m4 0h6M1 20h6m-6 8h6m4-8h20m-20 8h20"></path>
                <ellipse cx="13.125" cy="8" fill="#F1F3F4" rx="7.875" ry="8"></ellipse>
                <circle cx="13" cy="8" r="8" fill="#DADCE0"></circle>
                <path fill="#F1F3F4" d="M13 16c0-3.682-2.91-6.667-6.5-6.667S0 12.318 0 16c.01-.015 13.003-.01 13 0Z"></path>
            </g>
        </svg>
    );
};

export default MistGoogleIcon;