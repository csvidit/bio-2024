import MainContent from "./containers/MainContent";
import ListLinks from "./links/ListLinks";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";

const NeonDarkTheme = () => {
  return (
    <MainContent>
      <Intro />
      <ListLinks />
      <Footer />
    </MainContent>
  );
};

export default NeonDarkTheme;
