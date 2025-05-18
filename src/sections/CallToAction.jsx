import backgroundImg from "../assets/CTA-Background.png";

const CallToAction = () => {
  return (
    <section className='px-14 py-7'>
      <div
        className='p-14 relative bg-fill-card rounded-2xl border border-border-dark overflow-hidden'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px] rounded-2xl'></div>

        <div className='relative flex flex-col justify-center items-center gap-2 z-10'>
          <h4 className='text-2xl md:text-4xl text-txt-text'>Book a Demo</h4>
          <p className='text-base md:text-lg text-txt-muted'>
            See how CentralAxis can revolutionize your data center operations.
          </p>

          <button className='px-4 py-2 rounded-md bg-background-white text-txt-dark font-semibold text-base mt-2'>
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
