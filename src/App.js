import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <><div class="d-flex flex-column justify-content-center w-100 h-100" /><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Computer Science - Web Development - Cat Owner
        </p>
        <a
          href="https://www.linkedin.com/in/ashleyeradford/" target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon className="Link"  icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ashleyradford" target="_blank" rel="noreferrer" 
        >
          <FontAwesomeIcon className="Link" icon={faGithub} />
        </a>
      </header>
    </div></>
   
  );
}

export default App;
