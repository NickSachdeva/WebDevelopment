import React from 'react'
import './App.css';
import GithubUser from './components/GithubUsers';

const App = () => {
  return (
    <div className='App'>
      <h1>Github App</h1>
      <GithubUser username="NickSachdeva"/>
      <GithubUser username="facebook"/>
      <GithubUser username="alok92iit"/>
      <GithubUser username="sabeelhps"/>
    </div>
  )
}

export default App
