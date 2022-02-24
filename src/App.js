import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact'
import NewProject from './components/pages/NewProject/NewProject'
import Projects from './components/pages/Projects/Projects'

import Container from './components/layout/Container/Container';
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar/Navbar'

export default function App() {
  
  
  return (
    <Router>
      <Navbar/>
      <Container customClass='min_height'>
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/company' element={<Company />} />          
          <Route path='/contact' element={<Contact />} />          
          <Route path='/newproject' element={<NewProject />} />          
          <Route path='/projects' element={<Projects />} />          
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}
