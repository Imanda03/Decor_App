import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Category from '../../Components/Categories/Category';
import { categories } from '../../data';
import { useParams } from 'react-router-dom';

interface categoryData {
  id: number;
  name: string;
  products: { id: number; name: string; }[];//product is an array
}

const CategoryPage = () => {
  const { categoryid } = useParams();
  const category: categoryData | undefined = categories.find((cat) => cat.id.toString() === categoryid);
  const products = category ? category.products : []; // Ensure products is only accessed if category is defined

  return (
    <div className='w-100vw'>
      <Header />
      <div className='wrap'>
        <div className="wra">
          <div className="img h-[45vh] md:h-[90vh]">
            <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full' alt="Category" />
          </div>
          <Category />
          <h1>Category ID: {categoryid}</h1>
          {/* Render products only if category is defined */}
          {
            category && (
              <ul>
                {
                  products.map((item) => (
                    <div key={item.id}>
                      <li>{item.name}</li>
                    </div>
                  ))
                }
              </ul>
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
