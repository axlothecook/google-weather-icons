import styles from '../Icons.module.css';

const PartialCloudyNightGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="partly_cloudy_night"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="112.465%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FCD35C"></stop>
                    <stop offset="100%" stopColor="#FBBC04"></stop>
                </linearGradient>
                <linearGradient id="b" x1="45.117%" x2="100%" y1="46.112%" y2="115.202%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DEDFDF"></stop>
                </linearGradient>
                <linearGradient id="c" x1="83.458%" x2="-15.637%" y1="100%" y2="-29.648%">
                    <stop offset="0%" stopColor="#E4E5E5"></stop>
                    <stop offset="100%" stopColor="#FCD35C"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path fill="#FBBC04" d="M16.02 0c-2.265 2.738-3.62 6.212-3.62 9.992 0 8.837 7.402 16 16.533 16 .172 0 .343-.002.514-.007-3.03 3.662-7.689 6.007-12.914 6.007-9.13 0-16.533-7.163-16.533-16C0 7.322 7.126.262 16.02 0Z"></path>
                <path fill="#FBBC04" d="M16.02 0c-2.265 2.738-3.62 6.212-3.62 9.992 0 8.837 7.402 16 16.533 16 .172 0 .343-.002.514-.007-3.03 3.662-7.689 6.007-12.914 6.007-9.13 0-16.533-7.163-16.533-16C0 7.322 7.126.262 16.02 0Z"></path>
                <circle cx="20" cy="20" r="12" fill="url(#b)"></circle>
                <path fill="url(#c)" d="M8.194 22.163A12.07 12.07 0 0 1 8 20c0-3.75 1.72-7.1 4.416-9.3.382 8.508 7.631 15.292 16.517 15.292.172 0 .343-.002.514-.007a16.619 16.619 0 0 1-9.453 5.656C19.804 26.285 15.403 22 10 22c-.617 0-1.22.056-1.806.163Z"></path>
                <path fill="#F1F3F4" d="M20 32c0-5.523-4.477-10-10-10S0 26.477 0 32c.007-.011 5.009-.015 10.007-.014C5.01 31.985.007 31.989 0 32c0-5.523 4.477-10 10-10s10 4.477 10 10Z"></path>
                <path fill="#F1F3F4" d="M20 32c0-5.523-4.477-10-10-10S0 26.477 0 32c.015-.023 20.005-.015 20 0Z"></path>
            </g>
        </svg>
    );
};

export default PartialCloudyNightGoogleIcon;