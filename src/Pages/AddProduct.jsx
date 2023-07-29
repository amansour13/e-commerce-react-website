import './AddProduct.css';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import axios from 'axios';


function AddProduct (){

    function isValidFloat(value) {
        const floatRegex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
      
        return floatRegex.test(value);
      }

      function isValidURLList(urlList) {
        const urls = urlList.split('-');
      
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      
        for (const url of urls) {
          if (!urlRegex.test(url)) {
            return false;
          }
        }
      
        return true;
      }
      
      
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [price, setPrice] = useState("");
      const [discountPercentage, setDiscountPercentage] = useState("");
      const [rating, setRating] = useState("");
      const [stock, setStock] = useState(0);
      const [brand, setBrand] = useState("");
      const [category, setCategory] = useState("");
      const [images, setImages] = useState("");

    return (
        <>
            <Navbar />
            <div className='container'>
                <form action="">
                    <input type="text" id="title" placeholder='Product Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <div className='sub-form'>
                        <input type="text" id="price" placeholder='Price ($): 99.9' value={price} onChange={(e) => setPrice(e.target.value)}/>
                        <input type="text" id="discount" placeholder='Discount: 12.5' value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)}/>
                    </div>
                    <div className='sub-form'>
                        <input type="number" id="stock" placeholder='Stock: 100' value={stock} onChange={(e) => setStock(e.target.value)}/>
                        <input type="text" id="rating" placeholder='Rating: 12.5' value={rating} onChange={(e) => setRating(e.target.value)}/>
                    </div>
                    <div className='sub-form'>
                        <input type="text" id="brand" placeholder='Brand: Apple' value={brand} onChange={(e) => setBrand(e.target.value)}/>
                        <input type="text" id="category" placeholder='Category: Smartphones' value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <input type="text" id="images" placeholder='Image URLs: url1-url2-url3-...' value={images} onChange={(e) => setImages(e.target.value)}/>
                    <textarea id="description" rows="5" placeholder='Description: ' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button className='btn' onClick={
                        (e) => {
                            e.preventDefault();
                            try{
                                if(!isValidFloat(price))                throw ("Invalied Price :(");
                                if(!isValidFloat(discountPercentage))   throw ("Invalied Discount Percentage :(");
                                if(!isValidFloat(rating))               throw ("Invalid Rating :(");
                                if(!isValidURLList(images))             throw ("Invalid Image URLs syntax. EX: url1-ul2-url3 :(");
                                else{
                                    const newProduct = {
                                        title: title,
                                        description: description,
                                        price: parseFloat(price),
                                        discountPercentage: parseFloat(discountPercentage),
                                        rating: parseFloat(rating),
                                        stock: parseInt(stock),
                                        brand: brand,
                                        category: category,
                                        thumbnail: images.split("-")[0],
                                        images: images.split("-")
                                      };

                                    async function fetchData  (){
                                        axios.post("https://dummyjson.com/products/add", newProduct)
                                            .then(response => {
                                                alert('Product added successfully :)');
                                                console.log(response.data);
                                            })
                                            .catch(error => {
                                                console.log('Error adding product:', error);
                                            });
                                    }
                                    fetchData();
                                }
                                setTitle("");
                                setDescription("");
                                setPrice("");
                                setDiscountPercentage("");
                                setRating("");
                                setStock(0);
                                setBrand("");
                                setCategory("");
                                setImages("");
                            }
                            catch(err){
                                console.log(err)
                            }
                        }
                    }>ADD</button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;