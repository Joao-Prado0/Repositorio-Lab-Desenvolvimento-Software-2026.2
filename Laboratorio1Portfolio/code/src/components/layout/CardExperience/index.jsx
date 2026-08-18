import './CardExperience.css'
import '../../ui/Carousel'
import { NavLink } from 'react-router-dom'

const CardExperience = ({ obj }) => {
    return (
        <div className='card-experience'>
            <img src={obj.photos[0].url} alt={obj.title} />
            <h2 dangerouslySetInnerHTML={{ __html: obj.title }}></h2>
            <NavLink to={`/experiencias/${obj.slug}`}>
                <button>
                    {'Saiba Mais >'}
                </button>
            </NavLink>
        </div>
    )
}

export default CardExperience