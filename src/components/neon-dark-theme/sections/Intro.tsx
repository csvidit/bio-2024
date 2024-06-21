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
import styles from "../Pride.module.css"

const Intro = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col text-sm text-neutral-400 lg:w-2/3">
          <div className="text-lg text-white lg:text-xl">Vidit Khandelwal</div>
          <span className="text-neutral-500">
            full stack engineer fueled by web dev, AI, and a splash of mobile
            dev.
          </span>
        </div>

        <div className="flex w-full flex-col gap-1 text-sm lg:w-1/3">
          <span className="inline-flex items-center gap-1">
            <PiMapPinFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-600"
            />{" "}
            <span className="inline text-neutral-300">United States</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <PiBriefcaseFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-600"
            />{" "}
            <span className="inline text-neutral-300">Open To Work</span>
          </span>
          <Link
            href="https://viditkhandelwal.com"
            className="group inline-flex items-center gap-1 transition-all duration-200 ease-in-out"
          >
            <PiPresentationChartFill
              //   size={16}
              //   variant="Bulk"
              className="inline text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-lime-400"
            />
            <span className="group-hover:text-citron-400 inline text-neutral-300 transition-all duration-200 ease-in-out">
              Portfolio{" "}
              <PiArrowUpRightBold className="text-lime-400 group-hover:text-lime-400 transition-all duration-200 ease-in-out inline group-hover:transform group-hover:scale-125" />
            </span>
          </Link>
        </div>
      </div>
      <FeaturedLinks />
    </SectionContainer>
  );
};

export default Intro;
