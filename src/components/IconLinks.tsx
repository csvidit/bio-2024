import {
  PiLinkedinLogoDuotone,
  PiVideoCameraDuotone,
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
} from "react-icons/pi";
import IconLink from "./IconLink";
import { RiTwitterXLine } from "react-icons/ri";

const IconLinks = () => {
  return (
    <div className="col-span-4 bg-gray-50 p-4 rounded-lg flex flex-row gap-4">
      <IconLink href="https://linkedin.com/in/viditkhandelwal">
        <PiLinkedinLogoDuotone />
      </IconLink>
      <IconLink href="https://github.com/csvidit">
        <PiGithubLogoDuotone />
      </IconLink>
      <IconLink href="https://twitter.com/csvidit">
        <RiTwitterXLine />
      </IconLink>
      <IconLink href="https://cal.com/viditkhandelwal">
        <PiVideoCameraDuotone />
      </IconLink>
      <IconLink href="mailto:vidit@viditkhandelwal.com">
        <PiEnvelopeDuotone />
      </IconLink>
    </div>
  );
};

export default IconLinks;
