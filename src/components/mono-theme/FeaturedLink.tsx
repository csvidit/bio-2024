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
      className="relative group inline-flex flex-row w-fit h-fit transition-all"
      href={props.href}
    >
      <span>{props.children}</span> <MdArrowOutward className="inline text-center group-hover:text-orange-accent transition-all duration-200 ease-in-out" />
      <span className="absolute bottom-0 left-0 bg-gray-950 w-[9px] h-[1px] group-hover:w-full group-hover:bg-orange-accent transition-all duration-200 ease-in-out"></span>
    </Link>
  );
};

export default FeaturedLink;
