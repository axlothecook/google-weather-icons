import styles from '../Icons.module.css';

const HeavySnowGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="heavy_snow"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DADCE0"></stop>
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="50%" y1="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF"></stop>
                    <stop offset="100%" stopColor="#F1F3F4"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <circle cx="20" cy="12" r="12" fill="#F1F3F4"></circle>
                <circle cx="20" cy="12" r="12" fill="url(#a)"></circle>
                <path fill="url(#b)" d="M20 24c0-5.523-4.477-10-10-10S0 18.477 0 24c.015-.023 20.005-.015 20 0Z"></path>
                <path stroke="#4285F4" strokeLinecap="square" d="M28 10.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572M28 18.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572M28 26.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572M20 18.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572M20 10.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572M20 26.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572"></path>
            </g>
        </svg>
    );
};

export default HeavySnowGoogleIcon;