import './Filter.css';

export default function Filter({ offices, handleOfficeFilter }) {
    return (
        <select id="office"
            onChange={(e) => {
                handleOfficeFilter(e.target.value);
            }}
            className='filter'
            aria-label="Filter by Office"
        >
            <option value=''>All Offices</option>
            {offices.map((office) => (
                <option key={office} value={office}>
                    {office}
                </option>
            ))}
        </select>
    );
}

