import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [type, setType] = useState('education');
  const [activity, setActivity] = useState('');

  useEffect(() => {
    axios('https://www.boredapi.com/api/activity?type=relaxation').then(
      (response) => {
        setActivity(response.data.activity);
      }
    );
  }, [type, activity]);

  return (
    <div>
      <button onClick={() => setType('education')}>Education</button>
      <button onClick={() => setType('music')}>Music</button>
      <button onClick={() => setType('relaxation')}>Relaxation</button>
      <h1>{activity}</h1>
    </div>
  );
}

export default App;
