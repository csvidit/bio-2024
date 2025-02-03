import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiArrowUpRightDuotone,
  PiArrowUpRightFill,
} from "react-icons/pi";

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
      className="group col-span-4 flex h-fit w-full flex-row items-center justify-between rounded-lg bg-gray-50 p-4 transition-all duration-200 ease-in-out hover:scale-[101%] hover:bg-gray-950 hover:shadow-lg hover:shadow-gray-500 hover:ring-3 hover:ring-gray-500 focus:shadow-lg focus:shadow-gray-500 focus:ring-3 focus:ring-gray-500"
    >
      <div className="flex flex-row items-center space-x-2 *:transition-all *:duration-200 *:ease-in-out group-hover:*:text-gray-50 group-focus:*:text-gray-50">
        <div className="text-gray-500 transition-all duration-200 ease-in-out lg:text-lg">
          {props.icon}
        </div>
        <p className="lg:text-lg ">{props.children}</p>
      </div>
      <div>
        <div className="transition-all duration-200 ease-in-out group-hover:rotate-45 group-hover:text-gray-50 lg:text-lg">
          <span className="flex">
            <PiArrowUpRightBold />
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
