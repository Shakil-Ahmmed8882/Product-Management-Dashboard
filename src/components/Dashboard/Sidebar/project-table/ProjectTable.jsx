import { ActionButtons } from "./ActionButtons/ActionButtons";
import { TableBody } from "./TableBody/TableBody";
import { TableHeading } from "./TableHeading";

export const ProjectTable = () => {


  return (
    <>
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <TableHeading/>
          <TableBody/>
        </table>



        <ActionButtons/>
      </div>
    </>
  );
};
