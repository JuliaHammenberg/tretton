import './Search.css';

export default function Search({ handleSearch }) {
    return (
        <input
            aria-label='Search Employees'
            className='search-input'
            placeholder='Search'
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}

