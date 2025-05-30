// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { RiContactsBookLine } from "react-icons/ri";
// import { FaUserLarge } from "react-icons/fa6";
// import { RxCaretDown } from "react-icons/rx";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleForm } from "../utils/appSlice";
// import { useState } from "react";

// export const Header = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((store) => store.cart.items);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleFormHandler = () => {
//     dispatch(toggleForm());
//   };

//   return (
//     <header className="w-full shadow-xl p-4 bg-white">
//       <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
//         {/* Logo and Location */}
//         <div className="flex items-center w-full md:w-auto justify-between">
//           <Link to="/">
//             <div className="w-[80px]">
//               <img
//                 src={LOGO_URL}
//                 alt="Logo"
//                 className="w-full cursor-pointer transition-transform duration-500 hover:scale-110"
//               />
//             </div>
//           </Link>
//           <div className="px-4 cursor-pointer">
//             <span className="font-bold border-b-[3px] border-black hover:text-orange-500 hover:border-orange-500">
//               Rajokri
//             </span>
//             <RxCaretDown className="inline text-xl text-black" />
//           </div>

//           {/* Hamburger Menu (visible only on small screens) */}
//           <button
//             className="md:hidden text-2xl ml-auto"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* Nav Items */}
//         <ul
//           className={`flex-col md:flex-row md:flex gap-6 font-semibold text-[16px] mt-4 md:mt-0 w-full md:w-auto ${
//             menuOpen ? "flex" : "hidden"
//           } md:items-center md:justify-end`}
//         >
//           <li className="hover:text-orange-500">
//             <Link to="/search/">
//               <FontAwesomeIcon
//                 icon={faMagnifyingGlass}
//                 className="mr-2 hover:text-orange-500"
//               />
//               Search
//             </Link>
//           </li>

//           <li
//             className="hover:text-orange-500 cursor-pointer"
//             onClick={() =>
//               window.open(
//                 "https://personal-portfolio-dev-rohits-projects.vercel.app/",
//                 "_blank"
//               )
//             }
//           >
//             About
//           </li>

//           <li className="hover:text-orange-500 r">
//             <span className="flex items-center gap-2 cursor-pointe">
//               <FaUserLarge
//                 onClick={toggleFormHandler}
//                 className="ml-1"
//               />
//               <button onClick={toggleFormHandler}>SignIn</button>
//             </span>
//           </li>

//           <li className="hover:text-orange-500">
//             <Link to="/cart">
//               <span
//                 className="inline-flex justify-center items-center w-[20px] h-[20px] bg-green-600 text-white text-xs rounded-sm mr-2"
//               >
//                 {cartItems?.reduce((sum, item) => sum + item.quantity, 0)}
//               </span>
//               Cart
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserLarge } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../utils/appSlice";
import { useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFormHandler = () => {
    dispatch(toggleForm());
  };

  return (
    <>
      {/* Load Fredoka font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        body {
          font-family: 'Fredoka', sans-serif;
        }
        .cartoon-text {
          font-family: 'Fredoka', sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
        }
        .cartoon-text:hover {
          color: #ff6600;
          transform: scale(1.05);
          transition: all 0.2s ease-in-out;
        }
      `}</style>

      <header className="w-full shadow-xl p-4 bg-white">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          {/* Logo and Location */}
          <div className="flex items-center w-full md:w-auto justify-between">
            <Link to="/">
              <div className="w-[80px]">
                <img
                  src={LOGO_URL}
                  alt="Logo"
                  className="w-full cursor-pointer transition-transform duration-500 hover:scale-110"
                />
              </div>
            </Link>
            <div className="px-4 cursor-pointer">
              <span className="cartoon-text border-b-[3px] border-black hover:text-orange-500 hover:border-orange-500">
                Rajokri
              </span>
              <RxCaretDown className="inline text-xl text-black" />
            </div>

            {/* Hamburger Menu (small screens) */}
            <button
              className="md:hidden text-2xl ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Nav Items */}
          <ul
            className={`flex-col md:flex-row md:flex gap-6 mt-4 md:mt-0 w-full md:w-auto ${
              menuOpen ? "flex" : "hidden"
            } md:items-center md:justify-end`}
          >
            <li className="cursor-pointer cartoon-text">
              <Link to="/search/">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
                Search
              </Link>
            </li>

            <li
              className="cursor-pointer cartoon-text"
              onClick={() =>
                window.open(
                  "https://personal-portfolio-dev-rohits-projects.vercel.app/",
                  "_blank"
                )
              }
            >
              About
            </li>

            <li className="cartoon-text">
              <span className="flex items-center gap-2 cursor-pointer">
                <FaUserLarge onClick={toggleFormHandler} className="ml-1" />
                <button onClick={toggleFormHandler}>SignIn</button>
              </span>
            </li>

            <li className="cartoon-text">
              <Link to="/cart">
                <span className="inline-flex justify-center items-center w-[22px] h-[22px] bg-green-600 text-white text-xs rounded-sm mr-2">
                  {cartItems?.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
