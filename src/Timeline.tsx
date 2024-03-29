import timeline from "./data/timeline";
import TimelineItems from "./TimelineItems";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col px-4 md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Experience</Title>
        {timeline.map((item, index) => (
          <TimelineItems
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
