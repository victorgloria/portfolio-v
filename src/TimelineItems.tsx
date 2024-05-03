import React from "react";

interface ItemProps {
  year: number;
  title: string;
  duration: string;
  details: string;
}

const TimelineItems: React.FC<ItemProps> = ({
  year,
  title,
  duration,
  details,
}) => {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
          <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-darkblue rounded-md shadow-md">
              {year}
            </span>
            <p className="text-lg font-semibold text-stone-900">{title}</p>
            <div className="my-1 text-sm font-normal leading-none text-stone-400">
              {duration}
            </div>
          </div>
          <p className="my-2 text-base font-normal text-stone-500">{details}</p>
        </li>
      </ol>
    </>
  );
};
export default TimelineItems;
