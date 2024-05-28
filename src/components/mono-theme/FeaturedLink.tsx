import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const FeaturedLink = (props: {
  ariaLabel: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      aria-label={props.ariaLabel}
      className="relative group inline-flex flex-row w-fit h-fit transition-all text-arapawa-50"
      href={props.href}
    >
      <span>{props.children}</span> <MdArrowOutward className="inline text-center text-ice-300 group-hover:text-ice-200 transition-all duration-200 ease-in-out" />
      <span className="absolute bottom-0 left-0 bg-ice-300 w-[9px] h-[1px] group-hover:w-full group-hover:bg-ice-400 transition-all duration-200 ease-in-out"></span>
    </Link>
  );
};

export default FeaturedLink;
