import Navbar from '../Components/Navbar';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

function Home (){
    const [res, setRes] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function fetchData  (){
            const response = await axios.get("https://dummyjson.com/products");
            setRes(response.data.products);
            setLoad(true)
        }
        fetchData();
    },[]);

    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    load && res.map((el,i) => {
                        console.log(i);
                        return <Card id={el.id} title={el.title} image={el.thumbnail} price={el.price} rating={el.rating} dis={el.discountPercentage}/>;
                    })
                }
                
            </div>
            
        </>
    );
}

export default Home;