import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { UserProvider } from './context/userContext'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
