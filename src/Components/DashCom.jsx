// import { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { Layout } from '../Components/layout';
// // import { CreateSplitBox } from "./CreateSplitBox";

// export function DashCom() {
//     const [user, setUser] = useState(null);
//     const [isCreateSplitOpen, setIsCreateSplitOpen] = useState(false);
// //   const [friends, setFriends] = useState([]);
// //   const [token, setToken] = useState(localStorage.getItem("token"));  

//   const handleCreateSplitClick = () => {
//     setIsCreateSplitOpen(true);
//     console.log(isCreateSplitOpen);
// }

//   return (
//     <div className="flex">
//     <div className="h-72 border w-xl p-3 flex justify-between rounded-xl">
//         <div className="pt-10">
//             <p className="text-4xl font-bold text-black mb-5 parisienne-regular">
//                 Hi {user?.name || "Guest"}!
//             </p>
//         </div>
//         <div>
//             <img src="/assets/hellochar.png" className="h-60" alt="Hello" />
//         </div>
//     </div>

//     <div className="h-16 w-44 border border-gray-300 rounded-2xl flex bg-gradient-to-r from-cyan-200 to-blue-200">
//         <button className="text-xl m-auto text-gray-700 font-medium" onClick={handleCreateSplitClick}>
//             CREATE SPLIT
//         </button>
//     </div>
// </div>

//   );
// }





// // import { CreateSplitBox } from "./CreateSplitBox";

//  import { Layout } from '../Components/layout';

// import React, { useState } from 'react';
// import axios from 'axios';

// export function CreateSplitDialog({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     description: '',
//     amount: '',
//     currency: '',
//     participants: [{ name: '', email: '', share: '' }],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleParticipantChange = (index, field, value) => {
//     const updatedParticipants = [...formData.participants];
//     updatedParticipants[index][field] = value;
//     setFormData({ ...formData, participants: updatedParticipants });
//   };

//   const addParticipant = () => {
//     setFormData({
//       ...formData,
//       participants: [...formData.participants, { name: '', email: '', share: '' }],
//     });
//   };

//   const removeParticipant = (index) => {
//     const updatedParticipants = formData.participants.filter((_, i) => i !== index);
//     setFormData({ ...formData, participants: updatedParticipants });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('/createsplit', formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       console.log('Split created:', response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error creating split:', error);
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//           <h2 className="text-xl font-semibold mb-4">Create a New Split</h2>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//               <input
//                 id="description"
//                 name="description"
//                 placeholder="Enter description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
//               <input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 placeholder="Enter amount"
//                 value={formData.amount}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
//               <input
//                 id="currency"
//                 name="currency"
//                 placeholder="Enter currency"
//                 value={formData.currency}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Participants</label>
//               {formData.participants.map((participant, index) => (
//                 <div key={index} className="flex space-x-2 mt-2">
//                   <input
//                     placeholder="Name"
//                     value={participant.name}
//                     onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
//                     className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                   <input
//                     placeholder="Email"
//                     value={participant.email}
//                     onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
//                     className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                   <input
//                     placeholder="Share"
//                     type="number"
//                     value={participant.share}
//                     onChange={(e) => handleParticipantChange(index, 'share', e.target.value)}
//                     className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                   <button
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => removeParticipant(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 onClick={addParticipant}
//               >
//                 Add Participant
//               </button>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-end space-x-2">
//             <button
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               onClick={handleSubmit}
//             >
//               Create Split
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   );
// }




import React, { useState } from 'react';
import { CreateSplitBox } from './CreateSplitBox';

export function DashCom() {
  const [user, setUser] = useState({ name: 'Guest' }); // Default user data
  const [isCreateSplitOpen, setIsCreateSplitOpen] = useState(false);

  const handleCreateSplitClick = () => {
    setIsCreateSplitOpen(true);
  };

  const handleCloseCreateSplit = () => {
    setIsCreateSplitOpen(false);
  };

  return (
    <div>
    <div className="p-6 space-y-6 flex justify-between">
      <div className="h-72 border w-full p-6 flex justify-between rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-md">
        <div className="pt-10">
          <p className="text-4xl font-bold text-black mb-5">
            Hi {user?.name || 'Guest'}!
          </p>
          <p className="text-gray-600">Welcome back! Ready to manage your splits?</p>
        </div>
        <div>
          <img src="/assets/hellochar.png" className="h-60" alt="Hello" />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="h-16 w-44 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transform transition"
          onClick={handleCreateSplitClick}
        >
          CREATE SPLIT
        </button>
      </div>

      {/* Create Split Dialog */}
      <CreateSplitBox
        isOpen={isCreateSplitOpen}
        onClose={handleCloseCreateSplit}
      />
    </div>
    <div>
      
    </div>
    </div>
  );
}
