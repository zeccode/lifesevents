import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from '../pages/home'
import MainLayout from "../layouts/mainLayout"
import NotFound from "../pages/notFound"
import About from "../pages/about/about"


const RouteProvider = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Home pageName="Fale Conosco" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default RouteProvider
