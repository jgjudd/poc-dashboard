import './App.css'
import Header from './components/MUI/Header'
import LandingPage from './pages/LandingPage'
import ExcelTool from './pages/ExcelTool'
import TextTool from './pages/TextTool'

import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements,
  Outlet
} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<LandingPage />} />
    <Route path="/excel" element={<ExcelTool />} />
    <Route path="/router" element={<div><div>Router Layout</div><Outlet /></div>}>
      <Route index element={<div>Router Page</div>} loader={()=>{return null}} />
      <Route path='/router/user' element={<div>User Content</div>} loader={()=>{return null}} />
      <Route path='/router/admin' element={<div>Admin Content</div>} loader={()=>{return null}} />
    </Route>
    <Route path="/text" element={<TextTool />} />
  </Route>
))

const App = () => {
  return <RouterProvider router={router} />
}
export default App
