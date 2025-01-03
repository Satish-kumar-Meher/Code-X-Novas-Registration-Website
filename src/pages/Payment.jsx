import React from 'react';
import "../css/payment.css";
import bannerImage from "./image/code-x-novas banner.svg";
import { useLocation, useNavigate } from 'react-router-dom';

export const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const refCode = location.state?.refCode || "";
  const validRefCode = "CXN029"; // Set your valid referral code here

  const discountApplied = refCode === validRefCode;
  const originalPrice = 129;
  const discountAmount = discountApplied ? 30 : 0;
  const payableAmount = originalPrice - discountAmount;

  return (
    <section className="terms_con_pay">
      <div className="banner_pay">
        <img
          src={bannerImage}
          alt="Code-X-Novas Banner"
          className="responsive_svg_pay"
        />
      </div>

      <div className="exploration_pay">
        <p>EXPLORATION COURSE</p>
      </div>

      <div className="form_head_pay">
        <p>REGISTRATION FORM</p>
      </div>

      <div className="box_col_pay">
        <div className="term_head_pay">
          <p>PAYMENT DETAILS</p>
        </div>

        <div className="points_row1_pay">
          <div className="para1_pay">
            <p>REFERRAL CODE</p>
          </div>
          <div className="banner1_pay">
            <input type="text" value={refCode?refCode : "not applied"} disabled />
          </div>
        </div>

        <div className="points_row_pay">
          <div className="points_pay">
            <div className="para_pay">
              <p>ACTUAL PRICE OF THE EXPLORATION COURSE</p>
            </div>
            <div className="para_pay">
              <p>DISCOUNT APPLIED</p>
            </div>
            <div className="para_pay">
              <p>TOTAL PAYABLE AMOUNT</p>
            </div>
          </div>
          <div className="points1_pay">
            <div className="price1_pay">
              <p>${originalPrice}</p>
            </div>
            <div className="price1_pay">
              <p>{discountApplied ? `-$${discountAmount}` : "No Discount"}</p>
            </div>
            <div className="price1_pay">
              <p>${payableAmount}</p>
            </div>
          </div>
        </div>

        <div className="click_pay">
          <button className="btn_pay" onClick={() => navigate("/scannerpage", { state: { amount: payableAmount } })}
  >PAY {payableAmount}</button>
        </div>
      </div>
    </section>
  );
};












// import React from 'react';
// import "../css/payment.css";
// import bannerImage from "./image/code-x-novas banner.svg";
// import { useNavigate } from 'react-router-dom';
// export const Payment = () => {
//   const navigate = useNavigate()
//   return (
//     <section className="terms_con_pay">
//       <div className="banner_pay">
//         <img
//           src={bannerImage}
//           alt="Code-X-Novas Banner"
//           className="responsive_svg_pay"
//         />
//       </div>

//       <div className="exploration_pay">
//         <p>EXPLORATION COURSE</p>
//       </div>

//       <div className="form_head_pay">
//         <p>REGISTRATION FORM</p>
//       </div>

//       <div className="box_col_pay">
//         <div className="term_head_pay">
//           <p>PAYMENT DETAILS</p>
//         </div>

//         <div className="points_row1_pay">
//           <div className="para1_pay">
//             <p>REFERRAL CODE</p>
//           </div>
//           <div className="banner1_pay">
//             <input type="text" placeholder="APPLY COUPON CODE" />
//           </div>
//         </div>

//         <div className="points_row_pay">
//           <div className="points_pay">
//             <div className="para_pay">
//               <p>ACTUAL PRICE OF THE EXPLORATION COURSE</p>
//             </div>
//             <div className="para_pay">
//               <p>DISCOUNT APPLIED</p>
//             </div>
//             <div className="para_pay">
//               <p>TOTAL PAYABLE AMOUNT</p>
//             </div>
//           </div>
//           <div className="points1_pay">
//             <div className="price1_pay">
//               <p>$129</p>
//             </div>
//             <div className="price1_pay">
//               <p>-$30</p>
//             </div>
//             <div className="price1_pay">
//               <p>$99</p>
//             </div>
//           </div>
//         </div>

//         <div className="click_pay">
//           <button className="btn_pay" onClick={() => {navigate("/confirm")}}>PAY NOW</button>
//         </div>
//       </div>
//     </section>
//   );
// };


