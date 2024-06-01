import FeaturedLink from "./FeaturedLink";
const Intro = () => {
  return (
    <div className="col-span-4 flex h-fit w-full flex-col gap-4 bg-arapawa-950 p-4 *:uppercase *:text-arapawa-50">
      <h1 className="">Vidit Khandelwal</h1>
      <div className="flex flex-row flex-wrap items-center gap-4 *:shrink-0">
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
