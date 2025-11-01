import styles from '../Icons.module.css';

const FogGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="fog"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DADCE0"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <ellipse cx="13.125" cy="8" fill="#F1F3F4" rx="7.875" ry="8"></ellipse>
                <circle cx="13" cy="8" r="8" fill="#DADCE0"></circle>
                <path fill="#F1F3F4" d="M13 16c0-3.682-2.91-6.667-6.5-6.667S0 12.318 0 16c.01-.015 13.003-.01 13 0Z"></path>
                <path stroke="#CDD0D5" strokeLinecap="round" strokeLinejoin="round" d="M1 18.286c2.499 0 2.499 2.5 4.997 2.5 2.5 0 2.5-2.5 4.999-2.5 2.5 0 2.5 2.5 5 2.5s2.5-2.5 4.999-2.5c2.501 0 2.501 2.5 5.003 2.5 2.501 0 2.501-2.5 5.002-2.5m-30 5c2.499 0 2.499 2.5 4.997 2.5 2.5 0 2.5-2.5 4.999-2.5 2.5 0 2.5 2.5 5 2.5s2.5-2.5 4.999-2.5c2.501 0 2.501 2.5 5.003 2.5 2.501 0 2.501-2.5 5.002-2.5m-30 5c2.499 0 2.499 2.5 4.997 2.5 2.5 0 2.5-2.5 4.999-2.5 2.5 0 2.5 2.5 5 2.5s2.5-2.5 4.999-2.5c2.501 0 2.501 2.5 5.003 2.5 2.501 0 2.501-2.5 5.002-2.5"></path>
            </g>
        </svg>
    );
};

export default FogGoogleIcon;