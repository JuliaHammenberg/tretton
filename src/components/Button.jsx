import './Button.css';


export default function Button({ logo, type, handleClick }) {
    return (
        <button
            className='logo-button'
            data-testid="grid"
            onClick={() => handleClick(type)}
        >
            <img className='grid-logo' src={logo} alt={`Swap to grid`} />
        </button>
    );
};

