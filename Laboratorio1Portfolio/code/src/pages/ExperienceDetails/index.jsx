import { useParams } from "react-router-dom";
import { experienceInformation } from "../../data/experience";
import "./ExperienceDetails.css";
import Carousel from "../../components/ui/Carousel";
import TypewriterText from "../../components/ui/TypeWritterText";

const ExperienceDetails = () => {
    // Pegamos o parâmetro dinâmico direto da URL
    const { experienceName } = useParams();

    // Buscamos no mock o objeto correto
    const experience = experienceInformation.find(
        (exp) => exp.slug === experienceName
    );

    if (!experience) {
        return <h1>Experiência não encontrada.</h1>;
    }

    return (
        <div className="details-container">
            <h1 dangerouslySetInnerHTML={{ __html: experience.title }}></h1>
            <TypewriterText text={experience.shortText}/>

            <div className="carousel-section">
                <Carousel>
                    {experience.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.url}
                            alt={`Foto da experiência ${experience.title} - ${index + 1}`}
                            className="carousel-image"
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ExperienceDetails;