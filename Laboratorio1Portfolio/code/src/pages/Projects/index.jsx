import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
    { name: 'Portfolio Pessoal', slug: 'portfolio-pessoal' },
    { name: 'Sistema de Tarefas', slug: 'sistema-de-tarefas' },
    { name: 'Dashboard Financeiro', slug: 'dashboard-financeiro' },
];

const Projects = () => {
    return (
        <section>
            <h1>Projetos</h1>

            <div className="projects-list">
                {projects.map((project) => (
                    <article key={project.slug} className="project-card">
                        <h2>{project.name}</h2>
                        <Link to={`/projetos/${project.slug}`} className="details-button">
                            Ver detalhes
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects