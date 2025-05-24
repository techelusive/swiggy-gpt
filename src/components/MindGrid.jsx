import { useEffect, useState } from "react"
import { BODY_API, MIND_IMAGE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
//import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//import MindRes from "./MindRes";

const MindGrid= () => { 
    const [resTitle, setResTitle] = useState();
    const [imageCard, setImageCard] = useState([]);
    const [filterMindRes, setFilterMindRes] = useState([]);
    const [current, setCurrent] = useState(0);
    const slides = 5;
    const totalSlides = 21;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const data = await fetch(BODY_API);
            const json = await data.json();

            setResTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            setFilterMindRes(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            //console.log(json.data.cards[0]);
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    };

    const nextSlide = () => {
        if (current + slides < totalSlides) {
            setCurrent(current + slides);
        } else {
            setCurrent(totalSlides - slides);
        }
    };
    const prevSlide = () => {
        if (current - slides >= 0) {
            setCurrent(current - slides);
        } else {
            setCurrent(0);
        }
    }

    // const nextSlide = () => {
    //     if (current + slide <= imageCard.length){
    //         setCurrent(current + slide);
    //     }
    // };
    // const prevSlide = () => {
    //     if (current - slide >= 0) {
    //         setCurrent(current - slide);
    //     }
    // };

    return (
        <div className="body max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="title px-32 mt-4 text-2xl font-bold border-stone-50">
                {resTitle && (
                    <h2>{resTitle}</h2>)}
                </div>    
                </div>
                <div className="relative">
                    <div className="cursor-pointer absolute top-16 left-28 transform -translate-x-1/2 flex justify-center items-center w-[40px] h-[40px] bg-[#e2e2e7] rounded-full hover:bg-orange-400 z-10"
                    onClick={prevSlide}>
                        <MdOutlineArrowBackIos />
                </div>
  
                <div className="cards-containe px-4 mx-28 flex gap-4 mt-4 overflow-x-auto no-scrollbar">
                {imageCard.map((grid) => (
                    <Link to={"/cards/" + grid.id} key={grid.id}>
                        <div className="card w-[150px]"
                         style={{
                            transform: `translateX(-${current * (150)}px)`, // Adjust 150px for card width and 16px for gap
                            transition: "transform 0.5s ease", // Smooth sliding transition
                        }}
                        >
                            <img
                                src={MIND_IMAGE_API + grid?.imageId}
                                alt="Restaurant image"
                                className="w-full h-[175px] object-cover rounded-lg"
                            />
                        </div>
                    </Link>
                ))}
                <div className="cursor-pointer absolute right-24 top-16 transform flex justify-center items-center w-[40px] h-[40px] bg-[#e2e2e7] rounded-full hover:bg-orange-400 z-10"
                    onClick={nextSlide}>
                        <MdOutlineArrowForwardIos />
                    </div>
                {/* <div className="cards-container px-4 mx-28 gap-4 mt-4 flex overflow-x-auto no-scrollbar">
                {imageCard.map((grid) => (
                      <Link 
                      key={grid.id}
                      to={"/cards/"+ grid.id}
                    >
                        <div className="card rounded-xl w-[150px]"
                        style={{ transform: `translateX(${slide * 100}px)` }}
                        >
                            <img
                                src={MIND_IMAGE_API + grid?.imageId}
                                alt="Restaurant image"
                                className=" w-full h-[175px] object-cover rounded-lg"
                            />
                        </div>
                    </Link>
                ))}
            </div>   */}
        </div>
        </div>
        </div>
    )
};

export default MindGrid;