import { Menu } from 'lucide-react';
import ModeToggle from "@/components/ui/modetoggle";

type NavbarProps = {
  type?: string;
};

const Navbar = ({ type }: NavbarProps) => {
  if (type === 'header') {
    return (
      <div className="bg-turbo-light-gray p-3 w-full flex items-center justify-center relative">
        {/* Left: Mode toggle, vertically centered */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <ModeToggle />
        </div>

        {/* Center: Logo Text */}
        <div className="text-center">
          <span className="text-turbo-red text-2xl font-turbo">S</span>
          <span className="text-turbo-black text-2xl font-turbo">AMANVAYA.ERR</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-turbo-light-gray text-center p-3">
      <span className="sm:text-2xl text-xl text-turbo-red">©</span>
      <span className="sm:text-2xl text-xl text-turbo-black">2025 Samanvaya vats All rights reserved</span>
    </div>
  );
};

export default Navbar;