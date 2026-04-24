import Header from "./Components/Header/Header";
import Interests from "./Components/Interests/Interests";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Interests />
      </main>
      <Footer />
    </>
  );
}
