import React, { Component } from 'react'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { ToDoLists } from './todos/components/ToDoLists'
import i18n from './localization'
import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from './themes'
import api from './api'

const MainAppBar = () => {
  
  return <AppBar position='static' color='primary'>
    <Toolbar>
      <Typography variant='h6' color='inherit'>
        {i18n.t('title')}
      </Typography>
    </Toolbar>
  </AppBar>
}

const mainWrapperStyle = { display: 'flex', flexDirection: 'column' }
const centerContentWrapper = { display: 'flex', justifyContent: 'center' }
const contentWrapperStyle = { display: 'flex', flexDirection: 'column', maxWidth: '80rem', flexGrow: 1 }

const MainWrapper = ({ children }) => {
  return <div style={mainWrapperStyle}>
    <MainAppBar />
    <div style={centerContentWrapper}>
      <div style={contentWrapperStyle}>
        {children}
      </div>
    </div>
  </div>
}

class App extends Component {
  render () {

    return <ThemeProvider theme={mainTheme}>
      <MainWrapper>
        <ToDoLists
          style={{ margin: '1rem' }}
        />
      </MainWrapper>
    </ThemeProvider>
  }
}

export default App
