import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  return (
    <span className="inline-flex shrink-0 flex-row flex-wrap items-center gap-1 text-xs font-light text-neutral-600 *:shrink-0">
      <PiCopyrightBold />
      <span>
        {new Date().getFullYear()} Vidit Khandelwal. All rights reserved.
      </span>
    </span>
  );
};

export default Footer;
