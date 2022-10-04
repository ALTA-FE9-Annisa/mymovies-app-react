// import { Link } from "react-router-dom";
import logo from "../asset/logo.png";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBookmark, BsToggleOn } from "react-icons/bs";

import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className=" px-7 lg:px-20 py-3 w-full h-18 flex m-auto items-center justify-between fixed z-20  ">
        <div className=" flex items-center mr-10  ">
          <img src={logo} className="w-10 h-10 cursor-auto" alt="logo" />
          <h1 className="pl-4 font-semibold text-lg text-abu-100">MOVEE</h1>

          <ul className="flex ml-20 text-abu-100">
            <li className="px-5 font-medium text-base tracking-wider  ">
              <a href="#">Home</a>
            </li>
            <li className="px-5 font-medium text-base tracking-wider  ">
              <a href="#">Tv Show</a>
            </li>
            <li className="px-5 font-medium text-base tracking-wider  ">
              <a href="#">Movie</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 text-abu-50">
          <BsBookmark size={20} />
          <BsToggleOn size={20} />
        </div>
      </div>
    );
  }
}

export default Navbar;
// const Navbar = () => {
//   return (
//     <div className="">
//       <div className="max-w-{1240px} flex m-auto items-center justify-between px-20 py-3 text-white  ">
//         <div className=" flex items-center mr-10  ">
//           <img src={logo} className="w-10 h-10 cursor-auto" />
//           <h1 className="pl-4 font-semibold text-lg ">MOVEE</h1>
//           <ul className="flex ml-20  ">
//             <li className="px-5 font-semibold text-base">
//               <a to="/">Home</a>
//             </li>
//             <li className="px-5 font-semibold text-base">
//               <a to="/">Tv Show</a>
//             </li>
//             <li className="px-5 font-semibold text-base">
//               <a to="/">Movie</a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex gap-6">
//           <BsBookmark size={20} />
//           <BsToggleOn size={20} />
//         </div>
//         {/* <div>
//           <AiOutlineMenu size={20} /> */}
//         {/* Mobile Menu */}
//         {/* <div>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/">Tv Show</Link>
//               </li>
//               <li>
//                 <Link to="/">Movie</Link>
//               </li>
//             </ul>
//           </div> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
