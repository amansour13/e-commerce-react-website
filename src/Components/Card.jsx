import './Card.css';
import { Link } from 'react-router-dom';
import RatingBar from './RatingBar';

function Card(props){
    const link = '/product/' + props.id;
    return (
        <Link to={link}>
            <div className="card" style={{backgroundImage: `url(${props.image})`}}>
                <div className="card-content">
                    <h3 className="card-title">{props.title}</h3>
                    <div>
                        <span className="card-price">${(((100 - props.dis) * props.price) / 100).toFixed(2) }  <del>${props.price}</del></span>
                        <RatingBar rating={props.rating} />
                    </div>
                </div>
                
            </div>
        </Link>

    );
}



export default Card;