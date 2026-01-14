import Badge from "./Badge";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <div className="w-full h-[600px] overflow-hidden bg-dull">
      <div className="relative mx-auto max-w-400 h-full flex flex-col items-center p-8">
        <h2 className="text-4xl font-light mb-3 text-dark">
          Skills & Education
        </h2>
        <div className="h-full w-full gap-8 flex">
          <div className="h-full w-full bg-bright-400 shadow-lg"></div>
          <div className="h-full w-full bg-bright-400 shadow-lg"></div>
          <div className="h-full w-full gap-8 flex flex-col justify-between">
            <SkillsCard className="h-full w-full">
              <h2 className="text-xl font-medium">
                Pre-University Education (VWO)
              </h2>
              <h2 className="text-xl font-light">
                Christelijk Lyceum Veenendaal, 2020
              </h2>
            </SkillsCard>
            <SkillsCard className="h-full w-full">
              <h2 className="text-xl font-medium">
                Computing Science (Bachelor)
              </h2>
              <h2 className="text-xl font-light">Utrecht University, 2023</h2>
            </SkillsCard>
            <SkillsCard className="h-full w-full">
              <h2 className="text-xl font-medium">
                Game and Media Technology (Master)
              </h2>
              <h2 className="text-xl font-light mb-2">
                Utrecht University, 2025
              </h2>
              <Badge className="bg-accent text-white">
                Graduated with Honors
              </Badge>
            </SkillsCard>
          </div>
          {/* <div className="flex gap-2 m-6">
            <Badge className="bg-dull text-bright-500">C#</Badge>
            <Badge className="bg-dull text-bright-500">Python</Badge>
            <Badge className="bg-dull text-bright-500">JavaScript</Badge>
            <Badge className="bg-dull text-bright-500">HTML</Badge>
            <Badge className="bg-dull text-bright-500">SQL</Badge>
            <Badge className="bg-dull text-bright-500">Haskell</Badge>
            <Badge className="bg-dull text-bright-500">C++</Badge>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
