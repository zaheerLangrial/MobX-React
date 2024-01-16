import './App.css'
import Home from './pages/Home'
import { UserStore } from './store/UserStore'

function App() {
  const store = new UserStore()

  return (
    <>
      <Home store= {store} />
    </>
  )
}

export default App
