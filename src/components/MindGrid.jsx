import { useEffect, useRef, useState } from "react";
import { BODY_API, MIND_IMAGE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const MindGrid = () => {
  const [resTitle, setResTitle] = useState();
  const [imageCard, setImageCard] = useState([]);
  const scrollRef = useRef(null);
  const scrollAmount = 600; // Adjust based on visible width

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(BODY_API);
      const json = await data.json();

      setResTitle(json?.data?.cards[0]?.card?.card?.header?.title);
      setImageCard(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const amount = direction === "left" ? -scrollAmount : scrollAmount;
      container.scrollTo({
        left: container.scrollLeft + amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="body mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="title px-32 mt-4 text-2xl font-bold border-stone-50 ">
          {resTitle && <h2>{resTitle}</h2>}
        </div>
      </div>

      <div className="relative">
        {/* Left Scroll Button */}
        <div
          className="cursor-pointer absolute top-16 left-28 transform -translate-x-1/2 flex justify-center items-center w-[40px] h-[40px] bg-[#e2e2e7] rounded-full hover:bg-orange-400 z-10"
          onClick={() => handleScroll("left")}
        >
          <MdOutlineArrowBackIos />
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="cards-container px-4 mx-28 flex gap-4 mt-4 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {imageCard.map((grid) => (
            <Link to={"/cards/" + grid.id} key={grid.id}>
              <div className="card w-[150px] flex-shrink-0">
                <img
                  src={MIND_IMAGE_API + grid?.imageId}
                  alt="Restaurant image"
                  className="w-full h-[175px] object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        <div
          className="cursor-pointer absolute right-24 top-16 transform flex justify-center items-center w-[40px] h-[40px] bg-[#e2e2e7] rounded-full hover:bg-orange-400 z-10"
          onClick={() => handleScroll("right")}
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default MindGrid;
