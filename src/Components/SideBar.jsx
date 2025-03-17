import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const sidebarItems = [
  { label: "DashBoard", icon: <HomeIcon />, to: "/dashboard" },
  { label: "Articles", icon: <BookIcon />, to: "/articles" },
  { label: "Profile", icon: <PersonIcon />, to: "#" },
  { label: "History", icon: <HistoryIcon />, to: "#" },
//   { label: "Trending", icon: <TrendingUpIcon />, to: "#" },
//   { label: "Shopping", icon: <ShoppingBagIcon />, to: "#" },
//   { label: "Music", icon: <MusicNoteIcon />, to: "#" },
];

function SidebarItem({ label, icon, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ms-3 text-sm pl-2">{label}</span>
      </Link>
    </li>
  );
}

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside
      id="separator-sidebar"
      className="fixed top-12 left-0 z-60 w-64 h-screen transition-transform translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black">
        {/* <p className="bg-black text-red-50 ysabeau-sc-unique-class">SplitIt</p> */}
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <SidebarItem label="Settings" icon={<SettingsIcon />} to="#" />
          <SidebarItem label="Logout" icon={<LogoutIcon />} to="/signin" onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user"); 
            }} 
            />
        </ul>
      </div>
    </aside>
  );
}
