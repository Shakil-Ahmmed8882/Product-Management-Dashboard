import { GrLogout } from "react-icons/gr";
import Logo from "../../Shared/Logo";
import MenuItem from "./MenuItem";
import { FcSettings } from "react-icons/fc";
export const MySidebar = () => {


  return (
    <>
      <div
        className={`  
        z-10 md:fixed flex-col
        justify-between 
        overflow-x-hidden
      bg-gray-50 
        w-64
        space-y-6
        px-2 py-4
        absolute inset-y-0
        transition-all
        transform md:translate-x-0
        
        ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex  gap-3 items-center px-4 py-2">
              <Logo />
              <h3 className="text-2xl">site name</h3>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={FcSettings}
                label="demo route 1"
                address="/dashboard"
              />

            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          
        </div>
      </div>
    </>
  );
};
