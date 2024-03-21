import { Description } from "./Description";
import { Title } from "./Title";

export const TitleAndDescription = ({position}) => {
  return (
    <div className={`text-${position}`}>
    <Title text={"Hey"}/>
    <Description text={"Monitoring is a powerful query editor that allows you to visualize and gain insight into bandwidth, errors, performance, traffic, Top Paths usage, and more across all projects."}/>
    </div>
  );
};