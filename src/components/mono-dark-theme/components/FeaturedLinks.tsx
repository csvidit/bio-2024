import FeaturedLink from "./FeaturedLink";
import { iconLinks } from "@/utils/list";

const FeaturedLinks = () => {
  return (
    <div className="col-span-4 flex h-fit w-full flex-row flex-wrap gap-4 bg-arapawa-950 p-4 *:uppercase">
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
