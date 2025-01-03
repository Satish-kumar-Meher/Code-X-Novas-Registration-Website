
import React, { useState, useEffect } from "react";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import "../css/user_table.css";

function UsersTable() {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // Loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [modalImageSrc, setModalImageSrc] = useState(""); // Image source for modal

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userRef = collection(fireDB, "users");
        const querySnapshot = await getDocs(userRef);
        const userList = [];
        
        querySnapshot.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() });
        });

        setUsers(userList);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users", {
          position: "top-center",
          autoClose: 3000,
        });
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Close the modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target.classList.contains("image-modal")) {
      setIsModalOpen(false);
    }
  };

  // Render loading spinner if still fetching data
  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="spinner" />
      </div>
    );
  }

  return (
    <div className="user-table-container">
      <h2>Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Institute Name</th>
            <th>State</th>
            <th>PIN</th>
            <th>Payment Status</th>
            <th>Payment Screenshot</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.institute_name}</td>
                <td>{user.state}</td>
                <td>{user.PIN}</td>
                <td className={user.payment_status === "confirmed" ? "confirm-status" : "non-confirm-status"}>
                  {user.payment_status}
                </td>
                <td>
                  {user.payment_screenshot ? (
                    <img
                      src={user.payment_screenshot}
                      alt="Payment Screenshot"
                      className="payment-image"
                      onClick={() => {
                        setIsModalOpen(true);
                        setModalImageSrc(user.payment_screenshot);
                      }}
                    />
                  ) : (
                    "Not Available"
                  )}
                </td>
                <td>{user.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal to show image */}
      {isModalOpen && (
        <div className="image-modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            <img src={modalImageSrc} alt="Modal View" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersTable;
