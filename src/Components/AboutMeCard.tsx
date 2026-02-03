import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { EMAIL, PHONE } from "../constants";

function AboutMeCard() {
  return (
    <div className="relative z-10 p-global text-dark flex justify-center">
      <div className="bg-background-mint shadow p-4 rounded flex flex-col items-center w-fit">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              className="h-24 w-24 rounded-full object-cover aspect-square mb-2"
              src="/profile-picture.png"
              alt="Profile picture"
            />
            <h2 className="text-2xl font-medium">Jesse Kettmann</h2>
            <h2 className="text-xl font-light">Software Engineer</h2>
          </div>
          <ul className="list-none space-y-2.5">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="size-6" />
              {EMAIL}
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="size-6" />
              {PHONE}
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="size-6" />
              Veenendaal, Netherlands
            </li>
            <li className="flex items-center gap-3">
              <AcademicCapIcon className="size-6" />
              Computing Science
            </li>
            <li className="flex items-center gap-3">
              <AcademicCapIcon className="size-6" />
              Game and Media Technology
            </li>
          </ul>
        </div>
        <button
          className="bg-accent hover:bg-accent-highlight cursor-pointer text-white font-medium
            py-2 px-4 flex items-center mt-8 gap-3 rounded shadow transition duration-200"
        >
          Download CV
          <ArrowDownTrayIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default AboutMeCard;
