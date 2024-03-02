import React from 'react'
import { Box,Typography,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

interface catitem {
  item: string;
  icon: JSX.Element;
}

const CategoryItem:React.FC<catitem> = ({item,icon}) => {
    
    interface CategoryIcons {
        [key: string]: JSX.Element;
      }
      
      // const categoryIcons: CategoryIcons = {
      //   'Furniture': <ChairOutlinedIcon />,
      //   'Textiles': <AirlineSeatIndividualSuiteIcon />,
      //   'Wall Decor': <InsertPhotoIcon />,
      //   'Lighting': <LightIcon />,
      //   'Decoration': <RiceBowlIcon />,
      // };
      

  return (
    <div className=''>
        <Link to={`/category/${item}`}>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              {/* <ChairOutlinedIcon className='caticon'/> */}
              <div className="icon ">
              {React.cloneElement(icon, { className: 'caticon' })}
              </div>

            </Link>
    </div>
  )
}

export default CategoryItem;