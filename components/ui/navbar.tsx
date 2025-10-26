import { Menu } from 'lucide-react';

type NavbarProps = {
  type?: string;
};

const Navbar = ({type}: NavbarProps) => {
  if (type === 'header') {
    return (
      <div className="bg-turbo-light-gray p-3 w-full flex items-center justify-between relative">
        {/* Left: Menu Icon */}
        <div className="absolute left-4">
          <Menu className="text-turbo-red w-6 h-6 cursor-pointer" />
        </div>

        {/* Center: Logo Text */}
        <div className="flex-1 flex justify-center">
          <div className="text-center">
            <span className="text-turbo-red text-2xl font-turbo">S</span>
            <span className="text-turbo-black text-2xl font-turbo">AMANVAYA.ERR</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-turbo-light-gray text-center p-3">
         <span className='sm:text-2xl text-xl text-turbo-red'>©</span><span className='sm:text-2xl text-xl text-turbo-black'>2025 Samanvaya vats   All rights reserved</span>
      </div>
  );
};

export default Navbar;
