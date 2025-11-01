import styles from '../Icons.module.css';

const IceGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="icy"
        >
            <defs>
            <linearGradient id="a" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                <stop offset="0%" stopColor="#F1F3F4"></stop>
                <stop offset="100%" stopColor="#DADCE0"></stop>
            </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <circle cx="20" cy="12" r="12" fill="#F1F3F4"></circle>
                <circle cx="20" cy="12" r="12" fill="#DADCE0"></circle>
                <path fill="#F1F3F4" d="M20 24c0-5.523-4.477-10-10-10S0 18.477 0 24c.015-.023 20.005-.015 20 0Z"></path>
                <path fill="#FFF" stroke="#4285F4" strokeLinecap="round" stroke-Linejoin="round" strokeWidth="1.2" d="m25 10 2.5 4.375L30 10z"></path>
                <path stroke="#4285F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m25 27 2.5 4.375L30 27z"></path>
                <path fill="#FFF" stroke="#4285F4" strokeLinecap="round" stroke-Linejoin="round" strokeWidth="1.2" d="m17 19 2.5 4.375L22 19z"></path>
            </g>
        </svg>
    );
};

export default IceGoogleIcon;