import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import TrabalheConosco from './pages/TrabalheConosco';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Parceiros from './pages/Parceiros';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/parceiros" element={<Parceiros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;