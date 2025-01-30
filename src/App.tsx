import { RandomQuote } from "./components/RandomQuote";
import "./App.css";

const quotes: string[] = [
  "In JavaScript, the more you learn, the more you realize how much there is to discover.",
  "CSS is not about making things look good, it’s about making them look right.",
  "Debugging JavaScript is like being the detective in a criminal movie where you are also the murderer.",
  "JavaScript is the only programming language that I’m still excited to learn more about every day.",
  "CSS is like the skin of a website, it defines the first impression of the whole user experience.",
  "JavaScript is async. You can’t be sure what will happen next, but it’s a wild ride.",
  "CSS is the art of making websites look simple while doing complex things behind the scenes.",
  "A good JavaScript developer is someone who learns not just syntax but also the philosophy behind it.",
  "In JavaScript, if it’s not broken, there’s always something you can break.",
  "CSS is like a magic spell for the web, turning the plain HTML into something beautiful and interactive.",
  "JavaScript: the language that lets you make the impossible possible, but also the language that makes you question your sanity.",
  "With CSS, there are no limits, only boundaries we haven't discovered yet.",
  "JavaScript lets you do things in a variety of ways, but the trick is to know which one works best for the task.",
  "CSS transforms websites into experiences, adding layers of fun and functionality.",
  "JavaScript is about finding solutions in a sea of complexity, and CSS is about making it look effortless.",
  "JavaScript is like the engine, CSS is like the car’s body – both need to work together for the perfect ride.",
  "CSS is the invisible hand that shapes the web, making it more user-friendly and visually engaging.",
  "JavaScript teaches you patience, especially when working with async operations.",
  "With JavaScript, no idea is too big, but sometimes, the code to support that idea can get messy.",
];

const App = () => {
  return (
    <div className="App">
      <RandomQuote quotes={quotes} />
    </div>
  );
};

export default App;
