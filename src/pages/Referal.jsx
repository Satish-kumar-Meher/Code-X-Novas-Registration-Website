import React, { useState } from 'react';
import "../css/referral_page.css";
import bannerImage from "./image/code-x-novas banner.svg";
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';

export const ReferalPage = () => {
  const navigate = useNavigate();
  const [refCode, setRefCode] = useState("");
  const [loading,setLoading] = useState(false)
  const handleApply = () => {
    setLoading(true)
    navigate("/payment", { state: { refCode } });
  };

  return (
    <section className="terms_con_ref">
      <div className="banner_ref">
        <img
          src={bannerImage}
          alt="Code-X-Novas Banner"
          className="responsive_svg_ref"
        />
      </div>

      <div className="exploration_ref">
        <p>EXPLORATION COURSE</p>
      </div>

      <div className="form_head_ref">
        <p>REGISTRATION FORM</p>
      </div>

      <div className="box_col_ref">
        <div className="term_head_ref">
          <p>PAYMENT DETAILS</p>
        </div>

        <div className="points_row1_ref">
          <div className="para1_ref">
            <p>REFERRAL CODE</p>
          </div>
          <div className="banner1_ref">
            <input
              type="text"
              placeholder="APPLY COUPON CODE"
              value={refCode}
              onChange={(e) => setRefCode(e.target.value)}
            />
          </div>
        </div>

        <div className="click_ref">
          <button className="btn_ref" onClick={handleApply}>{loading ?<Loader className="lucide-loader"/> :"CLICK TO APPLY"}</button>
        </div>
      </div>
    </section>
  );
};





// // import React, { useState } from 'react';
// import "../css/referral_page.css";
// import bannerImage from "./image/code-x-novas banner.svg";
// import { useNavigate } from 'react-router-dom';

// export const ReferalPage = () => {

//   const navigate = useNavigate()

//   // const [refCode , setRefCode] = useState()
//   // const handleRefCode = () => {

  

//   return (
//     <section className="terms_con_ref">
//       <div className="banner_ref">
//         <img
//           src={bannerImage}
//           alt="Code-X-Novas Banner"
//           className="responsive_svg_ref"
//         />
//       </div>

//       <div className="exploration_ref">
//         <p>EXPLORATION COURSE</p>
//       </div>

//       <div className="form_head_ref">
//         <p>REGISTRATION FORM</p>
//       </div>

//       <div className="box_col_ref">
//         <div className="term_head_ref">
//           <p>PAYMENT DETAILS</p>
//         </div>

//         <div className="points_row1_ref">
//           <div className="para1_ref">
//             <p>REFERRAL CODE</p>
//           </div>
//           <div className="banner1_ref">
//             <input type="text" placeholder="APPLY COUPON CODE" />
//           </div>
//         </div>

//         <div className="points_row_ref">
//           <div className="points_ref">
//             <div className="para_ref">
//               <p>ACTUAL PRICE OF THE EXPLORATION COURSE</p>
//             </div>
//           </div>
//           <div className="points1_ref">
//             <div className="price1_ref">
//               <p>$129</p>
//             </div>
//           </div>
//         </div>

//         <div className="click_ref">
//           <button className="btn_ref" onClick={() => navigate("/payment")}>CLICK TO APPLY</button>
//         </div>
//       </div>
//     </section>
//   );
// };


