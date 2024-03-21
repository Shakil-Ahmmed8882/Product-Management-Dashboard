import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { DropdownItem } from "./DropdownItem";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-1 rounded-full cursor-pointer hover:shadow-md transition"
        >
          
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer md:hidden block">
          <AiOutlineMenu />
          </button>
      </div>

      {/*  */}
      <div
        className={`${
          isOpen
            ? "translate-y-0 visible opacity-100"
            : "-translate-y-32 invisible opacity-0"
        } transition-all duration-300  absolute right-0 top-3`}
      >
        <div className="relative md:absolute w-[200px] sm:w-[32vw] md:w-[32vw] lg:w-[22vw]  h-52 rounded-xl shadow-md bg-primary-bg overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <DropdownItem item={"Home"} path={"/"} />

            {user ? (
              <>
                <DropdownItem item={"Dashboard"} path={"/dashboard"} />
              </>
            ) : (
              <>
                <DropdownItem item={"Login"} path={"/login"} />
                <DropdownItem item={"Sign up"} path={"/signup"} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
