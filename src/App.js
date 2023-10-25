import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Index from './pages/Index';
import About from './pages/About';
import Footer from './components/Footer';
import Models from './pages/Models';
import { ContextProvider } from './utils/Maincontext';
import Testimonials from './pages/Testimonials';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <ContextProvider>
      <div className="w-screen h-auto overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='about' element={<About />} />
          <Route path='models' element={<Models />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='team' element={<Team />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
