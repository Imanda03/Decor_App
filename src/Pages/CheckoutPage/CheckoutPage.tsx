import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';

const CheckoutPage = () => {
  return (
    <div>
      <div className="wr w-[30%] border border-black flex m-5 p-5">
        <div className="bill w-full">
        <div className="pay bg-black p-4 mb-6 text-white flex justify-center items-center">
         <AppleIcon className=''/>
          Pay
          </div>

          <div className="top space-y-4">
            <h3 className='text-xl'>Shipping Information</h3>
            <div className="email flex flex-col space-y-1">
              <label>Email</label>
              <input type='email' name='email' className='border border-gray-400'/>
            </div>
            <div className="flex flex-col space-y-1">
              <label>Shopping Address</label>
              <input type='text' name='address' className='border border-gray-400'/>
              <select className='border border-gray-400'>
              <option value=''>Select option</option>
                <option value='USA'>USA</option>
                <option value='Nepal'>Nepal</option>
                <option value='Korea'>Korea</option>
                <option value='Canada'>Canada</option>
                <option value='France'>France</option>
              </select>
            </div>
            <div className="down space-y-4">
              <h4 className='text-xl'>Payment Details</h4>
              <div className="email flex flex-col space-y-1">
                <label>Card Information</label>
                <input type='number' name='card' className='border border-gray-400' placeholder='1234 1234 1234 1234'/>
                  <div className="year space-x-1">
                <input type='date' name='date' className='border border-gray-400' />
                <input type='number' name='cvc' className='border border-gray-400' placeholder='CVC'/>

                  </div>
                  </div>
             
            </div>
            <div className="bg-blue-900 p-3 text-white rounded-2xl px-[35%]">Pay $11.30</div>
          </div>
        </div>
      </div>
      </div>
      )
}

export default CheckoutPage;