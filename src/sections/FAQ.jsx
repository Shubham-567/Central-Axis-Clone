const FAQ = () => {
  const QNA = [
    {
      question:
        "Are these solutions applicable to me if I am operating a co-location?",
      answer:
        "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
    },

    {
      question: "How do you ensure data privacy and security?",
      answer:
        "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
    },

    {
      question: "How does pricing work?",
      answer:
        "Depending on your requirements, we offer flexible pricing models.",
    },

    {
      question:
        "Do you provide ongoing support and maintenance for your solutions?",
      answer:
        "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
    },

    {
      question: "How do I get started?",
      answer:
        "Set up a demo and we'll guide you through our offerings and start a trial!",
    },
  ];

  return (
    <section className='bg-background-black w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-14 gap-12'>
      <div className='flex flex-col items-center gap-3 self-center'>
        <h3 className='text-sm text-txt-gray bg-fill-card rounded-full px-3 py-1'>
          FAQ
        </h3>

        <h4 className='text-txt-text text-3xl md:text-4xl font-medium text-center tracking-tight'>
          Frequently asked questions
        </h4>

        <p className='text-lg md:text-xl text-txt-gray-dark text-center tracking-tight'>
          Find answers to common questions about our solutions.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 xl:px-22'>
        {QNA.map(({ question, answer }, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <p className='md:text-lg text-txt-text'>{question}</p>
            <p className='text-base text-txt-gray-dark'>{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
