import React,{useEffect, useState} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Category from '../../Components/Categories/Category';
import { categories } from '../../data';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductItem from '../../Components/ProductItem/ProductItem';

interface ProductData {
  id: number;
  title: string;
  price: string;
  thumbnail:string;//product is an array
}

const CategoryPage = () => {
  const {categoryname}=useParams();
  
  const[data,setData]=useState<ProductData[]>([]);

  const getProductList=()=>{
    axios.get(`https://dummyjson.com/products/category/${categoryname}`)
    .then(resp=>{setData(resp.data.products)
    console.log(resp.data.products);
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getProductList();
  },[categoryname]);

  return (
    <div className='w-100vw'>
      <Header />
      <div className='wrap'>
        <div className="wra">
          <div className="img h-[45vh] md:h-[90vh]">
            <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full' alt="Category" />
          </div>

          <Category/>


         <div className="prolist m-2 md:m-4 flex flex-wrap">
                {
                  data.map((item) => (
                    <ProductItem key={item.id} item={item}/>
                  ))
                }
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
