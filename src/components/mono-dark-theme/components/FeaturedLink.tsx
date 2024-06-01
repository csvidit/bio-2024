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
      className="group relative inline-flex h-fit w-fit flex-row text-arapawa-50 transition-all"
      href={props.href}
    >
      <span>{props.children}</span>{" "}
      <MdArrowOutward className="inline text-center text-ice-300 transition-all duration-200 ease-in-out group-hover:text-ice-200" />
      <span className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-ice-300 transition-all duration-200 ease-in-out group-hover:w-full group-hover:bg-ice-400"></span>
    </Link>
  );
};

export default FeaturedLink;
