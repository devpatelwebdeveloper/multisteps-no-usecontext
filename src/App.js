import Quiz from "./Components/Quiz";
// import Quiz from "./Components/QuizSep";
import PricingCards from "./Components/PricingCards/PricingCards";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>MultiSteps Helper Function</h1>
      <PricingCards />
      <Quiz
        easyStartUrl="https://quickbooks.intuit.com/gutenberg/ca/pricing-easystart/"
        plusUrl="https://quickbooks.intuit.com/gutenberg/ca/pricing-plus/"
        essentialsUrl="https://quickbooks.intuit.com/gutenberg/ca/pricing-essentials/"
        selfemployedUrl="https://quickbooks.intuit.com/gutenberg/ca/pricing-self-employed/"
      />
    </div>
  );
}
