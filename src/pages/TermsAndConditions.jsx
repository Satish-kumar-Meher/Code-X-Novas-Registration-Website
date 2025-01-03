

import React from "react";
import "../css/terms.css";  // Ensure correct path to CSS file
import bannerImage from "./image/code-x-novas banner.svg"; // Adjust path to your project structure
import radioButtonImage from "./image/radio_button.svg"; // Adjust path to your project structure
import { useNavigate } from "react-router-dom";

export const TermsAndConditions = () => {
  const navigate = useNavigate()
  return (
    <section className="terms_con_tc">
      {/* Banner Section */}
      <div className="banner_tc">
        <img src={bannerImage} alt="Banner" className="responsive_svg_tc" />
      </div>

      {/* Exploration Section */}
      <div className="exploration_tc">
        <p>EXPLORATION COURSE</p>
      </div>

      {/* Form Header */}
      <div className="form_head_tc">
        <p>REGISTRATION FORM</p>
      </div>

      {/* Terms and Conditions Content */}
      <div className="box_col_tc">
        {/* Heading */}
        <div className="term_head_tc">
          <p>TERMS AND CONDITIONS</p>
        </div>

        {/* Terms Points */}
        <div className="points_tc">
          {/* Point 1 */}
          <div className="points_row_tc">
            <div className="banner1_tc">
              <img src={radioButtonImage} alt="Radio Button" className="svg_tc" />
            </div>
            <div className="para_tc">
              <p>The fee paid for enrollment in the program is non-refundable.</p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="points_row_tc">
            <div className="banner1_tc">
              <img src={radioButtonImage} alt="Radio Button" className="svg_tc" />
            </div>
            <div className="para_tc">
              <p>
                While we are students of IIIT Bhubaneswar, this program is independently
                initiated and not funded or endorsed by the institute. It has been
                organized by the team Code-X-Novas to support freshers in navigating
                their coding journey.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="points_row_tc">
            <div className="banner1_tc">
              <img src={radioButtonImage} alt="Radio Button" className="svg_tc" />
            </div>
            <div className="para_tc">
              <p>
                In case of any issues related to the program, you are encouraged to
                contact us directly via email.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="points_row_tc">
            <div className="banner1_tc">
              <img src={radioButtonImage} alt="Radio Button" className="svg_tc" />
            </div>
            <div className="para_tc">
              <p>
                By enrolling, you acknowledge that you have read and understood all
                the terms mentioned above voluntarily and without any undue influence.
              </p>
            </div>
          </div>
        </div>

        {/* Accept Button */}
        <div className="click_tc">
          <button className="btn_tc" onClick={() => navigate("/referal")}>DO YOU ACCEPT</button>
        </div>
      </div>
    </section>
  );
};







// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
// import "../css/terms.css"; // Ensure the CSS file is correctly linked
// import bannerImage from "./image/code-x-novas banner.svg";
// import { useNavigate } from "react-router-dom";

// export const TermsAndConditions = () => {
//   const [accepted, setAccepted] = useState([false, false, false, false]); // State for checkboxes
//   const navigate = useNavigate()
//   const terms = [
//     "The fee paid for enrollment in the program is non-refundable.",
//     "While we are students of IIIT Bhubaneswar, this program is independently initiated and not funded or endorsed by the institute. It has been organized by the team Code-X-Novas to support freshers in navigating their coding journey.",
//     "In case of any issues related to the program, you are encouraged to contact us directly via email.",
//     "By enrolling, you acknowledge that you have read and understood all the terms mentioned above voluntarily and without any undue influence.",
//   ];

//   // Handle checkbox click
//   const handleCheckboxChange = (index) => {
//     const updatedAccepted = [...accepted];
//     updatedAccepted[index] = !updatedAccepted[index];
//     setAccepted(updatedAccepted);
//   };

//   // Handle button click
//   const handleAcceptClick = () => {
//     if (accepted.every((item) => item)) {
//       toast.success("You have accepted all terms and conditions. Proceeding...", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       navigate("/referal")
//       // Add your navigation logic here
//     } else {
//       toast.error("Please accept all the terms and conditions to proceed.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <section className="terms_con">
//       {/* Banner Section */}
//       <div className="banner">
//         <img src={bannerImage} alt="Banner" className="responsive_svg" />
//       </div>

//       {/* Exploration Section */}
//       <div className="exploration">
//         <p>EXPLORATION COURSE</p>
//       </div>

//       {/* Form Header */}
//       <div className="form_head">
//         <p>REGISTRATION FORM</p>
//       </div>

//       {/* Terms and Conditions Section */}
//       <div className="box_col">
//         <div className="term_head">
//           <p>TERMS AND CONDITIONS</p>
//         </div>

//         {/* Points Section */}
//         <div className="points">
//           {terms.map((term, index) => (
//             <div className="points_row" key={index}>
//               <div className="banner1">
//                 <input
//                   type="checkbox"
//                   checked={accepted[index]}
//                   onChange={() => handleCheckboxChange(index)}
//                   className="checkbox"
//                 />
//               </div>
//               <div className="para">
//                 <p>{term}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Accept Button */}
//         <div className="click">
//           <button className="btn" onClick={
//             handleAcceptClick}>
//             DO YOU ACCEPT
//           </button>
//         </div>
//       </div>

//       {/* Toastify Container */}
//       <ToastContainer />
//     </section>
//   );
// };



