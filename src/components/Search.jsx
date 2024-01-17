import './Search.css';

export default function Search({ handleSearch }) {
    return (
        <input
            aria-label='Search Employees'
            id="search"
            className='search-input'
            placeholder='Search'
            data-testid='search'
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
};

