import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RandomQuoteProps = {
  quotes: string[];
};

export const RandomQuote = ({ quotes }: RandomQuoteProps) => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * quotes.length)
  );

  const getRandomQuote = () => {
    if (quotes.length <= 1) return;
    const availableIndexes = quotes.map((_, i) => i).filter((i) => i !== index);
    const newIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    setIndex(newIndex);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quotes[index]);
    toast.success("Quote copied to clipboard!");
  };

  return (
    <>
      <p className="advice">ADVICE #{index + 1}</p>
      <p className="quote-text">“{quotes[index]}”</p>
      <div className="divider">
        <span className="lines">||</span>
      </div>
      <div className="button-container">
        <button className="button" onClick={getRandomQuote}>
          <span className="icon-dice"></span>
        </button>
        <button className="button" onClick={copyToClipboard}>
          <span className="icon-copy"></span>
        </button>
      </div>
      <ToastContainer />
    </>
  );
};
