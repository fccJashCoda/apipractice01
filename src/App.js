import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner } from 'reactstrap';
import { useState, useEffect } from 'react';
import DataDisplay from './components/DataDisplay';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = '';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch('https://api.publicapis.org/entries');
        const payload = await response.json();

        setData(payload);
        console.log(payload);
      } catch (err) {
        const error = new Error('Api call failed.');
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <Spinner color='success' />
      ) : (
        <DataDisplay count={data.count} entries={data.entries} />
      )}
      {errorMessage && 'something went wrong'}
    </div>
  );
}

export default App;
