import StaggerContainer, { StaggerItem } from "./StaggerContainer";
import WindLines from "./WindLines";

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
    <section className="py-20 md:py-28 bg-cream-dark relative overflow-hidden">
      <WindLines variant="curved" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {quotes.map((quote, index) => (
              <StaggerItem key={index} className="text-center p-6">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
