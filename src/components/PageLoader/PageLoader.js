// import React from "react";
// import { motion } from "framer-motion";

// const loadingContainer = {
//   width: "4rem",
//   height: "4rem",
//   display: "flex",
//   justifyContent: "space-around",
// };
// const loadingCircle = {
//   display: "block",
//   width: "1rem",
//   height: "1rem",
//   backgroundColor: "#3A36DB",
//   borderRadius: "0.5rem",
// };

// const loadingContainerVariants = {
//   start: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
//   end: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const loadingCircleVariants = {
//   start: {
//     y: "0%",
//   },
//   end: {
//     y: "60%",
//   },
// };
// const loadingCircleTransition = {
//   duration : 0.4,
//   yoyo : Infinity,
//   ease: 'easeInOut'
// }

// const Loader = () => {
//   return (
//     <div>
//       <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
//       <div className="flex fixed w-full justify-center items-center h-screen">
//         <motion.div
//           style={loadingContainer}
//           variants={loadingContainerVariants}
//           initial="start"
//           animate="end"
//         >
//           <motion.span
//             style={loadingCircle}
//             variants={loadingCircleVariants}
//             transition={loadingCircleTransition}
//           ></motion.span>
//           <motion.span
//             style={loadingCircle}
//             variants={loadingCircleVariants}
//             transition={loadingCircleTransition}
//           ></motion.span>
//           <motion.span
//             style={loadingCircle}
//             variants={loadingCircleVariants}
//             transition={loadingCircleTransition}
//           ></motion.span>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
import "./PageLoader.css";

export default function BarLoader() {

    return (
        <div className="spinner-container">
            
            <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="loader_bars">
                    <g id="upperbar">
                        <rect id="1_2" width="67" height="14" rx="7" fill="#FF72C6" />
                    </g>
                    <g id="middlebar">
                        <rect id="Rectangle 2" x="20" y="18" width="67" height="14" rx="7" fill="#FF3AB0" />
                    </g>
                    <g id="bottombar">
                        <rect id="3_2" y="36" width="67" height="14" rx="7" fill="#FD0098" />
                    </g>
                </g>
            </svg>


            <p></p>
        </div>

    )
}