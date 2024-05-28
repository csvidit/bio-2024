import FeaturedLink from "./FeaturedLink";
const Intro = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-fit col-span-4 bg-arapawa-950 *:text-arapawa-50 p-4 *:uppercase">
      <h1 className="">Vidit Khandelwal</h1>
      <div className="flex flex-row gap-4 items-center *:shrink-0 flex-wrap">
        <span>
          <span className="text-ice-300">S</span>oft
          <span className="text-ice-300">W</span>are{" "}
          <span className="text-ice-300">E</span>ngineer
        </span>
        <FeaturedLink ariaLabel="Portfolio" href="https://viditkhandelwal.com">
          Portfolio
        </FeaturedLink>
        <span className="flex text-ice-300">Open to Work</span>
      </div>
    </div>
  );
};

export default Intro;
