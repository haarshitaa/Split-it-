// import Button from '@mui/material/Button';
// import { useEffect, useState } from 'react';
// import { AddSplitBox } from '../Components/AddSplitBox';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// // import { MenuIcon } from '../Components/MenuIcon';
// // import { IconMenu } from '../Components/IconMenu';
// import { showToast } from '../utils/toast';
// import { TopBar } from '../Components/TopBar';
// import { Sidebar } from '../Components/SideBar';


// export function Dashboard() {

//     const [showbox, setShowbox] = useState(false);
//     const [issidebaropen, setsidebaropen] = useState(false);
//     const [amount, setAmount] = useState(0);
//     const [participants,setParticipants] = useState([{ personName: "",share:0 }]);
//     const navigate = useNavigate();

//     const token = localStorage.getItem('token'); 

//     useEffect(()=>{
//         if (!token) {
//             showToast('No token found! Redirecting to login.', 'error');
//             navigate('/login');
  
//         }
//     },[navigate, token]);

    
//     const toggleButton = () => {
//         setShowbox((x)=> !x);
//         // console.log("this is button related");
//     };

//     const submit = async (formData) => {
//         try {
            
//             if(!token) {
//                 showToast('Authentication token missing!','error');
//                 navigate('/login');
//                 return;
//             }
 
             
//             console.log(token);
//             // formData.amount = Number(formData.amount);
//             // formData.creatorId = formData.creatorId ;
//             // if (formData.participants && formData.participants.length > 0) {
//             // formData.participants[0].share = Number(formData.participants[0].share);
//             // }
//             console.log('before');
//             const response = await axios.post('http://127.0.0.1:8787/createsplit', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`  
//                 }
//             });
//             const {split,share } = response.data;
//             console.log('Split Deatils:',split);
//             console.log('Split Deatils:',share);
//             showToast('Split created successfully!', 'success');
//         } catch (err) {
//             console.error('Error submitting form: ', err.response ? err.response.data : err.message);
//             showToast('Failed to create split. Please try again.', 'error');
//         }
//     };

//     const toggleSideBar = ()=>{
//         setsidebaropen(!issidebaropen);
//         // console.log(x);
//         console.log(issidebaropen);
//     }

//     return (
//         <div className='overflow-hidden w-screen h-screen'>
            
//             <TopBar toggleSideBar={toggleSideBar} issidebaropen={issidebaropen} />
//             {issidebaropen && <Sidebar/>}
//             <div className={`bg-slate-400 w-full mt-14 h-full ${issidebaropen ? 'ml-64 bg-red-200':''}` }>
//             <Button variant="contained" onClick={toggleButton} className='mt-4'>Create Split</Button>
//             {showbox && (
//                 <div className="fixed inset-0 flex items-center justify-center z-100 bg-black bg-opacity-50">

//                 <AddSplitBox 
                    
//                     description=""  
//                     image=""  
//                     currency=""  
//                     amount=""  
//                     note=""   
//                     participants={[{personName: "", share: 0}]} 
//                     onSubmit={submit} 
//                 />
//                 </div>
//             )}<br/> <br /><br /><br />
//             </div>
//         </div>
//     );
// }

import {BarTop} from '../Components/BarTop';
import {BarSide} from '../Components/BarSide';
import {Body} from '../Components/Body';


// export function Dashboard(){
//     return(
//         <>
//         <div className='bg-customBg h-full w-full'>
//         <BarTop></BarTop>
//         <BarSide></BarSide>
//         <Body></Body>
//         </div>
        
//         </>
//     )
// }


// export function Dashboard() {
//     return (
//       <>
//         <div className="bg-customBg h-full w-full border ">
//           <BarTop />
//           <BarSide />
//           {/* <div className="pt-20">  */}
//             <Body />
//           {/* </div> */}
//         </div>
//       </>
//     );
//   }
  
export function Dashboard() {
    return (
        <>
            <div className="bg-customBg h-screen w-full relative">
                {/* Top and Side Bars */}
                <BarTop />
                <BarSide />
                
                {/* Body Content */}
                <Body />
            </div>
        </>
    );
}

