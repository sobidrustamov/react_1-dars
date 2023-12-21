import Action from "./Components/Action/Action";
import Explore from "./Components/Explore/Explore";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import Social from "./Components/Social/Social";
import Testimonial from "./Components/Testimonial/Testimonial";
import Tutorial from "./Components/Tutorial/Tutorial";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Social />
      <Feature />
      <Tutorial />
      <Explore />
      <Testimonial />
      <Action />
      <Footer />
    </>
  );
}

export default App;
