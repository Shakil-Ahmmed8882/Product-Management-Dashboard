

import { FcSettings } from "react-icons/fc";

import { useState } from "react";
import Logo from "../../../Shared/Logo";
import { SidebarItem } from "./SidebarItem";

export const MySidebar = () => {

const [isOpenProductsDropdown,setIsOpenProductsDropdown] = useState(false)
const [isOpenSalesDropdown,setIsOpenSalesDropdown] = useState(false)
const [isOpenDesignsDropdown,setIsOpenDesignsDropdown] = useState(false)
const [isOpenOfficeDropdown,setIsOpenOfficeDropdown] = useState(false)
const [isOpenLegalDropdown,setIsOpenLegalDropdown] = useState(false)




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
              <div>
                <p>INC</p>
                <h3 className="font-bold">InnovativeHub</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr />
          <ul>
            <li className="flex font-bold items-center px-4 py-2">
              <BriefcaseIcon className="font-bold text-gray-400" />
              <span className="ml-2 text-sm">Design team</span>
            </li>
            <li className="flex font-bold items-center px-4 py-2">
              <MegaphoneIcon className="font-bold text-gray-400" />
              <span className="ml-2 text-sm">Marketing Team</span>
            </li>
            <li className="flex font-bold items-center px-4 py-2">
              <CogIcon className="text-gray-font-bold 400" />
              <span className="ml-2 text-sm">Development Team</span>
              <div className="ml-auto" variant="secondary"></div>
            </li>
            <li className="flex font-bold items-center px-4 py-2">
              <PlusIcon className="text-gray-font-bold 400" />
              <span className="ml-2 text-sm">Create a team</span>
            </li>
          </ul>
          <div className="mt-4 px-4 font-semibold text-sm">FOLDERS</div>
          <ul>
           
            <SidebarItem 
            FirstIcon={PencilIcon}
            SecondIcon={ChevronDownIcon} 
            label={"Design"}
            isOpen={isOpenDesignsDropdown}/>

            <li onClick={()=> setIsOpenOfficeDropdown(!isOpenOfficeDropdown)} className="flex items-center px-4 py-2">
              <BuildingIcon className="text-gray-400" />
              <span className="ml-2 text-sm">Office</span>
              <ChevronDownIcon className={`${isOpenOfficeDropdown&&"rotate-180"} transition-all duration-200 text-gray-400 ml-auto`}/>
            </li>
            <li onClick={()=> setIsOpenLegalDropdown(!isOpenLegalDropdown)} className="cursor-pointer flex items-center px-4 py-2">
              <ScaleIcon className="text-gray-400" />
              <span className="ml-2 text-sm">Legal</span>
              <ChevronDownIcon className={`${isOpenLegalDropdown&&"rotate-180"} transition-all duration-200 text-gray-400 ml-auto`}/>
            </li>
          </ul>
        </div>

        <li onClick={()=> setIsOpenProductsDropdown(!isOpenProductsDropdown)} className="flex items-center cursor-pointer px-4 py-2">
              <FolderIcon className="text-gray-400" />
              <span className="ml-2 text-sm">Products</span>
              <ChevronDownIcon className={`${isOpenProductsDropdown&&"rotate-180"} transition-all duration-200 text-gray-400 ml-auto`} />
            </li>
            <ul className={`dropdown ${isOpenProductsDropdown ? 'opacity-100 block' : 'hidden opacity-0'} transition-all duration-150 relative ml-4 ${isOpenProductsDropdown ? 'top-0 translate-y-0' : '-translate-y-10'}`}>
              <li className=" cursor-pointer px-4 py-2 text-sm">Roadmap</li>
              <li className=" cursor-pointer px-4 py-2 text-sm">Feedback</li>
              <li className=" cursor-pointer px-4 py-2 text-sm">Performance</li>
              <li className=" cursor-pointer px-4 py-2 text-sm">Team</li>
              <li className=" cursor-pointer px-4 py-2 text-sm">Analytics</li>
              <li className=" cursor-pointer flex items-center px-4 py-2">
                <PlusIcon className="text-gray-400" />
                <span className="ml-2 text-sm">Add new sub</span>
              </li>
            </ul>
      </div>
    </>
  );
};

//====================================================================

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function FolderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function MegaphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ScaleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}
