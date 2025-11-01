import styles from '../Icons.module.css';

const WindGoogleIcon = ({ isBig }) => {
    return (
        <svg 
            className={isBig ? styles.icon_big : styles.icon_small}
            xmlns="http://www.w3.org/2000/svg" 
            xml:space="preserve" 
            viewBox="0 0 32 32" 
            id="wind"
        >
            <path fill="#CDD0D5" d="M30.272 27.896a.5.5 0 0 1-.5-.5c0-1.49-1.317-2.38-3.523-2.38H2.471a.5.5 0 0 1 0-1h23.778c3.339 0 4.523 1.821 4.523 3.38a.5.5 0 0 1-.5.5zm0-6.876H2.471a.5.5 0 0 1 0-1h27.802a.5.5 0 1 1-.001 1z"></path>
            <path fill="#CDD0D5" d="M27.393 30.56a.5.5 0 0 1 0-1 2.382 2.382 0 0 0 2.38-2.38.5.5 0 0 1 1 0 3.385 3.385 0 0 1-3.38 3.38zm-11.348-2.664a.5.5 0 0 1-.5-.5 2.382 2.382 0 0 0-2.38-2.38H7.149a.5.5 0 0 1 0-1h6.016a3.384 3.384 0 0 1 3.38 3.38.5.5 0 0 1-.5.5z"></path>
            <path fill="#CDD0D5" d="M13.165 30.775a.5.5 0 0 1 0-1 2.382 2.382 0 0 0 2.38-2.38.5.5 0 0 1 1 0 3.384 3.384 0 0 1-3.38 3.38zm13.192-16.787a.5.5 0 0 1-.5-.5 2.382 2.382 0 0 0-2.38-2.38.5.5 0 0 1 0-1 3.384 3.384 0 0 1 3.38 3.38.5.5 0 0 1-.5.5z"></path>
            <path fill="#CDD0D5" d="M23.478 17.024h-6.031a.5.5 0 0 1 0-1h6.031a2.382 2.382 0 0 0 2.38-2.38.5.5 0 0 1 1 0 3.385 3.385 0 0 1-3.38 3.38z"></path>
            <circle cx="11.859" cy="10.907" r="6.106" fill="#f0f2f3" fillRule="evenodd" clipRule="evenodd"></circle>
            <linearGradient id="a" x1="-878.885" x2="-878.385" y1="535.008" y2="534.508" gradientTransform="matrix(24 0 0 -24 21099 12845)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f0f2f3"></stop>
                <stop offset="1%" stopColor="#d9dbdf"></stop>
            </linearGradient>
            <circle cx="11.859" cy="10.907" r="6.106" fill="#d9dbdf" fillRule="evenodd" clipRule="evenodd"></circle>
            <linearGradient id="b" x1="-870.545" x2="-870.8" y1="504.653" y2="504.653" gradientTransform="matrix(20 0 0 -10 17423 5061)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff"></stop>
                <stop offset="1%" stopColor="#f0f2f3"></stop>
            </linearGradient>
            <path fill="url(#b)" fillRule="evenodd" d="M12.092 17.013a5.09 5.09 0 0 0-10.178 0 1817.4 1817.4 0 0 1 10.178 0z" clipRule="evenodd"></path>
        </svg>
    );
};

export default WindGoogleIcon;