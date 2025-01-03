
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { doc, updateDoc } from "firebase/firestore";
import "../css/scanner_page.css";
import scanner_129 from "./image/scanner_129.jpg";
import scanner_99 from "./image/scanner_99.jpg";
import { fireDB } from "../firebase/FirebaseConfig";
import { Loader } from "lucide-react";

function ScannerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const imageRef = useRef();
  const [screenshot, setScreenshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading,setLoading] = useState(false)

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    setLoading(true)
    if (!screenshot) return;

    const data = new FormData();
    data.append("file", screenshot);
    data.append("upload_preset", "code-x-novas");
    data.append("cloud_name", "dkzcx6cuw");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkzcx6cuw/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImage = await res.json();
      const secureUrl = uploadedImage.secure_url;

      if (secureUrl) {
        // Update Firebase Database
        const paymentId = localStorage.getItem("userId") // Assuming paymentId is passed via location
        if (paymentId) {
          const paymentRef = doc(fireDB, "users", paymentId); // Replace 'payments' with your collection name
          await updateDoc(paymentRef, {
            payment_screenshot : secureUrl,
            payment_status: "confirmed",
          });
          toast.success("Payment confirmed successfully", {
            position: "top-center",
            autoClose: 3000,
          });
          // Navigate to the next page
          navigate("/confirm"); // Replace '/next-page' with your desired route
        } else {
          toast.error("Payment ID is missing", {
            position: "top-center",
            autoClose: 3000,
          });
          setLoading(false)
        }
      } else {
        toast.error("Failed to upload the image", {
          position: "top-center",
          autoClose: 3000,
        });
        setLoading(false)
      }
    } catch (error) {
      console.error("Error uploading file or updating database:", error);
      toast.error("Image upload or database update failed", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false)
    }
  };

  // Cancel image selection
  const handleCancelPreview = () => {
    setScreenshot(null);
    setPreview(null);
  };

  const amount = location.state?.amount || 129;
  const scannerImage = amount === 99 ? scanner_99 : scanner_129;

  return (
    <div className="main-cont-scan">
      <div className="box_scanner">
        <div className="scanner_image">
          <img src={scannerImage} alt="Scanner" />
        </div>
        <div className="scanner_content">
          <p className="scanner_text">
            Scan the QR code and complete the payment. After completing the
            payment, upload a screenshot of the successful transaction here.
          </p>
          <input
            ref={imageRef}
            onChange={handleFileChange}
            type="file"
            className="hidden"
          />
          <button
            className="upload_button"
            onClick={() => imageRef?.current.click()}
          >
             Add Screenshot
          </button>
          {preview && (
            <div className="preview_box">
              <img src={preview} alt="Selected Preview" className="preview_image" />
              <button className="close_button" onClick={handleCancelPreview}>
                ✕
              </button>
            </div>
          )}
          {/* {loading ? 
          <button className="upload_button" onClick={handleFileUpload}>
            <Loader className="lucide-loader"/>
          </button> : 
            <button className="upload_button" onClick={handleFileUpload}>
            Upload Screenshot
          </button>   } */}
          <button className="upload_button" onClick={handleFileUpload}>
            {loading ?<Loader className="lucide-loader"/> :"Upload Screenshot"}
          </button> 
        </div>
      </div>
    </div>
  );
}

export default ScannerPage;











// import React from 'react';
// import "../css/scanner_page.css";

// import scanner_129 from "./image/scanner_129.jpg";
// import scanner_99 from "./image/scanner_99.jpg";
// function ScannerPage() {
 
//   return (
//     <div className="main-cont-scan">
//       <div className="box_scanner">
//         {/* Left Section - Scanner Image */}
//         <div className="scanner_image">
//           <img src={scanner_129} alt="Scanner" />
//         </div>

//         {/* Right Section - Text and Button */}
//         <div className="scanner_content">
//           <p className="scanner_text">
//             Scan the QR code and pay the payment. After completing the payment,
//             upload a screenshot of the successful transaction here.
//           </p>
//           <button className="upload_button">Upload Screenshot</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScannerPage;



// import axios from "axios";
// import { doc, updateDoc } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";

// import React, { useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import "../css/scanner_page.css";
// import scanner_129 from "./image/scanner_129.jpg";
// import scanner_99 from "./image/scanner_99.jpg";

// function ScannerPage() {
//   const location = useLocation();
//   const imageRef = useRef();
//   const [screenshot, setScreenshot] = useState(null);


//     // Handle file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//    if(file) setScreenshot(file);
//   };

//   const handleFileUpload = async () => {
//     if(!screenshot) return
//     const data = new FormData()
//     data.append("file",screenshot)
//     data.append("upload_preset", "code-x-novas")
//     data.append("cloud_name", "dkzcx6cuw")

//    const res =  await fetch("https://api.cloudinary.com/v1_1/dkzcx6cuw/image/upload",{
//         method : "POST",
//         body: data
//     })

//     const uploadedImageURL = await res.json()
//     console.log(uploadedImageURL)
//   }

//   const amount = location.state?.amount || 129; // Default to 129 if no amount is passed

//   // Select the appropriate scanner image
//   const scannerImage = amount === 99 ? scanner_99 : scanner_129;

//   return (
//     <div className="main-cont-scan">
//       <div className="box_scanner">
//         {/* Left Section - Scanner Image */}
//         <div className="scanner_image">
//           <img src={scannerImage} alt="Scanner" />
//         </div>

