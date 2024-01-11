
// import NavBar from './components/NavBar'
import './App.css'
import Page from './components/Page'
import { Provider } from 'react-redux'
import { Store } from './Redux/store'

function App() {
 

  return (
    <Provider store={Store}>
       {/* <NavBar/> */}
       <Page/>
    </Provider>
  )
}

export default App