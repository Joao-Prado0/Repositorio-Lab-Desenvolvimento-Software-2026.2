import { useParams } from 'react-router-dom';
import './ProjectsDetails.css';

const ProjectDetails = () => {
    const { projectName } = useParams();

    return (
        <section>
            <h1>Detalhes do Projeto</h1>
            <p>Projeto selecionado: {projectName}</p>
        </section>
    );
};

export default ProjectDetails