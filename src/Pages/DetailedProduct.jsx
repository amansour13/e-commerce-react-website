import './DetailedProduct.css';
import {useParams} from 'react-router-dom';


function DetailedProduct (){
    const param = useParams();
    return (
        <div className='header'>
            <h1>hello world</h1>
            <p>{param.id}</p>
        </div>
    );
}

export default DetailedProduct;