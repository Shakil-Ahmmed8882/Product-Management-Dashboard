export const Tab = ({icon:Icon,label}) => {
  return (
    <>
      <button className="outline outline-[1px]  outline-[#dadadacb] cursor-pointer px-2 h-9 flex items-center gap-2 p-2 rounded-md transition-all duration-300 font-body text-sm  text-gray-500 bg-transparent hover:bg-gray-100">
          <Icon className="w-4 h-4 font-bold" />
          {label}
        </button> 
    </>
  );
};