import './App.css'

import {Route, Routes} from 'react-router-dom'
import Header from './components/MUI/Header'
import LandingPage from './pages/LandingPage'
import ExcelTool from './pages/ExcelTool'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/excel" element={<ExcelTool />} />
        </Routes>
      </div>
    </>
  )
}

export default App
