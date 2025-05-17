import Navbar from "./components/Navbar";
import CoreFeatures from "./sections/CoreFeatures";
import HardwareIntegrations from "./sections/HardwareIntegrations";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-[calc(100svh-var(--header-height))]'>
        <HeroSection />
        <HardwareIntegrations />
        <CoreFeatures />
      </main>
    </>
  );
};

export default App;
