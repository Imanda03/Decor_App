import React, { useEffect, useState } from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import axios from 'axios';

const Category= () => {

  const[categories,setCategories]=useState<string[]>([]);

  const getCategory=()=>{
    axios.get(`https://dummyjson.com/products/categories`)
    .then(resp=>{setCategories(resp.data)
      // console.log(categories);
      ;
    })
    .catch(err=>console.error(err));
  }
 
  useEffect(()=>{
    getCategory();
  },[]);

  const desiredCategories=["furniture","skincare","fragrances","lighting","home-decoration"];
  const filtercategory=categories.filter(cat=>desiredCategories.includes(cat.toLowerCase()));

  return (
    <div>
          <div className="categories flex flex-wrap justify-center items-center relative -top-6 md:-top-12"> 
          <div className="catlist flex w-3/4 justify-center items-center bg-red-300">

        {
            filtercategory.map((item,index)=>(
                <div key={index} className='w-full' >
                     <CategoryItem item={item}/>
                </div>
            ))
        }
        </div>
       </div>
    </div>
  )
}

export default Category;