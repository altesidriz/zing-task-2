'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(0,0,0)',
    },
  };
  const centerLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(0,0,0)',
    },
  };

  return (
    <div className='relative px-7 md:px-36 flex flex-row h-20 justify-between items-center bg-[#DCDCDC] border-2'>
      <div className="w-2/3 flex item-center justify-start gap-24">
        <div className="text-[#000000] text-[28px] font-black">Roooby</div>
        <div className="hidden md:flex items-center gap-5">
          <Link href="#" className="font-medium text-sm">Product</Link>
          <Link href="#" className="font-medium text-sm">Pricing</Link>
          <Link href="#" className="font-medium text-sm">Company</Link>
          <Link href="#" className="font-medium text-sm">Recources</Link>
          <Link href="#" className="font-medium text-sm">Contact</Link>
        </div>
      </div>
      {/* BUTTONS */}
      <div className="hidden lg:flex justify-around gap-5">
        <button className="p-2 w-auto font-bold text-xs bg-white border-[#dcdcdc] border-[1px] rounded-md">Log In</button>
        <button className="p-2 w-auto font-bold text-xs text-white bg-[#150050] rounded-md">Try forFree</button>
      </div>
      {/* RESPONSIVE BUTTON */}
      <button onClick={() => setOpen((prev) => !prev)} className="w-10 h-6 flex flex-col justify-between z-50 relative md:hidden">
        <motion.div variants={topLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-black w-8 h-0.5 origin-left"></motion.div>
        <motion.div variants={centerLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-black w-8 h-0.5"></motion.div>
        <motion.div variants={bottomLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-black w-8 h-0.5 origin-left"></motion.div>
      </button>
      {open &&
        <div className="absolute pr-20 pt-10 w-1/2 h-screen top-[70px] bg-[#DCDCDC] right-0 flex flex-col justify-start items-end gap-10">
          <Link href="#" className="font-medium text-base">Product</Link>
          <Link href="#" className="font-medium text-base">Pricing</Link>
          <Link href="#" className="font-medium text-base">Company</Link>
          <Link href="#" className="font-medium text-base">Recources</Link>
          <Link href="#" className="font-medium text-base">Contact</Link>
        </div>
      }
    </div>
  );
};
export default Navbar;