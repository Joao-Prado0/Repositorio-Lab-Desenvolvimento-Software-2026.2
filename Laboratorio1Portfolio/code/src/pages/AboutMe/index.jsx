import { useState } from "react";
import "./AboutMe.css";
import TypewriterText from "../../components/ui/TypeWritterText";



const AboutMe = () => {
    const [showMore, setShowMore] = useState(false);

    const handleClickShowMore = () => setShowMore(!showMore);

    const texto1 = "Sou João Prado estudante do 4º período de Engenharia de Software na PUC Minas. Nascido e criado em Belo Horizonte, MG, aspiro em ser o melhor profissional que posso. Atualmente sou estagiário no setor de ADAS (Advanced Driver Assistence Systems), na Stellantis da planta de Betim-MG.";
    const texto2 = "A minha experiência profissional atual, despertou em mim o interesse pela área do software embarcado, área em que tenho investido maior parte dos meus estudos independentes ao mesmo tempo que sigo trabalhando em meus projetos acadêmicos e no meu estágio.";

    return (
        <div className="aboutme-container">
            <div className="aboutme-text">
                <h1>Sobre Mim</h1>
                <h2>João Prado</h2>
                
                <TypewriterText text={texto1} />

                {showMore && <TypewriterText text={texto2} />}
                
                <button onClick={handleClickShowMore}>
                    {showMore ? 'Voltar <' : 'Saiba Mais >'}
                </button>
            </div>
            <div>
                <img src="\img\ProfilePics\ProfilePic1.jpg" className="profile-pic" />
            </div>
        </div>
    );
}

export default AboutMe;