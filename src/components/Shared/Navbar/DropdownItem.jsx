import { Link } from "react-router-dom";

export const DropdownItem = ({item,path}) => {
  return (
    <>
      <Link
        to={path || "/"}
        className="px-4 py-3 hover:bg-neutral-50 transition font-semibold"
      >
        {item}
      </Link>
    </>
  );
};
