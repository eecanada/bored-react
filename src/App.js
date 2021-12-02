import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Button } from 'react-bootstrap';

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
    <div class="relax">
      <h1 clasname="title"> Find Out How To Relax </h1>
      <div className="buttons">
        <Button
          className="buttons"
          onClick={() => setType('education')}
          variant="outline-dark"
        >
          Education
        </Button>
        <Button
          className="buttons"
          onClick={() => setType('music')}
          variant="outline-dark"
        >
          Music
        </Button>
        <Button
          className="buttons"
          onClick={() => setType('relaxation')}
          variant="outline-dark"
        >
          Relaxation
        </Button>
      </div>
      {loading ? (
        <Spinner className="spinner" animation="grow" variant="dark" />
      ) : (
        <h4 className="response">{activity}</h4>
      )}
    </div>
  );
}

export default App;
