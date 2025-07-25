import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I get the program after purchase?",
    answer: "You'll receive an instant download link via email immediately after purchase. The PDF is ready to download and use right away - no waiting period."
  },
  {
    question: "Can I train at home with these programs?",
    answer: "Both programs are designed for traditional gym equipment (barbell, plates, rack). While some exercises can be modified for home setups, optimal results require access to a well-equipped gym."
  },
  {
    question: "What if I'm a beginner?",
    answer: "The DUP Program is suitable for all levels including beginners. The Supreme Deadlift Program is designed for intermediate+ lifters who have at least 1-2 years of consistent training experience."
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the digital nature of our products, all sales are final. However, we're confident in our programs' quality and have a 99% satisfaction rate among customers."
  },
  {
    question: "How often should I run these programs?",
    answer: "Both programs can be cycled multiple times. After completing a program, take a deload week and either repeat the program with heavier starting weights or try the other program for variety."
  },
  {
    question: "Is nutrition guidance included?",
    answer: "The DUP Program includes comprehensive nutrition guidelines. The Supreme Deadlift Program focuses purely on training protocols. The bundle gives you complete coverage of both training and nutrition."
  },
  {
    question: "Can I modify the programs?",
    answer: "While the programs are designed to be followed as written for optimal results, experienced lifters can make minor modifications based on individual needs and limitations."
  },
  {
    question: "What format are the programs in?",
    answer: "All programs are delivered as high-quality PDF files that work on any device - phone, tablet, computer, or printed copies. Mobile-optimized for easy gym viewing."
  }
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background fade-in-section">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Everything you need to know about RAW POWER programs.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border hover:border-foreground transition-all duration-200"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <h3 className="font-medium text-foreground text-lg pr-4 group-hover:text-foreground transition-colors duration-200">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-foreground">
                  {openFAQ === index ? (
                    <ArrowUp className="w-5 h-5" />
                  ) : (
                    <ArrowDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-200 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-foreground mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 font-light">Still have questions?</p>
          <div className="text-foreground font-medium hover:text-foreground/80 transition-colors duration-200 cursor-pointer">
            Contact us at support@rawpower.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
