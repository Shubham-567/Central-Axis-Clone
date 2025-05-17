const DemoPrompt = () => {
  return (
    <section className='mx-auto px-12 mb-20'>
      <article className='bg-background-purple-light p-8 rounded-xl'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
          <div>
            <h4 className='text-2xl md:text-4xl mb-2'>
              We've Built the Future of Data Centers
            </h4>
            <p className='text-lg text-txt-gray mb-6'>
              Contact our team for a demo
            </p>
          </div>
          <div className='flex flex-row md:flex-col gap-4 md:gap-2'>
            <button
              aria-label='set up time'
              className='text-sm bg-background-purple rounded-full py-[6px] px-3.5 md:px-5 hover:bg-background-purple/90 border border-border-dark'>
              Set Up a Time
            </button>
            <button
              aria-label='learn more'
              className='text-sm bg-background-gray-950 rounded-full py-[6px] px-3.5 md:px-5 hover:bg-background-gray-900 border border-border-dark'>
              Learn More
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DemoPrompt;
