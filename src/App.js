import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'

const Header = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled(Grid)`
  display: flex;
  justify-content: center;
`

const Icons = styled(Grid)`
  display: flex;
  justify-content: center;
  gap: 10px;
`

function App() {
  return (
    <Grid container spacing={4}>
      <Header item sm={12}>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Content item sm={12}>
        Computer Science - Web Development - Cat Owner
      </Content>
      <Icons item sm={12}>
        <a className="LinkedIn" href="https://www.linkedin.com/in/ashleyeradford/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="GitHub" href="https://github.com/ashleyradford">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Icons>
    </Grid>
  )
}

export default App
