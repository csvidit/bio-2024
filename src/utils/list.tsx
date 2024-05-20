import {
  PiBrowser,
  PiBrowserDuotone,
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiPaintBrushBroad,
  PiPaintBrushDuotone,
  PiPen,
  PiPenDuotone,
  PiVideoCameraDuotone,
} from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { RxShadowNone } from "react-icons/rx";
export const iconLinks = [
  {
    href: "https://linkedin.com/in/viditkhandelwal",
    icon: <PiLinkedinLogoDuotone />,
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://github.com/csvidit",
    icon: <PiGithubLogoDuotone />,
    ariaLabel: "GitHub",
  },
  {
    href: "https://x.com/csvidit",
    icon: <RiTwitterXLine />,
    ariaLabel: "Twitter/x",
  },
  {
    href: "https://calendly.com/viditkhandelwal",
    icon: <PiVideoCameraDuotone />,
    ariaLabel: "Calendly",
  },
  {
    href: "mailto:vidit@viditkhandelwal.com",
    icon: <PiEnvelopeDuotone />,
    ariaLabel: "Email",
  },
];

export const listLinks = [
  {
    label: "Engineering Blog",
    href: "https://v-k.pw/7pvHzhtOHy",
    icon: <PiPen />,
  },
  {
    label: "Essential UI libraries for React",
    href: "https://v-k.pw/1cTmyEzt76",
    icon: <PiPen />,
  },
  {
    label: "Snippetopia",
    href: "https://snippetopia.xyz",
    icon: <PiBrowser />,
  },
  {
    label: "Lume Wallpapers",
    href: "https://lume.csvid.it",
    icon: <RxShadowNone />,
  },
  {
    label: "Vidit Khandelwal Studio",
    href: "https://viditkhandelwal.com/studio",
    icon: <PiPaintBrushBroad />,
  },
];
