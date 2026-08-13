import { Routes, Route } from 'react-router-dom';

// Importação das páginas
import Home from './pages/Home';             // 1. Sobre Mim
import Projects from './pages/Projects';     // 2. Projetos
import Experience from './pages/Experience'; // 3. Experiências
import Contact from './pages/Contact';       // 4. Contato

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/experiencias" element={<Experience />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}