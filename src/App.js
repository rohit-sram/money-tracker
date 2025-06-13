// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, [])

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions';
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  function addNewTransaction(eve) { 
    eve.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name.trim().split(" ")[0];
    const namewoPrice = name.substring(price.length + 1);
    // const parts = name.trim().split(' ');
    // const price = parts[0];
    // const namewoPrice = parts.slice(1).join(' ');
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        price,
        name: namewoPrice, // 
        description, 
        datetime
      })
    }).then((response) => {
      response.json().then((json) => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json);

        getTransactions().then((transactions) => {
          setTransactions(transactions);
        });
      });
    });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + parseFloat(transaction.price);
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <main>
      {/* <h1>$300<span>.00</span></h1> */}
      <h1>${balance}<span>.{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basics'>
          <input 
            type='text' 
            value={name} 
            onChange={(eve) => setName(eve.target.value)}
            placeholder={'-350 apple watch'} />
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
        {/* {transactions.length} */}
      </form>
      <div className='transactions'>
        {transactions.length > 0 && transactions.map((transaction) => (
          <div className='transaction'>
            <div className='left'>
              <div className='name'>{transaction.name}</div>
              <div className='description'>{transaction.description}</div>
            </div>
            <div className='right'>
              {/* {console.log(transaction.price)} */}
              <div className={"price " +(transaction.price < 0 ? 'red' : 'green')}>
                {transaction.price}
              </div>
              <div className='datetime'>2024-10-23 15:40</div>
            </div>
          </div>
        ))}
        {/* <div className='transaction'>
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
        </div> */}
      </div>
    </main>
  );
}

export default App;
