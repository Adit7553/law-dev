import SectionHeader from "../Common/SectionHeader";
import { teamData } from "./teamData";
import TeamItem from "./TeamItem";
const Team = () => {
  return (
    <div id="team">
      {/* <SectionHeader
        headerInfo={{
          title: "Our Team",
          subtitle: "Meet Our Dedicated Professionals",
          description: `Explore a team of skilled legal experts committed to delivering exceptional service. Our diverse talents and unwavering dedication ensure comprehensive and effective solutions for your legal needs.`,
        }}
      /> */}
      <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
        {teamData.map((member) => {
          return <TeamItem team={member} />;
        })}
      </div>
    </div>
  );
};
export default Team;
