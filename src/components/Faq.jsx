import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'What is your company all about?',
      answer: 'We are a tech company specializing in...'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team at support@example.com.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team at support@example.com.'
    },
    // You can add more FAQ items here
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the answer if it's already open
    } else {
      setOpenIndex(index); // Open the answer
    }
  };

  return (
    <section id="Faq" className="py-10">
      <div className="px-4 max-w-screen-xl mx-auto my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.question}</h3>
                {openIndex === index && <p className="text-gray-600">{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
