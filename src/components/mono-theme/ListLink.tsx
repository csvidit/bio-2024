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
      className="group *:uppercase w-full h-fit group p-4 col-span-4 flex flex-row justify-between items-center bg-arapawa-950 hover:bg-arapawa-900 transition-all duration-200 ease-in-out"
    >
      <div className="ml-0 group-hover:ml-4 group-focus:ml-4 flex flex-row gap-x-2 items-center *:text-ice-300 *:group-hover:text-ice-200 *:group-focus:text-ice-200 transition-all duration-200 ease-in-out *:transition-all *:duration-200 *:ease-in-out">
        <div className="transition-all duration-200 ease-in-out">
          {props.icon}
        </div>
        <p className="">{props.children}</p>
      </div>
      <div>
        <div className="group-hover:rotate-45 transition-all duration-200 ease-in-out *:text-ice-300 *:group-hover:text-ice-200 *:group-focus:text-ice-200">
          <span className="flex">
            <MdArrowOutward className="" />
          </span>
          {/* <span className="group-hover:flex hidden">
            <PiArrowUpRightFill />
          </span> */}
        </div>
      </div>
    </Link>
  );
};

export default ListLink;
