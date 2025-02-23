import { cn } from "@/utils/css-utils";
import Link from "next/link";
import { PiArrowUpRightFill } from "react-icons/pi";

const ListLinkSimple = (props: {
  href: string;
  icon: React.ReactNode;
  children: string;
  className?: string;
}) => {
  return (
    <Link
      tabIndex={0}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
      aria-label={props.children}
      className={cn(
        "${props.className focus:outline-hidden group flex w-full rounded-md bg-neutral-900 px-[1px] pb-[2.4px] pt-[1px] font-normal transition-all duration-200 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 focus:ring-0 focus:ring-offset-0 group-focus:bg-neutral-700 lg:gap-4 lg:rounded-lg",
        props.className,
      )}
    >
      <div className="flex w-full shrink-0 flex-row items-center justify-between gap-2 rounded-[5px] border-b border-b-neutral-800 bg-neutral-950 p-2 transition-all duration-200 ease-in-out *:shrink-0 group-hover:border-b-neutral-500 group-focus:border-b-neutral-500 lg:rounded-[7px]">
        <div className="flex w-full flex-row items-center gap-2">
          <span className="flex grow shrink-0 flex-row justify-between items-center gap-2 *:shrink-0">
            <span className="text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-neutral-300 group-focus:-rotate-12 group-focus:scale-105 group-focus:transform group-focus:text-neutral-300">
              {props.icon}
            </span>
            <span className="grow text-sm text-neutral-300">
              {props.children}
            </span>
          </span>
          <span className="text-transparent -translate-x-2 group-focus:translate-x-0 group-hover:translate-x-0 transition-all duration-200 ease-in-out group-hover:transform group-hover:text-neutral-300 group-focus:transform group-focus:text-neutral-300">
            <PiArrowUpRightFill />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListLinkSimple;
