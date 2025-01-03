
import React, { useState } from "react";
import "../css/reg.css"; // Ensure correct path to CSS file
import bannerImage from "./image/code-x-novas banner.svg"; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";
import { Loader } from "lucide-react";

export const Registration = () => {
  const navigate = useNavigate();
   const [loading,setLoading] = useState(false)
  

  const [userInputData, setUserInputData] = useState({
    name: "",
    email: "",
    phone_number: "",
    institute_name: "",
    state: "",
    PIN: "",
    payment_status: "not paid",
    payment_screenshot : "",
    time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
  });

  const handleInput = (e) => {
    setUserInputData({ ...userInputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(userInputData.email=="pradhansambit2005@gmail.com"){
      return navigate("/admin")
    }
    if(userInputData.name=="" || userInputData.email=="" || userInputData.phone_number=="" || userInputData.institute_name=="" || userInputData.state=="" || userInputData.PIN==""){
      setLoading(false)
      return toast.error("all fields are required",{
        position : "top-center",
        autoClose:3000
      })
    }
    

   

  try {
    const userRef = collection(fireDB, "users");
    // const querySnapshot = await getDocs(
    //   query(userRef, where("email", "==", userInputData.email))
    // );

    // if (!querySnapshot.empty) {
    //   return toast.error("Email already registered", {
    //     position: "top-center",
    //     autoClose: 3000,
    //   });
    // }

    // Add user data if no duplicate is found
    const docRef = await addDoc(userRef, userInputData);
    const userId = docRef.id

    // Save user ID to localStorage
    localStorage.setItem("userId", userId);


    toast.success(`Proceed to next, ${userInputData.name}`, {
      position: "top-center",
      autoClose: 3000,
    });
    navigate("./terms-cons");
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while processing your request", {
      position: "top-center",
      autoClose: 3000,
    });
  }


    console.log(userInputData)
    
  }
  return (
    <>
    <section className="registration_form_reg">
      {/* Banner Section */}
      <div className="banner_reg">
        <img src={bannerImage} alt="Banner" className="responsive_svg_reg" />
      </div>

      {/* Exploration Section */}
      <div className="exploration_reg">
        <p>EXPLORATION COURSE</p>
      </div>

      {/* Form Header */}
      <div className="form_head_reg">
        <p>REGISTRATION FORM</p>
      </div>

      {/* Registration Form */}
      <div className="reg_form_reg">
        {/* Left Column */}
        <div className="form_reg">
          <form className="form1_reg">
            <div className="form-col_reg">
              <div>
                <p className="head1_reg">NAME</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="name"
                  value={userInputData.name}
                  onChange={handleInput}
                  placeholder="Enter your Name"
                />
              </div>
            </div>

            <div className="form-col_reg">
              <div>
                <p className="head1_reg">E-MAIL I.D.</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="email"
                  value={userInputData.email}
                  onChange={handleInput}
                  placeholder="Enter your Email ID"
                />
              </div>
            </div>

            <div className="form-col_reg">
              <div>
                <p className="head1_reg">PHONE NO. (WHAT’S APP)</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="phone_number"
                  value={userInputData.phone_number}
                  onChange={handleInput}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-col_reg">
              <div>
                <p className="head1_reg">NAME OF THE INSTITUTION</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="institute_name"
                  value={userInputData.institute_name}
                  onChange={handleInput}
                  placeholder="Enter your Institution Name"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div className="form_reg">
          <form className="form1_reg">
            <div className="form-col_reg">
              <div>
                <p className="head1_reg">STATE</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="state"
                  value={userInputData.state}
                  onChange={handleInput}
                  placeholder="Enter your State"
                />
              </div>
            </div>

            <div className="form-col_reg">
              <div>
                <p className="head1_reg">PIN CODE</p>
              </div>
              <div className="form-group_reg">
                <input
                  type="text"
                  name="PIN"
                  value={userInputData.PIN}
                  onChange={handleInput}
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
          </form>
        </div>
        {/* for small size */}
        <div class="form_s_reg">
                <form action="noaction.php" class="form1_s_reg">


                    <div class="form-col_reg">
                        <div>
                            <p class="head1_reg">NAME</p>
                        </div>
                       
                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="name"
                  value={userInputData.name}
                  onChange={handleInput}
                  placeholder="Enter your Name"
                />
                        </div>

                    </div>
                    




                    <div class="form-col_reg">

                        <div>
                            <p class="head1_reg">E-MAIL I.D.</p>
                        </div>

                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="email"
                  value={userInputData.email}
                  onChange={handleInput}
                  placeholder="Enter your Email ID"
                />
                        </div>
                    
                    </div>





                    
                    <div class="form-col_reg">

                        <div>
                            <p class="head1_reg">PHONE NO. (WHAT’S APP)</p>
                        </div>

                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="phone_number"
                  value={userInputData.phone_number}
                  onChange={handleInput}
                  placeholder="Enter your phone number"
                />
                        </div>
                    
                    </div>



                    
                    
                    <div class="form-col_reg">
                        <div>
                            <p class="head1_reg">NAME OF THE INSTITUTION</p>
                        </div>
                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="institute_name"
                  value={userInputData.institute_name}
                  onChange={handleInput}
                  placeholder="Enter your Institution Name"
                />
                        </div>
                    
                    </div>



                    
                    <div class="form-col_reg">
                        <div>
                            <p class="head1_reg">STATE</p>
                        </div>
                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="state"
                  value={userInputData.state}
                  onChange={handleInput}
                  placeholder="Enter your State"
                />
                        </div>
                    
                    </div>
                



                    <div class="form-col_reg">
                        <div>
                            <p class="head1_reg">PIN CODE</p>
                        </div>
                        <div class="form-group_reg">
                        <input
                  type="text"
                  name="PIN"
                  value={userInputData.PIN}
                  onChange={handleInput}
                  placeholder="Enter Pincode"
                />
                        </div>
                    
                    </div>
                
                    

                </form>

            </div>
      </div>

      {/* Submit Button */}
      <div className="click_reg">
        <button className="btn_reg"  onClick={handleSubmit}>
        {loading ?<Loader className="lucide-loader"/> :"CLICK TO PROCEED"}
        </button>
      </div>
    </section>
    </>
  );
};
