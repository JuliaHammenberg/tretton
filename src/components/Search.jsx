import './Search.css';

export default function Search({ handleSearch }) {
    return (
        <input
            aria-label='Search Employees'
            className='search'
            placeholder='Search'
            data-testid='search'
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
};

