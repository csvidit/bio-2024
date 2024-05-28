import Link from "next/link";

const IconLink = (props: {
  ariaLabel: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      aria-label={props.ariaLabel}
      className="flex flex-row w-fit h-fit bg-gray-200 p-2 text-gray-500 rounded-full shadow-inner shadow-gray-300 transition-all hover:shadow-gray-400 lg:text-xl"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default IconLink;
