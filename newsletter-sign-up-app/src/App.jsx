import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="container">
      <div className='app-container'>
        <main className='left'>
          <div className='left-content'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building wht matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form>
              <h4>Email address</h4>
              <input type="email" placeholder='email@company.com' />
              <br />
              <button>Subscribe to monthly newsletter</button>
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
