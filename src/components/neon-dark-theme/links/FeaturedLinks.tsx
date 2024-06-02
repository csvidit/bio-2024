import { iconLinks } from "@/utils/list-fill";
import FeaturedLinkSimple from "./FeaturedLinkSimple";

const FeaturedLinks = () => {
  return (
    <div className="flex shrink-0 flex-row flex-wrap gap-2 *:shrink-0">
      {iconLinks.map((item, index) => (
        <FeaturedLinkSimple
          key={`iconLink-${index}`}
          href={item.href}
          ariaLabel={item.ariaLabel}
        >
          {item.icon}
        </FeaturedLinkSimple>
      ))}
    </div>
  );
};

export default FeaturedLinks;
