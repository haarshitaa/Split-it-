// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';

// export function BarTop(){
//     return(
//         <>
//         <div className="w-full fixed z-10 bg-customBg h-20 top-0">
//   <div className="ml-96 flex items-center justify-between h-full px-4 border border-black">
  
//     <div className="ml-24 flex gap-8 border border-black mt-4">
//       <div className="mx-10">
//         <p className="font-mono font-normal text-2xl text-white">DASHBOARD</p>
//       </div >
//       <div className="mx-10">
//         <p className="font-mono font-normal text-2xl text-white">HISTORY</p>
//       </div>
//       <div className="mx-10">
//         <p className="font-mono font-normal text-2xl text-white">GROUPS</p>
//       </div>
//     </div>
  
//     <div className="border border-black">
     



//     <AvatarGroup max={4}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//       <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
//       <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
//     </AvatarGroup>




//     </div>
//   </div>
// </div>

//         </>
//     )
// }



// import React, { useEffect, useState } from 'react';
// import { Avatar, AvatarGroup } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import { toast } from 'react-toastify';  // Import react-toastify for showing toast notifications

// export function BarTop() {
//   const [friends, setFriends] = useState([]);
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();  // Initialize the navigate function

//   useEffect(() => {
//     if (!token) {
//       toast.error('No token found! Redirecting to login.');  // Use toast to show error
//       navigate('/login');
//     }
//   }, [navigate, token]);  // Run when token or navigate changes

//   // Add token as a dependency to ensure it runs when the token changes

//   const getInitials = (name) => {
//     const nameParts = name.split(' ');
//     const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
//     return initials;
//   };

//   return (
//     <div className="w-full fixed z-60 bg-customBg h-16 top-0">
//       <div className="ml-96 flex items-center justify-between h-full px-4 border border-black">
//         <div className="ml-24 flex gap-8 border border-black mt-4">
//           <div className="mx-10">
//             <p className="font-mono font-normal text-2xl text-white">DASHBOARD</p>
//           </div>
//           <div className="mx-10">
//             <p className="font-mono font-normal text-2xl text-white">HISTORY</p>
//           </div>
//           <div className="mx-10">
//             <p className="font-mono font-normal text-2xl text-white">GROUPS</p>
//           </div>
//         </div>

//         <div className="border border-black">
//           <AvatarGroup max={4}>
//             {friends.map((friend) => (
//               <Avatar key={friend.id}>
//                 {getInitials(friend.name)}  {/* Display initials inside Avatar */}
//               </Avatar>
//             ))}
//           </AvatarGroup>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { toast } from 'react-toastify';  // Import react-toastify for showing toast notifications

export function BarTop({ friends }) {
  const navigate = useNavigate();  // Initialize the navigate function
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      toast.error('No token found! Redirecting to login.');  // Use toast to show error
      navigate('/login');
    }
  }, [navigate, token]);  // Run when token or navigate changes

  // Function to get the initials of the user's name
  const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  return (
    <div className="w-full fixed z-60 bg-customBg h-16 top-0">
      <div className="ml-96 flex items-center justify-between h-full px-4 border border-black">
        <div className="ml-24 flex gap-8 border border-black mt-4">
          <div className="mx-10">
            <p className="font-mono font-normal text-2xl text-white">DASHBOARD</p>
          </div>
          <div className="mx-10">
            <p className="font-mono font-normal text-2xl text-white">HISTORY</p>
          </div>
          <div className="mx-10">
            <p className="font-mono font-normal text-2xl text-white">GROUPS</p>
          </div>
        </div>

        <div className="border border-black">
          {/* Displaying friends using AvatarGroup */}
          <AvatarGroup max={4}>
            {friends.map((friend) => (
              <Avatar key={friend.id}>
                {getInitials(friend.name)}  {/* Display initials inside Avatar */}
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
