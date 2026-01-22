import Badge from "./Badge";
import EducationCard from "./EducationCard";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";

function Education() {
  return (
    <div className="w-full overflow-hidden bg-bright-400/80">
      <div className="relative mx-auto max-w-400 h-full flex flex-col items-center p-8">
        <h2 className="xl:absolute text-4xl font-light mb-4 text-dark">
          Education
        </h2>
        <div className="h-full w-full gap-8 flex flex-col xl:flex-row items-end">
          <EducationCard
            name="Pre-University Education"
            type="VWO"
            institution="Chr. Lyceum Veenendaal"
            period="2014 - 2020"
            className="w-full"
          >
            <p className="text-lg text-justify">
              Pre-University Education (VWO, Gymnasium), with a Science and
              Engineering (N&T) profile. Curriculum included English at C1
              Advanced level.
            </p>
          </EducationCard>
          <EducationCard
            name="Computing Science"
            type="Bachelor"
            institution="Utrecht University"
            period="2020 - 2023"
            className="w-full"
          >
            <p className="text-lg text-justify">
              Bachelor’s degree in Computing Science with a specialization in
              Game Technology. Curriculum covered algorithms and data
              structures, security, web development, databases, and computer
              networks, with an emphasis on scientific reasoning through
              research-oriented coursework and projects.
            </p>
          </EducationCard>
          <EducationCard
            name="Game and Media Technology"
            type="Master"
            institution="Utrecht University"
            period="2023 - 2025"
            className="w-full"
          >
            <p className="text-lg text-justify mb-8">
              Master’s degree in Game & Media Technology focused on interactive
              systems and digital media. Curriculum included game AI,
              physics-based simulation, computer animation, optimization, and
              computer vision, with a strong emphasis on research-driven
              development through individual and team projects.
            </p>
            <div className="w-full flex justify-center">
              <Badge className="bg-accent text-white">
                <div className="flex items-center gap-1.5">
                  <CheckBadgeIcon className="size-4.5" />
                  Graduated with Honors
                </div>
              </Badge>
            </div>
          </EducationCard>
        </div>
      </div>
    </div>
  );
}

export default Education;
