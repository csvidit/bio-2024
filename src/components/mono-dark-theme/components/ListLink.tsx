import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ListLink = (props: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Link
      aria-label={props.children?.toString()}
      role="link"
      tabIndex={0}
      href={props.href}
      className="group group relative col-span-4 flex h-fit w-full flex-row items-center justify-between bg-arapawa-950 p-4 transition-all duration-200 ease-in-out *:uppercase hover:bg-arapawa-950"
    >
      <div className="ml-0 flex flex-row items-center gap-x-2 transition-all duration-200 ease-in-out *:text-ice-300 *:transition-all *:duration-200 *:ease-in-out group-hover:ml-4 *:group-hover:text-ice-200 group-focus:ml-4 *:group-focus:text-ice-200">
        <div className="transition-all duration-200 ease-in-out">
          {props.icon}
        </div>
        <p className="">{props.children}</p>
      </div>
      <div>
        <div className="transition-all duration-200 ease-in-out *:text-ice-300 group-hover:rotate-45 *:group-hover:text-ice-200 *:group-focus:text-ice-200">
          <span className="flex">
            <MdArrowOutward className="" />
          </span>
          {/* <span className="group-hover:flex hidden">
            <PiArrowUpRightFill />
          </span> */}
        </div>
      </div>
      <div className="absolute inset-0 h-0 w-[2px] bg-ice-300 transition-all duration-200 ease-in-out group-hover:h-full group-focus:h-full"></div>
    </Link>
  );
};

export default ListLink;
