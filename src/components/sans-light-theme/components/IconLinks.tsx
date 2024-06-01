import IconLink from "./IconLink";
import { iconLinks } from "@/utils/list";

const IconLinks = () => {
  return (
    <div className="col-span-4 flex h-fit w-full flex-row gap-4 rounded-lg bg-gray-50 p-4">
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
