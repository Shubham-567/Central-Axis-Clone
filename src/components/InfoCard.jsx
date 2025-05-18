import { Mail } from "lucide-react";

const InfoCard = ({ icon: Icon = Mail, title, description }) => {
  return (
    <div className='flex items-start gap-4 bg-fill-card p-6 rounded-xl border border-border-dark'>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-background-gray-900 text-white shrink-0'>
        <Icon size={24} />
      </div>
      <div>
        <h5 className='text-xl font-medium mb-2'>{title}</h5>
        <p className='text-txt-gray'>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
