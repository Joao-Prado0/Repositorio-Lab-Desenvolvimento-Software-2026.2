import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar';
import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='container-app'>
      <NavBar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout