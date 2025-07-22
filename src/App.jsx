import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="pt-10"> {/* To offset fixed navbar height */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
