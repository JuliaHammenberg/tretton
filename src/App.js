import { useEffect, useState } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import gridLogo from './assets/grid.svg';
import listLogo from './assets/list.svg';

function App() {
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [offices, setOffices] = useState([]);
  const [toggle, setToggle] = useState('GRID');

  useEffect(() => {
    const fetchData = async () => {
      const apiToken = process.env.REACT_APP_API_KEY;;

      const apiUrl = 'https://api.1337co.de/v3/employees';

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Authorization: `${apiToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Response was not ok');
        }

        const result = await response.json();
        setEmployeeData(result);
        setFilteredEmployees(result);

        // Finds all the offices available
        const uniqueOffices = [
          ...new Set(result.map((employee) => employee.office)),
        ];
        setOffices(uniqueOffices);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleSearchAndFilter = (query, selectedOffice) => {
    let filtered = employeeData;

    // Apply search
    if (query) {
      filtered = filtered?.filter((employee) =>
        employee.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply office filter
    if (selectedOffice !== '') {
      filtered = filtered?.filter(
        (employee) => employee.office === selectedOffice
      );
    }

    setFilteredEmployees(filtered);
  };

  const handleSearch = (query) => {
    handleSearchAndFilter(query, getSelectedOffice());
  };

  const handleOfficeFilter = (selectedOffice) => {
    handleSearchAndFilter(getSearchQuery(), selectedOffice);
  };

  // Helper function to get the current search query
  const getSearchQuery = () => {
    const searchInput = document.getElementById('search');
    return searchInput ? searchInput.value : '';
  };

  // Helper function to get the current selected office
  const getSelectedOffice = () => {
    const officeSelect = document.getElementById('office');
    return officeSelect ? officeSelect.value : '';
  };

  return (
    <div>
      <Header />
      <div className='toolbar'>
        <div className='filter-container'>
          <Search handleSearch={handleSearch} />
          <Filter offices={offices} handleOfficeFilter={handleOfficeFilter} />
        </div>
        <div className='button-container'>
          <button
            className='logo-button'
            data-testid="list"
            onClick={() => {
              setToggle('LIST');
            }}
          >
            <img className='list-logo' src={listLogo} alt={`Swap to list`} />
          </button>
          <button
            className='logo-button'
            data-testid="grid"
            onClick={() => {
              setToggle('GRID');
            }}
          >
            <img className='grid-logo' src={gridLogo} alt={`Swap to grid`} />
          </button>
        </div>
      </div>
      {filteredEmployees && (
        <div>
          {toggle === 'GRID' ? (
            <div
              className='employee-grid'
              aria-label='Grid with information about employees.'
            >
              {filteredEmployees.map((data, index) => (
                <EmployeeCard key={data.name} employee={data} />
              ))}
            </div>
          ) : (
            <EmployeeList employeeList={filteredEmployees} />
          )}
        </div>
      )}
      <div />
    </div>
  );
}

export default App;
