import {
  PiShootingStarDuotone,
  PiRobotDuotone,
  PiBrowserDuotone,
  PiPaintBrushDuotone,
  PiPenDuotone,
} from "react-icons/pi";
import { RxShadowNone } from "react-icons/rx";
import ListLink from "./ListLink";

const ListLinks = () => {
  return (
    <>
      <ListLink href="https://v-k.pw/7pvHzhtOHy" icon={<PiPenDuotone />}>
        Engineering Blog
      </ListLink>
      <ListLink href="https://v-k.pw/1cTmyEzt76" icon={<PiPenDuotone />}>
        Essential UI libraries for React
      </ListLink>
      {/* <ListLink href="https://turbobiz.xyz" icon={<PiShootingStarDuotone />}>
        Turbobiz
      </ListLink> */}
      <ListLink href="https://snippetopia.xyz" icon={<PiBrowserDuotone />}>
        Snippetopia
      </ListLink>
      <ListLink href="https://lume.csvid.it" icon={<RxShadowNone />}>
        Lume Wallpapers
      </ListLink>
      {/* <ListLink href="https://xzayvian.xyz" icon={<PiRobotDuotone />}>
        Xzayvian GPT
      </ListLink> */}
      <ListLink
        href="https://viditkhandelwal.com/studio"
        icon={<PiPaintBrushDuotone />}
      >
        Vidit Khandelwal Studio
      </ListLink>
    </>
  );
};

export default ListLinks;
