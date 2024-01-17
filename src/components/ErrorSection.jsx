import './ErrorSection.css';

export default function ErrorSection({ errorMessage }) {
    return (
        <div className='error'>
            <p>{errorMessage}</p>
        </div>
    );
};

