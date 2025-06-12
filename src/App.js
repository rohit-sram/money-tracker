// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(eve) { 
    eve.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, description, datetime})
    }).then((response) => {
      response.json().then((json) => {
        console.log('result', json);
      });
    });
  }
  return (
    <main>
      <h1>$300<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basics'>
          <input 
            type='text' 
            value={name} 
            onChange={(eve) => setName(eve.target.value)}
            placeholder={'+350 apple watch'} />
          <input 
            type='datetime-local'
            value={datetime}
            onChange={(eve) => setDatetime(eve.target.value)} />
        </div>
        <div className='description'>
          <input 
            type='text' 
            value={description}
            onChange={(eve) => setDescription(eve.target.value)}
            placeholder={'description'} />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Free-lance gig</div>
            <div className='description'>Time for a change</div>
          </div>
          <div className='right'>
            <div className='price green'>+$300</div>
            <div className='datetime'>2024-10-23 15:40</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>Time for a change</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2024-10-23 15:40</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>gig 2</div>
            <div className='description'>Time for a change</div>
          </div>
          <div className='right'>
            <div className='price green'>+$200</div>
            <div className='datetime'>2024-10-23 15:40</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
