import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function App() {
  const [type, setType] = useState('education');
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`https://www.boredapi.com/api/activity?type=${type}`).then(
      (response) => {
        setActivity(response.data.activity);
        setLoading(false);
      }
    );
  }, [type]);

  return (
    <div>
      <button onClick={() => setType('education')}>Education</button>
      <button onClick={() => setType('music')}>Music</button>
      <button onClick={() => setType('relaxation')}>Relaxation</button>
      {loading ? <Spinner animation="border" /> : <h1>{activity}</h1>}
    </div>
  );
}

export default App;
