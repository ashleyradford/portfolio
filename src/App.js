import React from 'react'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'
import logo from './logo.svg'
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
    <Grid container rowSpacing={4} marginTop={4}>
      <Header item xs={12}>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Content item xs={12}>
        Computer Science - Web Development - Cat Owner
      </Content>
      <Icons item xs={12}>
        <a href="https://www.linkedin.com/in/ashleyeradford/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="Link" icon={faLinkedin} />
        </a>
        <a href="https://github.com/ashleyradford" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="Link" icon={faGithub} />
        </a>
      </Icons>
    </Grid>
  )
}

export default App
