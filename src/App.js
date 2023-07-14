import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Computer Science - Web Development - Cat Owner
        </p>
        <a
          className="LinkedIn"
          href="https://www.linkedin.com/in/ashleyeradford/"
        >
         <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="GitHub"
          href="https://github.com/ashleyradford"
        >
         <FontAwesomeIcon icon={faGithub} />
        </a>
      </header>
    </div>
  );
}

export default App;
