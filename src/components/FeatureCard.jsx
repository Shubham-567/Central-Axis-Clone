import { CircleCheck } from "lucide-react";
import monitoringVideo from "../assets/videos/monitoring.mp4";

const FeatureCard = ({ title, description, features, video, index = 0 }) => {
  const isReversed = index % 2 !== 0;

  return (
    <article
      className='
        bg-fill-card rounded-lg border border-border-soft
        flex flex-col-reverse md:flex-row xl:gap-16 min-h-[22rem] w-full max-w-[380px] md:max-w-full
      '>
      <div
        className={`flex flex-col-reverse ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 justify-between w-full px-6 md:px-12`}>
        {/* Text content */}

        <div className='flex flex-col items-start max-w-xl py-4 md:py-8'>
          <h5 className='text-2xl md:text-3xl font-medium text-txt-text mb-2'>
            {title}
          </h5>
          <p className='text-txt-gray font-normal md:text-md mb-8'>
            {description}
          </p>

          <ul className='flex flex-col items-start gap-3 pl-2 md:text-lg text-txt-gray-dark'>
            {features.map((item, index) => (
              <li key={index} className='flex items-center gap-4 font-normal'>
                <CircleCheck
                  color='#71717a'
                  size={24}
                  className='shrink-0 mt-1'
                />
                <span> {item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Video content */}

        <figure className='flex items-center w-full pt-4 md:pt-0 max-w-[360px] md:max-w-[480px] xl:max-w-[520px] rounded-lg overflow-hidden'>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-auto object-contain'
          />
        </figure>
      </div>
    </article>
  );
};

export default FeatureCard;
