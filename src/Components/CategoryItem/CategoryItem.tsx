import React from 'react';
import { Link } from 'react-router-dom';

interface catitem {
  item: string;
  icon: JSX.Element;
}

const CategoryItem: React.FC<catitem> = ({ item, icon }) => {
  return (
    <div className=''>
      <Link to={`/category/${item}`}>
        <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
          <div className="icon">
            {React.cloneElement(icon, { className: 'caticon' })}
          </div>
          <div className="furni">{item}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
