import { Carousel } from "flowbite-react";
import ProjectCard from "./ProjectCard";

function MainCarousel({ data }) {
  let leftArrow = (
    <div aria-label="Previous slide" className="bg-gray-500 hover:bg-gray-400 rounded-full p-[2px] absolute -left-3 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6 md:w-8 md:h-8 p-1"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
  let rightArrow = (
    <div aria-label="Next slide" className="bg-gray-500 hover:bg-gray-400 rounded-full p-[2px] absolute -right-3 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6 md:w-8 md:h-8 p-1"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );

  return (
    <Carousel
      slideInterval={7000}
      leftControl={leftArrow}
      rightControl={rightArrow}
    >
      {data.map((item) => {
        return (
          <ProjectCard
            title={item.title}
            text={item.text}
            imgLink={item.imgLink}
            tecnologies={item.tecnologies}
            btnLinks={item.btnLinks}
            key={item.title}
          />
        );
      })}
    </Carousel>
  );
}

export default MainCarousel;
