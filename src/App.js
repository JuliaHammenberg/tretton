import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiToken = process.env.REACT_APP_API_KEY;

      const apiUrl = 'https://api.1337co.de/v3/employees';

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `${apiToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div>
        {
          data && (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )
        }
        {
          error && (
            <div>
              <p>Error: {error.message}</p>
            </div>
          )
        }
      </div >
    </>

  )
}

export default App