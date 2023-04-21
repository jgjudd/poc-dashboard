import './App.css'

import {Route, Routes} from 'react-router-dom'
import Header from './components/MUI/Header'
import LandingPage from './pages/LandingPage'
import ExcelTool from './pages/ExcelTool'
import RouterDemo from './pages/RouterDemo'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/excel" element={<ExcelTool />} />
          <Route path="/router" element={<RouterDemo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
