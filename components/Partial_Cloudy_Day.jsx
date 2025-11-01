import styles from '../Icons.module.css';

const PartialCloudyDayGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="partly_cloudy_day"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="67.859%" y1="0%" y2="76.031%">
                    <stop offset="0%" stopColor="#333333ff"></stop>
                    <stop offset="100%" stopColor="#FBBC04"></stop>
                </linearGradient>
                <linearGradient id="b" x1="22.493%" x2="100%" y1="17.395%" y2="115.202%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DEDFDF"></stop>
                </linearGradient>
                <linearGradient id="c" x1="83.458%" x2="-15.637%" y1="100%" y2="-29.648%">
                    <stop offset="0%" stopColor="#E4E5E5"></stop>
                    <stop offset="100%" stopColor="#FCD35C"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(4)">
                    <circle cx="12" cy="12" r="12" fill="#FBBC04"></circle>
                    <circle cx="12" cy="12" r="12" fill="#FCD35C"></circle>
                </g>
                <circle cx="19" cy="23" r="9" fill="url(#b)"></circle>
                <path fill="url(#c)" d="M10.02 22.406a9 9 0 0 1 16.416-4.478A11.996 11.996 0 0 1 16 24c-2.178 0-4.22-.58-5.98-1.594Z"></path>
                <path fill="#F1F3F4" d="M19 32a7.5 7.5 0 0 0-15 0c.011-.017 15.004-.012 15 0Z"></path>
            </g>
        </svg>
    );
};

export default PartialCloudyDayGoogleIcon;