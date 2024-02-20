import React ,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface singleProduct{
  id:number;
  title:string;
  description:string;
  price:string;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  thumbnail:string;
  images:string[];
}

const ProductPage = () => {

  const {categoryname,productid}=useParams();

  const [data, setData] = useState<singleProduct | ''>('');
  const[hoverImage,setHoverImage]=useState<string>('');

  const getProduct=()=>{
    axios.get(`https://dummyjson.com/product/${productid}`)
    .then(resp=>{setData(resp.data)
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getProduct();
  },[productid]);

  return (
    <div className='w-100vw'>
    <Header />
    <div className='wraps'>
      <div className="wrap my-[4%]">
      {data && (
       <div className="prolist m-2 md:m-4 flex flex-wrap space-x-6">
             <div className="img flex-1 space-y-6">
              <div className="imgtop">
              {hoverImage ? <img src={hoverImage} className='w-full h-[16rem] '/>: <img src={data.thumbnail} className='w-full h-[16rem]'/>}

              </div>
              
                  <div className="images flex space-x-3">
                    {data.images.map((item) => (
                      <div className="div" key={item}>
                        <img src={item} className='border h-full w-full hover:border-custom-brown-800'
                        onMouseEnter={()=>setHoverImage(item)}
                        onMouseLeave={()=>setHoverImage('')}
                         />
                      </div>
                    ))}
                  </div>
             </div>
             <div className="info flex-1 space-y-4">
              <div className="title text-3xl font-medium">{data.title}</div>
              <div className="brand">
              <div className="rating text-blue-700">{data.rating} Ratings</div>
              <div className="brand">Brand:<span className='text-blue-700'> {data.brand} | More products on other brands.</span></div>
              </div>
            <div className="price">
            <div className="price text-custom-brown-800 text-4xl">Rs. {data.price}</div>
              <div className="discountPer">
                  <span className='line-through'>Rs. 700</span>
                  <span className='line'> {data.discountPercentage}%</span>
                </div>
            </div>
              <div className="description">{data.description}</div>
              <div className="stock">Stock: {data.stock}</div>

              <div className="btn mt-2 space-x-8">
              <button className='bg-custom-brown-800 text-white p-3'>Buy Now</button>
              <button className='bg-orange-500 text-white p-3'>Add to Cart</button>

             </div>
             </div>
     
          </div>
                )}
           </div>
    </div>
    <Footer />
  </div>  )
}

export default ProductPage;