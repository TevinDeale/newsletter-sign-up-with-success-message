import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [good, setGood] = useState('');
  const [valid, setValid] = useState('valid');
  const [inputValid, setInputValid] = useState('');
  const regex =  /^[a-zA-Z0-9+_.-]+@[a-zA-Z+-]+(\.[a-zA-z0-9]+)+$/g

  const handleEmailVerification = () => {
   
    if (email.match(regex)) {
      setGood('success')
      setValid('valid')
      setInputValid('')
    } else {
      setGood('')
      setValid('invalid')
      setInputValid('invalid-email-input')
    }
  }

  return (
    <div className="container ">
      <div className='app-container'>
        <main className='left'>
          <div className='left-content'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className='email-label'>
                <h4>Email address</h4>
                <h4 className={valid} id="invalid-email">Valid email required</h4>
              </div>
              <h2>{good} {valid}</h2>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email@company.com' id={inputValid} />
              <br />
              <button onClick={handleEmailVerification}>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </main>
        <main className='right'>
          <img src='../src/assets/images/illustration-sign-up-desktop.svg' alt='illustration' />
        </main>
      </div>
    </div>
  )
}

export default App
