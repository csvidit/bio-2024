import FeaturedLink from "./FeaturedLink";
import { iconLinks } from "@/utils/list";

const FeaturedLinks = () => {
  return (
    <div className="w-full h-fit col-span-4 bg-gray-50 p-4 flex flex-row flex-wrap gap-4 *:uppercase">
      {iconLinks.map((item, index) => (
        <FeaturedLink
          key={`iconLink-${index}`}
          href={item.href}
          ariaLabel={item.ariaLabel}
        >
          {item.ariaLabel}
        </FeaturedLink>
      ))}
    </div>
  );
};

export default FeaturedLinks;
