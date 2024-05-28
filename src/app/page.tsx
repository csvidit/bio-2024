import Footer from "@/components/mono-theme/Footer";
import ListLinks from "@/components/mono-theme/ListLinks";
import MainContent from "@/components/MainContent";
import Intro from "@/components/mono-theme/Intro";
import FeaturedLinks from "@/components/mono-theme/FeaturedLinks";

export default function Home() {
  return (
    <MainContent>
      <Intro/>
      <FeaturedLinks/>
      <ListLinks/>
      <Footer />
      {/* <Intro />
      <IconLinks />
      <ListLinks />
      <Footer /> */}
    </MainContent>
  );
}
