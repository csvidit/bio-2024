import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { PiArrowUpRightBold } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="col-span-4 h-fit w-full rounded-lg bg-gray-50 p-4">
      <h1 className="text-xl lg:text-2xl">Vidit Khandelwal</h1>
      <div className="flex flex-row items-center gap-1 text-gray-500">
        Software Engineer
        <BsDot className="text-gray-900" />
        <Link
          className="inline-flex flex-row items-center gap-1 text-orange-accent"
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
