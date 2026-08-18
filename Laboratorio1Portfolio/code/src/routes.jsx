import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectsDetails';
import Experience from './pages/Experience';
import Contacts from './pages/Contacts';
import AppLayout from './components/layout/AppLayout';
import ExperienceDetails from './pages/ExperienceDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: 'projetos', element: <Projects /> },
      { path: 'projetos/:projectName', element: <ProjectDetails /> },
      { path: 'experiencias', element: <Experience /> },
      { path: 'experiencias/:experienceName', element: <ExperienceDetails />},
      { path: 'contato', element: <Contacts /> },
    ],
  },
]);

export default router;