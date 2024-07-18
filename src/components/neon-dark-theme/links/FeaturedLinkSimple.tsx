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
      className="group flex w-fit rounded-md font-normal transition-all duration-200 ease-in-out lg:gap-4 lg:rounded-lg pt-[1px] px-[1px] pb-[2.4px] bg-neutral-900 hover:bg-neutral-700 hover:transform hover:-translate-y-1 focus:bg-neutral-700 focus:transform focus:-translate-y-1 focus:outline-none focus:ring-0 focus:ring-offset-0"
    >
      <div className="flex shrink-0 flex-row items-center gap-2 p-2 *:shrink-0 bg-neutral-950 rounded-[5px] lg:rounded-[7px] border-b border-b-neutral-800 group-hover:border-b-neutral-500 group-focus:border-b-neutral-500 transition-all duration-200 ease-in-out">
        <span className="text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-neutral-300 group-focus:-rotate-12 group-focus:scale-105 group-focus:transform group-focus:text-neutral-300">
          {props.children}
        </span>
        <span className="hidden text-xs text-neutral-300">{props.ariaLabel}</span>
      </div>
    </Link>
  );
};

export default FeaturedLinkSimple;
