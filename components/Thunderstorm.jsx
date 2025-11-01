import styles from '../Icons.module.css';

const ThunderstormGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            xml:space="preserve" 
            viewBox="0 0 32 32" 
            id="thunderstorms"
        >
            <circle cx="16.751" cy="9.927" r="9.656" fill="#f1f3f4" fillRule="evenodd" clipRule="evenodd"></circle>
            <linearGradient id="a" x1="-525.973" x2="-525.35" y1="426.73" y2="425.943" gradientTransform="matrix(24 0 0 -24 12635 10245)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f1f3f4"></stop>
                <stop offset="1%" stopColor="#dedfdf"></stop>
            </linearGradient>
            <circle cx="16.751" cy="9.927" r="9.656" fill="#dedfdf" fillRule="evenodd" clipRule="evenodd"></circle>
            <linearGradient id="b" x1="-520.712" x2="-521.115" y1="390.144" y2="390.144" gradientTransform="matrix(20 0 0 -10 10431 3917)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff"></stop>
                <stop offset="1%" stopColor="#f1f3f4"></stop>
            </linearGradient>
            <path fill="url(#b)" fillRule="evenodd" d="M16.751 19.583a8.047 8.047 0 0 0-16.094 0c.012-.018 16.098-.012 16.094 0z" clipRule="evenodd"></path>
            <path fill="#fbbc04" fillRule="evenodd" d="m21.615 9.489-4.864 10.097h4.377l-.542 8.985 10.757-11.77-3.893-.016 3.893-7.296z" clipRule="evenodd"></path>
            <path fill="#4285F4" d="m3.221 24.176 1.82-1.82 1.82 1.82a2.575 2.575 0 1 1-3.64 0zm7.325 0 1.82-1.82 1.82 1.82a2.575 2.575 0 1 1-3.64 0z"></path>
        </svg>
    );
};

export default ThunderstormGoogleIcon;