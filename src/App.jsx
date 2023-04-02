import './App.css'

import {Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
