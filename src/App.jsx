import Navbar from "./components/Navbar";
import CoreFeatures from "./sections/CoreFeatures";
import DemoPrompt from "./sections/DemoPrompt";
import HardwareIntegrations from "./sections/HardwareIntegrations";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <HeroSection />
        <HardwareIntegrations />
        <div className='lg:mx-16'>
          <CoreFeatures />
          <DemoPrompt />
        </div>
      </main>
    </>
  );
};

export default App;
