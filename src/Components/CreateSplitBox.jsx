// import { useState, useEffect } from "react";
// import axios from "axios";

// export function CreateSplitBox({ closeModal, friends }) {
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("https://img.com"); // Default image
//   const [currency, setCurrency] = useState("");
//   const [amount, setAmount] = useState("");
//   const [note, setNote] = useState("");
//   const [participants, setParticipants] = useState([{ name: "", email: "", share: "" }]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredFriends, setFilteredFriends] = useState([]);

//   // Filter friends based on the search query
//   useEffect(() => {
//     if (searchQuery) {
//       setFilteredFriends(
//         friends.filter(friend =>
//           friend.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredFriends([]);
//     }
//   }, [searchQuery, friends]);

//   // Function to handle input change for participants
//   const handleParticipantChange = (index, field, value) => {
//     const newParticipants = [...participants];
//     newParticipants[index][field] = value;
//     setParticipants(newParticipants);
//   };

//   // Function to handle adding a new participant
//   const addParticipant = () => {
//     setParticipants([...participants, { name: "", email: "", share: "" }]);
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       description,
//       image,
//       currency,
//       amount: parseFloat(amount),
//       note,
//       participants: participants.map((participant) => ({
//         name: participant.name,
//         email: participant.email,
//         share: participant.share ? parseFloat(participant.share) : undefined,
//       })),
//     };

//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post("/createsplit", data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, 
//         },
//       });

//       if (response.status === 200) {
//         console.log("Split created successfully:", response.data);
//         closeModal(); 
//       } else {
//         console.error("Error creating split:", response.data.errors);
//       }
//     } catch (err) {
//       console.error("Error occurred:", err);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-60">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96">
//         <div className="flex flex-row-reverse">
//           <button onClick={closeModal}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex mb-4">
//           <div>You and: </div>
//           <div className="border border-black flex-grow">
//             <input
//               type="text"
//               placeholder="Enter participants"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-2 w-full"
//             />
//           </div>
//         </div>


//         {searchQuery && filteredFriends.length > 0 && (
//           <div className="border border-black max-h-32 overflow-y-auto">
//             {filteredFriends.map((friend) => (
//               <div
//                 key={friend.id}
//                 className="cursor-pointer p-2 hover:bg-gray-200"
//                 onClick={() => {
               
//                   setParticipants([
//                     ...participants,
//                     { name: friend.name, email: friend.email, share: "" },
//                   ]);
//                   setSearchQuery(""); 
//                 }}
//               >
//                 {friend.name}
//               </div>
//             ))}
//           </div>
//         )}

//         <button
//           type="button"
//           onClick={addParticipant}
//           className="bg-blue-500 text-white p-2 rounded mt-4"
//         >
//           Add Participant
//         </button>

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-green-500 text-white p-2 rounded mt-4"
//         >
//           Create Split
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import axios from "axios";

// export function CreateSplitBox({ closeModal, friends }) {
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("https://img.com"); // Default image
//   const [currency, setCurrency] = useState("");
//   const [amount, setAmount] = useState("");
//   const [note, setNote] = useState("");
//   const [participants, setParticipants] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredFriends, setFilteredFriends] = useState([]);

//   // Filter friends based on the search query
//   useEffect(() => {
//     if (searchQuery) {
//       setFilteredFriends(
//         friends.filter((friend) =>
//           friend.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
        
//        );
//     } else {
//       setFilteredFriends([]);
//     }
//   }, [searchQuery, friends]);

//   // Function to handle adding a participant
//   const addParticipant = (friend) => {
//     // Check if the participant is already added
//     if (!participants.some((p) => p.email === friend.email)) {
//       setParticipants([...participants, { name: friend.name, email: friend.email }]);
//     }
  
//     // Update filtered friends to exclude the already added participant
//     setFilteredFriends(filteredFriends.filter((f) => f.email !== friend.email));
  
//     // Clear search query
//     setSearchQuery("");
//   };
  

//   // Function to remove a participant
//   const removeParticipant = (email) => {
//     setParticipants(participants.filter((p) => p.email !== email));
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       description,
//       image,
//       currency,
//       amount: parseFloat(amount),
//       note,
//       participants: participants.map((participant) => ({
//         name: participant.name,
//         email: participant.email,
//       })),
//     };

