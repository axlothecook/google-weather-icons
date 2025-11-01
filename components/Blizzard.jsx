import styles from '../Icons.module.css';

const BlizzardGoogleIcon = ({ isBig }) => {
    return (
        <svg
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            id="blizzard"
        >
            <defs>
                <linearGradient id="a" x1="0%" x2="98.277%" y1="0%" y2="98.277%">
                    <stop offset="0%" stopColor="#F1F3F4"></stop>
                    <stop offset="100%" stopColor="#DADCE0"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path stroke="#CDD0D5" strokeLinecap="round" strokeLinejoin="round" d="M1 20h14m-3.249 11a3 3 0 1 0 0-6H1"></path>
                <g stroke="#4285F4" transform="translate(14.75 14.35)">
                    <path strokeLinecap="square" d="M9.5 11.48v3.633m0-10.891v3.299"></path>
                    <path d="M11.366 2.243 9.5 4.11 7.634 2.243m3.732 14.514L9.5 14.89l-1.866 1.866"></path>
                    <path strokeLinecap="square" d="m5.768 5.768 2.183 2.183M10.9 10.9l2.183 2.183"></path>
                    <path d="M5.688 3.05v2.638H3.049m12.901 7.624h-2.638v2.639"></path>
                    <path strokeLinecap="square" d="M4.546 9.5h2.975m3.959 0h2.974"></path>
                    <path d="M2.243 7.634 4.11 9.5l-1.866 1.866m14.513-3.732L14.89 9.5l1.866 1.866"></path>
                    <path strokeLinecap="square" d="m5.768 13.232 2.183-2.183M10.9 8.1l2.183-2.183"></path>
                    <path d="M3.05 13.312h2.638v2.639M13.312 3.05v2.638h2.639"></path>
                    <circle cx="9.5" cy="9.5" r="1.979"></circle>
                </g>
                <ellipse cx="13.125" cy="8" fill="#F1F3F4" rx="7.875" ry="8"></ellipse>
                <circle cx="13" cy="8" r="8" fill="#DADCE0"></circle>
                <path fill="#F1F3F4" d="M13 16c0-3.682-2.91-6.667-6.5-6.667S0 12.318 0 16c.01-.015 13.003-.01 13 0Z"></path>
                <path stroke="#4285F4" strokeLinecap="square" d="M28 9.429v5.142m-2.227-3.857 4.454 2.572m0-2.572-4.454 2.572"></path>
            </g>
        </svg>
    );
};

export default BlizzardGoogleIcon;