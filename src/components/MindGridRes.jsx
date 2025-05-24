// import useMindRes from "../utils/useMindRes";
// import { useParams } from "react-router-dom";
// import MindResCard from "./MindResCard";
// import { Link } from "react-router-dom";
// import MenuShimmer from "./MenuShimmer";

// const MindGridRes = () => {

//     const { collectionId } = useParams();
//     // console.log(params);

//     const mindInfo = useMindRes(collectionId);

//     if (mindInfo === null) return <MenuShimmer />

//     // const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = 
//     // resInfo?.cards?.[2]?.card?.card?.info;

//     const title = mindInfo?.data?.cards[0]?.card?.card?.title;
//     console.log(title);

//     return (

//         <Link to="/res">
//         <div>
//             <MindResCard />
//         </div>
//         </Link>
//     );
// };

// export default MindGridRes;