//         {/* Right Section - Text and Button */}
//         <div className="scanner_content">
//           <p className="scanner_text">
//             Scan the QR code and complete the payment. After completing the payment,
//             upload a screenshot of the successful transaction here.
//           </p>
//           <input
//                 ref={imageRef}
//                 onChange={handleFileChange}
//                 type="file"
//                 className="hidden"
//             />
//           <button className="upload_button" onClick={() => imageRef?.current.click()}>Upload Screenshot</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScannerPage;




// import React, { useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import "../css/scanner_page.css";
// import scanner_129 from "./image/scanner_129.jpg";
// import scanner_99 from "./image/scanner_99.jpg";
// import { toast } from 'react-toastify';

// function ScannerPage() {
//   const location = useLocation();
//   const imageRef = useRef();
//   const [screenshot, setScreenshot] = useState(null);

//   // Handle file selection
//   const handleFileChange = async (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setScreenshot(file);
    
//     }
//   };

//   // Handle file upload
//   const handleFileUpload = async (file) => {
//     if (!screenshot) return;

//     const data = new FormData();
//     data.append("file", screenshot);
//     data.append("upload_preset", "code-x-novas");
//     data.append("cloud_name", "dkzcx6cuw");

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/dkzcx6cuw/image/upload", {
//         method: "POST",
//         body: data,
//       });

//       const uploadedImageURL = await res.json();
//       console.log("Uploaded Image URL:", uploadedImageURL);
//       toast.success("image upload succesfully",{
//         position : "top-center",
//         autoClose:3000
//       })
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("image upload failed",{
//         position : "top-center",
//         autoClose:3000
//       })
//     }
//   };

//   const amount = location.state?.amount || 129; // Default to 129 if no amount is passed

//   // Select the appropriate scanner image
//   const scannerImage = amount === 99 ? scanner_99 : scanner_129;

//   return (
//     <div className="main-cont-scan">
//       <div className="box_scanner">
//         {/* Left Section - Scanner Image */}
//         <div className="scanner_image">
//           <img src={scannerImage} alt="Scanner" />
//         </div>

//         {/* Right Section - Text and Button */}
//         <div className="scanner_content">
//           <p className="scanner_text">
//             Scan the QR code and complete the payment. After completing the payment,
//             upload a screenshot of the successful transaction here.
//           </p>
//           <input
//             ref={imageRef}
//             onChange={handleFileChange}
//             type="file"
//             className="hidden"
//           />
//           <button
//             className="upload_button"
//             onClick={() => imageRef?.current.click()}
//           >
            
//             add image
//           </button>
//           <button
//             className="upload_button"
//             onClick={() =>handleFileUpload()}
//           >
            
//             Upload Screenshot
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScannerPage;




// import React, { useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../css/scanner_page.css";
// import scanner_129 from "./image/scanner_129.jpg";
// import scanner_99 from "./image/scanner_99.jpg";
// import { toast } from "react-toastify";

// function ScannerPage() {
//   const location = useLocation();
//   const imageRef = useRef();
//   const [screenshot, setScreenshot] = useState(null);
//   const [preview, setPreview] = useState(null);

//   // Handle file selection
//   const handleFileChange = async (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setScreenshot(file);
//       setPreview(URL.createObjectURL(file)); // Generate a preview URL
//     }
//   };

//   // Handle file upload
//   const handleFileUpload = async () => {
//     if (!screenshot) return;

//     const data = new FormData();
//     data.append("file", screenshot);
//     data.append("upload_preset", "code-x-novas");
//     data.append("cloud_name", "dkzcx6cuw");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dkzcx6cuw/image/upload",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const uploadedImageURL = await res.json();
//       console.log("Uploaded Image URL:", uploadedImageURL);
//       toast.success("Image uploaded successfully", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       setScreenshot(null);
//       setPreview(null);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("Image upload failed", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   // Cancel image selection
//   const handleCancelPreview = () => {
//     setScreenshot(null);
//     setPreview(null);
//   };

//   const amount = location.state?.amount || 129; // Default to 129 if no amount is passed

//   // Select the appropriate scanner image
//   const scannerImage = amount === 99 ? scanner_99 : scanner_129;

//   return (
//     <div className="main-cont-scan">
//       <div className="box_scanner">
//         {/* Left Section - Scanner Image */}
//         <div className="scanner_image">
//           <img src={scannerImage} alt="Scanner" />
//         </div>

//         {/* Right Section - Text and Button */}
//         <div className="scanner_content">
//           <p className="scanner_text">
//             Scan the QR code and complete the payment. After completing the
//             payment, upload a screenshot of the successful transaction here.
//           </p>
//           <input
//             ref={imageRef}
//             onChange={handleFileChange}
//             type="file"
//             className="hidden"
//           />
//           <button
//             className="upload_button"
//             onClick={() => imageRef?.current.click()}
//           >
//             Add Screenshot
//           </button>
//           {preview && (
//             <div className="preview_box">
//               <img src={preview} alt="Selected Preview" className="preview_image" />
//               <button className="close_button" onClick={handleCancelPreview}>
//                 ✕
//               </button>
//             </div>
//           )}
//           <button className="upload_button" onClick={handleFileUpload}>
//             Upload Screenshot
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScannerPage;





