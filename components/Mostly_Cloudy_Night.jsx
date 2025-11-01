import styles from '../Icons.module.css';

const MostlyCloudyNightGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="mostly_cloudy_night"
        >
            <defs>
            <linearGradient id="a" x1="0%" x2="112.465%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD35C"></stop>
                <stop offset="100%" stopColor="#FBBC04"></stop>
            </linearGradient>
            <linearGradient id="b" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                <stop offset="0%" stopColor="#F1F3F4"></stop>
                <stop offset="100%" stopColor="#DADCE0"></stop>
            </linearGradient>
            <linearGradient id="c" x1="83.458%" x2="-15.637%" y1="100%" y2="-29.648%">
                <stop offset="0%" stopColor="#E4E5E5"></stop>
                <stop offset="100%" stopColor="#FCD35C"></stop>
            </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
            <path fill="#FBBC04" d="M8.01 0A7.808 7.808 0 0 0 6.2 4.996c0 4.418 3.701 8 8.267 8a8.7 8.7 0 0 0 .256-.004c-1.515 1.832-3.844 3.004-6.456 3.004-4.566 0-8.267-3.582-8.267-8C0 3.661 3.563.131 8.01 0Z"></path>
            <path fill="#FBBC04" d="M8.01 0A7.808 7.808 0 0 0 6.2 4.996c0 4.418 3.701 8 8.267 8a8.7 8.7 0 0 0 .256-.004c-1.515 1.832-3.844 3.004-6.456 3.004-4.566 0-8.267-3.582-8.267-8C0 3.661 3.563.131 8.01 0Z"></path>
            <circle cx="20" cy="20" r="12" fill="url(#b)"></circle>
            <path fill="#F1F3F4" d="M20 32c0-5.523-4.477-10-10-10S0 26.477 0 32c.015-.023 20.005-.015 20 0Z"></path>
            <path fill="url(#c)" d="M10.877 12.204a8.462 8.462 0 0 0 3.846.788 8.343 8.343 0 0 1-6.035 2.994 11.987 11.987 0 0 1 2.189-3.782Z"></path>
            </g>
        </svg>
    );
};

export default MostlyCloudyNightGoogleIcon;