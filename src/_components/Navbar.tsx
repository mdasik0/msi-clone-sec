import { useState } from 'react'
import logo from '../assets/images/msi-logo.png'
import { FaMoon, FaSun } from 'react-icons/fa';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='py-2 bg-[#F5F5F5]  '>
      <div className='flex items-center justify-between w-[1500px] mx-auto py-1'>

        {/* logo */}
        <div>
            <img className='w-[132px] h-[72px] object-contain' src={logo} alt='msi logo' />
        </div>

        {/* nav links */}
        <div className='uppercase poppins-medium text-[16px] flex items-center gap-6'>
            <ul className='flex items-center gap-6 '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>worldwide wardrobe</li>
                <li className='cursor-pointer'>our story </li>
                <li className='cursor-pointer'>sustainability</li>
            </ul>
            <div className='flex items-center gap-6'>

            <button className='uppercase bg-[#9A0E20] text-white rounded px-4 py-1.5 text-[14px]'>contact us</button>
            <div className='text-[24px] w-10 h-10 grid items-center' onClick={() => setDarkMode(!darkMode)}>
              {
                !darkMode ? <FaMoon className='text-black' /> :<FaSun className='text-white' />
              }
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar