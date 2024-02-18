import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import { categories } from '../../data';

const Category = () => {

  return (
    <div>
          <div className="categories flex flex-wrap justify-center items-center relative -top-6 md:-top-12"> 
          <div className="catlist flex w-3/4 justify-center items-center bg-red-300">

        {
            categories.map((item)=>(
                <div key={item.id} className='w-full' >
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