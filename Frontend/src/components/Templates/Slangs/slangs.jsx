import React from "react";

const slangData = [
  {
    title: "Jugaad",
    meaning: "somehow managed to scrape something together",
    usage:
      "if you’re traveling and you make a DIY Band-Aid when you don’t have the real thing, that’s jugaad",
  },
  {
    title: "Kaand",
    meaning:
      "A kaand is a not-so-good situation. Locals often use it when they have either created the situation and need help getting out of it, or when they hear about a kaand that someone else is responsible for",
    usage: "Let’s go to the other block; I hear there’s a kaand over there that we should check out",
  },
  {
    title: "Chep",
    meaning:
      "It actually means a “sticky person”; someone who is overstaying their welcome and just won’t let go",
    usage:
      "This guy just won't leave me alone no matter how much I ignore him. Chep hi hogya",
  },
];

const SlangPage = () => {
  return (
    <>
    <h2 className="py-10 text-4xl font-serif mb-2">Delhi Slangs</h2>
    <div className="flex flex-wrap">
      {slangData.map((slang, index) => (
        <div key={index} className="w-1/2 p-4">
          <div className="m-15 bg-white bg-opacity-90 p-8 shadow-md rounded-lg">
            <h2 className="text-3xl font-serif mb-2">{slang.title}</h2>
            <p className="text-gray-700 text-lg mb-2">{slang.meaning}</p>
            <p className="text-gray-600 text-sm">{slang.usage}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SlangPage;
