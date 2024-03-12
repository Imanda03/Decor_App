import React from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons/lib/icons';
import { increaseQuantity, removeCart, decreaseQuantity } from '../../Services/store/slice/CartSlice';
import { RootState } from '../../Services/store/store';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const dispatch=useDispatch();
    
    const data = useSelector((state: RootState) => state.carts.items);   

    const removeFromCart=(id:number)=>{
        dispatch(removeCart(id));        
    }

    const increaseToQuantity=(id:number)=>{
      dispatch(increaseQuantity(id));
    }

    const decreaseToQuantity=(id:number)=>{
      dispatch(decreaseQuantity(id));
    }

  return (
    <div>
        <Header isLogin/>
        <div className='wraps flex space-x-4'>
      <div className="wrap my-[4%] " style={{'flex':3}}>
      {data && data.map((item)=> ( 
       <div className="prolist m-2 md:m-4 flex flex-wrap space-x-6" key={item.id}>
             <div className="img flex-1 space-y-6">
              <div className="imgtop">
         <img src={item.thumbnail} className='w-full h-[16rem]'/>

              </div>
              
             </div>
             <div className="info flex-1 space-y-4">
              <div className="title text-3xl font-medium">{item.title}</div>
              <div className="brand">
              <div className="rating text-blue-700">{item.rating} Ratings</div>
              <div className="brand">Brand:<span className='text-blue-700'> {item.brand} | More products on other brands.</span></div>
              </div>
            <div className="price">
            <div className="price text-custom-brown-800 text-4xl">Rs. {item.price}</div>
              <div className="discountPer">
                  <span className='line-through'>Rs. 700</span>
                  <span className='line'> {item.discountPercentage}%</span>
                </div>
            </div>
              <div className="description">{item.description}</div>
              <div className="stock">Stock: {item.stock}</div>

              <div className="quantity flex space-x-3 items-center">
                Quantity:
                <div className="flex items-center ml-2" onClick={()=>decreaseToQuantity(item.id)}> <MinusOutlined /></div>
                <div className="flex items-center ml-2">{item.quantity}</div>
               <div className="flex items-center ml-2" onClick={()=>increaseToQuantity(item.id)}> <PlusOutlined /></div>        
              </div>

              <div className="btn mt-2 space-x-8">
              <button className='bg-custom-brown-800 text-white p-3'>Buy Now</button>
              <button className='bg-orange-500 text-white p-3' onClick={()=>removeFromCart(item.id)}>Remove From Cart</button>

             </div>
             </div>
     
          </div>
                ))}
           </div>

                <div className="checkout flex-1 my-[4%]">
                <div className="wrap border border-black p-4">
                    <div className="box">
                      <div className="h4">Subtotal({data.length} item):$</div>
                      <Link to='/checkout' ><div className='bg-yellow-500 p-3 rounded-2xl px-11'>Proceed to checkout</div></Link>
                    </div>
                </div>
                 </div>
          </div>
        <Footer/>
    </div>
  )
}

export default CartPage