// import {IconMenu} from './IconMenu'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

export function TopBar ({toggleSideBar, issidebaropen}){
    return(
    <div className=" z-40 w-full fixed h-14  bg-gray-50 dark:bg-black dark:text-white top-0 left-0">
        <div className="flex justify-between items-center">
            <button onClick={toggleSideBar} className='mt-3'>
            {issidebaropen?<ClearIcon className='ml-64 ' />:<MenuIcon className='ml-4'/>}
            </button>
        
        </div>
    </div>)
}
//  default TopBar;