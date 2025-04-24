import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiBriefcaseFill,
  PiMapPinFill,
  PiPresentationChartFill,
  PiSpotifyLogoFill,
} from "react-icons/pi";
import SectionContainer from "../containers/SectionContainer";
import FeaturedLinks from "../links/FeaturedLinks";
import { getNowPlaying } from "@/actions/spotify";

const Intro = async () => {
  const song = await getNowPlaying();

  return (
    <SectionContainer>
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col text-sm text-neutral-400 lg:w-2/3">
            <div className="text-lg text-white lg:text-xl">
              Vidit Khandelwal
            </div>
            <span className="text-neutral-500">
              full stack engineer fueled by web dev, AI, and a splash of mobile
              dev.
            </span>
          </div>
          {song.isPlaying && (
            <div>
              <span className="inline-flex items-center gap-1 *:text-xs">
                <PiSpotifyLogoFill
                  className={`inline shrink-0 ${song?.isPlaying ? "animate-pulse text-lime-400" : "text-neutral-600"}`}
                />{" "}
                <span className="inline text-neutral-300">
                  {!song || !song.isPlaying ? (
                    <>Not playing</>
                  ) : (
                    <>
                      {song.title}{" "}
                      <span className="text-neutral-500">
                        &mdash; {song.artist}
                      </span>
                    </>
                  )}
                </span>
              </span>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-1 text-sm lg:w-1/3">
          <span className="inline-flex items-center gap-1">
            <PiMapPinFill className="inline text-neutral-600" />{" "}
            <span className="inline text-neutral-300">United States</span>
          </span>
          {/* <span className="inline-flex items-center gap-1">
            <PiBriefcaseFill className="inline text-neutral-600" />{" "}
            <span className="inline text-neutral-300">Open To Work</span>
          </span> */}
           <Link
            href="https://levangielaboratories.com"
            className="group inline-flex items-center gap-1 transition-all duration-200 ease-in-out"
          >
            <PiBriefcaseFill className="inline text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-lime-400" />
            <span className="group-hover:text-lime-400 inline text-neutral-300 transition-all duration-200 ease-in-out">
              LLABS{" "}
              <PiArrowUpRightBold className="inline text-lime-400 transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:transform group-hover:text-lime-400" />
            </span>
          </Link>
          <Link
            href="https://viditkhandelwal.com"
            className="group inline-flex items-center gap-1 transition-all duration-200 ease-in-out"
          >
            <PiPresentationChartFill className="inline text-neutral-600 transition-all duration-200 ease-in-out group-hover:-rotate-12 group-hover:scale-105 group-hover:transform group-hover:text-lime-400" />
            <span className="group-hover:text-lime-400 inline text-neutral-300 transition-all duration-200 ease-in-out">
              Portfolio{" "}
              <PiArrowUpRightBold className="inline text-lime-400 transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:transform group-hover:text-lime-400" />
            </span>
          </Link>
        </div>
      </div>
      <FeaturedLinks />
    </SectionContainer>
  );
};
export default Intro;
