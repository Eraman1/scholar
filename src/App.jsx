import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import NotFound from './pages/NotFound'
import DetailedScholarshipPage from './pages/ScholarshipDetail'
import { ScholarshipPage } from './pages/ScholarshipPage'
import ScholarshipApplicationForm from './pages/ApplyForm'
import PartnerPage from './pages/PartnerPage'
import Dashboard from './pages/Dashboard'
import ScrollToTop from './components/ScrollToTop'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="pt-10"> {/* To offset fixed navbar height */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
          <Route path="/scholarship/:id" element={<DetailedScholarshipPage />} />
          <Route path='/apply' element={<ScholarshipApplicationForm />} />
          <Route path='/partners' element={<div className='flex justify-center items-center h-screen'><h1 className="text-8xl font-bold text-[#3B3B3B] mt-2">Coming Soon</h1></div>} />
          <Route path='/events' element={<div className='flex justify-center items-center h-screen'><h1 className="text-8xl font-bold text-[#3B3B3B] mt-2">Coming Soon</h1></div>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
