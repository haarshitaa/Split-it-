// import { useState } from "react";
// import axios from "axios";
// import { use } from "react";

// export function CreateSplitBox({ closeModal , friends}) {
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("https://img.com"); // Default image
//   const [currency, setCurrency] = useState("");
//   const [amount, setAmount] = useState("");
//   const [note, setNote] = useState("");
//   const [participants, setParticipants] = useState([{ name: "", email: "", share: "" }]);
//   const [friends, setFriends] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredFriends, setFilteredFriends]  = useState([]);

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

//     // Get token from localStorage
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post("/createsplit", data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Add token to the Authorization header
//         },
//       });

//       if (response.status === 200) {
//         console.log("Split created successfully:", response.data);
//         closeModal(); // Close the modal if successful
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
//             <button onClick={closeModal}>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//                 </svg>
//             </button>
//         </div>
//         <div className="flex">
//             <div>
//                 You and: 
//             </div>
//             <div className="Border border-black">
//              <div className="pl-2">
//                  <input placeholder="Enter participants"></input>
//             </div>
//             </div>
//             </div>
            

        
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";

export function CreateSplitBox({ closeModal, friends }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://img.com"); // Default image
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [participants, setParticipants] = useState([{ name: "", email: "", share: "" }]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);

  // Filter friends based on the search query
  useEffect(() => {
    if (searchQuery) {
      setFilteredFriends(
        friends.filter(friend =>
          friend.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredFriends([]);
    }
  }, [searchQuery, friends]);

  // Function to handle input change for participants
  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  // Function to handle adding a new participant
  const addParticipant = () => {
    setParticipants([...participants, { name: "", email: "", share: "" }]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      description,
      image,
      currency,
      amount: parseFloat(amount),
      note,
      participants: participants.map((participant) => ({
        name: participant.name,
        email: participant.email,
        share: participant.share ? parseFloat(participant.share) : undefined,
      })),
    };

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/createsplit", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response.status === 200) {
        console.log("Split created successfully:", response.data);
        closeModal(); 
      } else {
        console.error("Error creating split:", response.data.errors);
      }
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-60">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <div className="flex flex-row-reverse">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex mb-4">
          <div>You and: </div>
          <div className="border border-black flex-grow">
            <input
              type="text"
              placeholder="Enter participants"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-2 w-full"
            />
          </div>
        </div>


        {searchQuery && filteredFriends.length > 0 && (
          <div className="border border-black max-h-32 overflow-y-auto">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => {
               
                  setParticipants([
                    ...participants,
                    { name: friend.name, email: friend.email, share: "" },
                  ]);
                  setSearchQuery(""); 
                }}
              >
                {friend.name}
              </div>
            ))}
          </div>
        )}

        
        <div className="mt-4">
          {participants.map((participant, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Name"
                value={participant.name}
                onChange={(e) =>
                  handleParticipantChange(index, "name", e.target.value)
                }
                className="border p-2 w-1/3 mr-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={participant.email}
                onChange={(e) =>
                  handleParticipantChange(index, "email", e.target.value)
                }
                className="border p-2 w-1/3 mr-2"
              />
              <input
                type="text"
                placeholder="Share"
                value={participant.share}
                onChange={(e) =>
                  handleParticipantChange(index, "share", e.target.value)
                }
                className="border p-2 w-1/3"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addParticipant}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Add Participant
        </button>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded mt-4"
        >
          Create Split
        </button>
      </div>
    </div>
  );
}
