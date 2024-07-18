import Link from "next/link";

const ListLinkSimple = (props: {
  href: string;
  icon: React.ReactNode;
  children: string;
}) => {
  return (
    <Link
      tabIndex={0}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
      aria-label={props.children}
      className="group flex w-full rounded-md bg-neutral-900 px-[1px] pb-[2.4px] pt-[1px] font-normal transition-all duration-200 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 group-focus:bg-neutral-700 lg:gap-4 lg:rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0"
    >
      <div className="flex w-full shrink-0 flex-row items-center justify-between gap-2 rounded-[5px] border-b border-b-neutral-800 bg-neutral-950 p-2 transition-all duration-200 ease-in-out *:shrink-0 group-hover:border-b-neutral-500 group-focus:border-b-neutral-500 lg:rounded-[7px]">
        <div className="flex shrink-0 flex-row items-center gap-2 *:shrink-0">
          <span className="text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-neutral-300 group-focus:-rotate-12 group-focus:scale-105 group-focus:transform group-focus:text-neutral-300">
            {props.icon}
          </span>
          <span className="text-sm text-neutral-300">{props.children}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListLinkSimple;
