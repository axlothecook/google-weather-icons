import styles from '../Icons.module.css';

const TornadoGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="tornado"
        >
            <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity=".5%"></stop>
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0%"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path fill="#F1F3F4" fillRule="nonzero" d="M16 32 0 0h32z"></path>
                <circle cx="26" cy="26" r="6" fill="#F1F3F4"></circle>
                <circle cx="6" cy="26" r="6" fill="#F1F3F4" transform="matrix(-1 0 0 1 12 0)"></circle>
                <path fill="#CDD0D5" d="M26 32a5 5 0 0 0-10 0M6 32a5 5 0 0 1 10 0"></path>
                <path stroke="#EA4335" strokeLinecap="round" d="M12 25h8M.496 1h31M14 29h4M8 17h16m-14 4h12M4 9h24M2 5h28M6 13h20"></path>
            </g>
        </svg>
    );
};

export default TornadoGoogleIcon;