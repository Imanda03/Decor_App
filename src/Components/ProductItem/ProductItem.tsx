import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../interface';;

interface product{
  item:singleProduct;
}

const ProductItem:React.FC<product> = ({item}) => {
  const {categoryname}=useParams();

  return (
             <div className="w-[25%]">
              {/* <Link to={`/category/${categoryname}/product/${item.id}`}> */}
              <Link to={`/product/${item.id}`}>
                 <div className="flex flex-col h-[10rem] md:h-[15rem] justify-center items-center flex-1 m-1 md:m-2 hover:scale-110 shadow-black shadow-sm">
                     <img src={item.thumbnail} className='h-[60%]'/>
                     <div className="h2 flex flex-col items-center justify-center text-xs md:text-md">
                         <h2>{item.title}</h2>
                         <p>{item.price}</p>
                     </div>
                 </div>
                 </Link>
                 </div>
             
                
  )
}

export default ProductItem

