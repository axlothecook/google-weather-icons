import styles from '../Icons.module.css';

const CloudyGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="cloudy"
        >
            <defs>
                <linearGradient id="a" x1="3.389%" x2="100%" y1="3.389%" y2="100%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DADCE0"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(0 4)">
                <circle cx="20" cy="12" r="12" fill="#F1F3F4"></circle>
                <circle cx="20" cy="12" r="12" fill="#DADCE0"></circle>
                <path fill="#F1F3F4" d="M20 24c0-5.523-4.477-10-10-10S0 18.477 0 24c.015-.023 20.005-.015 20 0Z"></path>
            </g>
        </svg>
    );
};

export default CloudyGoogleIcon;