import { Mail, Zap, ChartNoAxesColumn, Smile, Command } from "lucide-react";
import InfoCard from "../components/InfoCard";

const BuiltForScale = () => {
  return (
    <section className='px-6 md:px-12 py-12'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-12'>
        {/* left side - text */}
        <div className='flex flex-col items-center lg:items-start gap-4 lg:w-1/2'>
          <h3 className='text-sm text-txt-gray bg-fill-card rounded-full px-3 py-1'>
            Built for Scale
          </h3>

          <h4 className='text-txt-text text-3xl md:text-4xl font-medium text-center lg:text-start'>
            Dynamic Resource Management
          </h4>

          <p className='text-lg md:text-xl text-txt-gray-dark text-center lg:text-start tracking-tight'>
            Seamlessly expand from racks to data centers. Our system grows with
            you, automatically managing resources across your entire
            infrastructure.
          </p>
        </div>

        {/* right side - cards */}
        <div className='w-full lg:w-1/2 overflow-x-auto'>
          <div className='flex lg:flex-col gap-10 md:w-full pb-4'>
            <InfoCard
              icon={Mail}
              title='Resource Management'
              description='See all of your resources in one place, update issues, and dynamically plan your resources.'
            />

            <InfoCard
              icon={Zap}
              title='Deployment Automation'
              description='From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.'
            />

            <InfoCard
              icon={ChartNoAxesColumn}
              title='Networking'
              description='Ensure that your networking infrastructure is always in place and ready to scale with your deployments.'
            />

            <InfoCard
              icon={Smile}
              title='Firmware Versioning'
              description='Ensure that your firmware is always up to date and secure with our automated versioning system.'
            />

            <InfoCard
              icon={Command}
              title='Digital Twins'
              description='Plan capacity intelligently with our digital twin technology.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForScale;
