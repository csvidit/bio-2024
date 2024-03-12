import Footer from "@/components/Footer";
import IconLinks from "@/components/IconLinks";
import ListLinks from "@/components/ListLinks";
import MainContent from "@/components/MainContent";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <MainContent>
      <Intro />
      <IconLinks />
      <ListLinks />
      <Footer />
    </MainContent>
  );
}
