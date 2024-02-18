import React from 'react'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LightIcon from '@mui/icons-material/Light';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { Link } from 'react-router-dom';

interface category{
   item: {
    id:number;
    name:string;
}}

const CategoryItem:React.FC<category> = ({item}) => {
    
    interface CategoryIcons {
        [key: string]: JSX.Element;
      }
      
      const categoryIcons: CategoryIcons = {
        'Furniture': <ChairOutlinedIcon />,
        'Textiles': <AirlineSeatIndividualSuiteIcon />,
        'Wall Decor': <InsertPhotoIcon />,
        'Lighting': <LightIcon />,
        'Decoration': <RiceBowlIcon />,
      };
      

  return (
    <div className=''>
        <Link to={`/category/${item.id}`}>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              {/* <ChairOutlinedIcon className='caticon'/> */}
              <div className="icon ">
              {React.cloneElement(categoryIcons[item.name], { className: 'caticon' })}

              </div>

              <div className="furni">{item.name}</div>
            </div>
            </Link>
    </div>
  )
}

export default CategoryItem




// import React from 'react'
// import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
// import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import LightIcon from '@mui/icons-material/Light';
// import RiceBowlIcon from '@mui/icons-material/RiceBowl';


// const CategoryItem= () => {
//   return (
//     <div>
//           <div className="categories flex justify-center items-center relative -top-6 md:-top-12"> 
//             <div className="catlist flex w-3/4 justify-center items-center bg-red-300">
//             <div className="cat flex hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
//               <ChairOutlinedIcon className='caticon'/>
//               <div className="furni">Furniture</div>
//             </div>
//             <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7 border-t-2 border-red-800">
//               <AirlineSeatIndividualSuiteIcon className='caticon'/>
//               <div className="furni">Home Textiles</div>
//             </div>
//             <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
//               <InsertPhotoIcon className='caticon'/>
//               <div className="furni">Wall Decor</div>
//             </div>
//             <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
//               <LightIcon className='caticon'/>
//               <div className="furni">Lighting</div>
//             </div>
//             <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
//               <RiceBowlIcon className='caticon'/>
//               <div className="furni">Decoration</div>
//             </div>
            
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CategoryItem