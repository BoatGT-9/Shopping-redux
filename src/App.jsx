
import NavBar from './components/Navbar'
import './App.css'
import Page from './pages/Page'
import { Provider } from 'react-redux'
import { Store } from './Redux/store'

function App() {
  return (
    <Provider store={Store}>
       <NavBar/>
       <Page/>
    </Provider>
  )
}

export default App