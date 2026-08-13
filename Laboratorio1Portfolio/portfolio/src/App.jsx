import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flex: 1, padding: '2rem' }}>
          <AppRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;