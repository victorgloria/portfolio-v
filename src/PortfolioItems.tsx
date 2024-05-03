import React from "react";

interface PortfolioItemsProps {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

const PortfolioItems: React.FC<PortfolioItemsProps> = ({
  title,
  imgUrl,
  stack,
  link,
}) => {
  return (
    <>
      <div className="border-2 shadow-md rounded-md overflow-hidden">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item, index) => (
              <span
                className="inline-block px-2 py-1 font-semibold bg-darkblue shadow-md rounded-md text-white"
                key={index}
              >
                {item}
              </span> // Added key prop for each item in stack
            ))}
          </p>
          <a href={link}>{link}</a>
        </div>
      </div>
    </>
  );
};

export default PortfolioItems;