//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post("/createsplit", data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         console.log("Split created successfully:", response.data);
//         closeModal();
//       } else {
//         console.error("Error creating split:", response.data.errors);
//       }
//     } catch (err) {
//       console.error("Error occurred:", err);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-60">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96">
//         <div className="flex flex-row-reverse">
//           <button onClick={closeModal}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">You and:</label>

//           <div className="flex flex-wrap gap-2 mb-2">
//             {participants.map((participant) => (
//               <div
//                 key={participant.email} // Ensure email is unique
//                 className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm"
//               >
//                 <span className="mr-2">{participant.name}</span>
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => removeParticipant(participant.email)}
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}
//           </div>

//           <input
//             type="text"
//             placeholder="Search friends"
//             value={searchQuery}
//             onChange={(e) => {setSearchQuery(e.target.value) ;
//             console.log(searchQuery);}}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />

//           {searchQuery && filteredFriends.length > 0 && (
//             <div className="border border-gray-300 max-h-32 overflow-y-auto mt-2 rounded">
//               {filteredFriends.map((friend) => (
//                 <div
//                   key={friend.email} // Use email for unique key
//                   className="cursor-pointer p-2 hover:bg-gray-100"
//                   onClick={() => addParticipant(friend)}
//                 >
//                   {friend.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-green-500 text-white p-2 rounded mt-4 w-full"
//         >
//           Create Split
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export function CreateSplitBox({ isOpen, onClose }) {
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    description: "",
    image: "",
    currency: "INR", // Default currency
    amount: "",
    note: "",
    participants: [{ name: "", email: "" }], // At least one additional participant
  });

  const [errors, setErrors] = useState(null); // Store validation errors

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) || 0 : value,
    });
  };

  // Handle participant changes
  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index][field] = value;
    setFormData({ ...formData, participants: updatedParticipants });
  };

  // Add a new participant field
  const addParticipant = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { name: "", email: "" }],
    });
  };

  // Remove a participant (ensuring at least one additional remains)
  const removeParticipant = (index) => {
    if (formData.participants.length > 1) {
      setFormData({
        ...formData,
        participants: formData.participants.filter((_, i) => i !== index),
      });
    }
  };

  // Submit the form
  const handleSubmit = async () => {
    setErrors(null); // Reset errors

    const amountValue = Number(formData.amount) || 0;
    if (amountValue <= 0) {
      setErrors([{ message: "Amount must be greater than zero." }]);
      return;
    }

    if (formData.participants.length < 1) {
      setErrors([{ message: "At least one participant is required." }]);
      return;
    }

    try {
      console.log("yes");
      const response = await axios.post(
        "http://127.0.0.1:8787/createsplit",
        {
          description: formData.description,
          image: formData.image || "https://img.com",
          currency: formData.currency,
          amount: amountValue,
          note: formData.note || null,
          participants: formData.participants, // Do not include logged-in user; backend handles it
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Split created:", response.data);
      onClose();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data.errors || [{ message: "Invalid request data." }]);
      } else {
        alert(error);
        console.error("Error creating split:", error);
      }
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <h2 className="text-xl font-semibold mb-4">Create a New Split</h2>

          {errors && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-2">
              {errors.map((err, i) => (
                <p key={i}>{err.message}</p>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Description</label>
              <input
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image (optional)</label>
              <input
                name="image"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Currency</label>
              <input
                name="currency"
                placeholder="Enter currency"
                value={formData.currency}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Note (optional)</label>
              <input
                name="note"
                placeholder="Enter note"
                value={formData.note}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Participants</label>
              {formData.participants.map((participant, index) => (
                <div key={index} className="flex space-x-2 mt-2">
                  <input
                    placeholder="Name"
                    value={participant.name}
                    onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                    className="block w-full border rounded p-2"
                  />
                  <input
                    placeholder="Email"
                    value={participant.email}
                    onChange={(e) => handleParticipantChange(index, "email", e.target.value)}
                    className="block w-full border rounded p-2"
                  />
                  {formData.participants.length > 1 && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeParticipant(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={addParticipant}
              >
                Add Participant
              </button>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Create Split
            </button>
          </div>
        </div>
      </div>
    )
  );
}


