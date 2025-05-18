import { Mail } from "lucide-react";

const InfoCard = ({ icon: Icon = Mail, title, description }) => {
  return (
    <article className='flex flex-col lg:flex-row items-start gap-4 min-w-[280px] lg:min-w-0 bg-fill-card p-6 rounded-xl border border-border-dark shadow-sm'>
      {/* icon */}
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-background-gray-900 text-white shrink-0'>
        <Icon size={24} />
      </div>

      {/* text content */}
      <div>
        <h5 className='text-lg md:text-xl font-medium text-txt-text mb-1'>
          {title}
        </h5>
        <p className='text-sm md:text-base text-txt-gray-dark leading-snug'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default InfoCard;
