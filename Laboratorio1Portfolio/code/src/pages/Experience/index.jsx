import CardExperience from "../../components/layout/CardExperience"
import { experienceInformation } from "../../data/experience"
import "./Experience.css"

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experiências</h1>
            <div className="container-cards-experience">
                {experienceInformation.map((experienceObj) => (
                    <CardExperience key={experienceObj.slug} obj={experienceObj} />
                ))}
            </div>
        </div>
    )
}

export default Experience