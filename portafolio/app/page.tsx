import Header from "./Components/Header/Header";
import Interests from "./Components/Interests/Interests";
import CV from "./Components/CV/CV";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Interests />
        <CV />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
