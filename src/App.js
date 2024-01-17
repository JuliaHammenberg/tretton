import { useEffect, useState } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import gridLogo from './assets/grid.svg';
import listLogo from './assets/list.svg';
import Button from './components/Button';
import ErrorSection from './components/ErrorSection';

function App() {
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState();
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [offices, setOffices] = useState([]);
  const [toggle, setToggle] = useState('GRID');

  useEffect(() => {
    const fetchData = async () => {
      const apiToken = process.env.REACT_APP_API_KEY;

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
        setError('Not able to load employees.');
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

  const handleButtonClick = (type) => {
    setToggle(type);
  }

  return (
    <div>
      <Header />
      <div className='toolbar'>
        <div className='filter-container'>
          <Search handleSearch={handleSearch} />
          <Filter offices={offices} handleOfficeFilter={handleOfficeFilter} />
        </div>
        <div className='button-container'>
          <Button logo={gridLogo} type={'GRID'} handleClick={handleButtonClick} />
          <Button logo={listLogo} type={'LIST'} handleClick={handleButtonClick} />
        </div>
      </div>
      {error ? (<ErrorSection errorMessage={error} />) : (
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
    </div>
  );
}

export default App;
