import './App.css';
import { useState, useEffect } from 'react';
import DataDisplay from './components/DataDisplay';

function App() {
  const [data, setData] = useState({ count: 0, entries: [] });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = '';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch('https://api.publicapis.org/entries');
        const payload = await response.json();

        setData(payload);
      } catch (err) {
        const error = new Error('Api call failed.');
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }
  return (
    <div className='App bg-gray-800'>
      <div className='container mx-auto p-4 '>
        {loading ? <div color='success' /> : <DataDisplay data={data} />}
      </div>
    </div>
  );
}

export default App;
