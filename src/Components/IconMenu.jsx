import MenuIcon from '@mui/icons-material/Menu';

export function IconMenu({setsidebaropen}){
  
    return(
        <div>
            <button onClick= {()=>{
                setsidebaropen((x)=>!x);
                // console.log(x);
            }
            }   >
            <MenuIcon  />
            </button>
            
        </div>
    )
}