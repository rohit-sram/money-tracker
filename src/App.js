// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$300<span>.00</span></h1>
      <form>
        <div className='basics'>
          <input type='text' placeholder={'+350 apple watch'}/>
          <input type='datetime-local'/>
        </div>
        <div className='description'>
          <input type='text' placeholder={'description'}/>
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
