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
      className="w-full h-fit group p-4 col-span-4 flex flex-row justify-between items-center bg-gray-50 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-950 hover:scale-[101%] hover:ring hover:ring-gray-500 hover:shadow-lg hover:shadow-gray-500 focus:ring focus:ring-gray-500 focus:shadow-lg focus:shadow-gray-500"
    >
      <div className="flex flex-row space-x-2 items-center *:group-hover:text-gray-50 *:group-focus:text-gray-50 *:transition-all *:duration-200 *:ease-in-out">
        <div className="lg:text-lg text-gray-500 transition-all duration-200 ease-in-out">
          {props.icon}
        </div>
        <p className="lg:text-lg ">{props.children}</p>
      </div>
      <div>
        <div className="lg:text-lg group-hover:rotate-45 transition-all duration-200 ease-in-out group-hover:text-gray-50">
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
