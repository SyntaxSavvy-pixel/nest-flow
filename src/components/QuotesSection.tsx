const quotes = [
  {
    text: "Clarity is a form of productivity.",
    emphasis: "Clarity",
  },
  {
    text: "You don't need more tabs. You need peace.",
    emphasis: "peace",
  },
  {
    text: "Organize later. Focus now.",
    emphasis: "Focus now",
  },
];

const QuotesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="text-center p-6"
              >
                <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{quote.text.split(quote.emphasis).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-gradient not-italic font-semibold">{quote.emphasis}</span>
                      )}
                    </span>
                  ))}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
