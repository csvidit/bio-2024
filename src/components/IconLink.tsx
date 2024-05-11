import Link from "next/link";

const IconLink = (props: { ariaLabel: string; href: string; children: React.ReactNode }) => {
  return (
    <Link
    aria-label={props.ariaLabel}
      className="flex flex-row w-fit h-fit bg-dream p-2 text-sensaimidori rounded-full shadow-inner shadow-cassiopeia transition-all hover:shadow-lantern hover:text-olive lg:text-xl"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};


export default IconLink;
