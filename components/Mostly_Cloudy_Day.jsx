import styles from '../Icons.module.css';

const MostlyCloudyDayGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="mostly_cloudy_day"
        >
            <defs>
            <linearGradient id="a" x1="0%" x2="67.859%" y1="0%" y2="76.031%">
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
            <circle cx="8" cy="8" r="8" fill="#FBBC04"></circle>
            <circle cx="8" cy="8" r="8" fill="#FCD35C"></circle>
            <circle cx="20" cy="20" r="12" fill="url(#b)"></circle>
            <path fill="url(#c)" d="M8.693 15.97a12.034 12.034 0 0 1 7.277-7.277 8.002 8.002 0 0 1-7.277 7.277Z"></path>
            <path fill="#F1F3F4" d="M20 32c0-5.523-4.477-10-10-10S0 26.477 0 32c.015-.023 20.005-.015 20 0Z"></path>
            </g>
        </svg>
    );
};

export default MostlyCloudyDayGoogleIcon;