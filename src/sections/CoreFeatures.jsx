import FeatureCard from "../components/FeatureCard";
import monitoringVideo from "../assets/videos/monitoring.mp4";
import networkingVideo from "../assets/videos/networking.mp4";
import assetManagementVideo from "../assets/videos/asset-management.mp4";
import singlePaneVideo from "../assets/videos/single-pane.mp4";
import planningVideo from "../assets/videos/planning.mp4";
import complianceVideo from "../assets/videos/compliance.mp4";

const FeatureCardData = [
  {
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    features: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
    video: monitoringVideo,
  },

  {
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    features: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
    video: networkingVideo,
  },

  {
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    features: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent ticketing based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
    video: assetManagementVideo,
  },

  {
    title: "A Single Pane of Glass",
    description:
      "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    features: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities.",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
    ],
    video: singlePaneVideo,
  },

  {
    title: "Built-In Compliance",
    description:
      "CentralAxis provides compliance as a service for data centers.",
    features: [
      "Track data for EU, US, and global regulatary standards.",
      "We guarantee compliance and handle every step between monitoring and reporting.",
    ],
    video: complianceVideo,
  },

  {
    title: " Data Center Planning",
    description:
      "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
    features: [
      "Model new architectures and see detailed implications on power and cooling needs.",
      "Design unique specifications for your data center.",
      "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.",
    ],
    video: planningVideo,
  },
];

const CoreFeatures = () => {
  return (
    <section className='bg-background-black w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-14 gap-16'>
      <div className='flex flex-col items-center gap-3 self-center'>
        <h3 className='text-sm text-txt-gray bg-fill-card rounded-full px-3 py-1'>
          Built for AI
        </h3>

        <h4 className='text-txt-text text-3xl md:text-4xl font-medium text-center tracking-tight'>
          Modernizing the Digital Backbone
        </h4>

        <p className='text-lg md:text-xl text-txt-gray-dark text-center tracking-tight'>
          Data center software (DCIM, BMS and EPMS) has stagnated. We've built a
          better way.
        </p>
      </div>

      <div className='flex flex-col items-center gap-6 w-full max-w-7xl mb-10'>
        {FeatureCardData.map((card, index) => (
          <FeatureCard
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            features={card.features}
            video={card.video}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreFeatures;
