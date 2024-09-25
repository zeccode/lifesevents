import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from '../pages/home'
import MainLayout from "../layouts/mainLayout"
import NotFound from "../pages/notFound"


const RouteProvider = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Home />} />
          <Route path='/about' element={<Home pageName="Sobre" />} />
          <Route path='/contact-us' element={<Home pageName="Fale Conosco" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default RouteProvider
