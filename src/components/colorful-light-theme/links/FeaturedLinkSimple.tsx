import Link from "next/link";

const FeaturedLinkSimple = (props: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}) => {
  return (
    <Link
      tabIndex={0}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
      aria-label={props.ariaLabel}
      className="group flex w-fit rounded-md font-normal transition-all duration-200 ease-in-out lg:gap-4 lg:rounded-lg pt-[1px] px-[1px] pb-[2.4px] bg-neutral-200 hover:bg-cyan-400 hover:transform hover:-translate-y-1"
    >
      <div className="flex shrink-0 flex-row items-center gap-2 p-2 *:shrink-0 bg-neutral-50 rounded-[5px] lg:rounded-[7px] border-b border-b-neutral-300 group-hover:border-b-cyan-500 transition-all duration-200 ease-in-out">
        <span className="text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-cyan-400">
          {props.children}
        </span>
        <span className="hidden text-xs text-neutral-300">{props.ariaLabel}</span>
      </div>
    </Link>
  );
};

export default FeaturedLinkSimple;
