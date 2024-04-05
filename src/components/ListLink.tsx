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
      role="link"
      tabIndex={0}
      href={props.href}
      className="group p-4 col-span-4 flex flex-row justify-between items-center bg-gray-200 rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-lg hover:shadow-gray-300 focus:ring focus:ring-gray-300 focus:shadow-lg focus:shadow-gray-300"
    >
      <div className="flex flex-row space-x-2 items-center">
        <div className="lg:text-lg text-gray-500 group-hover:text-gray-700 group-focus:text-gray-700 transition-all duration-200 ease-in-out">{props.icon}</div>
        <p className="lg:text-lg">{props.children}</p>
      </div>
      <div>
        <div className="lg:text-lg group-hover:rotate-45 transition-all duration-200 ease in out">
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
