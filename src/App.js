import React from 'react'
import { Provider } from 'react-redux'
import ComApp from './components/ComApp'
import store from './store'

function App() {
  return (
    <>
    <Provider store={store}> 
    <ComApp/>
    </Provider>
    </>
  )
}

export default App