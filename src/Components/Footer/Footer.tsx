import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className='footerMain bg-custom-brown-700 w-full flex flex-col item-center justify-center'>
      <div className="foot flex p-3 md:p-8 ml-1 md:ml-6 space-x-1 md:space-x-10 text-gray-200">
          <div className="left flex-1 space-y-4 md:space-y-8 p-1 md:p-2">
            <div className="logo text-[0.6rem] md:text-[1.3rem] font-medium">DAZZLE</div>
            <div className="social flex flex-col md:flex-row space-y-1 md:space-x-3 ">
              <div className="whats w-5 h-5 md:w-9 md:h-9 border rounded-full bg-green-500 text-white items-center justify-center flex"><WhatsAppIcon/></div>
              <div className="insta w-5 h-5 md:w-9 md:h-9 border rounded-full bg-pink-600 text-white items-center justify-center flex"><InstagramIcon/></div>
              <div className="twitt w-5 h-5 md:w-9 md:h-9 border rounded-full bg-blue-500 text-white items-center justify-center flex"><TwitterIcon/></div>
              <div className="fb w-5 h-5 md:w-9 md:h-9 border rounded-full bg-blue-800 text-white items-center justify-center flex"><FacebookIcon/></div>
            </div>
          </div>
          <div className="center flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
          <div className="title text-[0.6rem] md:text-[1rem] font-medium">HOW DOES IT WORK</div>
              <div className="list text-[0.5rem] md:text-[0.9rem] space-y-1 md:space-y-2">
                <div className="li">Portfolio</div>
                <div className="li">Customer Reviews</div>
                <div className="li">About us</div>
                <div className="li">Blog</div>
                <div className="li">FAQ</div>
                <div className="li">Manufacturer</div>
              </div>
          </div>
          <div className="center flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
          <div className="title text-[0.6rem] md:text-[1rem] font-medium">SERVICES</div>
          <div className="list text-[0.5rem] md:text-[0.9rem] space-y-1 md:space-y-2">
                <div className="li">Sample Development</div>
                <div className="li">Global Shipping </div>
                <div className="li">Label tags Packaging</div>
                <div className="li">Production</div>
                <div className="li">Photography</div>
                <div className="li">Products</div>
              </div>
          </div>
          <div className="right flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
            <div className="text-[0.6rem] md:text-[1rem] font-medium">CONTACT US</div>
          <div className="list text-[0.5rem] md:text-[0.9rem] space-y-1 md:space-y-2">
                <div className="li">9852365871, 01-52365</div>
                <div className="li">info@decor.com </div>
                <div className="li">Lainchaur, Kathmandu </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)

// <footer className='footerMain bg-custom-brown-700 w-full flex flex-col item-center justify-center'>
// <div className="foot flex p-3 md:p-12 ml-1 md:ml-10 space-x-1 md:space-x-12 text-gray-200">
//     <div className="left flex-1 space-y-4 md:space-y-8 p-1 md:p-2">
//       <div className="logo text-[0.6rem] md:text-2xl font-medium">DAZZLE</div>
//       <div className="social flex flex-col md:flex-row space-y-1 md:space-x-3 ">
//         <div className="whats w-5 h-5 md:w-10 md:h-10 border rounded-full bg-green-500 text-white items-center justify-center flex"><WhatsAppIcon/></div>
//         <div className="insta w-5 h-5 md:w-10 md:h-10 border rounded-full bg-pink-600 text-white items-center justify-center flex"><InstagramIcon/></div>
//         <div className="twitt w-5 h-5 md:w-10 md:h-10 border rounded-full bg-blue-500 text-white items-center justify-center flex"><TwitterIcon/></div>
//         <div className="fb w-5 h-5 md:w-10 md:h-10 border rounded-full bg-blue-800 text-white items-center justify-center flex"><FacebookIcon/></div>
//       </div>
//     </div>
//     <div className="center flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
//     <div className="title text-[0.6rem] md:text-xl font-medium">HOW DOES IT WORK</div>
//         <div className="list text-[0.5rem] md:text-lg space-y-1 md:space-y-2">
//           <div className="li">Portfolio</div>
//           <div className="li">Customer Reviews</div>
//           <div className="li">About us</div>
//           <div className="li">Blog</div>
//           <div className="li">FAQ</div>
//           <div className="li">Manufacturer</div>
//         </div>
//     </div>
//     <div className="center flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
//     <div className="title text-[0.6rem] md:text-xl font-medium">SERVICES</div>
//     <div className="list text-[0.5rem] md:text-lg space-y-1 md:space-y-2">
//           <div className="li">Sample Development</div>
//           <div className="li">Global Shipping </div>
//           <div className="li">Label tags Packaging</div>
//           <div className="li">Production</div>
//           <div className="li">Photography</div>
//           <div className="li">Products</div>
//         </div>
//     </div>
//     <div className="right flex-1 space-y-2 md:space-y-6 p-1 md:p-2">
//       <div className="text-[0.6rem] md:text-xl font-medium">CONTACT US</div>
//     <div className="list text-[0.5rem] md:text-lg space-y-1 md:space-y-2">
//           <div className="li">9852365871, 01-52365</div>
//           <div className="li">info@decor.com </div>
//           <div className="li">Lainchaur, Kathmandu </div>
//         </div>
//     </div>
// </div>
// </footer>