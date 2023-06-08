import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"> 
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"> COMPONENTS </h1>
      <ul className="hidden md:flex">
        <li className="p-4"> Home </li>
        <li className="p-4"> Components </li>
        <li className="p-4"> Social Network </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        { !nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-150" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"> Home </h1>
        <ul className='p-4 uppercase'>
          <li className="p-4 border-b border-x-gray-600"> Home </li>
          <li className="p-4 border-b border-x-gray-600"> Components </li>
          <li className="p-4 border-b border-x-gray-600"> Social Network </li>
        </ul>
      </div>
    </div>
  )
}