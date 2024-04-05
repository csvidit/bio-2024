import IconLink from "./IconLink";
import { iconLinks } from "@/utils/list";

const IconLinks = () => {
  return (
    <div className="w-full h-fit col-span-4 bg-gray-50 p-4 rounded-lg flex flex-row gap-4">
      {iconLinks.map((item, index) => (
        <IconLink
          key={`iconLink-${index}`}
          href={item.href}
          ariaLabel={item.ariaLabel}
        >
          {item.icon}
        </IconLink>
      ))}
    </div>
  );
};

export default IconLinks;
