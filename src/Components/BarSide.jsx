// import HomeIcon from '@mui/icons-material/Home';
// import BookIcon from '@mui/icons-material/MenuBook';
// import PersonIcon from '@mui/icons-material/Person';
// import HistoryIcon from '@mui/icons-material/History';
// // import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// // import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// // import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link, useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Tooltip from '@mui/material/Tooltip';


// const sidebarItems = [
//   // { label: "DashBoard", icon: <HomeIcon />, to: "/dashboard" },
//   { label: "Articles", icon: <BookIcon />, to: "/articles" },
//   // { label: "Profile", icon: <PersonIcon />, to: "#" },
//   { label: "Settings", icon: <SettingsIcon />, to: "#" },
// //   { label: "Trending", icon: <TrendingUpIcon />, to: "#" },
// //   { label: "Shopping", icon: <ShoppingBagIcon />, to: "#" },
// //   { label: "Music", icon: <MusicNoteIcon />, to: "#" },
// ];

// function SidebarItem({ label, icon, to, onClick }) {
//   const location = useLocation();
//   const isActive = location.pathname === to;
  

//   return (
//     <li>
//       <Link
//         to={to}
//         onClick={onClick}
//         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//       >
//         <Tooltip title={label}>
//         {icon}
//         </Tooltip>
        
//         {/* <span className="ms-3 text-sm pl-2">{label}</span> */}
//       </Link>
//     </li>
//   );
// }







// export function BarSide() {
//   const navigate = useNavigate();
//   return (
    
//     <aside
//       id="separator-sidebar"
//       className="fixed  left-0 z-60 w-40 h-screen transition-transform translate-x-0"
//       aria-label="Sidebar"
//     >
//       <div className="h-full px-3 py-4 overflow-y-auto  bg-customBg">
//       <div>
//       <img src="/assets/logo.png" alt="Logo" className="w-34 h-auto mx-auto mb-14" />
//       </div>

//         {/* <p className="bg-black text-red-50 ysabeau-sc-unique-class">SplitIt</p> */}
//         <ul className="space-y-2">
//           {sidebarItems.map((item) => (
//             <SidebarItem key={item.label} {...item} />
//           ))}
//         </ul>
//         <ul className="pt-4 mt-96 space-y-2 border-t border-gray-200 dark:border-gray-700">
//           {/* <SidebarItem  icon={<SettingsIcon />} to="#" /> */}
//           <div className='mx-auto'>
//           <SidebarItem  icon={<LogoutIcon />} to="/signin" onClick={()=>{
//             localStorage.removeItem("token");
//             localStorage.removeItem("user"); 
//             }} 
//             />
//           </div>
//         </ul>
//       </div>
//     </aside>
//   );
// }


// import BookIcon from '@mui/icons-material/MenuBook';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link, useLocation } from 'react-router-dom';
// import Tooltip from '@mui/material/Tooltip';

// const sidebarItems = [
//   { label: "Articles", icon: <BookIcon />, to: "/articles" },
//   { label: "Settings", icon: <SettingsIcon />, to: "#" },
// ];

// function SidebarItem({ label, icon, to, onClick }) {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <li>
//       <Link
//         to={to}
//         onClick={onClick}
//         className={`flex flex-col items-center justify-center w-14 h-20 mx-auto 
//                     ${isActive ? 'bg-white rounded-full' : 'bg-transparent'} 
//                     hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700`}
//       >
//         <Tooltip title={label}>
//           <span className="text-3xl text-gray-900 dark:text-white">{icon}</span>
//         </Tooltip>
//         <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{label}</span>
//       </Link>
//     </li>
//   );
// }

// export function BarSide() {
//   return (
//     <aside
//       id="separator-sidebar"
//       className="fixed left-0 z-60 w-40 h-screen transition-transform translate-x-0 top-0"
//       aria-label="Sidebar"
//     >
//       <div className="h-full px-3 py-4 overflow-y-auto bg-customBg">
//         <div>
//           <img src="/assets/logo.png" alt="Logo" className="w-34 h-auto mx-auto mb-14" />
//         </div>

//         <ul className="space-y-6">
//           {sidebarItems.map((item) => (
//             <SidebarItem key={item.label} {...item} />
//           ))}
//         </ul>

//         <ul className="pt-4 mt-auto space-y-6 border-t border-gray-200 dark:border-gray-700">
//           <li className="flex flex-col items-center justify-center w-14 h-20 mx-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
//             <Tooltip title="Logout">
//               <Link to="/signin" onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("user"); }}>
//                 <span className="text-3xl text-gray-900 dark:text-white">
//                   <LogoutIcon />
//                 </span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">Logout</span>
//               </Link>
//             </Tooltip>
//           </li>
//         </ul>
//         <div>
//           <div className='border border-black rounded-full h-24 w-24 mx-auto mt-28' >

//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }


import BookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

const sidebarItems = [
  { label: "Articles", icon: <BookIcon />, to: "/articles" },
  { label: "Settings", icon: <SettingsIcon />, to: "/setting" },
];

function SidebarItem({ label, icon, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-14 h-20 mx-auto 
                    ${isActive ? 'bg-white rounded-full' : 'bg-transparent'} 
                    `}
      >
        
          <span className="text-3xl text-gray-900 dark:text-white">{icon}</span>
  
        <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{label}</span>
      </Link>
    </li>
  );
}

export function BarSide() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Assuming the user info is stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Get the first initial of the user's name
  const getInitial = (name) => {
    return name ? name[0].toUpperCase() : '';
  };

  return (
    <aside
      id="separator-sidebar"
      className="fixed left-0 z-60 w-28 h-screen transition-transform translate-x-0 top-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-customBg">
        <div>
          <img src="/assets/logo.png" alt="Logo" className="w-34 h-auto mx-auto mb-14" />
        </div>

        <ul className="space-y-6">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </ul>

        <ul className="pt-4 mt-auto space-y-6 border-t border-gray-200 ">
          <li className="flex flex-col items-center justify-center w-14 h-20 mx-auto ">
           
              <Link to="/signin" onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("user"); }}>
                <span className="text-3xl text-gray-900 dark:text-white">
                  <LogoutIcon />
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">Logout</span>
              </Link>
            
          </li>
        </ul>

        <div className="flex flex-col items-center mt-10">
          <div className="border rounded-full h-16 w-16 mx-auto mt-28 flex items-center justify-center bg-gray-300">
            {user ? (
              <span className="text-3xl text-white">{getInitial(user.name)}</span>
            ) : (
              <span className="text-3xl text-white">?</span> // Default fallback
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
