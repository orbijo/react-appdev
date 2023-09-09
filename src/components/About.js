import React, { useState } from 'react';

const quotes = [
  "My Name Is Josh Arkane Orbiso. The 'Arkane' probably comes from the word 'Arcane' mostly found in video games from the 90s - 2000s. I don't know, ask my parents.",
  "Why did I make this website? It's from an activity from the subject im taking called CS 3105 Application Development.",
  "I love coffee. Black Coffee. No Sugar.",
  "I play alot of gacha games. Don't know what those are? Look it up.",
  "What's up with the home page? I don't know what to put so... yeah Giga Chad.",
  "I got into coding from making Warcraft III maps when I was in elementary.",
  "My favorite anime/manga is One Piece.",
  "I read alot of manhwa. My favorites are Legend of the Northern Blade and Return of the Mount Hua Sect.",
  "Everything is censored without my glasses.",
  "I actually made this in a hurry. I remembered the deadline was today. Hehe",
  "Pinapple on pizza is fine. Not my favorite but its fine.",
  "I pronounce the GIF as Jif. I know G stands for Graphics but it rolls off the tongue better. :)",
  "Cereal or Milk first? None, Cereal is trash.",
  "I play on PC",
  "I love seafood",
];

const About = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">{randomQuote}</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={getRandomQuote}
      >
        Get Random Stuff About Me
      </button>
    </div>
  );
};

export default About;
