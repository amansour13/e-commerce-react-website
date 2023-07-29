import './DetailedProduct.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import RatingBar from '../Components/RatingBar';
import axios from 'axios';


function DetailedProduct (){
    const param = useParams();

    const [res, setRes] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function fetchData  (){
            const response = await axios.get(`https://dummyjson.com/products/${param.id}`);
            setRes(response.data);
            setLoad(true);
            console.log(res);
        }
        fetchData();
    },[]);

    return (
        <>
            <Navbar />
            {
            (load && res) ?
                <div className='main-container'>
                    <div className='Dcontainer'>
                        <ImageSlider images={res.images} />
                        <div className='header'>
                            <div className='content'>
                                <h2 className='title'>{res.title}</h2>
                                <h3 className='brand'>Brand: {res.brand}</h3>
                            </div>
                            <h3 className='category'>{res.category}</h3>
                        </div>
                        <p className='description'>{res.description}</p>
                    </div>
                <Numbers dis={res.rating} price={res.price} rating={res.rating} stock={res.stock}/>
            </div>
            : console.log("error")
        }
        </>
    );
}

function Numbers (props) {
    return (
        <div className='numbers-container'>
            
            <div className='haitham'>
                <span className='stock'>{props.stock} left</span>
            </div>
            <span className="card-price">${(((100 - props.dis) * props.price) / 100).toFixed(2) }  <del>${props.price}</del></span>
            <RatingBar rating={props.rating} />
        </div>
    );
}

export default DetailedProduct;