import { motion } from "framer-motion";

import nvidia from "../assets/brand logos/nvidia.svg";
import amd from "../assets/brand logos/amd.svg";
import cisco from "../assets/brand logos/cisco.svg";
import dell from "../assets/brand logos/dell.svg";
import hp from "../assets/brand logos/hp.svg";
import intel from "../assets/brand logos/intel.svg";
import lenovo from "../assets/brand logos/lenovo.svg";
import schneiderelectric from "../assets/brand logos/schneiderelectric.svg";
import supermicro from "../assets/brand logos/supermicro.svg";

const logos = [
  { name: "Nvidia", logo: nvidia },
  { name: "AMD", logo: amd },
  { name: "Cisco", logo: cisco },
  { name: "Dell", logo: dell },
  { name: "HP", logo: hp },
  { name: "Intel", logo: intel },
  { name: "Lenovo", logo: lenovo },
  { name: "Schneider Electric", logo: schneiderelectric },
  { name: "Supermicro", logo: supermicro },
];
const HardwareIntegrations = () => {
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className='relative flex flex-col items-center gap-10 py-14 md:py-[72px] w-full overflow-hidden bg-background-black border-t border-border-dark'>
      <h2 className='text-base text-txt-gray-dark text-center'>
        Seamless integrations with any data center hardware
      </h2>

      <div className='relative w-ful overflow-hidden'>
        <motion.div
          className='flex gap-12'
          style={{ whiteSpace: "nowrap" }}
          animate={{ x: ["00%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}>
          {scrollingLogos.map(({ name, logo }, index) => (
            <figure
              key={`logo-${index}`}
              className='inline-block w-32 select-none'>
              <img
                src={logo}
                alt={name}
                className='w-full h-full object-contain'
                draggable={false}
              />

              <figcaption className='sr-only'>{name}</figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareIntegrations;
