import FeaturedLink from "./FeaturedLink";
const Intro = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-fit col-span-4 bg-gray-50 p-4 *:uppercase">
      <h1 className="">Vidit Khandelwal</h1>
      <div className="flex flex-row gap-4 items-center *:shrink-0 flex-wrap">
        <span>
          <span className="text-blue-accent">S</span>oft
          <span className="text-blue-accent">W</span>are{" "}
          <span className="text-blue-accent">E</span>ngineer
        </span>
        <FeaturedLink ariaLabel="Portfolio" href="https://viditkhandelwal.com">
          Portfolio
        </FeaturedLink>
        <span className="flex text-emerald-600">Open to Work</span>
      </div>
    </div>
  );
};

export default Intro;
