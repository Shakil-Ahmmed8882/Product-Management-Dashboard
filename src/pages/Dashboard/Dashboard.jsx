import { ProjectTable } from "../../components/Dashboard/Sidebar/project-table/ProjectTable";
import { DashboardNavbar } from "../../components/Navbar/DashboardNavbar";
import Tabs from "../../components/Tabs/Tabs";

export const Dashboard = () => {
  return (
    <div>
 <DashboardNavbar/>
 <Tabs/>
 <ProjectTable/>

    </div>
  );
};