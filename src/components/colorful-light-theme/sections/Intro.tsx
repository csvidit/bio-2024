import { Briefcase, Element, Location, PresentionChart } from "iconsax-react";
import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiBriefcaseFill,
  PiMapPinFill,
  PiPresentationChartFill,
} from "react-icons/pi";
import SectionContainer from "../containers/SectionContainer";
import FeaturedLinks from "../links/FeaturedLinks";

const Intro = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start gap-4 md:flex-row md:gap-8">
        <div className="flex w-full flex-col text-sm text-neutral-400 md:w-2/3">
          <div className="text-lg text-neutral-900 lg:text-xl">Vidit Khandelwal</div>
          <div className="text-neutral-600">
            full stack engineer fueled by web dev, AI, and a splash of mobile
            dev.
          </div>
        </div>

        <div className="flex w-full flex-col gap-1 text-sm md:w-1/3">
          <span className="inline-flex items-center gap-1">
            <PiMapPinFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-400"
            />{" "}
            <span className="inline text-neutral-700">United States</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <PiBriefcaseFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-400"
            />{" "}
            <span className="inline text-neutral-700">Open To Work</span>
          </span>
          <Link
            href="https://viditkhandelwal.com"
            className="group inline-flex items-center gap-1 transition-all duration-200 ease-in-out"
          >
            <PiPresentationChartFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-400 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-neutral-700"
            />
            <span className="group-hover:text-citron-400 inline text-neutral-700 transition-all duration-200 ease-in-out">
              Portfolio{" "}
              <PiArrowUpRightBold className="text-neutral-400 group-hover:text-neutral-700 transition-all duration-200 ease-in-out inline" />
            </span>
          </Link>
        </div>
      </div>
      <FeaturedLinks />
    </SectionContainer>
  );
};

export default Intro;
