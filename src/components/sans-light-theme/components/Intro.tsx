import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { PiArrowUpRightBold } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="w-full h-fit col-span-4 bg-gray-50 p-4 rounded-lg">
      <h1 className="text-xl lg:text-2xl">Vidit Khandelwal</h1>
      <div className="text-gray-500 flex flex-row gap-1 items-center">
        Software Engineer
        <BsDot className="text-gray-900"/>
        <Link
          className="text-orange-accent inline-flex flex-row gap-1 items-center"
          href="https://viditkhandelwal.com"
        >
          Portfolio
          <PiArrowUpRightBold className="inline text-center" />
        </Link>
      </div>
      <div>Currently listening to: </div>
    </div>
  );
};

export default Intro;
