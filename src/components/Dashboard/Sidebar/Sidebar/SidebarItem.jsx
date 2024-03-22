export const SidebarItem = ({FirstIcon,SecondIcon,label,isOpen}) => {
  return (
    <>
      <li className="flex items-center px-4 py-2">
        <FirstIcon className="text-gray-400" />
        <span className="ml-2 text-sm">{label}</span>
        <SecondIcon
          className={`${
            isOpen && "rotate-180"
          } transition-all duration-200 text-gray-400 ml-auto`}
        />
      </li>
    </>
  );
};
