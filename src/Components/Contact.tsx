import ContactButton from "./ContactButton";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import TooltipButton from "./TooltipButton";
import { EMAIL, PHONE } from "../constants";

function Contact() {
  return (
    <div className="w-full overflow-hidden bg-dull text-bright-500">
      <div className="relative mx-auto max-w-400 h-full flex flex-col items-center p-8 text-xl">
        <h2 className="text-4xl font-light mb-3">Contact</h2>
        <p className="mb-8">Interested in a conversation? Get in touch!</p>
        <div className="flex gap-3">
          <ContactButton onClick={() => window.open(`mailto:${EMAIL}`)}>
            <EnvelopeIcon className="size-8" />
          </ContactButton>
          <TooltipButton tooltip={PHONE}>
            <PhoneIcon className="size-8" />
          </TooltipButton>
          <ContactButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jesse-kettmann-38962a336/",
                "_blank",
                "noopener noreferrer",
              )
            }
          >
            <Icon icon="ph:linkedin-logo" className="size-8" />
          </ContactButton>
          <ContactButton
            onClick={() =>
              window.open(
                "https://github.com/JesseKettmann",
                "_blank",
                "noopener noreferrer",
              )
            }
          >
            <Icon icon="ph:github-logo" className="size-8" />
          </ContactButton>
        </div>
      </div>
    </div>
  );
}

export default Contact;
