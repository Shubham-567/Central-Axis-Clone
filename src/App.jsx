import Navbar from "./components/Navbar";
import HardwareIntegrations from "./sections/HardwareIntegrations";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-[calc(100svh-var(--header-height))]'>
        <HeroSection />
        <HardwareIntegrations />
      </main>
    </>
  );
};

export default App;
