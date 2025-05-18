import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BuiltForScale from "./sections/BuiltForScale";
import CallToAction from "./sections/CallToAction";
import CoreFeatures from "./sections/CoreFeatures";
import DemoPrompt from "./sections/DemoPrompt";
import FAQ from "./sections/FAQ";
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
          <BuiltForScale />
          <CallToAction />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
