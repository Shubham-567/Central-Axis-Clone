import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-[calc(100svh-var(--header-height))]'>
        <HeroSection />
      </main>
    </>
  );
};

export default App;
